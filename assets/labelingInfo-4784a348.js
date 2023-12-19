import{bi as a,cH as c,as as f}from"./index-8b5e7d9b.js";import{C as u}from"./LabelClass-06cdad9c.js";const l=a.getLogger("esri.layers.support.labelingInfo"),b=/\[([^\[\]]+)\]/gi;function $(e,t,o){return e?e.map(n=>{const r=new u;if(r.read(n,o),r.labelExpression){const i=t.fields||t.layerDefinition?.fields||this.fields;r.labelExpression=r.labelExpression.replaceAll(b,(g,s)=>`[${p(s,i)}]`)}return r}):null}function p(e,t){if(!t)return e;const o=e.toLowerCase();for(let n=0;n<t.length;n++){const r=t[n].name;if(r.toLowerCase()===o)return r}return e}const m={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function h(e,t){const o=c(e);return o.some(n=>y(n,t))?[]:o}function y(e,t){const o=e.labelPlacement,n=m[t];if(!e.symbol)return l.warn("No ILabelClass symbol specified."),!0;if(!n)return l.error(new f("labeling:unsupported-geometry-type",`Unable to create labels for layer, geometry type '${t}' is not supported`)),!0;if(!n.includes(o)){const r=n[0];o&&l.warn(`Found invalid label placement type ${o} for ${t}. Defaulting to ${r}`),e.labelPlacement=r}return!1}export{h as c,$ as i};
