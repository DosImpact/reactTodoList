(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{14:function(n,e,t){n.exports=t(23)},19:function(n,e,t){},20:function(n,e,t){},23:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(9),c=t.n(i),o=(t(19),t(20),t(5)),u=t(4),d=t(3),l=t(1),p=t(2);function s(){var n=Object(l.a)(["\n  all: unset;\n  width: ",";\n  height: ",";\n  border-radius: 50px;\n  background: #c0c0c0;\n  box-shadow: inset 20px 20px 40px #a3a3a3, inset -20px -20px 40px #dddddd;\n  margin: 20px;\n"]);return s=function(){return n},n}function h(){var n=Object(l.a)(["\n  all: unset;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: #c0c0c0;\n  box-shadow: inset 10px 10px 20px #a3a3a3, inset -10px -10px 20px #dddddd;\n  margin: 0px 5px;\n"]);return h=function(){return n},n}function x(){var n=Object(l.a)(["\n  ","\n  margin: 0px 10px;\n  width: 30vw;\n  height: 50px;\n  border-radius: 50px;\n  background: #c0c0c0;\n  box-shadow: 10px 10px 20px #a3a3a3, -10px -10px 20px #dddddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 300;\n"]);return x=function(){return n},n}function f(){var n=Object(l.a)(["\n  width: 80vw;\n  height: 10vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"]);return f=function(){return n},n}var g=p.a.div(f()),m=p.a.div(x(),(function(n){return n.isComplete?"text-decoration: line-through;":null})),b=p.a.button(h()),v=p.a.input(s(),(function(n){return n.width}),(function(n){return n.height})),w=function(n){var e=n.id,t=n.content,i=n.isComplete,c=(n.createAt,n.updateTodo),o=n.deleteTodo,u=Object(a.useState)(t),l=Object(d.a)(u,2),p=l[0],s=l[1],h=Object(a.useState)(i),x=Object(d.a)(h,2),f=x[0],w=x[1],O=Object(a.useState)(!1),j=Object(d.a)(O,2),E=j[0],k=j[1];return Object(a.useEffect)((function(){console.log(f),c({id:e,isComplete:f})}),[f]),r.a.createElement(g,null,E?r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{width:"30vw",height:"50px",value:p,onChange:function(n){s(n.target.value)}}),r.a.createElement(b,{onClick:function(){return k(!E),void c({id:e,content:p})}},r.a.createElement("span",{role:"img"},"\u2705"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{onClick:function(){w(!f)}},r.a.createElement("span",{role:"img"},"\u2b55")),r.a.createElement(m,{isComplete:f},p),r.a.createElement(b,{onClick:function(){return k(!E)}},r.a.createElement("span",{role:"img"},"\ud83d\udee0")),r.a.createElement(b,{onClick:function(){return o(e)}},r.a.createElement("span",{role:"img"},"\u274c"))))};function O(){var n=Object(l.a)(["\n  all: unset;\n  width: ",";\n  height: ",";\n  border-radius: 50px;\n  background: #c0c0c0;\n  box-shadow: inset 20px 20px 40px #a3a3a3, inset -20px -20px 40px #dddddd;\n  margin: 20px;\n"]);return O=function(){return n},n}function j(){var n=Object(l.a)(["\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n  background: linear-gradient(145deg, #cdcdcd, #adadad);\n  box-shadow: 10px 10px 20px #a3a3a3, -10px -10px 20px #dddddd;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 36px;\n  font-weight: 300;\n  transition: all 0.5s ease-in-out;\n  &:hover {\n    opacity: 0.6;\n    border-radius: 50px;\n    background: linear-gradient(145deg, #adadad, #cdcdcd);\n    box-shadow: 10px 10px 20px #a3a3a3, -10px -10px 20px #dddddd;\n  }\n"]);return j=function(){return n},n}function E(){var n=Object(l.a)(["\n  width: ",";\n  height: ",";\n  border-radius: 50px;\n  background: #c0c0c0;\n  box-shadow: inset 31px 31px 63px #a3a3a3, inset -31px -31px 63px #dddddd;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n"]);return E=function(){return n},n}function k(){var n=Object(l.a)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background-color: #c0c0c0;\n  align-items: center;\n  padding: 30px;\n"]);return k=function(){return n},n}var C=p.a.div(k()),y=p.a.div(E(),(function(n){return n.width}),(function(n){return n.height})),S=p.a.div(j(),(function(n){return n.width}),(function(n){return n.height})),T=p.a.input(O(),(function(n){return n.width}),(function(n){return n.height})),I=function(){var n=A(),e=Object(a.useState)({}),t=Object(d.a)(e,2),i=t[0],c=t[1],l=function(n){var e=Date.now(),t=Object(u.a)({},e,{id:e,content:n,isComplete:!1,createAt:e});c(Object(o.a)({},i,{},t))},p=function(n){var e=n.id,t=n.content,a=void 0===t?null:t,r=n.isComplete,u=void 0===r?null:r,d=i;null!==a&&(d[e].content=a),null!==u&&(d[e].isComplete=u),c(Object(o.a)({},i,{},d))},s=function(n){var e=i;delete e[n],c(Object(o.a)({},e))},h=function(){!function(){var n=localStorage.getItem("TODOLIST");null!==n&&c(JSON.parse(n))}()};return Object(a.useEffect)((function(){return h(),function(){}}),[]),Object(a.useEffect)((function(){localStorage.setItem("TODOLIST",JSON.stringify(i))}),[i]),r.a.createElement(C,null,r.a.createElement(y,{width:"50vw",height:"20vh"},r.a.createElement(S,{width:"100px",height:"100px"},"TO"),r.a.createElement(S,{width:"100px",height:"100px"},"Do"),r.a.createElement(S,{width:"100px",height:"100px"},"LIST")),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l(n.value),n.setValue("")}},r.a.createElement(T,{width:"80vw",height:"100px",value:n.value,onChange:n.onChange,placeholder:"add to do"})),r.a.createElement("div",null,i?Object.values(i).map((function(n,e){return r.a.createElement(w,{key:e,id:n.id,content:n.content,isComplete:n.isComplete,createAt:n.createAt,updateTodo:p,deleteTodo:s})})):null))},A=function(){var n=Object(a.useState)(""),e=Object(d.a)(n,2),t=e[0],r=e[1];return{value:t,onChange:function(n){null!==n.target.value&&r(n.target.value)},setValue:r}};var D=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.5d6ffb31.chunk.js.map