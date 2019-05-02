(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,n){},48:function(e,t,n){e.exports=n(95)},58:function(e,t,n){},79:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},9:function(e,t){e.exports={baseUrl:"https://react-tasker-api.herokuapp.com"}},90:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),c=n.n(o),i=n(3),l=n(16),s=n(38),u=n(18),m=n(5),d="LOGIN_FAILED",p={text:"",list:[],done:[],isAuthenticated:!1,user:null,token:localStorage.getItem("token"),isLogged:!1,msg:"",errData:null},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_USER":return function(e,t){return Object(m.a)({},e,{isAuthenticated:!0,user:t.user,token:localStorage.getItem("token")})}(e,t);case"LOGIN_USER":case"SIGNUP_USER":return function(e,t){return localStorage.setItem("token",t.token),localStorage.setItem("id",t.user.id),Object(m.a)({},e,{isAuthenticated:!0,user:t.user,isLogged:!0,token:t.token,errData:null})}(e,t);case"LOGOUT_USER":return function(e,t){return localStorage.removeItem("token"),localStorage.removeItem("id"),Object(m.a)({},e,{isAuthenticated:!1,user:null,token:null,isLogged:!1})}(e);case d:return function(e,t){return Object(m.a)({},e,{isAuthenticated:!1,token:null,user:null,isLogged:!1,errData:t.errData})}(e,t);case"CLEAR_ERRORS":return function(e,t){return Object(m.a)({},e,{errData:null})}(e);case"UPDATE_INITIAL_STATE":return function(e,t){var n=t.todoList,a=t.doneList;return Object(m.a)({},e,{list:[].concat(Object(u.a)(e.list),Object(u.a)(n)),done:[].concat(Object(u.a)(e.done),Object(u.a)(a))})}(e,t);case"INPUT_CHANGE":return function(e,t){return Object(m.a)({},e,{text:t.text})}(e,t);case"ADD_TO_LIST":return function(e,t){return Object(m.a)({},e,{list:[].concat(Object(u.a)(e.list),[t.newItem])})}(e,t);case"DELETE_FROM_LIST":return function(e,t){var n=e.list.filter(function(e){return e._id!==t.itemToDel._id});return Object(m.a)({},e,{list:n})}(e,t);case"ADD_TO_DONE":return function(e,t){var n=e.list.filter(function(e){return e.name!==t.doneItem.item.name}),a=[].concat(Object(u.a)(e.done),[t.doneItem.item]);return Object(m.a)({},e,{list:n,done:a})}(e,t);case"DELETE_FROM_DONE":return function(e,t){var n=e.done.filter(function(e){return e._id!==t.itemToDel._id});return Object(m.a)({},e,{done:n})}(e,t);default:return e}},_=n(39),E=n(40),v=n(45),b=n(41),g=n(46),O=n(13),h=(n(58),n(1)),N=n.n(h),D=n(7),k=n(8),j=n.n(k),w=n(9),L=function(){return function(){var e=Object(D.a)(N.a.mark(function e(t,n){var a;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get(w.baseUrl);case 2:a=e.sent,t({type:"UPDATE_INITIAL_STATE",todoList:a.data.list,doneList:a.data.done});case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},S=function(e){var t=e().app.token,n={headers:{"Content-Type":"application/json"}};return t&&(n.headers["x-auth-token"]=t),n},y=n(12),I=n(97),x=n(15);n(79);var T=Object(x.d)(Object(i.b)(function(e){return{isLogged:e.app.isLogged}},function(e){return{onLogoutUser:function(){return e({type:"LOGOUT_USER"})}}})(function(e){return r.a.createElement(O.b,{onClick:function(){!function(){if(!e.openModal)return null;e.openModal(!0)}(),e.loggingOut&&(e.onLogoutUser(),e.history.push("/"))},className:"nav-item",activeClassName:"active-nav-item",to:e.linkTo},r.a.createElement("span",{className:"nav-text-span"},e.children))}));n(87),n(88);var C=Object(x.d)(Object(i.b)(function(e){return{isLogged:e.app.isLogged,errData:e.app.errData}},function(e){return{onLoginUser:function(t){return e(function(e){var t=e.email,n=e.password;return function(){var e=Object(D.a)(N.a.mark(function e(a){var r,o,c;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={email:t,password:n},o={headers:{"Content-Type":"application/json"}},e.prev=3,e.next=6,j.a.post("".concat(w.baseUrl,"/auth/login"),r,o);case 6:(c=e.sent).data.token&&a({type:"LOGIN_USER",user:c.data.user,token:c.data.token}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),a({type:d,errData:e.t0.response.data});case 13:case"end":return e.stop()}},e,null,[[3,10]])}));return function(t){return e.apply(this,arguments)}}()}(t))},onClearErrors:function(){return e({type:"CLEAR_ERRORS"})}}})(function(e){var t=Object(a.useState)(""),n=Object(y.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(""),l=Object(y.a)(i,2),s=l[0],u=l[1];Object(a.useEffect)(function(){e.closeSignupModal(!1)});Object(a.useEffect)(function(){e.isLogged&&(e.openModal(!1),e.history.push("/"),e.onClearErrors())},[e]);var m=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.errData;if(n){if(n.errData){var a=n.errData.filter(function(e){return e.param===t});return a[0]?a[0].msg:null}if("password"===t)return n?n.msg:null}};return r.a.createElement("div",{className:"modals-wrapper"},r.a.createElement("div",{className:"modal-container"},r.a.createElement("div",{onClick:function(){e.openModal(!1),e.history.push("/"),e.onClearErrors()},className:"modal-container__close"}),r.a.createElement("form",{className:"modal-container__form"},r.a.createElement("div",{className:"modal-container__form__email-container"},r.a.createElement("label",{className:"modal-container__form__email-container--email-label",htmlFor:"email"},"Email"),e.errData?r.a.createElement("p",{className:"error-msg-field"},m("email")):null,r.a.createElement("input",{onChange:function(e){return c(e.target.value)},value:o,id:"email",className:"modal-container__form__email-container--email-input",type:"email",placeholder:"Email",required:!0})),r.a.createElement("div",{className:"modal-container__form__password-container"},r.a.createElement("label",{className:"modal-container__form__password-container--password-label",htmlFor:"password"},"Password"),e.errData?r.a.createElement("p",{className:"error-msg-field"},m("password")):null,r.a.createElement("input",{onChange:function(e){return u(e.target.value)},value:s,id:"password",className:"modal-container__form__password-container--password-input",type:"password",placeholder:"Password",required:!0})),r.a.createElement("button",{type:"submit",onClick:function(t){t.preventDefault();var n={email:o,password:s};e.onLoginUser(n)},className:"modal-container__form__login-button"},"Login"))))})),A=(n(89),Object(x.d)(Object(i.b)(function(e){return{isLogged:e.app.isLogged,errData:e.app.errData}},function(e){return{onSignupUser:function(t){return e(function(e){var t=e.name,n=e.email,a=e.password;return function(){var e=Object(D.a)(N.a.mark(function e(r){var o,c,i;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o={name:t,email:n,password:a},c={headers:{"Content-Type":"application/json"}},e.prev=3,e.next=6,j.a.post("".concat(w.baseUrl,"/auth/signup"),o,c);case 6:(i=e.sent).data.token&&r({type:"SIGNUP_USER",user:i.data.user,token:i.data.token}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),r({type:d,errData:e.t0.response.data});case 13:case"end":return e.stop()}},e,null,[[3,10]])}));return function(t){return e.apply(this,arguments)}}()}(t))},onClearErrors:function(){return e({type:"CLEAR_ERRORS"})}}})(function(e){var t=Object(a.useState)(""),n=Object(y.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(""),l=Object(y.a)(i,2),s=l[0],u=l[1],m=Object(a.useState)(""),d=Object(y.a)(m,2),p=d[0],f=d[1];Object(a.useEffect)(function(){e.closeLoginModal(!1)});Object(a.useEffect)(function(){e.isLogged&&(e.openModal(!1),e.history.push("/"),e.onClearErrors())},[e]);var _=function(t){return e.errData?r.a.createElement("p",{className:"error-msg-field"},function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.errData;if(n){if(n.errData){var a=n.errData.filter(function(e){return e.param===t});return a[0]?a[0].msg:null}if("password"===t)return n?n.msg:null}}(t)):null};return r.a.createElement("div",{className:"modals-wrapper"},r.a.createElement("div",{className:"modal-container"},r.a.createElement("div",{className:"modal-container__close",onClick:function(){e.openModal(!1),e.history.push("/"),e.onClearErrors()}}),r.a.createElement("form",{className:"modal-container__form"},r.a.createElement("div",{className:"modal-container__form__name-container"},r.a.createElement("label",{className:"modal-container__form__name-container--name-label",htmlFor:"name"},"Name"),_("name"),r.a.createElement("input",{onChange:function(e){return c(e.target.value)},value:o,id:"name",className:"modal-container__form__name-container--name-input",type:"text",placeholder:"Name",required:!0})),r.a.createElement("div",{className:"modal-container__form__email-container"},r.a.createElement("label",{className:"modal-container__form__email-container--email-label",htmlFor:"email"},"Email"),_("email"),r.a.createElement("input",{onChange:function(e){return u(e.target.value)},value:s,id:"email",className:"modal-container__form__email-container--email-input",type:"email",placeholder:"Email",required:!0})),r.a.createElement("div",{className:"modal-container__form__password-container"},r.a.createElement("label",{className:"modal-container__form__password-container--password-label",htmlFor:"password"},"Password"),_("password"),r.a.createElement("input",{onChange:function(e){return f(e.target.value)},value:p,id:"password",className:"modal-container__form__password-container--password-input",type:"password",placeholder:"Password",required:!0})),r.a.createElement("button",{type:"submit",onClick:function(t){t.preventDefault();var n={name:o,email:s,password:p};e.onSignupUser(n)},className:"modal-container__form__login-button"},"Signup"))))})));n(90);var U=Object(x.d)(Object(i.b)(function(e){return{isAuthenticated:e.app.isAuthenticated,user:e.app.user}},null)(function(e){var t=Object(a.useState)(!1),n=Object(y.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(!1),l=Object(y.a)(i,2),s=l[0],u=l[1],m=e.user?e.user.name:"";return r.a.createElement("div",{className:"navigation-container"},r.a.createElement(I.a,{in:o,timeout:100,unmountOnExit:!0,classNames:"modal"},r.a.createElement("div",null,r.a.createElement(C,{closeSignupModal:u,openModal:c}))),r.a.createElement(I.a,{in:s,timeout:100,unmountOnExit:!0,classNames:"modal"},r.a.createElement("div",null,r.a.createElement(A,{closeLoginModal:c,openModal:u}))),r.a.createElement("h5",{className:"navigation-container__welcome"},"Welcome ".concat(m)),r.a.createElement("div",{className:"navigation-container__nav-items-container"},e.isAuthenticated?r.a.createElement(a.Fragment,null,r.a.createElement(T,{loggingOut:!0,linkTo:"/"},"Logout")):r.a.createElement(a.Fragment,null,r.a.createElement(T,{openModal:c,linkTo:"/login"},"Login"),r.a.createElement(T,{openModal:u,linkTo:"/register"},"Signup"))))}));n(93);var R=Object(i.b)(function(e){return{text:e.app.text}},function(e){return{updateInitialState:function(){return e(L())},onInputChange:function(t){return e(function(e){return{type:"INPUT_CHANGE",text:e.target.value}}(t))},onAddToList:function(t){return e(function(e){return function(){var t=Object(D.a)(N.a.mark(function t(n,a){var r,o,c;return N.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r={name:e},o=JSON.stringify({newTodo:r}),t.prev=2,t.next=5,j.a.post("".concat(w.baseUrl,"/list/addtodo"),o,S(a));case 5:if(!(c=t.sent).data.name){t.next=9;break}return t.next=9,n({type:"ADD_TO_LIST",newItem:c.data});case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),console.log(t.t0);case 14:case"end":return t.stop()}},t,null,[[2,11]])}));return function(e,n){return t.apply(this,arguments)}}()}(t))}}})(function(e){return r.a.createElement("div",{className:"submit-container"},r.a.createElement("input",{className:"addItemInput",type:"text",autoFocus:!0,onChange:e.onInputChange,value:e.text,onKeyPress:function(t){"Enter"===t.key&&e.onAddToList(e.text)},placeholder:"Add task"}),r.a.createElement("button",{className:"submitBtn",type:"submit",onClick:function(t){t.preventDefault(),e.text&&e.onAddToList(e.text)}},r.a.createElement("span",{className:"addBtnText"},"Add")))});n(35);var M=Object(i.b)(function(e){return{listArr:e.app.list}},function(e){return{onDeleteFromList:function(t){return e((n=t,function(){var e=Object(D.a)(N.a.mark(function e(t,a){var r;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=JSON.stringify({itemToDel:n}),e.prev=1,e.next=4,j.a.delete("".concat(w.baseUrl,"/list/deletetodo/").concat(n._id.toString()),S(a),r);case 4:t({type:"DELETE_FROM_LIST",itemToDel:n}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[1,7]])}));return function(t,n){return e.apply(this,arguments)}}()));var n},onAddToDone:function(t){return e(function(e){return function(){var t=Object(D.a)(N.a.mark(function t(n,a){var r,o,c;return N.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r={name:e},o=JSON.stringify({newDone:r}),t.prev=2,t.next=5,j.a.post("".concat(w.baseUrl,"/done/adddone"),o,S(a));case 5:if(!(c=t.sent).data.item.name){t.next=11;break}return t.next=9,n({type:"ADD_TO_DONE",doneItem:c.data,message:c.data.message});case 9:t.next=13;break;case 11:return t.next=13,n({type:"ADD_TO_DONE",doneItem:c.data,message:c.data.message});case 13:L(),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(2),console.log(t.t0);case 19:case"end":return t.stop()}},t,null,[[2,16]])}));return function(e,n){return t.apply(this,arguments)}}()}(t))}}})(function(e){var t=e.listArr.map(function(t){return t.name?r.a.createElement("li",{className:"listItem",key:t.id||Math.random()},r.a.createElement("span",{className:"listItemName"},t.name),r.a.createElement("a",{onClick:function(e){return e.preventDefault()},className:"listDeleteLink listsBtns",href:"delete"},r.a.createElement("span",{className:"listItemDelete",onClick:function(){return e.onDeleteFromList(t)}},"Delete")),r.a.createElement("a",{onClick:function(e){return e.preventDefault()},className:"listDoneLink listsBtns",href:"done"},r.a.createElement("span",{className:"listItemDone",onClick:function(){return e.onAddToDone(t.name)}},"Done"))):null});return r.a.createElement("ul",{className:"todoList-container"},t)});var F=Object(i.b)(function(e){return{doneArr:e.app.done}},function(e){return{onDeleteFromDone:function(t){return e((n=t,function(){var e=Object(D.a)(N.a.mark(function e(t,a){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.delete("".concat(w.baseUrl,"/done/deletedone/").concat(n._id.toString()),S(a));case 2:t({type:"DELETE_FROM_DONE",itemToDel:n});case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()));var n}}})(function(e){var t=e.doneArr.map(function(t){return t.name?r.a.createElement("li",{className:"listItem",key:t.id||Math.random()},r.a.createElement("span",{className:"listItemName"},t.name),r.a.createElement("a",{onClick:function(e){return e.preventDefault()},className:"listDeleteLink listsBtns",href:"delete"},r.a.createElement("span",{className:"listItemDelete",onClick:function(){return e.onDeleteFromDone(t)}},"Delete"))):null});return r.a.createElement("ul",null,t)}),P=function(e){function t(){return Object(_.a)(this,t),Object(v.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.updateInitialState(),this.props.loadUser()}},{key:"render",value:function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement("div",{className:"navigation"},r.a.createElement(O.a,{basename:"/react-todo"},r.a.createElement(U,null))),r.a.createElement("div",{className:"todo-box-container"},r.a.createElement(R,null),r.a.createElement("div",{className:"todoListContainer listContainer"},r.a.createElement("h3",{className:"ltodoListContainer__header listHeader"},"ToDo:"),r.a.createElement(M,{updateInitialState:this.props.updateInitialState})),r.a.createElement("div",{className:"doneListContainer listContainer"},r.a.createElement("h3",{className:"doneListContainer__header listHeader"},"Done:"),r.a.createElement(F,null))))}}]),t}(r.a.Component),G=Object(i.b)(function(e){return{}},function(e){return{updateInitialState:function(){return e(L())},loadUser:function(){return e(function(){var e=Object(D.a)(N.a.mark(function e(t,n){var a,r,o,c;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=localStorage.getItem("token"),r=localStorage.getItem("id"),o=n().app.token,e.prev=3,!(a&&r&&o)){e.next=9;break}return e.next=7,j.a.get("".concat(w.baseUrl,"/loaduser/").concat(r),S(n));case 7:(c=e.sent)&&t({type:"LOAD_USER",user:c.data});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0);case 14:case"end":return e.stop()}},e,null,[[3,11]])}));return function(t,n){return e.apply(this,arguments)}}())}}})(P),q=(n(94),[s.a]),B=Object(l.c)({app:f}),J=Object(l.e)(B,{},Object(l.d)(l.a.apply(void 0,q),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));c.a.render(r.a.createElement(i.a,{store:J},r.a.createElement(G,null)),document.querySelector("#root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.2294d464.chunk.js.map