import{ax as m,fU as l,fV as r}from"./index-5b8adf8e.js";import{t as u}from"./symbolUtils-d0804c24.js";import"./utils-40d3b03c.js";function g(e,i,n){const h=e.thumbnail&&e.thumbnail.url;return h?m(h,{responseType:"image"}).then(t=>{const a=d(t.data,n);return n?.node?(n.node.appendChild(a),n.node):a}):l(e).then(t=>t?i(t,n):null)}function d(e,i){const n=!/\\.svg$/i.test(e.src)&&i&&i.disableUpsampling,h=Math.max(e.width,e.height);let t=i?.maxSize!=null?r(i.maxSize):u.maxSize;n&&(t=Math.min(h,t));const a=typeof i?.size=="number"?i?.size:null,o=Math.min(t,a!=null?r(a):h);if(o!==h){const s=e.width!==0&&e.height!==0?e.width/e.height:1;s>=1?(e.width=o,e.height=o/s):(e.width=o*s,e.height=o)}return e}export{g as previewWebStyleSymbol};
