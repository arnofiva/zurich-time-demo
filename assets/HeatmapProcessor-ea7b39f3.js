import{ah as k,ak as K,bp as _,gh as F}from"./index-5b8adf8e.js";import{c as S}from"./definitions-41f74ea6.js";import{p as U,o}from"./tileUtils-e004f118.js";class n{constructor(t,i){this.offset=t,this.extent=i}}function g(s){const t=s.key,i=new Map,a=256,e=S,r=s.tileInfoView.tileInfo.isWrappable;return i.set(o(t,-1,-1,r).id,new n([-e,-e],[e-a,e-a,e,e])),i.set(o(t,0,-1,r).id,new n([0,-e],[0,e-a,e,e])),i.set(o(t,1,-1,r).id,new n([e,-e],[0,e-a,a,e])),i.set(o(t,-1,0,r).id,new n([-e,0],[e-a,0,e,e])),i.set(o(t,1,0,r).id,new n([e,0],[0,0,a,e])),i.set(o(t,-1,1,r).id,new n([-e,e],[e-a,0,e,a])),i.set(o(t,0,1,r).id,new n([0,e],[0,0,e,a])),i.set(o(t,1,1,r).id,new n([e,e],[0,0,a,a])),i}let h=class extends U{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.addHandles([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(s,t){const i=t.schema.processors[0];i.type==="heatmap"&&_(this._schema,i)&&(s.mesh=!0,this._schema=i)}onTileUpdate(s){for(const t of s.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(s){const t={clear:!0};return this._tileKeyToFeatureSets.delete(s.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:s.id,data:t})}async onTileMessage(s,t,i){this._tileKeyToFeatureSets.has(s.key.id)||this._tileKeyToFeatureSets.set(s.key.id,new Map);const a=this._tileKeyToFeatureSets.get(s.key.id);if(a&&t.addOrUpdate!=null&&t.addOrUpdate.hasFeatures&&a.set(t.addOrUpdate.instance,t),t.end){const e=[],r=g(s);this._tileKeyToFeatureSets.forEach((p,l)=>{if(l===s.key.id)p.forEach(({addOrUpdate:d})=>{d&&e.push(d)});else if(r.has(l)){const d=r.get(l),[m,T]=d.offset;p.forEach(({addOrUpdate:f})=>{if(f){const w=f.transform(m,T,1,1);e.push(w)}})}});const c=F(e,this._schema.mesh,512,512),u={tileKey:s.key.id,intensityInfo:c},y=[c.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",u,{...i,transferList:y})}}onTileError(s,t,i){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:s.id,error:t},i)}};h=k([K("esri.views.2d.layers.features.processors.HeatmapProcessor")],h);const x=h;export{x as default};
