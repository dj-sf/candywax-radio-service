(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7735],{57735:function(t,e,n){"use strict";n.r(e),n.d(e,{NotifyReminderPopup:function(){return l}});var i=n(85893),o=n(55241),s=n(97937),c=n(67294),u=n(18668),r=n.n(u),l=function(t){var e=t.children,n=t.visible,u=t.notificationClicked,l=t.notificationClosed,a=(0,c.useState)(n),p=a[0],d=a[1],f=(0,c.useState)(!1),b=f[0],_=f[1];(0,c.useEffect)((function(){d(n)}),[n]),(0,c.useEffect)((function(){_(!0)}),[]);var m=(0,i.jsx)("div",{className:r().title,children:"Stay updated!"}),x=function(t){t.stopPropagation(),u()},y=(0,i.jsxs)("div",{onClick:x,onKeyDown:x,role:"menuitem",tabIndex:0,children:[(0,i.jsx)("button",{type:"button",className:r().closebutton,onClick:function(t){t.stopPropagation(),d(!1),l()},children:(0,i.jsx)(s.Z,{})}),(0,i.jsxs)("div",{className:r().contentbutton,children:["Click and never miss",(0,i.jsx)("br",{}),"future streams!"]})]});return b&&(0,i.jsx)(o.Z,{placement:"topLeft",defaultVisible:p,visible:p,destroyTooltipOnHide:!0,title:m,content:y,overlayInnerStyle:{borderRadius:"5px",cursor:"pointer",paddingTop:"10px",paddingRight:"10px",fontSize:"16px"},children:e})}},18668:function(t){t.exports={contentbutton:"NotifyReminderPopup_contentbutton__a_tsp",closebutton:"NotifyReminderPopup_closebutton__GVcP3",title:"NotifyReminderPopup_title__Dm9Iy"}}}]);