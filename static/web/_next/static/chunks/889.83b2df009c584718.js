"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[889],{70889:function(n,e,t){t.r(e),t.d(e,{cmake:function(){return a}});var i=/({)?[a-zA-Z0-9_]+(})?/;function tokenString(n,e){for(var t,i,a=!1;!n.eol()&&(t=n.next())!=e.pending;){if("$"===t&&"\\"!=i&&'"'==e.pending){a=!0;break}i=t}return a&&n.backUp(1),t==e.pending?e.continueString=!1:e.continueString=!0,"string"}let a={name:"cmake",startState:function(){var n={};return n.inDefinition=!1,n.inInclude=!1,n.continueString=!1,n.pending=!1,n},token:function(n,e){var t;return n.eatSpace()?null:"$"===(t=n.next())?n.match(i)?"variableName.special":"variable":e.continueString?(n.backUp(1),tokenString(n,e)):n.match(/(\s+)?\w+\(/)||n.match(/(\s+)?\w+\ \(/)?(n.backUp(1),"def"):"#"==t?(n.skipToEnd(),"comment"):"'"==t||'"'==t?(e.pending=t,tokenString(n,e)):"("==t||")"==t?"bracket":t.match(/[0-9]/)?"number":(n.eatWhile(/[\w-]/),null)}}}}]);