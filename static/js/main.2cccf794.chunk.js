(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n(6),r=n.n(i),s=n(7),j=n(5),o=n(0),a=function(t){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"todo_style",children:[Object(o.jsx)("i",{className:"fa fa-times","aria-hidden":"true",onClick:function(){t.onSelect(t.id)}}),Object(o.jsx)("li",{children:t.text})]})})},u=function(){var t=Object(c.useState)(""),e=Object(j.a)(t,2),n=e[0],i=e[1],r=Object(c.useState)([]),u=Object(j.a)(r,2),d=u[0],l=u[1],b=function(t){l((function(e){return e.filter((function(e,n){return n!==t}))}))};return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"main_div",children:Object(o.jsxs)("div",{className:"center_div",children:[Object(o.jsx)("br",{}),Object(o.jsx)("h1",{children:"ToDo List"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",placeholder:"Add a item",onChange:function(t){i(t.target.value)},value:n}),Object(o.jsx)("button",{onClick:function(){l((function(t){return[].concat(Object(s.a)(t),[n])})),i("")},children:" + "}),Object(o.jsx)("ol",{children:d.map((function(t,e){return Object(o.jsx)(a,{id:e,text:t,onSelect:b},e)}))})]})})})};n(13);r.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2cccf794.chunk.js.map