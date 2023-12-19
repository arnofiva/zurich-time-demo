import{as as l,ay as y,c7 as g,aO as _,bl as d,bi as F,b7 as w,eB as S,eC as E}from"./index-8b5e7d9b.js";import{m as q}from"./FeatureStore-d414226c.js";import{x,W as T,j as R}from"./QueryEngine-03d16de6.js";import{E as b,N as I}from"./geojson-ede2d4c1.js";import{p as C}from"./sourceUtils-58f78e35.js";import{a as j,B as $}from"./wfsUtils-38d961b8.js";import{c as k}from"./FieldsIndex-85e142d0.js";import"./BoundsStore-409e99ee.js";import"./PooledRBush-05d409af.js";import"./quickselect-fc5bb707.js";import"./optimizedFeatureQueryEngineAdapter-717c64bf.js";import"./WhereClause-4988664d.js";import"./TimeOnly-a96593b0.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./utils-4576de5f.js";import"./heatmapUtils-3c0e0ece.js";import"./utils-e24aed40.js";import"./generateRendererUtils-1c8bce12.js";import"./date-430969b3.js";import"./xmlUtils-444cb4c0.js";class te{constructor(){this._queryEngine=null,this._customParameters=null}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(t,e){const{getFeatureUrl:n,getFeatureOutputFormat:p,fields:o,geometryType:s,featureType:i,objectIdField:u,customParameters:r}=t,{spatialReference:a,getFeatureSpatialReference:h}=j(n,i,t.spatialReference);this._featureType=i,this._customParameters=r,this._getFeatureUrl=n,this._getFeatureOutputFormat=p,this._getFeatureSpatialReference=h;try{await x(h,a)}catch{throw new l("unsupported-projection","Projection not supported",{inSpatialReference:h,outSpatialReference:a})}y(e);const m=k.fromLayerJSON({fields:o,dateFieldsTimeReference:o.some(f=>f.type==="esriFieldTypeDate")?{timeZoneIANA:g}:null}),c=await this._snapshotFeatures({fieldsIndex:m,geometryType:s,objectIdField:u,spatialReference:a},e.signal);return this._queryEngine=new T({fieldsIndex:m,geometryType:s,hasM:!1,hasZ:!1,objectIdField:u,spatialReference:a,timeInfo:null,featureStore:new q({geometryType:s,hasM:!1,hasZ:!1})}),this._queryEngine.featureStore.addMany(c),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new l("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){return this._customParameters=t,this._snapshotTask?.abort(),this._snapshotTask=_(e=>this._snapshotFeatures(this._queryEngine,e)),this._snapshotTask.promise.then(e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)},e=>{this._queryEngine.featureStore.clear(),d(e)||F.getLogger("esri.layers.WFSLayer").error(new l("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}))}),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _snapshotFeatures({objectIdField:t,geometryType:e,spatialReference:n,fieldsIndex:p},o){const s=await $(this._getFeatureUrl??"",this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,signal:o});b(s,this._getFeatureSpatialReference.wkid),y(o);const i=I(s,{geometryType:e,hasZ:!1,objectIdField:t});if(!w(n,this._getFeatureSpatialReference))for(const r of i)r.geometry!=null&&(r.geometry=S(R(E(r.geometry,e,!1,!1),this._getFeatureSpatialReference,n)));let u=1;for(const r of i){const a={};C(p,a,r.attributes,!0),r.attributes=a,a[t]==null&&(r.objectId=a[t]=u++)}return i}}export{te as default};
