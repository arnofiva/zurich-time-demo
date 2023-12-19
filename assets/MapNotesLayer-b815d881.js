import{iO as T,ah as r,ai as a,iP as k,ak as L,aB as I,cM as $,bC as W,b_ as H,bZ as C,bJ as U,ap as V,bd as b,aG as w,cH as v,dS as E,iQ as N,i2 as S,hf as R,iR as D,aV as P,aL as Z,as as q,d6 as K,b7 as Q,aC as X,e4 as Y,e5 as ee,e6 as te,gf as re,bB as x,az as c,cm as oe,ch as ie}from"./index-8b5e7d9b.js";import ae from"./FeatureLayer-72a3b1cd.js";import{a as _}from"./BlendLayer-dce91235.js";import{t as j}from"./ScaleRangeLayer-5b526f5a.js";import{h as le}from"./ElevationInfo-36952bdf.js";import{n as ne}from"./objectIdUtils-967fafff.js";import{u as se}from"./OperationalLayer-5c10068f.js";import{j as pe}from"./PortalLayer-c3739096.js";import"./UniqueValueRenderer-176db886.js";import"./ColorStop-ac9a118d.js";import"./diffUtils-3ed1f592.js";import"./colorRamps-cf6fa9ce.js";import"./jsonUtils-3d6448c4.js";import"./DictionaryLoader-1a1ab2cc.js";import"./FieldsIndex-85e142d0.js";import"./heatmapUtils-3c0e0ece.js";import"./FeatureLayerBase-56c03a7a.js";import"./commonProperties-60f31277.js";import"./featureLayerUtils-d891b150.js";import"./featureQueryAll-778379dd.js";import"./Query-630c5d65.js";import"./AttachmentQuery-ac66f9a7.js";import"./RelationshipQuery-249800df.js";import"./LayerFloorInfo-5c97dc41.js";import"./serviceCapabilitiesUtils-1513785a.js";import"./editsZScale-03b9f186.js";import"./queryZScale-9dee68ff.js";import"./FeatureSet-05a1ff98.js";import"./APIKeyMixin-9d7343aa.js";import"./ArcGISService-1771a240.js";import"./CustomParametersMixin-45f14a7d.js";import"./EditBusLayer-3babd061.js";import"./FeatureEffectLayer-50d5188d.js";import"./FeatureEffect-40ff6b77.js";import"./jsonUtils-16d33138.js";import"./FeatureFilter-5ab88729.js";import"./FeatureReductionLayer-826e078c.js";import"./FeatureReductionSelection-4ea33fb1.js";import"./LabelClass-06cdad9c.js";import"./defaults-4b2d7493.js";import"./defaultsJSON-59981e75.js";import"./MD5-715f37cd.js";import"./OrderedLayer-b68b3bb4.js";import"./TemporalLayer-683091de.js";import"./FeatureTemplate-0e5c0008.js";import"./FeatureType-347e5e8f.js";import"./fieldProperties-49b9eb67.js";import"./labelingInfo-4784a348.js";import"./versionUtils-e8eeb271.js";import"./styleUtils-f17e2eb8.js";import"./TopFeaturesQuery-268791e0.js";import"./popupUtils-6f3d55df.js";let d=class extends _(j(I)){constructor(e){super(e),this.elevationInfo=null,this.graphics=new T,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};r([a({type:le})],d.prototype,"elevationInfo",void 0),r([a(k(T,"graphics"))],d.prototype,"graphics",void 0),r([a({type:["show","hide"]})],d.prototype,"listMode",void 0),r([a()],d.prototype,"screenSizePerspectiveEnabled",void 0),r([a({readOnly:!0})],d.prototype,"type",void 0),r([a({constructOnly:!0})],d.prototype,"internal",void 0),d=r([L("esri.layers.GraphicsLayer")],d);const ye=d;function g(e){return e.featureCollectionType==="markup"||e.layers.some(t=>t.layerDefinition.visibilityField!=null||!G(t))}function G({layerDefinition:e,featureSet:t}){const o=e.geometryType??t.geometryType;return J.find(i=>o===i.geometryTypeJSON&&e.drawingInfo?.renderer?.symbol?.type===i.identifyingSymbol.type)}function B(){return new ie({xmin:-180,ymin:-90,xmax:180,ymax:90})}const M=new $({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),ue=new $({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0,length:255});let u=class extends ye{constructor(e){super(e),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",e=>{e.item.sourceLayer=this.layer}),this.graphics.on("after-remove",e=>{e.item.sourceLayer=null})}get fullExtent(){const e=this.layer?.spatialReference,t=this.fullBounds;return e?t==null?S(B(),e).geometry:P(t,e):null}get fullBounds(){const e=this.layer?.spatialReference;if(!e)return null;const t=E();return this.graphics.forEach(o=>{const i=o.geometry!=null?S(o.geometry,e).geometry:null;i!=null&&N(t,i.type==="point"?i:i.extent,t)}),R(t,D)?null:t}get sublayers(){return this.graphics}};r([a({readOnly:!0})],u.prototype,"fullExtent",null),r([a({readOnly:!0})],u.prototype,"fullBounds",null),r([a({readOnly:!0})],u.prototype,"sublayers",null),r([a()],u.prototype,"layer",void 0),r([a()],u.prototype,"layerId",void 0),r([a({readOnly:!0})],u.prototype,"visibilityMode",void 0),u=r([L("esri.layers.MapNotesLayer.MapNotesSublayer")],u);const J=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:new W().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:new H().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:new C().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:new C().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:new U().toJSON()}];let l=class extends _(j(se(pe(V(I))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=b.WGS84,this.sublayers=new w(J.map(t=>new u({id:t.id,layerId:t.layerId,title:t.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,o){return{operations:{supportsMapNotesEditing:!g(t)&&o?.origin!=="portal-item"}}}readFeatureCollections(e,t,o){if(!g(t))return null;const i=t.layers.map(s=>{const n=new ae;return n.read(s,o),n});return new w({items:i})}readLegacyfeatureCollectionJSON(e,t){return g(t)?v(t.featureCollection):null}get fullExtent(){const e=this.spatialReference,t=E();return this.sublayers!=null?this.sublayers.forEach(({fullBounds:o})=>o!=null?N(t,o,t):t,t):this.featureCollectionJSON?.layers.some(o=>o.layerDefinition.extent)&&this.featureCollectionJSON.layers.forEach(o=>{const i=S(o.layerDefinition.extent,e).geometry;i!=null&&N(t,i,t)}),R(t,D)?S(B(),e).geometry:P(t,e)}readMinScale(e,t){for(const o of t.layers)if(o.layerDefinition.minScale!=null)return o.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const o of t.layers)if(o.layerDefinition.maxScale!=null)return o.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?b.fromJSON(t.layers[0].layerDefinition.spatialReference):b.WGS84}readSublayers(e,t,o){if(g(t))return null;const i=[];let s=t.layers.reduce((n,p)=>Math.max(n,p.layerDefinition.id??-1),-1)+1;for(const n of t.layers){const{layerDefinition:p,featureSet:y}=n,f=p.id??s++,m=G(n);if(m!=null){const h=new u({id:m.id,title:p.name,layerId:f,layer:this,graphics:y.features.map(({geometry:O,symbol:F,attributes:z,popupInfo:A})=>Z.fromJSON({attributes:z,geometry:O,symbol:F,popupTemplate:A}))});i.push(h)}}return new w(i)}writeSublayers(e,t,o,i){const{minScale:s,maxScale:n}=this;if(e==null)return;const p=e.some(m=>m.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(p&&i?.messages?.push(new q("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer")));const y=[];let f=this.spatialReference.toJSON();e:for(const m of e)for(const h of m.graphics)if(h.geometry!=null){f=h.geometry.spatialReference.toJSON();break e}for(const m of J){const h=e.find(O=>m.id===O.id);this._writeMapNoteSublayer(y,h,m,s,n,f,i)}K("featureCollection.layers",y,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=v(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if(this.sublayers==null)return;let e=null;const t=[];for(const i of this.sublayers)for(const s of i.graphics)if(s.geometry!=null){const n=s.geometry;e?Q(n.spatialReference,e)||(X(n.spatialReference,e)||Y()||await ee(),s.geometry=te(n,e)):e=n.spatialReference,t.push(s)}const o=await re(t.map(i=>i.geometry));t.forEach((i,s)=>i.geometry=o[s])}_findSublayer(e){return this.sublayers==null?null:this.sublayers?.find(t=>t.id===e)??null}_writeMapNoteSublayer(e,t,o,i,s,n,p){const y=[];if(t!=null){for(const f of t.graphics)this._writeMapNote(y,f,o.geometryType,p);this._normalizeObjectIds(y,M),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:v(o.identifyingSymbol)}},id:t.layerId,geometryType:o.geometryTypeJSON,minScale:i,maxScale:s,objectIdField:"OBJECTID",fields:[M.toJSON(),ue.toJSON()],spatialReference:n},featureSet:{features:y,geometryType:o.geometryTypeJSON}})}}_writeMapNote(e,t,o,i){if(t==null)return;const{geometry:s,symbol:n,popupTemplate:p}=t;if(s==null)return;if(s.type!==o)return void i?.messages?.push(new x("map-notes-layer:invalid-geometry-type",`Geometry "${s.type}" cannot be saved in "${o}" layer`,{graphic:t}));if(n==null)return void i?.messages?.push(new x("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t}));const y={attributes:{...t.attributes},geometry:s.toJSON(),symbol:n.toJSON()};p!=null&&(y.popupInfo=p.toJSON()),e.push(y)}_normalizeObjectIds(e,t){const o=t.name;let i=ne(o,e)+1;const s=new Set;for(const n of e){n.attributes||(n.attributes={});const{attributes:p}=n;(p[o]==null||s.has(p[o]))&&(p[o]=i++),s.add(p[o])}}};r([a({readOnly:!0})],l.prototype,"capabilities",void 0),r([c(["portal-item","web-map"],"capabilities",["layers"])],l.prototype,"readCapabilities",null),r([a({readOnly:!0})],l.prototype,"featureCollections",void 0),r([c(["web-map","portal-item"],"featureCollections",["layers"])],l.prototype,"readFeatureCollections",null),r([a({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],l.prototype,"featureCollectionJSON",void 0),r([c(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],l.prototype,"readLegacyfeatureCollectionJSON",null),r([a({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],l.prototype,"featureCollectionType",void 0),r([a({readOnly:!0})],l.prototype,"fullExtent",null),r([a({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],l.prototype,"legendEnabled",void 0),r([a({type:["show","hide","hide-children"]})],l.prototype,"listMode",void 0),r([a({type:Number,nonNullable:!0,json:{write:!1}})],l.prototype,"minScale",void 0),r([c(["web-map","portal-item"],"minScale",["layers"])],l.prototype,"readMinScale",null),r([a({type:Number,nonNullable:!0,json:{write:!1}})],l.prototype,"maxScale",void 0),r([c(["web-map","portal-item"],"maxScale",["layers"])],l.prototype,"readMaxScale",null),r([a({readOnly:!0})],l.prototype,"multipointLayer",null),r([a({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],l.prototype,"operationalLayerType",void 0),r([a({readOnly:!0})],l.prototype,"pointLayer",null),r([a({readOnly:!0})],l.prototype,"polygonLayer",null),r([a({readOnly:!0})],l.prototype,"polylineLayer",null),r([a({type:b})],l.prototype,"spatialReference",void 0),r([c(["web-map","portal-item"],"spatialReference",["layers"])],l.prototype,"readSpatialReference",null),r([a({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],l.prototype,"sublayers",void 0),r([c("web-map","sublayers",["layers"])],l.prototype,"readSublayers",null),r([oe("web-map","sublayers")],l.prototype,"writeSublayers",null),r([a({readOnly:!0})],l.prototype,"textLayer",null),r([a()],l.prototype,"title",void 0),r([a({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),l=r([L("esri.layers.MapNotesLayer")],l);const yt=l;export{yt as default};
