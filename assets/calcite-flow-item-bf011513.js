import{fM as w,dD as S,fz as E,dE as A,dF as y,dG as p,fN as Q,fA as u,jl as V,fP as H,fD as F,fE as B,fJ as z,fK as L,fL as I,fQ as M,fR as P,fG as O,fH as D,fB as T,fC as R,jm as q,dI as n,dJ as k,jn as X,hV as Y,dK as Z}from"./index-5b8adf8e.js";import{d as $,a as _,H as N,S as ee}from"./action-menu-bc92b7fb.js";import{d as j}from"./scrim-bde14838.js";import"./FloatingArrow-31ef9f89.js";import"./debounce-a16039dc.js";import"./openCloseComponent-14bbd0b9.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.9.2
 */const o={actionBarContainer:"action-bar-container",backButton:"back-button",container:"container",header:"header",headerContainer:"header-container",headerContainerBorderEnd:"header-container--border-end",heading:"heading",summary:"summary",description:"description",headerContent:"header-content",headerActions:"header-actions",headerActionsEnd:"header-actions--end",headerActionsStart:"header-actions--start",contentWrapper:"content-wrapper",fabContainer:"fab-container",footer:"footer"},C={close:"x",menu:"ellipsis",backLeft:"chevron-left",backRight:"chevron-right",expand:"chevron-down",collapse:"chevron-up"},s={actionBar:"action-bar",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions"},te=":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-ui-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{z-index:var(--calcite-app-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1);border-block-end:var(--calcite-panel-header-border-block-end, 1px solid var(--calcite-ui-border-3))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-ui-border-3)}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;background-color:var(--calcite-ui-background)}.footer{display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-ui-foreground-1);flex:0 0 auto;padding:var(--calcite-panel-footer-padding, 0.5rem);border-block-start:1px solid var(--calcite-ui-border-3)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-app-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}",ne=A(class extends y{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePanelClose=p(this,"calcitePanelClose",6),this.calcitePanelToggle=p(this,"calcitePanelToggle",6),this.calcitePanelScroll=p(this,"calcitePanelScroll",6),this.resizeObserver=Q("resize",()=>this.resizeHandler()),this.resizeHandler=()=>{const{panelScrollEl:e}=this;!e||typeof e.scrollHeight!="number"||typeof e.offsetHeight!="number"||(e.tabIndex=e.scrollHeight>e.offsetHeight?0:-1)},this.setContainerRef=e=>{this.containerEl=e},this.panelKeyDownHandler=e=>{this.closable&&e.key==="Escape"&&!e.defaultPrevented&&(this.close(),e.preventDefault())},this.close=()=>{this.closed=!0,this.calcitePanelClose.emit()},this.collapse=()=>{this.collapsed=!this.collapsed,this.calcitePanelToggle.emit()},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.handleHeaderActionsStartSlotChange=e=>{this.hasStartActions=u(e)},this.handleHeaderActionsEndSlotChange=e=>{this.hasEndActions=u(e)},this.handleHeaderMenuActionsSlotChange=e=>{this.hasMenuItems=u(e)},this.handleActionBarSlotChange=e=>{const t=V(e).filter(a=>a?.matches("calcite-action-bar"));t.forEach(a=>a.layout="horizontal"),this.hasActionBar=!!t.length},this.handleHeaderContentSlotChange=e=>{this.hasHeaderContent=u(e)},this.handleFooterSlotChange=e=>{this.hasFooterContent=u(e)},this.handleFooterActionsSlotChange=e=>{this.hasFooterActions=u(e)},this.handleFabSlotChange=e=>{this.hasFab=u(e)},this.setPanelScrollEl=e=>{this.panelScrollEl=e,this.resizeObserver?.disconnect(),e&&(this.resizeObserver?.observe(e),this.resizeHandler())},this.closed=!1,this.disabled=!1,this.closable=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.headingLevel=void 0,this.loading=!1,this.heading=void 0,this.description=void 0,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.hasStartActions=!1,this.hasEndActions=!1,this.hasMenuItems=!1,this.hasHeaderContent=!1,this.hasActionBar=!1,this.hasFooterContent=!1,this.hasFooterActions=!1,this.hasFab=!1,this.defaultMessages=void 0,this.effectiveLocale="",this.showHeaderContent=!1}onMessagesChange(){}connectedCallback(){H(this),F(this),B(this)}async componentWillLoad(){z(this),await L(this)}componentDidLoad(){I(this)}componentDidRender(){M(this)}disconnectedCallback(){P(this),O(this),D(this),this.resizeObserver?.disconnect()}effectiveLocaleChange(){T(this,this.effectiveLocale)}async setFocus(){await R(this),q(this.containerEl)}async scrollContentTo(e){this.panelScrollEl?.scrollTo(e)}renderHeaderContent(){const{heading:e,headingLevel:t,description:a,hasHeaderContent:i}=this,c=e?n(N,{class:o.heading,level:t},e):null,l=a?n("span",{class:o.description},a):null;return!i&&(c||l)?n("div",{class:o.headerContent,key:"header-content"},c,l):null}renderActionBar(){return n("div",{class:o.actionBarContainer,hidden:!this.hasActionBar},n("slot",{name:s.actionBar,onSlotchange:this.handleActionBarSlotChange}))}renderHeaderSlottedContent(){return n("div",{class:o.headerContent,hidden:!this.hasHeaderContent,key:"slotted-header-content"},n("slot",{name:s.headerContent,onSlotchange:this.handleHeaderContentSlotChange}))}renderHeaderStartActions(){const{hasStartActions:e}=this;return n("div",{class:{[o.headerActionsStart]:!0,[o.headerActions]:!0},hidden:!e,key:"header-actions-start"},n("slot",{name:s.headerActionsStart,onSlotchange:this.handleHeaderActionsStartSlotChange}))}renderHeaderActionsEnd(){const{hasEndActions:e,messages:t,closable:a,collapsed:i,collapseDirection:c,collapsible:l,hasMenuItems:r}=this,{collapse:d,expand:f,close:m}=t,b=[C.expand,C.collapse];c==="up"&&b.reverse();const g=l?n("calcite-action",{"aria-expanded":k(!i),"aria-label":d,"data-test":"collapse",icon:i?b[0]:b[1],onClick:this.collapse,text:d,title:i?f:d}):null,v=a?n("calcite-action",{"aria-label":m,"data-test":"close",icon:C.close,onClick:this.close,text:m,title:m}):null,J=n("slot",{name:s.headerActionsEnd,onSlotchange:this.handleHeaderActionsEndSlotChange}),U=e||g||v||r;return n("div",{class:{[o.headerActionsEnd]:!0,[o.headerActions]:!0},hidden:!U,key:"header-actions-end"},J,this.renderMenu(),g,v)}renderMenu(){const{hasMenuItems:e,messages:t,menuOpen:a}=this;return n("calcite-action-menu",{flipPlacements:["top","bottom"],hidden:!e,key:"menu",label:t.options,open:a,placement:"bottom-end"},n("calcite-action",{icon:C.menu,slot:ee.trigger,text:t.options}),n("slot",{name:s.headerMenuActions,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}renderHeaderNode(){const{hasHeaderContent:e,hasStartActions:t,hasEndActions:a,closable:i,collapsible:c,hasMenuItems:l,hasActionBar:r}=this,d=this.renderHeaderContent(),f=e||!!d||t||a||c||i||l;return this.showHeaderContent=f,n("header",{class:o.header,hidden:!(f||r)},n("div",{class:{[o.headerContainer]:!0,[o.headerContainerBorderEnd]:r},hidden:!f},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),d,this.renderHeaderActionsEnd()),this.renderActionBar())}renderFooterNode(){const{hasFooterContent:e,hasFooterActions:t}=this,a=e||t;return n("footer",{class:o.footer,hidden:!a},n("slot",{key:"footer-slot",name:s.footer,onSlotchange:this.handleFooterSlotChange}),n("slot",{key:"footer-actions-slot",name:s.footerActions,onSlotchange:this.handleFooterActionsSlotChange}))}renderContent(){return n("div",{class:o.contentWrapper,hidden:this.collapsible&&this.collapsed,onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},n("slot",null),this.renderFab())}renderFab(){return n("div",{class:o.fabContainer,hidden:!this.hasFab},n("slot",{name:s.fab,onSlotchange:this.handleFabSlotChange}))}render(){const{loading:e,panelKeyDownHandler:t,closed:a,closable:i}=this,c=n("article",{"aria-busy":k(e),class:o.container,hidden:a,onKeyDown:t,tabIndex:i?0:-1,ref:this.setContainerRef},this.renderHeaderNode(),this.renderContent(),this.renderFooterNode());return n(X,null,e?n("calcite-scrim",{loading:e}):null,c)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return te}},[1,"calcite-panel",{closed:[1540],disabled:[516],closable:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],headingLevel:[514,"heading-level"],loading:[516],heading:[1],description:[1],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],hasStartActions:[32],hasEndActions:[32],hasMenuItems:[32],hasHeaderContent:[32],hasActionBar:[32],hasFooterContent:[32],hasFooterActions:[32],hasFab:[32],defaultMessages:[32],effectiveLocale:[32],showHeaderContent:[32],setFocus:[64],scrollContentTo:[64]}]);function K(){if(typeof customElements>"u")return;["calcite-panel","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach(t=>{switch(t){case"calcite-panel":customElements.get(t)||customElements.define(t,ne);break;case"calcite-action":customElements.get(t)||E();break;case"calcite-action-menu":customElements.get(t)||_();break;case"calcite-icon":customElements.get(t)||S();break;case"calcite-loader":customElements.get(t)||w();break;case"calcite-popover":customElements.get(t)||$();break;case"calcite-scrim":customElements.get(t)||j();break}})}K();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.9.2
 */const ae={backButton:"back-button"},x={backLeft:"chevron-left",backRight:"chevron-right"},h={actionBar:"action-bar",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions"},oe=":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end:var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}",W=A(class extends y{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteFlowItemBack=p(this,"calciteFlowItemBack",7),this.calciteFlowItemScroll=p(this,"calciteFlowItemScroll",6),this.calciteFlowItemClose=p(this,"calciteFlowItemClose",6),this.calciteFlowItemToggle=p(this,"calciteFlowItemToggle",6),this.handlePanelScroll=e=>{e.stopPropagation(),this.calciteFlowItemScroll.emit()},this.handlePanelClose=e=>{e.stopPropagation(),this.calciteFlowItemClose.emit()},this.handlePanelToggle=e=>{e.stopPropagation(),this.collapsed=e.target.collapsed,this.calciteFlowItemToggle.emit()},this.backButtonClick=()=>{this.calciteFlowItemBack.emit()},this.setBackRef=e=>{this.backButtonEl=e},this.setContainerRef=e=>{this.containerEl=e},this.closable=!1,this.closed=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.beforeBack=void 0,this.description=void 0,this.disabled=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.showBackButton=!1,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){H(this),F(this),B(this)}async componentWillLoad(){await L(this),z(this)}componentDidRender(){M(this)}disconnectedCallback(){P(this),O(this),D(this)}componentDidLoad(){I(this)}effectiveLocaleChange(){T(this,this.effectiveLocale)}async setFocus(){await R(this);const{backButtonEl:e,containerEl:t}=this;if(e)return e.setFocus();if(t)return t.setFocus()}async scrollContentTo(e){await this.containerEl?.scrollContentTo(e)}renderBackButton(){const{el:e}=this,t=Y(e)==="rtl",{showBackButton:a,backButtonClick:i,messages:c}=this,l=c.back,r=t?x.backRight:x.backLeft;return a?n("calcite-action",{"aria-label":l,class:ae.backButton,icon:r,key:"flow-back-button",onClick:i,scale:"s",slot:"header-actions-start",text:l,title:l,ref:this.setBackRef}):null}render(){const{collapsed:e,collapseDirection:t,collapsible:a,closable:i,closed:c,description:l,disabled:r,heading:d,headingLevel:f,loading:m,menuOpen:b,messages:g}=this;return n(Z,null,n("calcite-panel",{closable:i,closed:c,collapseDirection:t,collapsed:e,collapsible:a,description:l,disabled:r,heading:d,headingLevel:f,loading:m,menuOpen:b,messageOverrides:g,onCalcitePanelClose:this.handlePanelClose,onCalcitePanelScroll:this.handlePanelScroll,onCalcitePanelToggle:this.handlePanelToggle,ref:this.setContainerRef},this.renderBackButton(),n("slot",{name:h.actionBar,slot:s.actionBar}),n("slot",{name:h.headerActionsStart,slot:s.headerActionsStart}),n("slot",{name:h.headerActionsEnd,slot:s.headerActionsEnd}),n("slot",{name:h.headerContent,slot:s.headerContent}),n("slot",{name:h.headerMenuActions,slot:s.headerMenuActions}),n("slot",{name:h.fab,slot:s.fab}),n("slot",{name:h.footerActions,slot:s.footerActions}),n("slot",{name:h.footer,slot:s.footer}),n("slot",null)))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return oe}},[1,"calcite-flow-item",{closable:[516],closed:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],beforeBack:[16],description:[1],disabled:[516],heading:[1],headingLevel:[514,"heading-level"],loading:[516],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],showBackButton:[4,"show-back-button"],defaultMessages:[32],effectiveLocale:[32],setFocus:[64],scrollContentTo:[64]}]);function G(){if(typeof customElements>"u")return;["calcite-flow-item","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-panel","calcite-popover","calcite-scrim"].forEach(t=>{switch(t){case"calcite-flow-item":customElements.get(t)||customElements.define(t,W);break;case"calcite-action":customElements.get(t)||E();break;case"calcite-action-menu":customElements.get(t)||_();break;case"calcite-icon":customElements.get(t)||S();break;case"calcite-loader":customElements.get(t)||w();break;case"calcite-panel":customElements.get(t)||K();break;case"calcite-popover":customElements.get(t)||$();break;case"calcite-scrim":customElements.get(t)||j();break}})}G();const he=W,fe=G;export{he as CalciteFlowItem,fe as defineCustomElement};
