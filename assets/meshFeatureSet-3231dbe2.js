import{as as R,pe as Oe,ch as pe,pf as se,pg as oe,nf as S,bi as m,kW as J,hE as ie,bj as y,ph as rt,pi as st,go as De,ax as Q,ay as fe,ce as F,nU as ot,pj as it,gp as at,aQ as lt,gG as ct,ah as d,ai as x,ak as Te,i7 as ut,aG as pt,aU as ft,hn as ke,hv as he,pk as Ce,hX as K,pl as me,pm as ge,pn as de,po as xe,pp as ye,pq as we,gn as ze,b6 as ve,lb as V,l5 as ht,l6 as ee,bg as mt,pr as $e,ps as G,bh as Ie,pt as gt,pu as ae,pv as dt,pw as xt,gm as yt,k_ as Ue,hD as Ne,hM as wt,df as vt,gs as $t,px as le,aH as At,py as bt,aj as St,pz as Rt,pA as Ft,pB as Mt,jU as te,jT as Ve,bd as Et,aL as Lt,lx as Pt,mj as jt,jY as Ae}from"./index-8b5e7d9b.js";import{u as be,y as _t,h as Ot,o as Dt,i as Tt}from"./External-45f5ccd1.js";import{d as kt}from"./FeatureSet-05a1ff98.js";let W=class extends R{constructor(){super("mesh-not-loaded","Mesh must be loaded before applying operations")}},Ct=class extends R{constructor(){super("component-not-found","Provided component is not part of the list of components")}};class zt extends R{constructor(){super("invalid-polygon","expected polygon to be a Polygon instance")}}class D extends R{constructor(){super("invalid-input:location","Expected location to be a Point instance")}}class It extends R{constructor(){super("invalid-input:no-layer","A layer is needed to convert the files")}}let Ut=class extends R{constructor(){super("invalid-input:no-model","No supported model found")}},Nt=class extends R{constructor(){super("invalid-input:multiple-models","Multiple supported models found")}};function Vt({xmin:e,xmax:t,ymin:n,ymax:r,zmin:s,zmax:o},i,l,c){s??(s=0),o??(o=0),Se??(Se=new Float64Array(24));const a=Se;return a[0]=e,a[1]=n,a[2]=s,a[3]=e,a[4]=r,a[5]=s,a[6]=t,a[7]=r,a[8]=s,a[9]=t,a[10]=n,a[11]=s,a[12]=e,a[13]=n,a[14]=o,a[15]=e,a[16]=r,a[17]=o,a[18]=t,a[19]=r,a[20]=o,a[21]=t,a[22]=n,a[23]=o,Oe({positions:a,transform:i,vertexSpace:l,inSpatialReference:c,outSpatialReference:c,outPositions:a}),q(a,c)}let Se=null;function q(e,t){let n=1/0,r=1/0,s=1/0,o=-1/0,i=-1/0,l=-1/0;const c=e.length;let a=0;for(;a<c;){const u=e[a++],p=e[a++],f=e[a++];n=Math.min(n,u),r=Math.min(r,p),s=Math.min(s,f),o=Math.max(o,u),i=Math.max(i,p),l=Math.max(l,f)}return new pe({xmin:n,ymin:r,zmin:s,xmax:o,ymax:i,zmax:l,spatialReference:t})}const X="esri.geometry.support.meshUtils.centerAt";function Gt(e,t,n){if(!e.vertexAttributes?.position)return;const{vertexSpace:r}=e,s=n?.origin??e.origin;r.isRelative?(se(r,X,n),Bt(e,t,s)):oe(e.spatialReference,n)?Wt(e,t,s):Zt(e,t,s)}function Bt(e,t,n){const{vertexSpace:r}=e;if(!r.isRelative)return;const s=Be,o=Ge;if(!S(t,o,e.spatialReference))return void m.getLogger(X).error(`Failed to project centerAt location (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`);if(!S(n,s,e.spatialReference)){const c=e.origin;s[0]=c.x,s[1]=c.y,s[2]=c.z,m.getLogger(X).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}const i=J(Xt,o,s),l=r.origin;r.origin=ie(y(),l,i)}function Wt(e,t,n){const r=rt(e.vertexAttributes,n,{geographic:!0}),{position:s,normal:o,tangent:i}=st(r,t,{geographic:!0});e.vertexAttributes.position=s,e.vertexAttributes.normal=o,e.vertexAttributes.tangent=i,e.vertexAttributesChanged()}function Zt(e,t,n){const r=Be,s=Ge;if(S(t,s,e.spatialReference)){if(!S(n,r,e.spatialReference)){const o=e.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,m.getLogger(X).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}Jt(e.vertexAttributes.position,s,r),e.vertexAttributesChanged()}else m.getLogger(X).error(`Failed to project centerAt location (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}function Jt(e,t,n){if(e)for(let r=0;r<e.length;r+=3)for(let s=0;s<3;s++)e[r+s]+=t[s]-n[s]}const Ge=y(),Be=y(),Xt=y();async function Yt(e,t,n){const{source:r}=t,{loadGLTFMesh:s}=await De(Q(()=>import("./loadGLTFMesh-5d69b4f6.js"),["./loadGLTFMesh-5d69b4f6.js","./index-8b5e7d9b.js","./index-5447a158.css"],import.meta.url),n),o=await qt(r,n);fe(n);const i=s(new F({x:0,y:0,z:0,spatialReference:e.spatialReference}),o.url,{resolveFile:Ht(o),requestFile:void 0,useTransform:!0,signal:n?.signal,expectedType:o.type});i.then(()=>o.dispose(),()=>o.dispose());const{vertexAttributes:l,components:c}=await i;e.vertexAttributes=l,e.components=c}function Ht(e){const t=ot(e.url);return n=>{const r=it(n,t,t),s=r?r.replace(/^ *\.\//,""):null;return(s?e.files.get(s):null)??n}}async function qt(e,t){if(Array.isArray(e)){if(!e.length)throw new R("mesh-load-external:missing-assets","There must be at least one file to load");return e[0]instanceof File?Kt(e):en(e,t)}return We(e)}async function Qt(e,t){const{parts:n,assetMimeType:r,assetName:s}=e;if(n.length===1)return new ne(n[0].partUrl);const o=await e.toBlob(t);return fe(t),ne.fromBlob(o,He(s,r))}function We(e){return ne.fromBlob(e,He(e.name,e.type))}function Kt(e){return Xe(e.map(t=>({name:t.name,mimeType:t.type,source:We(t)})))}async function en(e,t){const n=await at(e.map(async r=>{const s=await Qt(r);return fe(t),{name:r.assetName,mimeType:r.assetMimeType,source:s}}));if(lt(t))throw n.forEach(r=>r.source.dispose()),ct();return Xe(n)}const Ze=/^model\/gltf\+json$/,Je=/^model\/gltf-binary$/,ce=/\.gltf$/i,tn=/\.glb$/i;function Xe(e){const t=new Map;let n,r=null;for(const{name:s,mimeType:o,source:i}of e)r===null&&(Ze.test(o)||ce.test(s)?(r=i.url,n="gltf"):(Je.test(o)||tn.test(s))&&(r=i.url,n="glb")),t.set(s,i.url),i.files.forEach((l,c)=>t.set(c,l));if(r==null)throw new R("mesh-load-external:missing-files","Missing files to load external mesh source");return new ne(r,()=>e.forEach(({source:s})=>s.dispose()),t,n)}let ne=class Ye{constructor(t,n=()=>{},r=new Map,s){this.url=t,this.dispose=n,this.files=r,this.type=s}static fromBlob(t,n){const r=URL.createObjectURL(t);return new Ye(r,()=>URL.revokeObjectURL(r),void 0,n)}};function He(e,t){return Ze.test(t)||ce.test(e)?"gltf":Je.test(t)||ce.test(e)?"glb":void 0}let j=class extends ut{constructor(){super(),this.externalSources=new pt,this._explicitDisplaySource=null,this.addHandles(ft(()=>this.externalSources,"after-remove",({item:e})=>{e===this._explicitDisplaySource&&(this._explicitDisplaySource=null)},{sync:!0,onListenerRemove:()=>this._explicitDisplaySource=null}))}get displaySource(){return this._explicitDisplaySource??this._implicitDisplaySource}set displaySource(e){if(e!=null&&!be(e))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=e,e&&this.externalSources.every(t=>!_t(t,e))&&this.externalSources.add(e)}clearSources(){this.externalSources.removeAll()}getExternalSourcesOnService(e){return this.externalSources.items.filter(t=>Ot(t,e))}get _implicitDisplaySource(){return this.externalSources.find(be)}};d([x()],j.prototype,"externalSources",void 0),d([x()],j.prototype,"displaySource",null),d([x()],j.prototype,"_implicitDisplaySource",null),d([x()],j.prototype,"_explicitDisplaySource",void 0),j=d([Te("esri.geometry.support.meshUtils.Metadata")],j);const nn="esri.geometry.support.meshUtils.offset";function rn(e,t,n){if(!e.vertexAttributes?.position)return;const{vertexSpace:r}=e;r.isRelative?(se(r,nn,n),sn(r,t)):oe(e.spatialReference,n)?on(e,t):an(e,t)}function sn(e,t){const n=e.origin;e.origin=ie(y(),n,t)}function on(e,t){const n=e.spatialReference,r=e.vertexAttributes.position,s=e.vertexAttributes.normal,o=e.vertexAttributes.tangent,i=new Float64Array(r.length),l=s!=null?new Float32Array(s.length):null,c=o!=null?new Float32Array(o.length):null,a=e.extent.center,u=ln;ke(n,[a.x,a.y,a.z],Re,he(n)),Ce(Fe,Re),K(u,t,Fe),me(r,n,i),s!=null&&l!=null&&ge(s,r,i,n,l),o!=null&&c!=null&&de(o,r,i,n,c),qe(i,u),xe(i,r,n),s!=null&&l!=null&&ye(l,r,i,n,s),o!=null&&c!=null&&we(c,r,i,n,o),e.vertexAttributesChanged()}function an(e,t){qe(e.vertexAttributes.position,t),e.vertexAttributesChanged()}function qe(e,t){if(e)for(let n=0;n<e.length;n+=3)for(let r=0;r<3;r++)e[n+r]+=t[r]}const ln=y(),Re=ze(),Fe=ve();function cn(){const{faceDescriptions:e,faceVertexOffsets:t,uvScales:n}=xn,r=4*e.length,s=new Float64Array(3*r),o=new Float32Array(3*r),i=new Float32Array(2*r),l=new Uint32Array(2*e.length*3);let c=0,a=0,u=0,p=0;for(let f=0;f<e.length;f++){const h=e[f],M=c/3;for(const A of t)l[p++]=M+A;const B=h.corners;for(let A=0;A<4;A++){const _=B[A];let $=0;i[u++]=.25*n[A][0]+h.uvOrigin[0],i[u++]=h.uvOrigin[1]-.25*n[A][1];for(let b=0;b<3;b++)h.axis[b]!==0?(s[c++]=.5*h.axis[b],o[a++]=h.axis[b]):(s[c++]=.5*_[$++],o[a++]=0)}}return{position:s,normal:o,uv:i,faces:l}}function un(e,t){const n=e.components[0],r=n.faces,s=yn[t],o=6*s,i=new Array(6),l=new Array(r.length-6);let c=0,a=0;for(let u=0;u<r.length;u++)u>=o&&u<o+6?i[c++]=r[u]:l[a++]=r[u];if(e.vertexAttributes.uv!=null){const u=new Float32Array(e.vertexAttributes.uv),p=4*s*2,f=[0,1,1,1,1,0,0,0];for(let h=0;h<f.length;h++)u[p+h]=f[h];e.vertexAttributes.uv=u}return e.components=[new V({faces:i,material:n.material}),new V({faces:l})],e}function pn(e=0){const t=Math.round(8*2**e),n=2*t,r=(t-1)*(n+1)+2*n,s=new Float64Array(3*r),o=new Float32Array(3*r),i=new Float32Array(2*r),l=new Uint32Array(3*((t-1)*n*2));let c=0,a=0,u=0,p=0;for(let f=0;f<=t;f++){const h=f/t*Math.PI+.5*Math.PI,M=Math.cos(h),B=Math.sin(h);g[2]=B;const A=f===0||f===t,_=A?n-1:n;for(let $=0;$<=_;$++){const b=$/_*2*Math.PI;g[0]=-Math.sin(b)*M,g[1]=Math.cos(b)*M;for(let E=0;E<3;E++)s[c]=.5*g[E],o[c]=g[E],++c;i[a++]=($+(A?.5:0))/n,i[a++]=f/t,f!==0&&$!==n&&(f!==t&&(l[u++]=p,l[u++]=p+1,l[u++]=p-n),f!==1&&(l[u++]=p,l[u++]=p-n,l[u++]=p-n-1)),p++}}return{position:s,normal:o,uv:i,faces:l}}function fn(e=0){const n=Math.round(16*2**e),r=(5-1)*(n+1)+2*n,s=new Float64Array(3*r),o=new Float32Array(3*r),i=new Float32Array(2*r),l=new Uint32Array(3*(4*n));let c=0,a=0,u=0,p=0,f=0;for(let h=0;h<=5;h++){const M=h===0||h===5,B=h<=1||h>=5-1,A=h===2||h===4,_=M?n-1:n;for(let $=0;$<=_;$++){const b=$/_*2*Math.PI,E=M?0:.5;g[0]=E*Math.sin(b),g[1]=E*-Math.cos(b),g[2]=h<=2?.5:-.5;for(let O=0;O<3;O++)s[c++]=g[O],o[a++]=B?O===2?h<=1?1:-1:0:O===2?0:g[O]/E;i[u++]=($+(M?.5:0))/n,i[u++]=h<=1?1*h/3:h<=3?1*(h-2)/3+1/3:1*(h-4)/3+2/3,A||h===0||$===n||(h!==5&&(l[p++]=f,l[p++]=f+1,l[p++]=f-n),h!==1&&(l[p++]=f,l[p++]=f-n,l[p++]=f-n-1)),f++}}return{position:s,normal:o,uv:i,faces:l}}function hn(e,t){const n=typeof t=="number"?t:t!=null?t.width:1,r=typeof t=="number"?t:t!=null?t.height:1;switch(e){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}function mn(e){const t=Z.facingAxisOrderSwap[e],n=Z.position,r=Z.normal,s=new Float64Array(n.length),o=new Float32Array(r.length);let i=0;for(let l=0;l<4;l++){const c=i;for(let a=0;a<3;a++){const u=t[a],p=Math.abs(u)-1,f=u>=0?1:-1;s[i]=n[c+p]*f,o[i]=r[c+p]*f,i++}}return{position:s,normal:o,uv:new Float32Array(Z.uv),faces:new Uint32Array(Z.faces),isPlane:!0}}const T=1,k=2,C=3,Z={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[C,T,k],west:[-C,-T,k],north:[-T,C,k],south:[T,-C,k],up:[T,k,C],down:[T,-k,-C]}};function Y(e,t,n){e.isPlane||gn(e),dn(e,n?.size);const{vertexAttributes:r,vertexSpace:s,transform:o}=ht(e,t,n);return{vertexAttributes:new ee({...r,uv:e.uv}),vertexSpace:s,transform:o,components:[new V({faces:e.faces,material:n?.material||null})],spatialReference:t.spatialReference}}function gn(e){for(let t=0;t<e.position.length;t+=3)e.position[t+2]+=.5}function dn(e,t){if(t==null)return;const n=typeof t=="number"?[t,t,t]:[t.width!=null?t.width:1,t.depth!=null?t.depth:1,t.height!=null?t.height:1];L[0]=n[0],L[4]=n[1],L[8]=n[2];for(let r=0;r<e.position.length;r+=3){for(let s=0;s<3;s++)g[s]=e.position[r+s];K(g,g,L);for(let s=0;s<3;s++)e.position[r+s]=g[s]}if(n[0]!==n[1]||n[1]!==n[2]){L[0]=1/n[0],L[4]=1/n[1],L[8]=1/n[2];for(let r=0;r<e.normal.length;r+=3){for(let s=0;s<3;s++)g[s]=e.normal[r+s];K(g,g,L),mt(g,g);for(let s=0;s<3;s++)e.normal[r+s]=g[s]}}}const xn={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},yn={south:0,east:1,north:2,west:3,up:4,down:5},g=y(),L=ve(),Qe="esri.geometry.support.meshUtils.rotate";function wn(e,t,n){if(!e.vertexAttributes?.position||t[3]===0)return;const{spatialReference:r,vertexSpace:s}=e;if(s.isRelative){se(s,Qe,n);const o=n?.origin??e.origin;e.transform??(e.transform=new G),vn(e.transform,s,t,o)}else{const o=n?.origin??e.origin;oe(r,n)?$n(e,t,o):An(e,t,o)}}function vn(e,t,n,r){const s=t.origin,o=Ie(z,r.x,r.y,r.z??0),i=J(z,o,s);e.applyLocalInverse(i,Me),e.rotation=gt(e.rotation,n,$e()),e.applyLocalInverse(i,i),J(i,i,Me),e.translation=ie(y(),e.translation,i)}function $n(e,t,n){const r=e.spatialReference,s=he(r),o=Ke;S(n,o,s)||S(e.origin,o,s);const i=e.vertexAttributes.position,l=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,a=new Float64Array(i.length),u=l!=null?new Float32Array(l.length):null,p=c!=null?new Float32Array(c.length):null;ke(s,o,re,s),Ce(Le,re);const f=Ee;K(ae(Ee),ae(t),Le),f[3]=t[3],me(i,r,a),l!=null&&u!=null&&ge(l,i,a,r,u),c!=null&&p!=null&&de(c,i,a,r,p),U(a,f,3,o),xe(a,i,r),l!=null&&u!=null&&(U(u,f,3),ye(u,i,a,r,l)),c!=null&&p!=null&&(U(p,f,4),we(p,i,a,r,c)),e.vertexAttributesChanged()}function An(e,t,n){const r=Ke;if(!S(n,r,e.spatialReference)){const s=e.origin;r[0]=s.x,r[1]=s.y,r[2]=s.z,m.getLogger(Qe).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}U(e.vertexAttributes.position,t,3,r),U(e.vertexAttributes.normal,t,3),U(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}function U(e,t,n,r=Ue){if(e!=null){dt(re,xt(t),ae(t));for(let s=0;s<e.length;s+=n){for(let o=0;o<3;o++)z[o]=e[s+o]-r[o];yt(z,z,re);for(let o=0;o<3;o++)e[s+o]=z[o]+r[o]}}}const z=y(),Me=y(),Ee=$e(),re=ze(),Le=ve(),Ke=y(),et="esri.geometry.support.meshUtils.scale";function bn(e,t,n){if(!e.vertexAttributes?.position)return;const{spatialReference:r,vertexSpace:s}=e;if(s.isRelative){se(s,et,n);const o=n?.origin??e.origin;e.transform??(e.transform=new G),Sn(e.transform,s,t,o)}else{const o=oe(r,n),i=n?.origin??e.origin;o?Rn(e,t,i):Fn(e,t,i)}}function Sn(e,t,n,r){const s=t.origin,o=Ie(I,r.x,r.y,r.z),i=J(I,o,s);e.applyLocalInverse(i,Pe);const l=Ne(y(),e.scale,n);e.scale=l,e.applyLocalInverse(i,i),J(i,i,Pe),e.translation=ie(y(),e.translation,i)}function Rn(e,t,n){const r=e.spatialReference,s=he(r),o=nt;S(n,o,s)||S(e.origin,o,s);const i=e.vertexAttributes.position,l=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,a=new Float64Array(i.length),u=l!=null?new Float32Array(l.length):null,p=c!=null?new Float32Array(c.length):null;me(i,r,a),l!=null&&u!=null&&ge(l,i,a,r,u),c!=null&&p!=null&&de(c,i,a,r,p),tt(a,t,o),xe(a,i,r),l!=null&&u!=null&&ye(u,i,a,r,l),c!=null&&p!=null&&we(p,i,a,r,c),e.vertexAttributesChanged()}function Fn(e,t,n){const r=nt;if(!S(n,r,e.spatialReference)){const s=e.origin;r[0]=s.x,r[1]=s.y,r[2]=s.z,m.getLogger(et).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}tt(e.vertexAttributes.position,t,r),e.vertexAttributesChanged()}function tt(e,t,n=Ue){if(e)for(let r=0;r<e.length;r+=3){for(let s=0;s<3;s++)I[s]=e[r+s]-n[s];Ne(I,I,t);for(let s=0;s<3;s++)e[r+s]=I[s]+n[s]}}const I=y(),Pe=y(),nt=y();async function Mn(e){const t=[];for(const n of e)n.name.toLowerCase().endsWith(".zip")?t.push(En(n)):t.push(Promise.resolve(n));return(await Promise.all(t)).flat()}async function En(e){const{BlobReader:t,ZipReader:n,BlobWriter:r}=await Q(()=>import("./zipjs-wrapper-04da1961.js"),[],import.meta.url),s=[];return(await new n(new t(e)).getEntries()).forEach(i=>{if(i.directory||/^__MACOS/i.test(i.filename))return;const l=new r,c=i.getData?.(l).then(a=>new File([a],i.filename));c&&s.push(c)}),Promise.all(s)}var v;const P="esri.geometry.Mesh",Ln={base:null,key:"type",defaultKeyValue:"georeferenced",typeMap:{georeferenced:le,"georeferenced-relative":Ve,local:te}};let w=v=class extends wt.LoadableMixin(vt($t)){constructor(e){super(e),this.components=null,this.vertexSpace=new le,this.transform=null,this.metadata=new j,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new ee,this.type="mesh"}initialize(){(this.metadata.externalSources.length===0||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.addHandles(At(()=>({vertexAttributes:this.vertexAttributes,components:this.components?.map(e=>e.clone())}),()=>this._clearSources(),{once:!0,sync:!0}))})}get hasExtent(){return this.loaded?this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0):this.metadata.displaySource?.extent!=null}get _transformedExtent(){const{components:e,spatialReference:t,vertexAttributes:n,vertexSpace:r}=this,s=n.position;if(s.length===0||e&&e.length===0)return new pe({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:t});if(r.type==="local"){const{_untransformedExtent:o,transform:i}=this;return Vt(o,i,r,t)}if(r.type==="georeferenced-relative"){const{transform:o}=this,i=Oe({positions:s,transform:o,vertexSpace:r,inSpatialReference:t,outSpatialReference:t});return q(i,t)}return q(s,t)}get _untransformedExtent(){return q(this.vertexAttributes.position,this.spatialReference)}get anchor(){const{vertexSpace:e}=this;if(e.isRelative)return e.getOriginPoint(this.spatialReference);const{center:t,zmin:n}=this._transformedExtent;return new F({x:t.x,y:t.y,z:n,spatialReference:this.spatialReference})}get origin(){const{vertexSpace:e}=this;return e.isRelative?e.getOriginPoint(this.spatialReference):this._transformedExtent.center}get extent(){return this.loaded||this.metadata?.displaySource?.extent==null?this._transformedExtent:this.metadata.displaySource.extent.clone()}addComponent(e){if(!this.loaded)return m.getLogger(this).error("addComponent()",new W().message);this.components||(this.components=[]),this.components.push(V.from(e)),this.notifyChange("components")}removeComponent(e){if(!this.loaded)return m.getLogger(this).error("removeComponent()",new W().message);if(this.components){const t=this.components.indexOf(e);if(t!==-1)return this.components.splice(t,1),void this.notifyChange("components")}m.getLogger(this).error("removeComponent()",new Ct().message)}rotate(e,t,n,r){return bt(e,t,n,je),wn(this,je,r),this}offset(e,t,n,r){return this.loaded?(H[0]=e,H[1]=t,H[2]=n,rn(this,H,r),this):(m.getLogger(this).error("offset()",new W().message),this)}scale(e,t){return this.loaded?(bn(this,e,t),this):(m.getLogger(this).error("scale()",new W().message),this)}centerAt(e,t){return this.loaded?(Gt(this,e,t),this):(m.getLogger(this).error("centerAt()",new W().message),this)}load(e){const{metadata:{displaySource:t}}=this;return t&&this.addResolvingPromise(Yt(this,t,e)),Promise.resolve(this)}addExternalSources(e){this.metadata.externalSources.addMany(e)}updateDisplaySource(e){this.metadata.displaySource=e}clone(){return this.cloneWithVertexSpace(this.vertexSpace.clone())}cloneWithVertexSpace(e){let t=null;if(this.components){const r=new Map,s=new Map;t=this.components.map(o=>o.cloneWithDeduplication(r,s))}const n={components:t,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),vertexSpace:e,transform:this.transform?.clone()??null,metadata:this.metadata.clone()};return new v(n)}cloneShallow(){return new v({components:this.components,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes,vertexSpace:this.vertexSpace.clone(),transform:this.transform,metadata:this.metadata})}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const t=Q(()=>import("./gltfexport-6e87af6c.js"),["./gltfexport-6e87af6c.js","./index-8b5e7d9b.js","./index-5447a158.css"],import.meta.url),n=this.load(),r=await Promise.all([t,n]),{toBinaryGLTF:s}=r[0];return s(this,e)}get memoryUsage(){let e=0;if(e+=this.vertexAttributes.memoryUsage,this.components!=null)for(const t of this.components)e+=t.memoryUsage;return e}_clearSources(){this.metadata.clearSources()}static createBox(e,t){if(!(e instanceof F))return m.getLogger(P).error(".createBox()",new D().message),null;const n=new v(Y(cn(),e,t));return t?.imageFace&&t.imageFace!=="all"?un(n,t.imageFace):n}static createSphere(e,t){return e instanceof F?new v(Y(pn(t?.densificationFactor||0),e,t)):(m.getLogger(P).error(".createSphere()",new D().message),null)}static createCylinder(e,t){return e instanceof F?new v(Y(fn(t?.densificationFactor||0),e,t)):(m.getLogger(P).error(".createCylinder()",new D().message),null)}static createPlane(e,t){if(!(e instanceof F))return m.getLogger(P).error(".createPlane()",new D().message),null;const n=t?.facing??"up",r=hn(n,t?.size);return new v(Y(mn(n),e,{...t,size:r}))}static createFromPolygon(e,t){if(!(e instanceof St))return m.getLogger(P).error(".createFromPolygon()",new zt().message),null;const n=Rt(e);return new v({vertexAttributes:new ee({position:n.position}),components:[new V({faces:n.faces,shading:"flat",material:t?.material??null})],spatialReference:e.spatialReference,vertexSpace:new le})}static async createFromGLTF(e,t,n){if(!(e instanceof F)){const s=new D;throw m.getLogger(P).error(".createfromGLTF()",s.message),s}const{loadGLTFMesh:r}=await De(Q(()=>import("./loadGLTFMesh-5d69b4f6.js"),["./loadGLTFMesh-5d69b4f6.js","./index-8b5e7d9b.js","./index-5447a158.css"],import.meta.url),n);return new v(await r(e,t,n))}static async createFromFiles(e,t,n){const r=a=>m.getLogger(P).error(".createFromFiles()",a.message);if(!(e instanceof F)){const a=new D;throw r(a),a}const s=n?.layer;if(!s){const a=new It;throw r(a),a}const o=await v.extractAndFilterFiles(t,s),i=o.reduce((a,u)=>Ft(s.infoFor3D,u)?a+1:a,0);if(i===0){const a=new Ut;throw r(a),a}if(i>1){const a=new Nt;throw r(a),a}const l=v.createWithExternalSource(e,o),[c]=await s.uploadAssets([l],n);return c}static async extractAndFilterFiles(e,t){const n=t?.infoFor3D;return n?(await Mn(e)).filter(r=>Mt(n,r)):e}static createWithExternalSource(e,t,n){const r=n?.extent??null,{x:s,y:o,z:i,spatialReference:l}=e,c=n?.transform?.clone()??new G,a=n?.vertexSpace??new te({origin:[s,o,i??0]}),u={source:t,extent:r},p=new j;return p.externalSources.push(u),new v({metadata:p,transform:c,vertexSpace:a,spatialReference:l})}static createIncomplete(e,t){const{x:n,y:r,z:s,spatialReference:o}=e,i=t?.transform?.clone()??new G,l=t?.vertexSpace??new te({origin:[n,r,s??0]}),c=new v({transform:i,vertexSpace:l,spatialReference:o});return c.addResolvingPromise(Promise.reject(new R("mesh-incomplete","Mesh resources are not complete"))),c}};d([x({type:[V],json:{write:!0}})],w.prototype,"components",void 0),d([x({nonNullable:!0,types:Ln,constructOnly:!0,json:{write:!0}})],w.prototype,"vertexSpace",void 0),d([x({type:G,json:{write:!0}})],w.prototype,"transform",void 0),d([x({constructOnly:!0})],w.prototype,"metadata",void 0),d([x()],w.prototype,"hasExtent",null),d([x()],w.prototype,"_transformedExtent",null),d([x()],w.prototype,"_untransformedExtent",null),d([x()],w.prototype,"anchor",null),d([x()],w.prototype,"origin",null),d([x({readOnly:!0,json:{read:!1}})],w.prototype,"extent",null),d([x({readOnly:!0,json:{read:!1,write:!0,default:!0}})],w.prototype,"hasZ",void 0),d([x({readOnly:!0,json:{read:!1,write:!0,default:!1}})],w.prototype,"hasM",void 0),d([x({type:ee,nonNullable:!0,json:{write:!0}})],w.prototype,"vertexAttributes",void 0),w=v=d([Te(P)],w);const H=y(),je=$e(),_e=w,ue=()=>m.getLogger("esri.rest.support.meshFeatureSet");function Wn(e,t,n){const r=n.features;n.features=[],delete n.geometryType;const s=kt.fromJSON(n);if(s.geometryType="mesh",!n.assetMaps)return s;const o=Dn(t,n.assetMaps),i=e.sourceSpatialReference??Et.WGS84,l=n.globalIdFieldName,{outFields:c}=e,a=c!=null&&c.length>0?Pn(c.includes("*")?null:new Set(c)):()=>({});for(const u of r){const p=jn(u,l,i,t,o);p!=null&&s.features.push(new Lt({geometry:p,attributes:a(u)}))}return s}function Pn(e){return({attributes:t})=>{if(!t)return{};if(!e)return t;for(const n in t)e.has(n)||delete t[n];return t}}function jn(e,t,n,r,s){const o=e.attributes[t],i=s.get(o);if(i==null)return ue().error("mesh-feature-set:asset-not-found","Service returned a feature which was not found in the asset map",e),null;if(!e.geometry)return ue().error("mesh-feature-set:no-geometry","Service returned a feature without geometry",e),null;const{originPoint:l,originVector:c}=_n(e,n,r),a=pe.fromJSON(e.geometry);a.spatialReference=n;const u=On(e.attributes,r),p=i.projectVertices?new Ve({origin:c}):new te({origin:c}),f=Tn(i);return f?_e.createWithExternalSource(l,f,{extent:a,transform:u,vertexSpace:p}):_e.createIncomplete(l,{extent:a,transform:u,vertexSpace:p})}function _n({attributes:e},t,{transformFieldRoles:n}){const r=e[n.originX],s=e[n.originY],o=e[n.originZ];return{originPoint:new F({x:r,y:s,z:o,spatialReference:t}),originVector:Pt(r,s,o)}}function On(e,{transformFieldRoles:t}){return new G({translation:[e[t.translationX],-e[t.translationZ],e[t.translationY]],rotationAxis:[e[t.rotationX],-e[t.rotationZ],e[t.rotationY]],rotationAngle:e[t.rotationDeg],scale:[e[t.scaleX],e[t.scaleZ],e[t.scaleY]]})}var N;function Dn(e,t){const n=new Map;for(const r of t){const s=r.parentGlobalId;if(s==null)continue;const o=r.assetName,i=r.assetType,l=r.assetHash,c=r.assetURL,a=r.conversionStatus,u=r.seqNo,p=jt(i,e.supportedFormats);if(!p){ue().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${i}, but it does not list it as a supported type`);continue}const f=Ae(n,s,()=>({projectVertices:Cn(r.flags).projectVertices,files:new Map}));Ae(f.files,o,()=>({name:o,type:i,mimeType:p,status:kn(a),parts:[]})).parts[u]={hash:l,url:c}}return n}function Tn(e){const t=Array.from(e.files.values()),n=new Array;for(const r of t){if(r.status!==N.COMPLETED)return null;const s=new Array;for(const o of r.parts){if(!o)return null;s.push(new Dt(o.url,o.hash))}n.push(new Tt(r.name,r.mimeType,s))}return n}function kn(e){switch(e){case"COMPLETED":case"SUBMITTED":return N.COMPLETED;case"INPROGRESS":return N.PENDING;default:return N.FAILED}}function Cn(e){return{projectVertices:e.includes("PROJECT_VERTICES")}}(function(e){e[e.FAILED=0]="FAILED",e[e.PENDING=1]="PENDING",e[e.COMPLETED=2]="COMPLETED"})(N||(N={}));export{Dn as assetMapFromAssetMapsJSON,jn as extractMesh,Wn as meshFeatureSetFromJSON};
