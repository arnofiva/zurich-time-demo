import{cd as f,bv as i}from"./index-5b8adf8e.js";import{c as e}from"./query-beb65f31.js";import{d as m}from"./FeatureSet-04b2b8c3.js";async function w(r,a,o){const t=await p(r,a,o);return m.fromJSON(t)}async function p(r,a,o){const t=f(r),c={...o},n=i.from(a),{data:s}=await e(t,n,n.sourceSpatialReference,c);return s}export{p as a,w as s};
