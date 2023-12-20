import{eX as S,aA as _,cz as $,ah as H,ak as L,eU as k,cm as h}from"./index-5b8adf8e.js";const x=S(),T=new Map,E=new Map;async function W(e,s,n=!1){if(!e||!s)return!0;const r=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),d=E.get(r)?.entries();if(d){for(const[i,a]of d)if(a.name===s){const o=!a.stack?.hasForwardEdits();if(!o&&n){const[{deleteForwardEdits:c},{default:u}]=await Promise.all([_(()=>import("./deleteForwardEdits-ae953987.js"),["./deleteForwardEdits-ae953987.js","./index-5b8adf8e.js","./index-fa8fa232.css"],import.meta.url),_(()=>import("./DeleteForwardEditsParameters-29966419.js"),["./DeleteForwardEditsParameters-29966419.js","./index-5b8adf8e.js","./index-fa8fa232.css"],import.meta.url)]);return c(r,i,new u({sessionId:x,moment:a.moment}))}return o}}return!0}function U(e,s){if(!e)return!1;const n=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),r=E.get(n)?.entries();if(r){for(const[d,i]of r)if(i.name===s)return i.lockType==="edit"}return!1}const g=new $.EventEmitter;function P(e){return g.on("apply-edits",new WeakRef(e))}function D(e){return g.on("update-moment",new WeakRef(e))}function z(e,s,n=null,r=!1){const d=k();return r=s==null||r,g.emit("apply-edits",{serviceUrl:e,layerId:s,gdbVersion:n,mayReceiveServiceEdits:r,result:d.promise}),d}const A="esri.layers.mixins.EditBusLayer",j=Symbol(A);function B(e){return e!=null&&typeof e=="object"&&j in e}function m(e){return e!=null&&typeof e=="object"&&"gdbVersion"in e}function f(e,s,n){const r=new URL(e).host,d=T.get(r),i=a=>!a||a===d;return i(s)&&i(n)||s===n}const C=e=>{var s;let n=class extends e{constructor(...r){super(...r),this[s]=!0,this._applyEditsHandler=d=>{const{serviceUrl:i,layerId:a,gdbVersion:o,mayReceiveServiceEdits:c,result:u}=d,F=i===this.url,p=a!=null&&this.layerId!=null&&a===this.layerId,w=m(this),V=m(this)&&f(i,o,this.gdbVersion);if(!F||w&&!V||!p&&!c)return;const R=u.then(t=>{if(p&&(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length))return this.emit("edits",h(t)),t;const I=t.editedFeatures?.find(({layerId:b})=>b===this.layerId);if(I){const{adds:b,updates:y,deletes:M}=I.editedFeatures,v={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:b?b.map(({attributes:l})=>({objectId:this.objectIdField&&l[this.objectIdField],globalId:this.globalIdField&&l[this.globalIdField]})):[],deletedFeatures:M?M.map(({attributes:l})=>({objectId:this.objectIdField&&l[this.objectIdField],globalId:this.globalIdField&&l[this.globalIdField]})):[],updatedFeatures:y?y.map(({current:{attributes:l}})=>({objectId:this.objectIdField&&l[this.objectIdField],globalId:this.globalIdField&&l[this.globalIdField]})):[],editedFeatures:h(t.editedFeatures),exceededTransferLimit:!1,historicMoment:h(t.historicMoment)};return this.emit("edits",v),v}return{edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:h(t.editedFeatures),exceededTransferLimit:!1,historicMoment:h(t.historicMoment)}}).then(t=>("historicMoment"in this&&this.historicMoment!==t.historicMoment&&U(i,o)&&(this.historicMoment=t.historicMoment),t));this.emit("apply-edits",{result:R})},this._updateMomentHandler=d=>{const{serviceUrl:i,gdbVersion:a,moment:o}=d,c=i===this.url,u=m(this),F=m(this)&&f(i,a,this.gdbVersion),p=m(this)&&!f(i,this.gdbVersion,null);c&&u&&F&&p&&"historicMoment"in this&&this.historicMoment!==o&&(this.historicMoment=o)},this.when().then(()=>{this.addHandles(P(this._applyEditsHandler)),"historicMoment"in this&&this.addHandles(D(this._updateMomentHandler))},()=>{})}};return s=j,n=H([L(A)],n),n};export{C as F,U as a,z as c,B as p,x as r,W as s};
