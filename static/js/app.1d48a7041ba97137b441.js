webpackJsonp([8],{D6jJ:function(t,e){},Kv5V:function(t,e){},M93x:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={name:"App",components:{NavBar:n("g2+m").a},data:function(){return{tipsDialogVisible:!1}},computed:{},beforeCreate:function(){console.log(this.$refs.player)},mounted:function(){var t=this;this.$http({url:"/user/status"}).then(function(e){var n=e.data;200===n.status?t.$store.commit("setActiveUser",n.data):t.$store.commit("removeActiveUser")}).catch(function(t){}),this.tipsDialogVisible=!0}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app",name:"top"}},[n("el-row",[n("el-col",{attrs:{span:24}},[n("nav-bar")],1),t._v(" "),n("el-col",{attrs:{span:18,offset:3}},[n("router-view"),t._v(" "),n("div",{attrs:{id:"footer"}},[n("div",{staticStyle:{color:"#606266"}},[n("p",{staticStyle:{width:"100%","text-align":"center"}},[t._v("本站点仅供技术演示 "),n("span",{staticStyle:{cursor:"pointer",color:"#409EFF","margin-left":"10px"},on:{click:function(e){t.$router.push({path:"/about"})}}},[n("b",[t._v("关于")])])]),t._v("\n          部分视频资源来自于网络，如有侵权，请联系本人删除。\n          ")])])],1)],1)],1)},staticRenderFns:[]};var r=n("VU/8")(o,i,!1,function(t){n("zvK7")},null,null);e.default=r.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),i=n("M93x"),r=n("zL8q"),a=n.n(r),s=(n("tvR6"),n("mtWM")),c=n.n(s),u=n("9vWd"),l=(n("GUoS"),n("Kv5V"),n("/ocq")),d=[{path:"/",redirect:"/index"},{path:"/index",name:"index",component:function(){return n.e(4).then(n.bind(null,"AXJj"))}},{path:"/login",name:"login",component:function(){return n.e(5).then(n.bind(null,"xJsL"))}},{path:"/register",name:"register",component:function(){return n.e(6).then(n.bind(null,"dIqY"))}},{path:"/video/upload",name:"VideoUpload",component:function(){return n.e(0).then(n.bind(null,"AMmI"))}},{path:"/video/:id",props:!0,name:"videoDetail",component:function(){return n.e(1).then(n.bind(null,"+fla"))}},{path:"/user/:id",props:!0,name:"user",component:function(){return n.e(2).then(n.bind(null,"jyJz"))}},{path:"/user",name:"mine",component:function(){return n.e(3).then(n.bind(null,"djVU"))}}];o.default.use(l.a);var p=new l.a({routes:d,mode:"hash",fallback:!0,scrollBehavior:function(t,e,n){return{x:0,y:0}}}),v=n("NYxO");o.default.use(v.a);var f=new v.a.Store({state:{activeUser:{id:""}},mutations:{setActiveUser:function(t,e){t.activeUser=e,console.log("vuex",t.activeUser)},removeActiveUser:function(t){t.activeUser=null}},getters:{activeStatus:function(t){var e=t.activeUser;return console.log("vuex getters",e),null!=e&&void 0!=e&&""!=e.id&&void 0!=e.id}}});o.default.config.productionTip=!1,o.default.use(a.a),c.a.defaults.withCredentials=!0,c.a.defaults.baseURL="https://api.video.tokiz.cn",c.a.defaults.method="post",o.default.prototype.$http=c.a,o.default.prototype.$server="https://api.video.tokiz.cn",o.default.prototype.$static="https://static.video.tokiz.cn",o.default.prototype.$videoUrl="",o.default.prototype.$flv=u.a,o.default.prototype.$flvPlayer={};new o.default({el:"#app",router:p,store:f,components:{App:i.default},template:"<App/>"})},"g2+m":function(t,e,n){"use strict";var o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"box"}},[n("el-row",[n("el-col",{attrs:{span:18,offset:3}},[n("div",{attrs:{id:"nav-bar"}},[n("span",{staticStyle:{"font-size":"24px"},attrs:{id:"title"},on:{click:function(e){t.$router.push({path:"/"})}}},[t._v("忆语视频")]),t._v(" "),t.$store.getters.activeStatus?n("div",{staticClass:"userInfo"},[n("img",{staticStyle:{width:"32px",height:"32px",border:"1px solid #ccc","border-radius":"50%",overflow:"hidden"},attrs:{src:t.$static+t.$store.state.activeUser.faceImage}}),t._v(" "),n("el-dropdown",{on:{command:t.handleCommand}},[n("span",{staticClass:"el-dropdown-link",staticStyle:{"margin-left":"10px",color:"#409EFF",cursor:"pointer"}},[t._v("\n                        "+t._s(t.$store.state.activeUser.nickname)),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[n("span",{on:{click:function(e){t.$router.push({path:"/user"})}}},[t._v("我的资料")])]),t._v(" "),n("el-dropdown-item",[n("span",{on:{click:function(e){t.$router.push({path:"/video/upload"})}}},[t._v("投稿视频")])]),t._v(" "),n("el-dropdown-item",{attrs:{divided:"",command:"logout"}},[n("span",{staticStyle:{color:"#F56C6C"}},[t._v("退出登录")])])],1)],1)],1):n("div",[n("el-button",{attrs:{type:"text"},nativeOn:{click:function(e){t.$router.push({path:"/login"})}}},[t._v("登录")]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"small",round:""},on:{click:function(e){t.$router.push({path:"/register"})}}},[t._v("注册")])],1)])])],1)],1)},staticRenderFns:[]};var i=n("VU/8")({data:function(){return{input:"",activeIndex:"/index",activeTextColor:"#409EFF"}},methods:{selectHandle:function(t,e){"/index"===t||(this.activeTextColor="#fff")},handleCommand:function(t){var e=this;"logout"===t&&this.$http({url:"/logout"}).then(function(t){200===t.data.status&&(e.$store.commit("removeActiveUser"),e.$message({message:"注销成功",type:"info"}),e.$router.push({path:"/index"}))})}},computed:{}},o,!1,function(t){n("D6jJ")},"data-v-a9982604",null);e.a=i.exports},tvR6:function(t,e){},v6gy:function(t,e){},zvK7:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1d48a7041ba97137b441.js.map