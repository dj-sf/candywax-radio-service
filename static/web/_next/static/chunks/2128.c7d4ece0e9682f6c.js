(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2128],{62128:function(e,t,o){"use strict";o.r(t),o.d(t,{NotifyReminderPopup:function(){return NotifyReminderPopup}});var n=o(85893),r=o(67294),i=o(5152),s=o.n(i),c=o(51513),p=o.n(c),l=o(13978),a=o.n(l);let Popover=e=>{let{open:t,title:o,content:r,children:i}=e;return(0,n.jsxs)("div",{style:{width:"max-content",height:"max-content"},children:[t&&(0,n.jsx)("div",{className:a().anchor,children:(0,n.jsxs)("div",{className:a().popover,children:[(0,n.jsx)("div",{className:a().title,children:o}),(0,n.jsx)("hr",{style:{color:"var(--color-owncast-palette-4)"}}),(0,n.jsx)("div",{className:a().content,children:r})]})}),i]})},u=s()(()=>Promise.resolve().then(o.t.bind(o,40753,23)),{loadableGenerated:{webpack:()=>[40753]},ssr:!1}),NotifyReminderPopup=e=>{let{children:t,open:o,notificationClicked:i,notificationClosed:s}=e,[c,l]=(0,r.useState)(o),[a,d]=(0,r.useState)(!1);(0,r.useEffect)(()=>{l(o)},[o]),(0,r.useEffect)(()=>{d(!0)},[]);let _=(0,n.jsx)("div",{className:p().title,children:"Stay updated!"}),popupClicked=e=>{e.stopPropagation(),i()},m=(0,n.jsxs)("div",{onClick:popupClicked,onKeyDown:popupClicked,role:"menuitem",tabIndex:0,children:[(0,n.jsx)("button",{type:"button",className:p().closebutton,onClick:e=>{e.stopPropagation(),l(!1),s()},children:(0,n.jsx)(u,{})}),(0,n.jsx)("div",{className:p().contentbutton,children:"Click and never miss future streams!"})]});return a&&(0,n.jsx)(Popover,{open:c,title:_,content:m,children:t})}},51513:function(e){e.exports={popupBackgroundColor:"var(--theme-color-components-primary-button-background)",contentbutton:"NotifyReminderPopup_contentbutton___iqOh",closebutton:"NotifyReminderPopup_closebutton__dpvj4",title:"NotifyReminderPopup_title__imysF"}},13978:function(e){e.exports={anchor:"Popover_anchor__GI7l_",popover:"Popover_popover__pMNs7",title:"Popover_title__T__E6",content:"Popover_content__7gDLm"}}}]);