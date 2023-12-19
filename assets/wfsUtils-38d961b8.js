import{au as F,e_ as D,as as c,e$ as j,f0 as C,f1 as k,f2 as S,bd as x,ch as I,b7 as U,f3 as L,e6 as M,cM as f,f4 as O,f5 as V,ey as W,eA as w}from"./index-8b5e7d9b.js";import{u as X}from"./geojson-ede2d4c1.js";import{o as h,n as b}from"./xmlUtils-444cb4c0.js";const T="xlink:href",d="2.0.0",R="__esri_wfs_id__",z="wfs-layer:getWFSLayerTypeInfo-error",Y="wfs-layer:empty-service",E="wfs-layer:feature-type-not-found",_="wfs-layer:geojson-not-supported",q="wfs-layer:kvp-encoding-not-supported",H="wfs-layer:malformed-json",P="wfs-layer:unknown-geometry-type",J="wfs-layer:unknown-field-type",K="wfs-layer:unsupported-spatial-reference",Q="wfs-layer:unsupported-wfs-version";async function Fe(a,t){const e=B((await F(a,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:d,...t?.customParameters},signal:t?.signal})).data);return te(a,e),e}function B(a){const t=N(a);me(t),v(t);const e=t.firstElementChild,n=D(ae(e));return{operations:ee(e),get featureTypes(){return Array.from(n())},readFeatureTypes:n}}const Z=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function ee(a){let t=!1;const e={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if(h(a,{OperationsMetadata:{Operation:n=>{switch(n.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:r=>{e.GetCapabilities.url=r.getAttribute(T)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:r=>{e.DescribeFeatureType.url=r.getAttribute(T)}}}};case"GetFeature":return{DCP:{HTTP:{Get:r=>{e.GetFeature.url=r.getAttribute(T)}}},Parameter:r=>{if(r.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:s=>{const o=s.textContent;o&&Z.has(o.toLowerCase())&&(e.GetFeature.outputFormat=o)}}}}}}},Constraint:n=>{switch(n.getAttribute("name")){case"KVPEncoding":return{DefaultValue:r=>{t=r.textContent.toLowerCase()==="true"}};case"ImplementsResultPaging":return{DefaultValue:r=>{e.GetFeature.supportsPagination=r.textContent.toLowerCase()==="true"}}}}}}),!t)throw new c(q,"WFS service doesn't support key/value pair (KVP) encoding");if(e.GetFeature.outputFormat==null)throw new c(_,"WFS service doesn't support GeoJSON output format");return e}function te(a,t){j(a)&&(C(a,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=k(t.operations.DescribeFeatureType.url)),C(a,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=k(t.operations.GetFeature.url)))}function $(a){const t=parseInt(a.textContent?.match(/(?<wkid>\d+$)/i)?.groups?.wkid??"",10);if(!Number.isNaN(t))return t}function ae(a){return b(a,{FeatureTypeList:{FeatureType:t=>{const e={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",defaultSpatialReference:4326,supportedSpatialReferences:[]},n=new Set;return h(t,{Name:r=>{const{name:s,prefix:o}=g(r.textContent);e.typeName=`${o}:${s}`,e.name=s,e.namespacePrefix=o,e.namespaceUri=r.lookupNamespaceURI(o)},Abstract:r=>{e.description=r.textContent},Title:r=>{e.title=r.textContent},WGS84BoundingBox:r=>{e.extent=ne(r)},DefaultCRS:r=>{const s=$(r);s&&(e.defaultSpatialReference=s,n.add(s))},OtherCRS:r=>{const s=$(r);s&&n.add(s)}}),e.title||(e.title=e.name),n.add(4326),e.supportedSpatialReferences.push(...n),e}}})}function ne(a){let t,e,n,r;for(const s of a.children)switch(s.localName){case"LowerCorner":[t,e]=s.textContent.split(" ").map(o=>Number.parseFloat(o));break;case"UpperCorner":[n,r]=s.textContent.split(" ").map(o=>Number.parseFloat(o))}return{xmin:t,ymin:e,xmax:n,ymax:r,spatialReference:W}}function re(a,t,e){return S(a,n=>e?n.name===t&&n.namespaceUri===e:n.typeName===t||n.name===t)}async function he(a,t,e,n={}){const{featureType:r,extent:s}=await se(a,t,e,n),{spatialReference:o}=de(a.operations.GetFeature.url,r,n.spatialReference),{fields:i,geometryType:u,swapXY:p,objectIdField:l,geometryField:y}=await oe(a,r,o,n);return{url:a.operations.GetCapabilities.url,name:r.name,namespaceUri:r.namespaceUri,fields:i,geometryField:y,geometryType:u,objectIdField:l,spatialReference:n.spatialReference??new x({wkid:r.defaultSpatialReference}),extent:s,swapXY:p,wfsCapabilities:a,customParameters:n.customParameters}}async function se(a,t,e,n={}){const r=a.readFeatureTypes(),s=t?re(r,t,e):r.next().value,{spatialReference:o=new x({wkid:s?.defaultSpatialReference})}=n;if(s==null)throw t?new c(E,`The type '${t}' could not be found in the service`):new c(Y,"The service is empty");let i=new I({...s.extent,spatialReference:x.WGS84});if(!U(i.spatialReference,o))try{await L(i.spatialReference,o,void 0,n),i=M(i,o)}catch{throw new c(K,"Projection not supported")}return{extent:i,spatialReference:o,featureType:s}}async function oe(a,t,e,n={}){const{typeName:r}=t,[s,o]=await Promise.allSettled([pe(a.operations.DescribeFeatureType.url,r,n),ue(a,r,e,n)]),i=m=>new c(z,`An error occurred while getting info about the feature type '${r}'`,{error:m});if(s.status==="rejected")throw i(s.reason);if(o.status==="rejected")throw i(o.reason);const{fields:u,errors:p}=s.value??{},l=s.value?.geometryType||o.value?.geometryType,y=o.value?.swapXY??!1;if(l==null)throw new c(P,`The geometry type could not be determined for type '${r}`,{typeName:r,geometryType:l,fields:u,errors:p});return{...ie(u??[]),geometryType:l,swapXY:y}}function ie(a){const t=a.find(n=>n.type==="geometry");let e=a.find(n=>n.type==="oid");return a=a.filter(n=>n.type!=="geometry"),e||(e=new f({name:R,type:"oid",alias:R}),a.unshift(e)),{geometryField:t?.name??null,objectIdField:e.name,fields:a}}async function ue(a,t,e,n={}){let r,s=!1;const[o,i]=await Promise.all([fe(a.operations.GetFeature.url,t,e,a.operations.GetFeature.outputFormat,{...n,count:1}),F(a.operations.GetFeature.url,{responseType:"text",query:A(t,e,void 0,{...n,count:1}),signal:n?.signal})]),u=o.type==="FeatureCollection"&&o.features[0]?.geometry;if(u){let p;switch(r=O.fromJSON(X(u.type)),u.type){case"Point":p=u.coordinates;break;case"LineString":case"MultiPoint":p=u.coordinates[0];break;case"MultiLineString":case"Polygon":p=u.coordinates[0][0];break;case"MultiPolygon":p=u.coordinates[0][0][0]}const l=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(i.data);if(l){const y=p[0].toFixed(3),m=p[1].toFixed(3),G=parseFloat(l[1]).toFixed(3);y===parseFloat(l[2]).toFixed(3)&&m===G&&(s=!0)}}return{geometryType:r,swapXY:s}}async function pe(a,t,e){return le(t,(await F(a,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:d,TYPENAME:t,...e?.customParameters},signal:e?.signal})).data)}function le(a,t){const{name:e}=g(a),n=N(t);v(n);const r=S(b(n.firstElementChild,{element:s=>({name:s.getAttribute("name"),typeName:g(s.getAttribute("type")).name})}),({name:s})=>s===e);if(r!=null){const s=S(b(n.firstElementChild,{complexType:o=>o}),o=>o.getAttribute("name")===r.typeName);if(s!=null)return ye(s)}throw new c(E,`Type '${a}' not found in document`,{document:new XMLSerializer().serializeToString(n)})}const ce=new Set(["objectid","fid"]);function ye(a){const t=[],e=[];let n;const r=b(a,{complexContent:{extension:{sequence:{element:s=>s}}}});for(const s of r){const o=s.getAttribute("name");if(!o)continue;let i,u;if(s.hasAttribute("type")?i=g(s.getAttribute("type")).name:h(s,{simpleType:{restriction:y=>(i=g(y.getAttribute("base")).name,{maxLength:m=>{u=+m.getAttribute("value")}})}}),!i)continue;const p=s.getAttribute("nillable")==="true";let l=!1;switch(i.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":e.push(new f({name:o,alias:o,type:"integer",nullable:p,length:w("integer")}));break;case"float":case"double":case"decimal":e.push(new f({name:o,alias:o,type:"double",nullable:p,length:w("double")}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":e.push(new f({name:o,alias:o,type:"string",nullable:p,length:u??w("string")}));break;case"datetime":case"date":e.push(new f({name:o,alias:o,type:"date",nullable:p,length:u??w("date")}));break;case"pointpropertytype":n="point",l=!0;break;case"multipointpropertytype":n="multipoint",l=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":n="polyline",l=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":n="polygon",l=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":l=!0,t.push(new c(P,`geometry type '${i}' is not supported`,{type:new XMLSerializer().serializeToString(a)}));break;default:t.push(new c(J,`Unknown field type '${i}'`,{type:new XMLSerializer().serializeToString(a)}))}l&&e.push(new f({name:o,alias:o,type:"geometry",nullable:p}))}for(const s of e)if(s.type==="integer"&&!s.nullable&&ce.has(s.name.toLowerCase())){s.type="oid";break}return{geometryType:n,fields:e,errors:t}}async function fe(a,t,e,n,r){let{data:s}=await F(a,{responseType:"text",query:A(t,e,n,r),signal:r?.signal});s=s.replaceAll(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{return JSON.parse(s)}catch(o){throw new c(H,"Error while parsing the response",{response:s,error:o})}}function A(a,t,e,n){const r=typeof t=="number"?t:t.wkid;return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:d,TYPENAMES:a,OUTPUTFORMAT:e,SRSNAME:"EPSG:"+r,STARTINDEX:n?.startIndex,COUNT:n?.count,...n?.customParameters}}function N(a){return new DOMParser().parseFromString(a.trim(),"text/xml")}function g(a){const[t,e]=a.split(":");return{prefix:e?t:"",name:e??t}}function me(a){const t=a.firstElementChild?.getAttribute("version");if(t&&t!==d)throw new c(Q,`Unsupported WFS version ${t}. Supported version: ${d}`)}function v(a){let t="",e="";if(h(a.firstElementChild,{Exception:n=>(t=n.getAttribute("exceptionCode"),{ExceptionText:r=>{e=r.textContent}})}),t)throw new c(`wfs-layer:${t}`,e)}function de(a,t,e){const n={wkid:t.defaultSpatialReference},r=e?.wkid!=null?{wkid:e.wkid}:n;return{spatialReference:r,getFeatureSpatialReference:V(a)||r.wkid&&t.supportedSpatialReferences.includes(r.wkid)?{wkid:r.wkid}:{wkid:t.defaultSpatialReference}}}export{fe as B,R as S,re as V,he as W,de as a,ie as q,Fe as v};
