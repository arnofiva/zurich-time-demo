import WebScene from "@arcgis/core/WebScene";
import Accessor from "@arcgis/core/core/Accessor";
import {
  property,
  subclass,
} from "@arcgis/core/core/accessorSupport/decorators";
import { debounce } from "@arcgis/core/core/promiseUtils";
import { when, whenOnce } from "@arcgis/core/core/reactiveUtils";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import SceneView from "@arcgis/core/views/SceneView";
import { evStations, parkings } from "../layers";
import { timeout } from "../utils";
import UserStore from "./UserStore";

type AppStoreProperties = Pick<AppStore, "view">;

@subclass("arcgis-core-template.AppStore")
class AppStore extends Accessor {
  @property({ aliasOf: "view.map" })
  map: WebScene;

  @property({ constructOnly: true })
  view: SceneView;

  @property({ constructOnly: true })
  userStore = new UserStore();

  @property()
  canGoLive = false;

  @property()
  isLive = false;

  @property()
  isChangingLiveState = false;

  private readonly featureLayers: FeatureLayer[] = [];

  constructor(props: AppStoreProperties) {
    super(props);

    whenOnce(() => this.map).then(async (map) => {
      await map.load();
      document.title = map.portalItem.title;

      const evFL = map.allLayers.find(
        (l) => l.title === "EV stations",
      ) as FeatureLayer;

      evStations.renderer = evFL.renderer;
      evStations.elevationInfo = evFL.elevationInfo;
      evStations.labelingInfo = evFL.labelingInfo;
      evStations.popupTemplate = evFL.popupTemplate;

      const parkingFL = map.allLayers.find(
        (l) => l.title === "Parking",
      ) as FeatureLayer;

      // parkings.renderer = parkingFL.renderer;
      // parkings.elevationInfo = parkingFL.elevationInfo;
      // parkings.labelingInfo = parkingFL.labelingInfo;
      // parkings.popupTemplate = parkingFL.popupTemplate;

      this.featureLayers.push(evFL, parkingFL);

      await map.loadAll();
    });

    this.addHandles([
      when(
        () => this.userStore.authenticated,
        () => {
          this.canGoLive = this.userStore.authenticated;
        },
        { initial: true },
      ),
    ]);
  }

  toggleLiveMode = debounce(async () => {
    this.isChangingLiveState = true;

    const streamLayers = [parkings, evStations];

    if (this.isLive) {
      this.isLive = false;
      this.view.map.removeMany(streamLayers);
      this.featureLayers.forEach((l) => (l.visible = true));
      await timeout(1000);
    } else {
      this.isLive = true;
      this.view.map.addMany(streamLayers);
      this.featureLayers.forEach((l) => (l.visible = false));
      const lvs = await Promise.all(
        streamLayers.map((l) => this.view.whenLayerView(l)),
      );
      await Promise.all([
        timeout(1000),
        ...lvs.map(async (lv) => await whenOnce(() => !lv.updating)),
      ]);
    }

    this.isChangingLiveState = false;
  });
}

export default AppStore;
