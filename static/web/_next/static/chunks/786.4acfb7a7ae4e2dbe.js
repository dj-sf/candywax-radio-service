"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[786],{30786:function(e,t,n){n.r(t),n.d(t,{EmojiPicker:function(){return i}});var r=n(47568),u=n(70655),c=n(85893),o=n(67294),s=n(57741),i=function(e){var t=(0,o.useState)([]),n=t[0],i=t[1],a=e.onEmojiSelect,f=e.onCustomEmojiSelect,l=(0,o.useRef)(),m=function(){var e=(0,r.Z)((function(){var e,t;return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),[4,fetch("/api/emoji")];case 1:return[4,n.sent().json()];case 2:return e=n.sent(),i(e),[3,4];case 3:return t=n.sent(),console.error("cannot fetch custom emoji",t),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){m()}),[]),(0,o.useEffect)((function(){var e=n.map((function(e){return{emoji:e.name,label:e.name,url:e.url}}));(0,s.wU)({rootElement:l.current,custom:e,initialCategory:"custom",showPreview:!1,showRecents:!0}).addEventListener("emoji:select",(function(e){e.url?f(e):a(e)}))}),[n]),(0,c.jsx)("div",{ref:l})}}}]);