import{cd as f,bv as i}from"./index-bbf8a9f0.js";import{c as e}from"./query-65baef3e.js";import{d as m}from"./FeatureSet-360fc98b.js";async function w(r,a,o){const t=await p(r,a,o);return m.fromJSON(t)}async function p(r,a,o){const t=f(r),c={...o},n=i.from(a),{data:s}=await e(t,n,n.sourceSpatialReference,c);return s}export{p as a,w as s};
