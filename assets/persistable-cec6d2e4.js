import{cJ as j,cK as N,cL as P,cM as h,cN as x,cO as S,cP as $,cQ as b,cR as R,cS as v,cT as A,av as O,cU as F,cV as J,cW as K,cX as V,cY as Y,cZ as Z}from"./index-5b8adf8e.js";import{p as y}from"./resourceExtension-5b2d5f5b.js";function X(e){const r=e?.origins??[void 0];return(s,n)=>{const t=z(e,s,n);for(const i of r){const c=j(s,i,n);for(const o in t)c[o]=t[o]}}}function z(e,r,s){if(e?.type==="resource")return C(e,r,s);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:t}=Z;return{read:n,write:t}}}}function C(e,r,s){const n=N(r,s);return{type:String,read:(t,i,c)=>{const o=P(t,i,c);return n.type===String?o:typeof n.type=="function"?new n.type({url:o}):void 0},write:{writer(t,i,c,o){if(!o?.resources)return typeof t=="string"?void(i[c]=h(t,o)):void(i[c]=t.write({},o));const a=M(t),p=h(a,{...o,verifyItemRelativeUrls:o?.verifyItemRelativeUrls?{writtenUrls:o.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},x.NO),l=n.type!==String&&(!S(this)||o?.origin&&this.originIdOf(s)>$(o.origin)),u={object:this,propertyName:s,value:t,targetUrl:p,dest:i,targetPropertyName:c,context:o,params:e};o?.portalItem&&p&&!b(p)?l&&e?.contentAddressed?g(u):l?H(u):L(u):o?.portalItem&&(p==null||R(p)!=null||v(p)||l)?g(u):i[c]=p}}}}function g(e){const{targetUrl:r,params:s,value:n,context:t,dest:i,targetPropertyName:c}=e;if(!t.portalItem)return;const o=A(r),a=w(n,r,t);if(s?.contentAddressed&&a.type!=="json")return void t.messages?.push(new O("persistable:contentAddressingUnsupported",`Property "${c}" is trying to serializing a resource with content of type ${a.type} with content addressing. Content addressing is only supported for json resources.`,{content:a}));const p=s?.contentAddressed&&a.type==="json"?F(a.jsonString):o?.filename??J(),l=K(s?.prefix??o?.prefix,p),u=`${l}.${y(a)}`;if(s?.contentAddressed&&t.resources&&a.type==="json"){const f=t.resources.toKeep.find(m=>m.resource.path===u)??t.resources.toAdd.find(m=>m.resource.path===u);if(f)return void(i[c]=f.resource.itemRelativeUrl)}const d=t.portalItem.resourceFromPath(u);v(r)&&t.resources&&t.resources.pendingOperations.push(V(r).then(f=>{d.path=`${l}.${y({type:"blob",blob:f})}`,i[c]=d.itemRelativeUrl}).catch(()=>{}));const I=s?.compress??!1;t.resources&&U({...e,resource:d,content:a,compress:I,updates:t.resources.toAdd}),i[c]=d.itemRelativeUrl}function H(e){const{context:r,targetUrl:s,params:n,value:t,dest:i,targetPropertyName:c}=e;if(!r.portalItem)return;const o=r.portalItem.resourceFromPath(s),a=w(t,s,r),p=y(a),l=Y(o.path),u=n?.compress??!1;p===l?(r.resources&&U({...e,resource:o,content:a,compress:u,updates:r.resources.toUpdate}),i[c]=s):g(e)}function L({context:e,targetUrl:r,dest:s,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(r),compress:!1}),s[n]=r)}function U({object:e,propertyName:r,updates:s,resource:n,content:t,compress:i}){s.push({resource:n,content:t,compress:i,finish:c=>{Q(e,r,c)}})}function w(e,r,s){return typeof e=="string"?{type:"url",url:r}:{type:"json",jsonString:JSON.stringify(e.toJSON(s))}}function M(e){return e==null?null:typeof e=="string"?e:e.url}function Q(e,r,s){typeof e[r]=="string"?e[r]=s.url:e[r].url=s.url}export{X as j};
