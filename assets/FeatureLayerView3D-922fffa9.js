import{ah as r,ai as o,ak as p,bD as s,bE as m,av as i,aG as l}from"./index-9f45a803.js";import{_ as n}from"./FeatureLayerViewBase3D-dafa6eca.js";import"./FeatureLikeLayerView3D-15dd17da.js";import"./dehydratedFeatureComparison-a34911e8.js";import"./queryForSymbologySnapping-640630b3.js";import"./elevationInfoUtils-b9175039.js";import"./hash-6f442295.js";import"./Graphics3DObjectStates-f7a9fcea.js";import"./rendererConversion-5f5eaecb.js";import"./optimizedFeatureQueryEngineAdapter-69c20470.js";import"./PooledRBush-111c20e9.js";import"./quickselect-bc894a5c.js";import"./popupUtils-6fa24588.js";import"./floorFilterUtils-73949d2d.js";import"./QueryEngine-63de7343.js";import"./WhereClause-1b5e4358.js";import"./TimeOnly-13c0e1f2.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./utils-5080f89d.js";import"./utils-869b9ed8.js";import"./generateRendererUtils-e0419035.js";import"./FeatureSet-2173b2b2.js";import"./FeatureStore-a1c5375d.js";import"./BoundsStore-06767837.js";import"./projectExtentUtils-6df6490b.js";import"./LayerView3D-97974086.js";import"./query-06688d95.js";import"./pbfQueryUtils-99cd93da.js";import"./pbf-20eb0c5c.js";import"./queryZScale-14796f3a.js";import"./EventedSet-94d68ff3.js";import"./LayerView-cef01d8c.js";import"./RefreshableLayerView-4259c969.js";let t=class extends n{constructor(){super(...arguments),this.type="feature-3d",this.direct3DObjectFeatureLayerDisplayEnabled=s()}initialize(){const{layer:e,view:a}=this;m(e)?.operations.supportsQuery||this.addResolvingPromise(Promise.reject(new i("featurelayerview:query-not-supported","layer view requires a layer with query capability",{layer:e}))),e.infoFor3D!=null&&(this.direct3DObjectFeatureLayerDisplayEnabled?this._set("suspendResumeExtentMode","computed"):this.addResolvingPromise(Promise.reject(new i("featurelayerview3d:unsupported-geometry-type",`Unsupported geometry type ${e.geometryType}`)))),e.geometryType!=="mesh"||l(e.spatialReference,a.spatialReference)||this.addResolvingPromise(Promise.reject(new i("layerview:spatial-reference-incompatible","The spatial references of the feature layer is incompatible with the spatial reference of the view")))}get featureSpatialReference(){return this.view.featureTiles?.tilingScheme?.spatialReference}};r([o({constructOnly:!0})],t.prototype,"direct3DObjectFeatureLayerDisplayEnabled",void 0),r([o()],t.prototype,"layer",void 0),t=r([p("esri.views.3d.layers.FeatureLayerView3D")],t);const H=t;export{H as default};
