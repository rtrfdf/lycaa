webpackJsonp([1],{"7Wmn":function(e,t){},J0iz:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},r,!1,function(e){n("7Wmn")},null,null).exports,i=n("/ocq"),s={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  Hello World!\n")])},staticRenderFns:[]};var l=n("VU/8")({name:"AppIndex"},s,!1,function(e){n("OZ0f")},"data-v-24f0bc46",null).exports,u={name:"Login",data:function(){return{loginForm:{username:"admin",password:"123"},responseResult:[]}},methods:{login:function(){var e=this,t=this;console.log(this.$store.state),this.$axios.post("/login",{username:this.loginForm.username,password:this.loginForm.password}).then(function(n){if(200===n.data.code){t.$store.commit("login",t.loginForm);var o=e.$route.query.redirect;e.$router.replace({path:"/"===o||void 0===o?"/index":o})}}).catch(function(e){})}}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("body",{attrs:{id:"poster"}},[n("el-form",{staticClass:"login-container",attrs:{"label-position":"left","label-width":"0px"}},[n("h3",{staticClass:"login_title"},[e._v("系统登录")]),e._v(" "),n("el-form-item",[n("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),n("el-form-item",[n("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),e._v(" "),n("el-form-item",{staticStyle:{width:"100%"}},[n("el-button",{staticStyle:{width:"100%",background:"#505458",border:"none"},attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")])],1)],1)],1)},staticRenderFns:[]};var m=n("VU/8")(u,c,!1,function(e){n("yKp9")},null,null).exports,d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticStyle:{"min-width":"1300px"},attrs:{"default-active":"/index",router:"",mode:"horizontal","background-color":"white","text-color":"#222","active-text-color":"red"}},[e._l(e.navList,function(t,o){return n("el-menu-item",{key:o,attrs:{index:t.name}},[e._v("\n    "+e._s(t.navItem)+"\n  ")])}),e._v(" "),n("a",{staticStyle:{color:"#222",float:"right",padding:"20px"},attrs:{href:"#nowhere"}},[e._v("更多功能")]),e._v(" "),n("i",{staticClass:"el-icon-menu",staticStyle:{float:"right","font-size":"45px",color:"#222","padding-top":"8px"}}),e._v(" "),n("span",{staticStyle:{position:"absolute","padding-top":"20px",right:"43%","font-size":"20px","font-weight":"bold"}},[e._v("White Jotter - Your Mind Palace")])],2)},staticRenderFns:[]};var p={name:"Home",components:{NavMenu:n("VU/8")({name:"NavMenu",data:function(){return{navList:[{name:"/index",navItem:"首页"},{name:"/jotter",navItem:"笔记本"},{name:"/library",navItem:"图书馆"},{name:"/admin",navItem:"个人中心"}]}}},d,!1,function(e){n("J0iz")},"data-v-0e22406e",null).exports}},f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("nav-menu"),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var v=n("VU/8")(p,f,!1,function(e){n("PbD+")},"data-v-39d2753e",null).exports;o.default.use(i.a);var h=new i.a({mode:"history",routes:[{path:"/home",name:"Home",component:v,redirect:"/index",children:[{path:"/index",name:"AppIndex",component:l,meta:{requireAuth:!0}}]},{path:"/login",name:"Login",component:m}]}),g=n("mvHQ"),_=n.n(g),x=n("LvQi");o.default.use(x.a);var w=new x.a.Store({state:{user:{username:null==window.localStorage.getItem("user")?"":JSON.parse(window.localStorage.getItem("user")).username}},mutations:{login:function(e,t){e.user=t,window.localStorage.setItem("user",_()(t))}}}),y=n("zL8q"),b=n.n(y),F=(n("tvR6"),n("mtWM"));F.defaults.baseURL="http://localhost:8443/api",o.default.prototype.$axios=F,o.default.config.productionTip=!1,o.default.use(b.a),h.beforeEach(function(e,t,n){e.meta.requireAuth?w.state.user.username?n():n({path:"login",query:{redirect:e.fullPath}}):n()}),new o.default({el:"#app",render:function(e){return e(a)},router:h,store:w,components:{App:a},template:"<App/>"})},OZ0f:function(e,t){},"PbD+":function(e,t){},tvR6:function(e,t){},yKp9:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.38cd2c63160f3249d287.js.map