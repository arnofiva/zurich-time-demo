import WebScene from "@arcgis/core/WebScene";
import * as kernel from "@arcgis/core/kernel";
import SceneView from "@arcgis/core/views/SceneView";
import "@esri/calcite-components/dist/calcite/calcite.css";
import App from "./compontents/App";
import AppStore from "./stores/AppStore";

console.log(`Using ArcGIS Maps SDK for JavaScript v${kernel.fullVersion}`);

// setAssetPath("https://js.arcgis.com/calcite-components/1.0.0-beta.77/assets");

const params = new URLSearchParams(document.location.search.slice(1));

const webSceneId = params.get("webscene") || "b500006175164ac1a6ba5f8e84a88d01";

const map = new WebScene({
  portalItem: {
    id: webSceneId,
    // portal: {
    //   url: portalUrl,
    // },
  },
});

const view = new SceneView({
  container: "viewDiv",
  map,
  camera: params.get("webscene")
    ? undefined
    : {
        position: {
          longitude: 8.55532887,
          latitude: 47.35675923,
          z: 1424.09201,
        },
        heading: 324.45,
        tilt: 63.06,
      },
});

view.popup.defaultPopupTemplateEnabled = true;

(window as any)["view"] = view;

const store = new AppStore({
  view,
});

const app = new App({
  container: "app",
  store,
});
