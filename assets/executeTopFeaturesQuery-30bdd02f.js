import{cd as f}from"./index-5b8adf8e.js";import{p as e}from"./queryTopFeatures-bce2afa8.js";import{d as s}from"./FeatureSet-04b2b8c3.js";import{S as c}from"./TopFeaturesQuery-a462936c.js";import"./query-beb65f31.js";import"./pbfQueryUtils-5298f41b.js";import"./pbf-16e0ae52.js";import"./queryZScale-c917a291.js";async function F(r,o,t,m){const i=f(r),p={...m},{data:a}=await e(i,c.from(o),t,p);return s.fromJSON(a)}export{F as executeTopFeaturesQuery};
