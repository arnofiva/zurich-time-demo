import{I as y,b as m}from"./utils-f2073bb3.js";import{a as o}from"./jsonContext-2b28d6d2.js";import{gk as n,dS as p,dT as f,eT as v}from"./index-5b8adf8e.js";const c="Group Layer",d="group-layer-save",I="group-layer-save-as",s=f.GROUP_LAYER_MAP;function i(e){return{isValid:e.type==="group",errorMessage:"Layer.type should be 'group'"}}function g(e){return{isValid:v(e,s),errorMessage:`Layer.portalItem.typeKeywords should have '${s}'`}}function u(e){const r=e.layerJSON;return Promise.resolve(r&&Object.keys(r).length?r:null)}async function P(e,r){r.title||(r.title=e.title),p(r,s)}async function x(e,r){return y({layer:e,itemType:c,validateLayer:i,validateItem:g,createJSONContext:a=>o(a,e),createItemData:u,errorNamePrefix:d,saveResources:async(a,t)=>(e.sourceIsPortalItem||await a.removeAllResources().catch(()=>{}),n(e.resourceReferences,t))},r)}async function N(e,r,a){return m({layer:e,itemType:c,validateLayer:i,createJSONContext:t=>o(t,e),createItemData:u,errorNamePrefix:I,newItem:r,setItemProperties:P,saveResources:(t,l)=>n(e.resourceReferences,l)},a)}export{x as save,N as saveAs};
