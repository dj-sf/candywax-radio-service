"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3068],{93068:function(e,t,n){n.r(t),n.d(t,{default:function(){return K}});var a=n(87462),r=n(4942),o=n(1413),i=n(97685),c=n(71002),l=n(45987),u=n(67294),s=n(94184),f=n.n(s),d=n(31131),v=n(21770),b=n(82225),m=(0,u.createContext)(null),p=u.forwardRef(function(e,t){var n=e.prefixCls,a=e.className,r=e.style,o=e.id,i=e.active,c=e.tabKey,l=e.children;return u.createElement("div",{id:o&&"".concat(o,"-panel-").concat(c),role:"tabpanel",tabIndex:i?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(c),"aria-hidden":!i,style:r,className:f()(n,i&&"".concat(n,"-active"),a),ref:t},l)}),h=["key","forceRender","style","className"];function TabPanelList(e){var t=e.id,n=e.activeKey,i=e.animated,c=e.tabPosition,s=e.destroyInactiveTabPane,d=u.useContext(m),v=d.prefixCls,y=d.tabs,g=i.tabPane,E="".concat(v,"-tabpane");return u.createElement("div",{className:f()("".concat(v,"-content-holder"))},u.createElement("div",{className:f()("".concat(v,"-content"),"".concat(v,"-content-").concat(c),(0,r.Z)({},"".concat(v,"-content-animated"),g))},y.map(function(e){var r=e.key,c=e.forceRender,d=e.style,v=e.className,m=(0,l.Z)(e,h),y=r===n;return u.createElement(b.default,(0,a.Z)({key:r,visible:y,forceRender:c,removeOnLeave:!!s,leavedClassName:"".concat(E,"-hidden")},i.tabPaneMotion),function(e,n){var i=e.style,c=e.className;return u.createElement(p,(0,a.Z)({},m,{prefixCls:E,id:t,tabKey:r,animated:g,active:y,style:(0,o.Z)((0,o.Z)({},d),i),className:f()(v,c),ref:n}))})})))}var y=n(74902),g=n(48555),E=n(66680),Z=n(75164),k=n(42550),x={width:0,height:0,left:0,top:0};function useSyncState(e,t){var n=u.useRef(e),a=u.useState({}),r=(0,i.Z)(a,2)[1];return[n.current,function(e){var a="function"==typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}var C=n(8410);function useUpdate(e){var t=(0,u.useState)(0),n=(0,i.Z)(t,2),a=n[0],r=n[1],o=(0,u.useRef)(0),c=(0,u.useRef)();return c.current=e,(0,C.o)(function(){var e;null===(e=c.current)||void 0===e||e.call(c)},[a]),function(){o.current===a&&(o.current+=1,r(o.current))}}var T={width:0,height:0,left:0,top:0,right:0};function stringify(e){var t;return e instanceof Map?(t={},e.forEach(function(e,n){t[n]=e})):t=e,JSON.stringify(t)}function genDataNodeKey(e){return String(e).replace(/"/g,"TABS_DQ")}var N=u.forwardRef(function(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,o=e.style;return a&&!1!==a.showAdd?u.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:o,"aria-label":(null==r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}),w=u.forwardRef(function(e,t){var n,a=e.position,r=e.prefixCls,o=e.extra;if(!o)return null;var i={};return"object"!==(0,c.Z)(o)||u.isValidElement(o)?i.right=o:i=o,"right"===a&&(n=i.right),"left"===a&&(n=i.left),n?u.createElement("div",{className:"".concat(r,"-extra-content"),ref:t},n):null}),S=n(60057),P=n(97868),I=n(15105),R=u.memo(u.forwardRef(function(e,t){var n=e.prefixCls,a=e.id,o=e.tabs,c=e.locale,l=e.mobile,s=e.moreIcon,d=void 0===s?"More":s,v=e.moreTransitionName,b=e.style,m=e.className,p=e.editable,h=e.tabBarGutter,y=e.rtl,g=e.removeAriaLabel,E=e.onTabClick,Z=e.getPopupContainer,k=e.popupClassName,x=(0,u.useState)(!1),C=(0,i.Z)(x,2),T=C[0],w=C[1],R=(0,u.useState)(null),M=(0,i.Z)(R,2),L=M[0],B=M[1],D="".concat(a,"-more-popup"),A="".concat(n,"-dropdown"),K=null!==L?"".concat(D,"-").concat(L):null,z=null==c?void 0:c.dropdownAriaLabel,_=u.createElement(P.default,{onClick:function(e){E(e.key,e.domEvent),w(!1)},prefixCls:"".concat(A,"-menu"),id:D,tabIndex:-1,role:"listbox","aria-activedescendant":K,selectedKeys:[L],"aria-label":void 0!==z?z:"expanded dropdown"},o.map(function(e){var t=p&&!1!==e.closable&&!e.disabled;return u.createElement(P.MenuItem,{key:e.key,id:"".concat(D,"-").concat(e.key),role:"option","aria-controls":a&&"".concat(a,"-panel-").concat(e.key),disabled:e.disabled},u.createElement("span",null,e.label),t&&u.createElement("button",{type:"button","aria-label":g||"remove",tabIndex:0,className:"".concat(A,"-menu-item-remove"),onClick:function(t){var n;t.stopPropagation(),n=e.key,t.preventDefault(),t.stopPropagation(),p.onEdit("remove",{key:n,event:t})}},e.closeIcon||p.removeIcon||"\xd7"))}));function selectOffset(e){for(var t=o.filter(function(e){return!e.disabled}),n=t.findIndex(function(e){return e.key===L})||0,a=t.length,r=0;r<a;r+=1){var i=t[n=(n+e+a)%a];if(!i.disabled){B(i.key);return}}}(0,u.useEffect)(function(){var e=document.getElementById(K);e&&e.scrollIntoView&&e.scrollIntoView(!1)},[L]),(0,u.useEffect)(function(){T||B(null)},[T]);var V=(0,r.Z)({},y?"marginRight":"marginLeft",h);o.length||(V.visibility="hidden",V.order=1);var W=f()((0,r.Z)({},"".concat(A,"-rtl"),y)),U=l?null:u.createElement(S.default,{prefixCls:A,overlay:_,trigger:["hover"],visible:!!o.length&&T,transitionName:v,onVisibleChange:w,overlayClassName:f()(W,k),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:Z},u.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:V,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":D,id:"".concat(a,"-more"),"aria-expanded":T,onKeyDown:function(e){var t=e.which;if(!T){[I.Z.DOWN,I.Z.SPACE,I.Z.ENTER].includes(t)&&(w(!0),e.preventDefault());return}switch(t){case I.Z.UP:selectOffset(-1),e.preventDefault();break;case I.Z.DOWN:selectOffset(1),e.preventDefault();break;case I.Z.ESC:w(!1);break;case I.Z.SPACE:case I.Z.ENTER:null!==L&&E(L,e)}}},d));return u.createElement("div",{className:f()("".concat(n,"-nav-operations"),m),style:b,ref:t},U,u.createElement(N,{prefixCls:n,locale:c,editable:p}))}),function(e,t){return t.tabMoving}),TabNavList_TabNode=function(e){var t,n=e.prefixCls,a=e.id,o=e.active,i=e.tab,c=i.key,l=i.label,s=i.disabled,d=i.closeIcon,v=e.closable,b=e.renderWrapper,m=e.removeAriaLabel,p=e.editable,h=e.onClick,y=e.onFocus,g=e.style,E="".concat(n,"-tab"),Z=p&&!1!==v&&!s;function onInternalClick(e){s||h(e)}var k=u.createElement("div",{key:c,"data-node-key":genDataNodeKey(c),className:f()(E,(t={},(0,r.Z)(t,"".concat(E,"-with-remove"),Z),(0,r.Z)(t,"".concat(E,"-active"),o),(0,r.Z)(t,"".concat(E,"-disabled"),s),t)),style:g,onClick:onInternalClick},u.createElement("div",{role:"tab","aria-selected":o,id:a&&"".concat(a,"-tab-").concat(c),className:"".concat(E,"-btn"),"aria-controls":a&&"".concat(a,"-panel-").concat(c),"aria-disabled":s,tabIndex:s?null:0,onClick:function(e){e.stopPropagation(),onInternalClick(e)},onKeyDown:function(e){[I.Z.SPACE,I.Z.ENTER].includes(e.which)&&(e.preventDefault(),onInternalClick(e))},onFocus:y},l),Z&&u.createElement("button",{type:"button","aria-label":m||"remove",tabIndex:0,className:"".concat(E,"-remove"),onClick:function(e){e.stopPropagation(),e.preventDefault(),e.stopPropagation(),p.onEdit("remove",{key:c,event:e})}},d||p.removeIcon||"\xd7"));return b?b(k):k},getSize=function(e){var t=e.current||{},n=t.offsetWidth,a=t.offsetHeight;return[void 0===n?0:n,void 0===a?0:a]},getUnitValue=function(e,t){return e[t?0:1]},M=u.forwardRef(function(e,t){var n,c,l,s,d,v,b,p,h,C,S,P,I,M,L,B,D,A,K,z,_,V,W,U,j,O,G,F,X,Y,H,q,J,Q,$,ee,et,en,ea,er,eo=u.useContext(m),ei=eo.prefixCls,ec=eo.tabs,el=e.className,eu=e.style,es=e.id,ef=e.animated,ed=e.activeKey,ev=e.rtl,eb=e.extra,em=e.editable,ep=e.locale,eh=e.tabPosition,ey=e.tabBarGutter,eg=e.children,eE=e.onTabClick,eZ=e.onTabScroll,ek=(0,u.useRef)(),ex=(0,u.useRef)(),eC=(0,u.useRef)(),eT=(0,u.useRef)(),eN=(0,u.useRef)(),ew=(0,u.useRef)(),eS=(0,u.useRef)(),eP="top"===eh||"bottom"===eh,eI=useSyncState(0,function(e,t){eP&&eZ&&eZ({direction:e>t?"left":"right"})}),eR=(0,i.Z)(eI,2),eM=eR[0],eL=eR[1],eB=useSyncState(0,function(e,t){!eP&&eZ&&eZ({direction:e>t?"top":"bottom"})}),eD=(0,i.Z)(eB,2),eA=eD[0],eK=eD[1],ez=(0,u.useState)([0,0]),e_=(0,i.Z)(ez,2),eV=e_[0],eW=e_[1],eU=(0,u.useState)([0,0]),ej=(0,i.Z)(eU,2),eO=ej[0],eG=ej[1],eF=(0,u.useState)([0,0]),eX=(0,i.Z)(eF,2),eY=eX[0],eH=eX[1],eq=(0,u.useState)([0,0]),eJ=(0,i.Z)(eq,2),eQ=eJ[0],e$=eJ[1],e0=(n=new Map,c=(0,u.useRef)([]),l=(0,u.useState)({}),s=(0,i.Z)(l,2)[1],d=(0,u.useRef)("function"==typeof n?n():n),v=useUpdate(function(){var e=d.current;c.current.forEach(function(t){e=t(e)}),c.current=[],d.current=e,s({})}),[d.current,function(e){c.current.push(e),v()}]),e1=(0,i.Z)(e0,2),e2=e1[0],e4=e1[1],e7=(b=eO[0],(0,u.useMemo)(function(){for(var e=new Map,t=e2.get(null===(r=ec[0])||void 0===r?void 0:r.key)||x,n=t.left+t.width,a=0;a<ec.length;a+=1){var r,i,c=ec[a].key,l=e2.get(c);l||(l=e2.get(null===(i=ec[a-1])||void 0===i?void 0:i.key)||x);var u=e.get(c)||(0,o.Z)({},l);u.right=n-u.left-u.width,e.set(c,u)}return e},[ec.map(function(e){return e.key}).join("_"),e2,b])),e6=getUnitValue(eV,eP),e8=getUnitValue(eO,eP),e5=getUnitValue(eY,eP),e9=getUnitValue(eQ,eP),e3=e6<e8+e5,te=e3?e6-e9:e6-e5,tt="".concat(ei,"-nav-operations-hidden"),tn=0,ta=0;function alignInRange(e){return e<tn?tn:e>ta?ta:e}eP&&ev?(tn=0,ta=Math.max(0,e8-te)):(tn=Math.min(0,te-e8),ta=0);var tr=(0,u.useRef)(),to=(0,u.useState)(),ti=(0,i.Z)(to,2),tc=ti[0],tl=ti[1];function doLockAnimation(){tl(Date.now())}function clearTouchMoving(){window.clearTimeout(tr.current)}p=function(e,t){function doMove(e,t){e(function(e){return alignInRange(e+t)})}return!!e3&&(eP?doMove(eL,e):doMove(eK,t),clearTouchMoving(),doLockAnimation(),!0)},h=(0,u.useState)(),S=(C=(0,i.Z)(h,2))[0],P=C[1],I=(0,u.useState)(0),L=(M=(0,i.Z)(I,2))[0],B=M[1],D=(0,u.useState)(0),K=(A=(0,i.Z)(D,2))[0],z=A[1],_=(0,u.useState)(),W=(V=(0,i.Z)(_,2))[0],U=V[1],j=(0,u.useRef)(),O=(0,u.useRef)(),(G=(0,u.useRef)(null)).current={onTouchStart:function(e){var t=e.touches[0];P({x:t.screenX,y:t.screenY}),window.clearInterval(j.current)},onTouchMove:function(e){if(S){e.preventDefault();var t=e.touches[0],n=t.screenX,a=t.screenY;P({x:n,y:a});var r=n-S.x,o=a-S.y;p(r,o);var i=Date.now();B(i),z(i-L),U({x:r,y:o})}},onTouchEnd:function(){if(S&&(P(null),U(null),W)){var e=W.x/K,t=W.y/K;if(!(.1>Math.max(Math.abs(e),Math.abs(t)))){var n=e,a=t;j.current=window.setInterval(function(){if(.01>Math.abs(n)&&.01>Math.abs(a)){window.clearInterval(j.current);return}n*=.9046104802746175,a*=.9046104802746175,p(20*n,20*a)},20)}}},onWheel:function(e){var t=e.deltaX,n=e.deltaY,a=0,r=Math.abs(t),o=Math.abs(n);r===o?a="x"===O.current?t:n:r>o?(a=t,O.current="x"):(a=n,O.current="y"),p(-a,-a)&&e.preventDefault()}},u.useEffect(function(){function onProxyTouchMove(e){G.current.onTouchMove(e)}function onProxyTouchEnd(e){G.current.onTouchEnd(e)}return document.addEventListener("touchmove",onProxyTouchMove,{passive:!1}),document.addEventListener("touchend",onProxyTouchEnd,{passive:!1}),eT.current.addEventListener("touchstart",function(e){G.current.onTouchStart(e)},{passive:!1}),eT.current.addEventListener("wheel",function(e){G.current.onWheel(e)}),function(){document.removeEventListener("touchmove",onProxyTouchMove),document.removeEventListener("touchend",onProxyTouchEnd)}},[]),(0,u.useEffect)(function(){return clearTouchMoving(),tc&&(tr.current=window.setTimeout(function(){tl(0)},100)),clearTouchMoving},[tc]);var tu=(F=eP?eM:eA,J=(X=(0,o.Z)((0,o.Z)({},e),{},{tabs:ec})).tabs,Q=X.tabPosition,$=X.rtl,["top","bottom"].includes(Q)?(Y="width",H=$?"right":"left",q=Math.abs(F)):(Y="height",H="top",q=-F),(0,u.useMemo)(function(){if(!J.length)return[0,0];for(var e=J.length,t=e,n=0;n<e;n+=1){var a=e7.get(J[n].key)||T;if(a[H]+a[Y]>q+te){t=n-1;break}}for(var r=0,o=e-1;o>=0;o-=1)if((e7.get(J[o].key)||T)[H]<q){r=o+1;break}return[r,t]},[e7,te,e8,e5,e9,q,Q,J.map(function(e){return e.key}).join("_"),$])),ts=(0,i.Z)(tu,2),tf=ts[0],td=ts[1],tv=(0,E.Z)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ed,t=e7.get(e)||{width:0,height:0,left:0,right:0,top:0};if(eP){var n=eM;ev?t.right<eM?n=t.right:t.right+t.width>eM+te&&(n=t.right+t.width-te):t.left<-eM?n=-t.left:t.left+t.width>-eM+te&&(n=-(t.left+t.width-te)),eK(0),eL(alignInRange(n))}else{var a=eA;t.top<-eA?a=-t.top:t.top+t.height>-eA+te&&(a=-(t.top+t.height-te)),eL(0),eK(alignInRange(a))}}),tb={};"top"===eh||"bottom"===eh?tb[ev?"marginRight":"marginLeft"]=ey:tb.marginTop=ey;var tm=ec.map(function(e,t){var n=e.key;return u.createElement(TabNavList_TabNode,{id:es,prefixCls:ei,key:n,tab:e,style:0===t?void 0:tb,closable:e.closable,editable:em,active:n===ed,renderWrapper:eg,removeAriaLabel:null==ep?void 0:ep.removeAriaLabel,onClick:function(e){eE(n,e)},onFocus:function(){tv(n),doLockAnimation(),eT.current&&(ev||(eT.current.scrollLeft=0),eT.current.scrollTop=0)}})}),updateTabSizes=function(){return e4(function(){var e=new Map;return ec.forEach(function(t){var n,a=t.key,r=null===(n=eN.current)||void 0===n?void 0:n.querySelector('[data-node-key="'.concat(genDataNodeKey(a),'"]'));r&&e.set(a,{width:r.offsetWidth,height:r.offsetHeight,left:r.offsetLeft,top:r.offsetTop})}),e})};(0,u.useEffect)(function(){updateTabSizes()},[ec.map(function(e){return e.key}).join("_")]);var tp=useUpdate(function(){var e=getSize(ek),t=getSize(ex),n=getSize(eC);eW([e[0]-t[0]-n[0],e[1]-t[1]-n[1]]);var a=getSize(eS);eH(a),e$(getSize(ew));var r=getSize(eN);eG([r[0]-a[0],r[1]-a[1]]),updateTabSizes()}),th=ec.slice(0,tf),ty=ec.slice(td+1),tg=[].concat((0,y.Z)(th),(0,y.Z)(ty)),tE=(0,u.useState)(),tZ=(0,i.Z)(tE,2),tk=tZ[0],tx=tZ[1],tC=e7.get(ed),tT=(0,u.useRef)();function cleanInkBarRaf(){Z.Z.cancel(tT.current)}(0,u.useEffect)(function(){var e={};return tC&&(eP?(ev?e.right=tC.right:e.left=tC.left,e.width=tC.width):(e.top=tC.top,e.height=tC.height)),cleanInkBarRaf(),tT.current=(0,Z.Z)(function(){tx(e)}),cleanInkBarRaf},[tC,eP,ev]),(0,u.useEffect)(function(){tv()},[ed,tn,ta,stringify(tC),stringify(e7),eP]),(0,u.useEffect)(function(){tp()},[ev]);var tN=!!tg.length,tw="".concat(ei,"-nav-wrap");return eP?ev?(en=eM>0,et=eM!==ta):(et=eM<0,en=eM!==tn):(ea=eA<0,er=eA!==tn),u.createElement(g.default,{onResize:tp},u.createElement("div",{ref:(0,k.x1)(t,ek),role:"tablist",className:f()("".concat(ei,"-nav"),el),style:eu,onKeyDown:function(){doLockAnimation()}},u.createElement(w,{ref:ex,position:"left",extra:eb,prefixCls:ei}),u.createElement("div",{className:f()(tw,(ee={},(0,r.Z)(ee,"".concat(tw,"-ping-left"),et),(0,r.Z)(ee,"".concat(tw,"-ping-right"),en),(0,r.Z)(ee,"".concat(tw,"-ping-top"),ea),(0,r.Z)(ee,"".concat(tw,"-ping-bottom"),er),ee)),ref:eT},u.createElement(g.default,{onResize:tp},u.createElement("div",{ref:eN,className:"".concat(ei,"-nav-list"),style:{transform:"translate(".concat(eM,"px, ").concat(eA,"px)"),transition:tc?"none":void 0}},tm,u.createElement(N,{ref:eS,prefixCls:ei,locale:ep,editable:em,style:(0,o.Z)((0,o.Z)({},0===tm.length?void 0:tb),{},{visibility:tN?"hidden":null})}),u.createElement("div",{className:f()("".concat(ei,"-ink-bar"),(0,r.Z)({},"".concat(ei,"-ink-bar-animated"),ef.inkBar)),style:tk})))),u.createElement(R,(0,a.Z)({},e,{removeAriaLabel:null==ep?void 0:ep.removeAriaLabel,ref:ew,prefixCls:ei,tabs:tg,className:!tN&&tt,tabMoving:!!tc})),u.createElement(w,{ref:eC,position:"right",extra:eb,prefixCls:ei})))}),L=["renderTabBar"],B=["label","key"];function TabNavListWrapper(e){var t=e.renderTabBar,n=(0,l.Z)(e,L),r=u.useContext(m).tabs;return t?t((0,o.Z)((0,o.Z)({},n),{},{panes:r.map(function(e){var t=e.label,n=e.key,r=(0,l.Z)(e,B);return u.createElement(p,(0,a.Z)({tab:t,key:n,tabKey:n},r))})}),M):u.createElement(M,n)}n(80334);var D=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],A=0,K=u.forwardRef(function(e,t){var n,s,b=e.id,p=e.prefixCls,h=void 0===p?"rc-tabs":p,y=e.className,g=e.items,E=e.direction,Z=e.activeKey,k=e.defaultActiveKey,x=e.editable,C=e.animated,T=e.tabPosition,N=void 0===T?"top":T,w=e.tabBarGutter,S=e.tabBarStyle,P=e.tabBarExtraContent,I=e.locale,R=e.moreIcon,M=e.moreTransitionName,L=e.destroyInactiveTabPane,B=e.renderTabBar,K=e.onChange,z=e.onTabClick,_=e.onTabScroll,V=e.getPopupContainer,W=e.popupClassName,U=(0,l.Z)(e,D),j=u.useMemo(function(){return(g||[]).filter(function(e){return e&&"object"===(0,c.Z)(e)&&"key"in e})},[g]),O="rtl"===E,G=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inkBar:!0,tabPane:!1};return(e=!1===t?{inkBar:!1,tabPane:!1}:!0===t?{inkBar:!0,tabPane:!1}:(0,o.Z)({inkBar:!0},"object"===(0,c.Z)(t)?t:{})).tabPaneMotion&&void 0===e.tabPane&&(e.tabPane=!0),!e.tabPaneMotion&&e.tabPane&&(e.tabPane=!1),e}(C),F=(0,u.useState)(!1),X=(0,i.Z)(F,2),Y=X[0],H=X[1];(0,u.useEffect)(function(){H((0,d.Z)())},[]);var q=(0,v.Z)(function(){var e;return null===(e=j[0])||void 0===e?void 0:e.key},{value:Z,defaultValue:k}),J=(0,i.Z)(q,2),Q=J[0],$=J[1],ee=(0,u.useState)(function(){return j.findIndex(function(e){return e.key===Q})}),et=(0,i.Z)(ee,2),en=et[0],ea=et[1];(0,u.useEffect)(function(){var e,t=j.findIndex(function(e){return e.key===Q});-1===t&&(t=Math.max(0,Math.min(en,j.length-1)),$(null===(e=j[t])||void 0===e?void 0:e.key)),ea(t)},[j.map(function(e){return e.key}).join("_"),Q,en]);var er=(0,v.Z)(null,{value:b}),eo=(0,i.Z)(er,2),ei=eo[0],ec=eo[1];(0,u.useEffect)(function(){b||(ec("rc-tabs-".concat(A)),A+=1)},[]);var el={id:ei,activeKey:Q,animated:G,tabPosition:N,rtl:O,mobile:Y},eu=(0,o.Z)((0,o.Z)({},el),{},{editable:x,locale:I,moreIcon:R,moreTransitionName:M,tabBarGutter:w,onTabClick:function(e,t){null==z||z(e,t);var n=e!==Q;$(e),n&&(null==K||K(e))},onTabScroll:_,extra:P,style:S,panes:null,getPopupContainer:V,popupClassName:W});return u.createElement(m.Provider,{value:{tabs:j,prefixCls:h}},u.createElement("div",(0,a.Z)({ref:t,id:b,className:f()(h,"".concat(h,"-").concat(N),(n={},(0,r.Z)(n,"".concat(h,"-mobile"),Y),(0,r.Z)(n,"".concat(h,"-editable"),x),(0,r.Z)(n,"".concat(h,"-rtl"),O),n),y)},U),s,u.createElement(TabNavListWrapper,(0,a.Z)({},eu,{renderTabBar:B})),u.createElement(TabPanelList,(0,a.Z)({destroyInactiveTabPane:L},el,{animated:G}))))})}}]);