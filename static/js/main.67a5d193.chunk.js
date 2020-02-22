(this["webpackJsonprepo-show"]=this["webpackJsonprepo-show"]||[]).push([[0],{44:function(n,e,t){n.exports=t(71)},71:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(35),i=t.n(o),c=t(10),l=t(8),s=t(11),p=t.n(s),u=t(41),d=t(15),m=t(16),f=t(17),g=t(19),x=t(18),b=t(20),h=t(21),v=t(36),y=t.n(v).a.create({baseURL:"https://api.github.com"}),E=t(2),j=t(3);function w(){var n=Object(E.a)(["\n  max-width: 700px;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n  padding: 30px;\n  margin: 80px auto;\n\n  h1 {\n    font-size: 20px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n  }\n\n  svg {\n    margin-right: 10px;\n  }\n"]);return w=function(){return n},n}var O=j.c.div(w());function k(){var n=Object(E.a)(["\n  list-style: none;\n  margin-top: 30px;\n\n  li {\n    padding: 15px 0;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n\n    & + li {\n      border-top: 1px solid #eee;\n    }\n\n    a {\n      color: #7159c1;\n      text-decoration: none;\n    }\n  }\n"]);return k=function(){return n},n}function S(){var n=Object(E.a)(["\n      svg {\n        animation: "," 2s linear infinite;\n      }\n    "]);return S=function(){return n},n}function z(){var n=Object(E.a)(["\n  background: #7159c1;\n  border: 0;\n  padding: 0 15px;\n  margin-left: 10px;\n  border-radius: 4px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  svg {\n    margin: 0;\n  }\n\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.6;\n  }\n\n  ","\n"]);return z=function(){return n},n}function R(){var n=Object(E.a)(["\n  from{\n    transform:rotate(0deg);\n  }\n\n  to{\n    transform:rotate(360deg);\n  }\n"]);return R=function(){return n},n}function C(){var n=Object(E.a)(["\n  margin-top: 30px;\n  display: flex;\n  flex-direction: row;\n\n  input {\n    flex: 1;\n    border: 1px solid #eee;\n    padding: 10px 15px;\n    border-radius: 4px;\n    font-size: 16px;\n  }\n"]);return C=function(){return n},n}var I=j.c.form(C()),D=Object(j.d)(R()),_=j.c.button.attrs((function(n){return{type:"submit",disabled:n.loading}}))(z(),(function(n){return n.loading&&Object(j.b)(S(),D)})),A=j.c.ul(k()),J=function(n){function e(){var n,t;Object(m.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(g.a)(this,(n=Object(x.a)(e)).call.apply(n,[this].concat(a)))).state={newRepo:"",repositories:[],loading:!1},t.handleInputChange=function(n){t.setState({newRepo:n.target.value})},t.handleSubmit=function(){var n=Object(d.a)(p.a.mark((function n(e){var r,a,o,i,c;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),t.setState({loading:!0}),r=t.state,a=r.newRepo,o=r.repositories,n.next=5,y.get("repos/".concat(a));case 5:i=n.sent,c={name:i.data.full_name},t.setState({repositories:[].concat(Object(u.a)(o),[c]),newRepo:"",loading:!1});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),t}return Object(b.a)(e,n),Object(f.a)(e,[{key:"componentDidMount",value:function(){var n=localStorage.getItem("repositories");n?this.setState({repositories:JSON.parse(n)}):this.setState({repositories:["facebook/react","facebook/react-native","airbnb/javascript"]})}},{key:"componentDidUpdate",value:function(n,e){var t=this.state.repositories;e.repositories!==t&&localStorage.setItem("repositories",JSON.stringify(t))}},{key:"render",value:function(){var n=this.state,e=n.newRepo,t=n.repositories,r=n.loading;return a.a.createElement(O,null,a.a.createElement("h1",null,a.a.createElement(h.a,null),"Reposit\xf3rios"),a.a.createElement(I,{onSubmit:this.handleSubmit},a.a.createElement("input",{type:"text",placeholder:"Add um usu\xe1rio/reposit\xf3rio. Ex:facebook/react",value:e,onChange:this.handleInputChange}),a.a.createElement(_,{loading:r},r?a.a.createElement(h.c,{color:"#fff",size:14}):a.a.createElement(h.b,{color:"#fff",size:14}))),a.a.createElement(A,null,t.map((function(n){return a.a.createElement("li",{key:n.name},a.a.createElement("span",null,n.name),a.a.createElement(c.b,{to:"/repository/".concat(encodeURIComponent(n.name))},"Detalhes"))}))))}}]),e}(r.Component),U=t(42);function M(){var n=Object(E.a)(["\n  padding-top: 30px;\n  margin-top: 30px;\n  border-top: 1px solid #eee;\n  list-style: none;\n\n  li {\n    display: flex;\n    padding: 15px 10px;\n    border: 1px solid #eee;\n    border-radius: 4px;\n  }\n\n  & + li {\n    margin-top: 10px;\n  }\n\n  img {\n    width: 36px;\n    height: 36px;\n    border-radius: 50%;\n    border: 2px solid #eee;\n  }\n\n  div {\n    flex: 1;\n    margin-left: 15px;\n\n    strong {\n      font-size: 16px;\n\n      a {\n        text-decoration: none;\n        color: #333;\n\n        &:hover {\n          color: #7159c1;\n        }\n      }\n\n      span {\n        background: #eee;\n        color: #333;\n        border-radius: 2px;\n        font-size: 12px;\n        font-weight: 600;\n        height: 20px;\n        padding: 3px 4px;\n        margin-left: 10px;\n      }\n    }\n\n    p {\n      margin-top: 5px;\n      font-size: 12px;\n      color: #999;\n    }\n  }\n"]);return M=function(){return n},n}function N(){var n=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  a {\n    color: #7159c1;\n    font-size: 16px;\n    text-decoration: none;\n  }\n\n  img {\n    width: 120px;\n    border-radius: 50%;\n    margin-top: 20px;\n  }\n\n  h1 {\n    font-size: 24px;\n    margin-top: 10px;\n  }\n\n  p {\n    margin-top: 5px;\n    font-size: 14px;\n    color: #666;\n    line-height: 1.4;\n    text-align: center;\n    max-width: 400px;\n  }\n"]);return N=function(){return n},n}function B(){var n=Object(E.a)(["\n  color: #fff;\n  font-size: 30px;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n"]);return B=function(){return n},n}var F=j.c.div(B()),H=j.c.header(N()),L=j.c.ul(M()),P=function(n){function e(){var n,t;Object(m.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(g.a)(this,(n=Object(x.a)(e)).call.apply(n,[this].concat(a)))).state={repository:{},issues:[],loading:!0},t}return Object(b.a)(e,n),Object(f.a)(e,[{key:"componentDidMount",value:function(){var n=Object(d.a)(p.a.mark((function n(){var e,t,r,a,o,i;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=this.props.match,t=decodeURIComponent(e.params.repository),n.next=4,Promise.all([y.get("/repos/".concat(t)),y.get("/repos/".concat(t,"/issues"),{params:{state:"open",per_page:5}})]);case 4:r=n.sent,a=Object(U.a)(r,2),o=a[0],i=a[1],this.setState({repository:o.data,issues:i.data,loading:!1});case 9:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var n=this.state,e=n.repository,t=n.issues;return n.loading?a.a.createElement(F,null,"Carregando"):a.a.createElement(O,null,a.a.createElement(H,null,a.a.createElement(c.b,{to:"/"},"Voltar aos reposit\xf3rios"),a.a.createElement("img",{src:e.owner.avatar_url,alt:e.owner.login}),a.a.createElement("h1",null,e.name),a.a.createElement("p",null,e.description)),a.a.createElement(L,null,t.map((function(n){return a.a.createElement("li",{key:String(n.id)},a.a.createElement("img",{src:n.user.avatar_url,alt:n.user.login}),a.a.createElement("div",null,a.a.createElement("strong",null,a.a.createElement("a",{href:n.html_url},n.title),n.labels.map((function(n){return a.a.createElement("span",{key:String(n.id)},n.name)}))),a.a.createElement("p",null,n.user.login)))}))))}}]),e}(r.Component);function V(){return a.a.createElement(c.a,{basename:"/repo-show"},a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/",exact:!0,component:J}),a.a.createElement(l.a,{path:"/repository/:repository",component:P})))}function q(){var n=Object(E.a)(["\n  *{\n    margin:0;\n    padding:0;\n    outline:0;\n    box-sizing: border-box;\n  }\n\n  html, body, #root{\n    min-height: 100%;\n  }\n\n  body{\n    background: #7159c1;\n    -webkit-font-smoothing: antialiased !important;\n  }\n\n  body, input, button{\n    color:#222;\n    font-size:14px;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n\n  button{\n    cursor: pointer;\n  }\n\n"]);return q=function(){return n},n}var G=Object(j.a)(q());var K=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(V,null),a.a.createElement(G,null))};i.a.render(a.a.createElement(K,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.67a5d193.chunk.js.map