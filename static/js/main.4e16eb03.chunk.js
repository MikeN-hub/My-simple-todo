(this["webpackJsonpsimple-todo"]=this["webpackJsonpsimple-todo"]||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(12),i=n.n(a),j=n(7),r=n(11),o=n(5),d=n(3),b=s.a.createContext(),u=(n(19),n(6)),l=n(13),O=n(2),x=function(){var e=Object(d.f)().state.editingTodo,t=Object(d.g)(),n=Object(c.useContext)(b).editTask,s=Object(c.useState)(e.text),a=Object(o.a)(s,2),i=a[0],j=a[1];return Object(O.jsxs)("div",{className:"Modal",children:[Object(O.jsx)(u.b,{to:"/",children:Object(O.jsx)(l.a,{})}),Object(O.jsxs)("form",{onSubmit:function(c){return function(c){c.preventDefault(),console.log("submited"),n(e.id,i),t("/")}(c)},children:[Object(O.jsx)("input",{type:"text",placeholder:"enter new task",autoFocus:!0,value:i,onChange:function(e){return j(e.target.value)}}),Object(O.jsx)("button",{type:"submit",children:"Save Task"})]})]})},f=function(){return Object(O.jsx)("div",{className:"TopBar",children:Object(O.jsx)("h2",{children:"Mike's Todo"})})},h=function(){var e=Object(c.useContext)(b).addTask,t=Object(c.useState)(""),n=Object(o.a)(t,2),s=n[0],a=n[1];return Object(O.jsx)("div",{className:"AddNewTask",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("input",{type:"text",value:s,onChange:function(e){return a(e.target.value)},onKeyDown:function(t){return function(t){"Enter"===t.key&&(e(s),a(""))}(t)},autoFocus:!0}),Object(O.jsx)("button",{onClick:function(){s?(e(s),a("")):alert("enter task text!")},children:"Add New Task"})]})})},m=n(14),v=function(e){var t=e.todo,n=Object(c.useContext)(b),s=n.removeTask,a=n.toggleTask,i=(n.editTask,Object(c.useRef)(null));return Object(O.jsx)("div",{className:"Task",children:Object(O.jsxs)("div",{className:"task-container",children:[Object(O.jsx)("input",{className:"toggle-task",type:"checkbox",onChange:function(){return a(t.id)}}),Object(O.jsx)("span",{ref:i,className:t.done?"text line-through":"text",children:t.text}),Object(O.jsx)(u.b,{to:"modal",state:{editingTodo:t},children:Object(O.jsx)(m.a,{className:"edit-task",cursor:"pointer",color:"green"})}),Object(O.jsx)("span",{className:"remove-task",onClick:function(){return s(t.id)},children:"\xd7"})]})})},p=function(){var e=Object(c.useContext)(b).data;return Object(O.jsx)("div",{className:"TaskList",children:e.map((function(e){return Object(O.jsx)(v,{todo:e},e.id)}))})},k=function(){return Object(O.jsxs)("div",{className:"Main",children:[Object(O.jsx)(f,{}),Object(O.jsx)(h,{}),Object(O.jsx)(p,{})]})},g=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"\u0422\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"})})},N=function(){return Object(O.jsx)("div",{className:"Header",children:Object(O.jsxs)("div",{className:"menu-wrapper",children:[Object(O.jsx)(u.b,{to:"/",children:"Home"}),Object(O.jsx)(u.b,{to:"/modal",children:"Modal"})]})})},T=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(N,{}),Object(O.jsx)(d.a,{})]})},S="my-react-todo-list";var C=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem(S));e&&s(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem(S,JSON.stringify(n))}),[n]),Object(O.jsx)(b.Provider,{value:{data:n,addTask:function(e){if(e){var t={id:(new Date).toISOString(),text:e,done:!1};s([].concat(Object(r.a)(n),[t]))}},removeTask:function(e){s(Object(r.a)(n.filter((function(t){return t.id!==e}))))},toggleTask:function(e){s(n.map((function(t){return t.id===e?Object(j.a)(Object(j.a)({},t),{},{done:!t.done}):Object(j.a)({},t)})))},editTask:function(e,t){console.log("edited"),s(n.map((function(n){return n.id===e?Object(j.a)(Object(j.a)({},n),{},{text:t}):Object(j.a)({},n)})))}},children:Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(d.d,{children:Object(O.jsxs)(d.b,{path:"/",element:Object(O.jsx)(T,{}),children:[Object(O.jsx)(d.b,{index:!0,element:Object(O.jsx)(k,{})}),Object(O.jsx)(d.b,{path:"modal",element:Object(O.jsx)(x,{})}),Object(O.jsx)(d.b,{path:"*",element:Object(O.jsx)(g,{})})]})})})})};i.a.render(Object(O.jsx)(u.a,{children:Object(O.jsx)(C,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.4e16eb03.chunk.js.map