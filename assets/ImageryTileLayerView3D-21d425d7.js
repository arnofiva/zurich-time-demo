import{ah as a,ai as n,ak as S,as as w,aL as L,db as O,i3 as P,i4 as _}from"./index-8b5e7d9b.js";import{s as I,v as F}from"./rasterProjectionHelper-3356de65.js";import{n as j}from"./LayerView3D-239175ff.js";import{o as G}from"./TiledLayerView3D-791dea7d.js";import{j as k}from"./commonProperties-60f31277.js";import{p as A}from"./popupUtils-049df13a.js";import{u as M}from"./LayerView-840504cd.js";import{a as V}from"./RefreshableLayerView-c5fc5cdc.js";import{r as W}from"./drapedUtils-9a01dc8f.js";import"./ElevationInfo-36952bdf.js";const $=t=>{let e=class extends t{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.tileInfo=null}get fullExtent(){return this._getfullExtent()}_getfullExtent(){return I(this.layer.rasterInfo,this.view.spatialReference)}get hasTilingEffects(){return!!(this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment)}get datumTransformation(){return F(this.layer.fullExtent,this.view.spatialReference,!0)}supportsSpatialReference(r){return!!I(this.layer.rasterInfo,r)}async fetchPopupFeatures(r,s){const{layer:i}=this;if(!r)throw new w("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:i});const{popupEnabled:h}=i,y=A(i,s);if(!h||y==null)throw new w("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:h,popupTemplate:y});const p=[],{value:l,magdirValue:o,processedValue:E}=await i.identify(r,{timeExtent:this.timeExtent});let c="";if(l&&l.length){c=i.type==="imagery-tile"&&i.hasStandardTime()&&l[0]!=null?l.map(b=>i.getStandardTimeValue(b)).join(", "):l.join(", ");const d={ObjectId:0},v="Raster.ServicePixelValue";d[v]=E?.join(", ")??c,d[v+".Raw"]=c;const T=i.rasterInfo.attributeTable;if(T!=null){const{fields:b,features:z}=T,R=b.find(({name:m})=>m.toLowerCase()==="value"),g=R?z.find(m=>String(m.attributes[R.name])===c):null;if(g)for(const m in g.attributes)g.attributes.hasOwnProperty(m)&&(d[this._rasterFieldPrefix+m]=g.attributes[m])}const x=i.rasterInfo.dataType;x!=="vector-magdir"&&x!=="vector-uv"||(d["Raster.Magnitude"]=o?.[0],d["Raster.Direction"]=o?.[1]);const f=new L(this.fullExtent.clone(),null,d);f.layer=i,f.sourceLayer=f.layer,p.push(f)}return p}};return a([n()],e.prototype,"layer",void 0),a([n(k)],e.prototype,"timeExtent",void 0),a([n()],e.prototype,"view",void 0),a([n()],e.prototype,"fullExtent",null),a([n()],e.prototype,"tileInfo",void 0),a([n({readOnly:!0})],e.prototype,"hasTilingEffects",null),a([n()],e.prototype,"datumTransformation",null),e=a([S("esri.views.layers.ImageryTileLayerView")],e),e};let u=class extends $(V(G(j(M)))){constructor(){super(...arguments),this.type="imagery-tile-3d",this.isAlignedMapTile=!0}initialize(){this.layer.increaseRasterJobHandlerUsage(),this.fullExtent==null&&this.addResolvingPromise(Promise.reject(new w("layerview:spatial-reference-incompatible","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})));const t=O(()=>this.view?.basemapTerrain?.tilingSchemeLocked).then(()=>{const e=this.view.basemapTerrain.tilingScheme,r=this.layer.tileInfo,s=["png","png24","png32","jpg","mixed"].includes(r.format)&&e.compatibleWith(r);this.isAlignedMapTile=s;const i=s?r:e.toTileInfo();this.tileInfo=i,this._updatingHandles.add(()=>[this.layer.renderer,this.layer.interpolation,this.layer.bandIds,this.layer.multidimensionalDefinition,this.layer.multidimensionalSubset,this.layer.rasterFunction,this.timeExtent],()=>this.refresh())});this.addResolvingPromise(t)}destroy(){this.layer.decreaseRasterJobHandlerUsage(),this.view=null}get _blankTile(){const t=document.createElement("canvas"),e=t.getContext("2d"),[r,s]=this.tileInfo.size;return t.width=r,t.height=s,e.clearRect(0,0,r,s),e.getImageData(0,0,r,s)}get imageFormatIsOpaque(){return this.layer.tileInfo.format==="jpg"}get hasMixedImageFormats(){return this.layer.tileInfo.format==="mixed"}get dataLevelRange(){const t=this.layer.tileInfo,e=this.tileInfo.lodAt(0)?.scale,r=this.layer.tileInfo.lodAt(t.lods.length-1)?.scale;return this.levelRangeFromScaleRange(e,r)}_getfullExtent(){return I(this.layer.rasterInfo,this.view.basemapTerrain?.spatialReference!=null?this.view.basemapTerrain.spatialReference:this.view.spatialReference)}async fetchTile(t,e,r,s){const i=this.tileInfo,h=this._canSymbolizeInWebGL(),y={tileInfo:i,requestRawData:h,signal:s.signal,timeExtent:this.timeExtent,requestAsImageElement:this.isAlignedMapTile},p=await this.layer.fetchTile(t,e,r,y);if(p instanceof HTMLImageElement)return p;let l=p?.pixelBlock;if(l==null)return this._blankTile;if(!h&&(l=await this.layer.applyRenderer(p),l==null))return this._blankTile;const o=new P([t,e,r],l,i.size[0],i.size[1]);return h?(o.symbolizerRenderer=this.layer.symbolizer.rendererJSON,o.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(t)),o.transformGrid=p.transformGrid):o.isRendereredSource=!0,o.interpolation=this.layer.interpolation,o.bandIds=this.layer.bandIds,o}_getSymbolizerOptions(t){const e=this.tileInfo.lodAt(t).resolution;return{pixelBlock:null,isGCS:this.view.basemapTerrain?.spatialReference!=null?this.view.basemapTerrain.spatialReference.isGeographic:this.view.spatialReference.isGeographic,resolution:{x:e,y:e},bandIds:this.layer.bandIds}}ensureSymbolizerParameters(t){this._canSymbolizeInWebGL()&&JSON.stringify(t.symbolizerRenderer)!==JSON.stringify(this.layer.symbolizer.rendererJSON)&&(t.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(t.lij[0])))}createFetchPopupFeaturesQueryGeometry(t,e){return W(t,e,this.view)}refresh(){this.emit("data-changed")}async doRefresh(){this.suspended||this.emit("data-changed")}_canSymbolizeInWebGL(){const t=_("3d"),{symbolizer:e}=this.layer,r=e.lookup?.colormapLut?.indexedColormap,s=r&&r.length>4*(t.maxTextureSize||4906);return t.supportsTextureFloat&&e.canRenderInWebGL&&!s}};a([n({readOnly:!0})],u.prototype,"_blankTile",null),a([n({readOnly:!0})],u.prototype,"imageFormatIsOpaque",null),a([n({readOnly:!0})],u.prototype,"hasMixedImageFormats",null),a([n({readOnly:!0})],u.prototype,"dataLevelRange",null),u=a([S("esri.views.3d.layers.ImageryTileLayerView3D")],u);const X=u;export{X as default};
