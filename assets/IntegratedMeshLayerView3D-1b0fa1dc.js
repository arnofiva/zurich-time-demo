import{aO as a,ag as e,aP as s,ah as r,ai as o,aQ as p,ak as m}from"./index-9f45a803.js";import{E as n}from"./I3SMeshView3D-ce153c92.js";import{n as l}from"./LayerView3D-97974086.js";import{u as d}from"./LayerView-cef01d8c.js";import"./I3SOverrides-68d11ae2.js";import"./I3SNode-59753a22.js";import"./I3SUtil-0ecbd3d3.js";import"./I3SBinaryReader-de5c2b04.js";import"./ReactiveSet-5bc8d639.js";import"./meshFeatureSet-e8001bfe.js";import"./External-9a9334f9.js";import"./FeatureSet-2173b2b2.js";import"./FeatureLayerView3D-922fffa9.js";import"./FeatureLayerViewBase3D-dafa6eca.js";import"./FeatureLikeLayerView3D-15dd17da.js";import"./dehydratedFeatureComparison-a34911e8.js";import"./queryForSymbologySnapping-640630b3.js";import"./elevationInfoUtils-b9175039.js";import"./hash-6f442295.js";import"./Graphics3DObjectStates-f7a9fcea.js";import"./rendererConversion-5f5eaecb.js";import"./optimizedFeatureQueryEngineAdapter-69c20470.js";import"./PooledRBush-111c20e9.js";import"./quickselect-bc894a5c.js";import"./popupUtils-6fa24588.js";import"./floorFilterUtils-73949d2d.js";import"./QueryEngine-63de7343.js";import"./WhereClause-1b5e4358.js";import"./TimeOnly-13c0e1f2.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./utils-5080f89d.js";import"./utils-869b9ed8.js";import"./generateRendererUtils-e0419035.js";import"./FeatureStore-a1c5375d.js";import"./BoundsStore-06767837.js";import"./projectExtentUtils-6df6490b.js";import"./query-06688d95.js";import"./pbfQueryUtils-99cd93da.js";import"./pbf-20eb0c5c.js";import"./queryZScale-14796f3a.js";import"./EventedSet-94d68ff3.js";import"./RefreshableLayerView-4259c969.js";import"./SceneModification-482be830.js";import"./persistable-6bf58c68.js";import"./resourceExtension-9c7d175c.js";import"./SceneLayerWorker-b8686b25.js";const c=.2;let t=class extends n(l(d)){constructor(){super(...arguments),this.type="integrated-mesh-3d",this._elevationContext="im",this._isIntegratedMesh=!0,this._supportsLabeling=!1,this.drapeTargetType=a.WithoutRasterImage}get i3slayer(){return this.layer}get updatingProgressValue(){return this._controller?.updatingProgress??0}get lodFactor(){return this.view?.qualitySettings?.sceneService?.integratedMesh?.lodFactor??1}get progressiveLoadFactor(){return this.lodFactor>=1?c:1}get layerPopupEnabledAndHasTemplate(){return!1}initialize(){this._updatingHandles.add(()=>this.layer.modifications,()=>this._loadModifications(),e),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)}destroy(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)}_createLayerGraphic(){const i=new s;return i.layer=this.layer,i.sourceLayer=this.layer,i}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}_loadModifications(){if(this.removeHandles("modifications"),this.layer.modifications==null)return void(this._modifications=[]);const i=this.layer.modifications;this.addHandles(this._updatingHandles.addOnCollectionChange(()=>i,()=>this._modifications=i.toArray(),e),"modifications")}};r([o()],t.prototype,"layer",void 0),r([o()],t.prototype,"i3slayer",null),r([o(p)],t.prototype,"updatingProgress",void 0),r([o()],t.prototype,"updatingProgressValue",null),r([o()],t.prototype,"lodFactor",null),r([o({readOnly:!0})],t.prototype,"progressiveLoadFactor",null),t=r([m("esri.views.3d.layers.SceneLayerView3D")],t);const st=t;export{st as default};
