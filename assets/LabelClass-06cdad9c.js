import{ah as t,ai as s,az as f,cm as c,ak as x,cG as S,g_ as y,cL as E,g$ as A,h0 as j,h1 as C,h2 as m,h3 as I,h4 as B,h5 as N,h6 as $,h7 as O,h8 as M,cH as d}from"./index-8b5e7d9b.js";import{a as V}from"./defaults-4b2d7493.js";var v;let a=v=class extends S{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(e,n){return n.value?y(n.value):e}writeExpression(e,n,l){this.value!=null&&(e=y(this.value)),e!=null&&(n[l]=e)}clone(){return new v({expression:this.expression,title:this.title,value:this.value})}};t([s({type:String,json:{write:{writerEnsuresNonNull:!0}}})],a.prototype,"expression",void 0),t([f("expression",["expression","value"])],a.prototype,"readExpression",null),t([c("expression")],a.prototype,"writeExpression",null),t([s({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],a.prototype,"title",void 0),t([s({json:{read:!1,write:!1}})],a.prototype,"value",void 0),a=v=t([x("esri.layers.support.LabelExpressionInfo")],a);const g=a;var w;const u=new E({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function b(e,n,l){return{enabled:!I(l?.layer)}}function L(e){return!e||e.origin!=="service"&&e.layer?.type!=="map-image"}function D(e){return e?.type==="map-image"}function P(e){return!!D(e)&&!!e.capabilities?.exportMap?.supportsArcadeExpressionForLabeling}function R(e){return L(e)||P(e?.layer)}let i=w=class extends S{static evaluateWhere(e,n){const l=(r,p,o)=>{switch(p){case"=":return r==o;case"<>":return r!=o;case">":return r>o;case">=":return r>=o;case"<":return r<o;case"<=":return r<=o}return!1};try{if(e==null)return!0;const r=e.split(" ");if(r.length===3)return l(n[r[0]],r[1],r[2]);if(r.length===7){const p=l(n[r[0]],r[1],r[2]),o=r[3],h=l(n[r[4]],r[5],r[6]);switch(o){case"AND":return p&&h;case"OR":return p||h}}return!1}catch{console.log("Error.: can't parse = "+e)}}constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=V,this.useCodedValues=void 0,this.where=null}readLabelExpression(e,n){const l=n.labelExpressionInfo;if(!l||!l.value&&!l.expression)return e}writeLabelExpression(e,n,l){if(this.labelExpressionInfo){if(this.labelExpressionInfo.value!=null)e=B(this.labelExpressionInfo.value);else if(this.labelExpressionInfo.expression!=null){const r=N(this.labelExpressionInfo.expression);r&&(e="["+r+"]")}}e!=null&&(n[l]=e)}writeLabelExpressionInfo(e,n,l,r){if(e==null&&this.labelExpression!=null&&L(r))e=new g({expression:this.getLabelExpressionArcade()});else if(!e)return;const p=e.toJSON(r);p.expression&&(n[l]=p)}writeMaxScale(e,n){(e||this.minScale)&&(n.maxScale=e)}writeMinScale(e,n){(e||this.maxScale)&&(n.minScale=e)}getLabelExpression(){return $(this)}getLabelExpressionArcade(){return O(this)}getLabelExpressionSingleField(){return M(this)}hash(){return JSON.stringify(this)}clone(){return new w({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:d(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:d(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};t([s({type:String,json:{write:!0}})],i.prototype,"name",void 0),t([s({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1},"portal-item":{default:!1,write:{overridePolicy:b}}}}})],i.prototype,"allowOverrun",void 0),t([s({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1},"portal-item":{default:"static",write:{overridePolicy:b}}}}})],i.prototype,"deconflictionStrategy",void 0),t([s({type:String,json:{write:{overridePolicy(e,n,l){return this.labelExpressionInfo&&l?.origin==="service"&&P(l.layer)?{enabled:!1}:{allowNull:!0}}}}})],i.prototype,"labelExpression",void 0),t([f("labelExpression")],i.prototype,"readLabelExpression",null),t([c("labelExpression")],i.prototype,"writeLabelExpression",null),t([s({type:g,json:{write:{overridePolicy:(e,n,l)=>R(l)?{allowNull:!0}:{enabled:!1}}}})],i.prototype,"labelExpressionInfo",void 0),t([c("labelExpressionInfo")],i.prototype,"writeLabelExpressionInfo",null),t([s({type:u.apiValues,json:{type:u.jsonValues,read:u.read,write:u.write}})],i.prototype,"labelPlacement",void 0),t([s({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],i.prototype,"labelPosition",void 0),t([s({type:Number})],i.prototype,"maxScale",void 0),t([c("maxScale")],i.prototype,"writeMaxScale",null),t([s({type:Number})],i.prototype,"minScale",void 0),t([c("minScale")],i.prototype,"writeMinScale",null),t([s({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:b}}}}})],i.prototype,"repeatLabel",void 0),t([s({type:Number,cast:A,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:b}}}}})],i.prototype,"repeatLabelDistance",void 0),t([s({types:j,json:{origins:{"web-scene":{types:C,write:m,default:null}},write:m,default:null}})],i.prototype,"symbol",void 0),t([s({type:Boolean,json:{write:!0}})],i.prototype,"useCodedValues",void 0),t([s({type:String,json:{write:!0}})],i.prototype,"where",void 0),i=w=t([x("esri.layers.support.LabelClass")],i);const k=i;export{k as C};
