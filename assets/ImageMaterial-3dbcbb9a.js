import{jG as y,jH as $,jI as A,b3 as p,jJ as c,jK as I,jL as O,jM as S,jN as b,jO as n,jP as v,jQ as j,jR as d,jS as x,aA as C,jT as D,jU as E,ah as r,jV as o,jW as P,jX as k,jY as w,jZ as N,j_ as R,j$ as V,k0 as L,k1 as M,k2 as F,k3 as U,k4 as B,k5 as G,k6 as W,k7 as z,k8 as H,k9 as Q,ka as q,kb as u,kc as J,kd as K,ke as X,kf as Y,kg as Z,kh as ee,ki as te,kj as se}from"./index-70a1e848.js";function ae(t){const e=new y,{vertex:s,fragment:a}=e;return $(s,t),e.include(A,t),e.attributes.add(p.POSITION,"vec3"),e.attributes.add(p.UV0,"vec2"),t.perspectiveInterpolation&&e.attributes.add(p.PERSPECTIVEDIVIDE,"float"),e.varyings.add("vpos","vec3"),t.multipassEnabled&&e.varyings.add("depth","float"),s.code.add(c`
    void main(void) {
      vpos = position;
      ${t.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);

      ${t.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":""}
    }
  `),e.include(I,t),e.include(O,t),a.uniforms.add(new S("tex",l=>l.texture),new b("opacity",l=>l.opacity)),e.varyings.add("vTexCoord","vec2"),t.output===n.Alpha?a.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${t.multipassEnabled?"terrainDepthTest(depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${c.float(v)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(a.include(j),a.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${t.multipassEnabled?"terrainDepthTest(depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${c.float(v)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${t.transparencyPassType===d.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),e}const ie=Object.freeze(Object.defineProperty({__proto__:null,build:ae},Symbol.toStringTag,{value:"Module"}));class _ extends k{initializeProgram(e){return new w(e.rctx,_.shader.get().build(this.configuration),T)}_setPipelineState(e,s){const a=this.configuration,l=e===d.NONE,h=e===d.FrontFace;return N({blending:a.output!==n.Color&&a.output!==n.Alpha||!a.transparent?null:l?re:R(e),culling:V(a.cullFace),depthTest:{func:L(e)},depthWrite:l?a.writeDepth?M:null:F(e),colorWrite:U,stencilWrite:a.hasOccludees?B:null,stencilTest:a.hasOccludees?s?G:W:null,polygonOffset:l||h?null:z(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}_.shader=new x(ie,()=>C(()=>import("./ImageMaterial.glsl-62e977ae.js"),["./ImageMaterial.glsl-62e977ae.js","./index-70a1e848.js","./index-fa8fa232.css"],import.meta.url));const re=D(E.ONE,E.ONE_MINUS_SRC_ALPHA);class i extends H{constructor(){super(...arguments),this.output=n.Color,this.cullFace=P.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=d.NONE,this.multipassEnabled=!1,this.cullAboveGround=!1,this.perspectiveInterpolation=!0}}r([o({count:n.COUNT})],i.prototype,"output",void 0),r([o({count:P.COUNT})],i.prototype,"cullFace",void 0),r([o()],i.prototype,"hasSlicePlane",void 0),r([o()],i.prototype,"transparent",void 0),r([o()],i.prototype,"enableOffset",void 0),r([o()],i.prototype,"writeDepth",void 0),r([o()],i.prototype,"hasOccludees",void 0),r([o({count:d.COUNT})],i.prototype,"transparencyPassType",void 0),r([o()],i.prototype,"multipassEnabled",void 0),r([o()],i.prototype,"cullAboveGround",void 0),r([o()],i.prototype,"perspectiveInterpolation",void 0),r([o({constValue:!1})],i.prototype,"occlusionPass",void 0);const T=new Map([[p.POSITION,0],[p.UV0,2],[p.PERSPECTIVEDIVIDE,3]]);let ce=class extends Q{constructor(e){super(e,new le),this.supportsEdges=!0,this._vertexAttributeLocations=T,this._configuration=new i}getConfiguration(e,s){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=s.transparencyPassType,this._configuration.enableOffset=s.camera.relativeElevation<q,this._configuration.multipassEnabled=s.multipassEnabled,this._configuration.cullAboveGround=s.multipassTerrain.cullAboveGround,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}produces(e,s){return s===n.Color||s===n.Alpha||s===n.Highlight?e===u.DRAPED_MATERIAL?!0:s===n.Highlight?e===u.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?u.TRANSPARENT_MATERIAL:u.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:u.OPAQUE_MATERIAL):!1}createGLMaterial(e){return new oe(e)}createBufferWriter(){const e=J.clone();return this.parameters.perspectiveInterpolation&&e.f32(p.PERSPECTIVEDIVIDE),new ne(e)}};class oe extends K{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(_,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==n.Color&&this._output!==n.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class ne extends X{write(e,s,a,l,h){for(const f of this.vertexBufferLayout.fields.keys()){const g=a.attributes.get(f);if(g)if(f===p.PERSPECTIVEDIVIDE){Y(g.size===1);const m=l.getField(f,Z);m&&ee(g,m,h)}else te(f,g,e,s,l,h)}}}class le extends se{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=P.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}export{ce as g,ae as v};
