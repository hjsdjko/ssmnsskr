(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/wenzhenhuifu/add-or-update"],{"1e41":function(e,n,t){},"459b":function(e,n,t){"use strict";var r=t("1e41"),i=t.n(r);i.a},"7be7":function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var i=function(){var e=this,n=e.$createElement;e._self._c},a=[]},b7f2:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,r,i,a,u){try{var o=e[a](u),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(r,i)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var u=e.apply(n,t);function o(e){a(u,r,i,o,c,"next",e)}function c(e){a(u,r,i,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("fb1e"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{keshimingcheng:"",jiuzhenkahao:"",xingming:"",wenzhenneirong:"",wenzhendafu:"",dafushijian:"",tupian:"",gonghao:"",yishengxingming:"",userid:""},user:{},ro:{keshimingcheng:!1,jiuzhenkahao:!1,xingming:!1,wenzhenneirong:!1,wenzhendafu:!1,dafushijian:!1,tupian:!1,gonghao:!1,yishengxingming:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(n){var t=this;return u(r.default.mark((function i(){var a,u,o,c;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t.ruleForm.dafushijian=t.$utils.getCurDate(),a=e.getStorageSync("nowTable"),i.next=4,t.$api.session(a);case 4:if(u=i.sent,t.user=u.data,t.ruleForm.gonghao=t.user.gonghao,t.ruleForm.yishengxingming=t.user.yishengxingming,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){i.next=16;break}return t.ruleForm.id=n.id,i.next=14,t.$api.info("wenzhenhuifu",t.ruleForm.id);case 14:u=i.sent,t.ruleForm=u.data;case 16:if(!n.cross){i.next=63;break}o=e.getStorageSync("crossObj"),i.t0=r.default.keys(o);case 19:if((i.t1=i.t0()).done){i.next=63;break}if(c=i.t1.value,"keshimingcheng"!=c){i.next=25;break}return t.ruleForm.keshimingcheng=o[c],t.ro.keshimingcheng=!0,i.abrupt("continue",19);case 25:if("jiuzhenkahao"!=c){i.next=29;break}return t.ruleForm.jiuzhenkahao=o[c],t.ro.jiuzhenkahao=!0,i.abrupt("continue",19);case 29:if("xingming"!=c){i.next=33;break}return t.ruleForm.xingming=o[c],t.ro.xingming=!0,i.abrupt("continue",19);case 33:if("wenzhenneirong"!=c){i.next=37;break}return t.ruleForm.wenzhenneirong=o[c],t.ro.wenzhenneirong=!0,i.abrupt("continue",19);case 37:if("wenzhendafu"!=c){i.next=41;break}return t.ruleForm.wenzhendafu=o[c],t.ro.wenzhendafu=!0,i.abrupt("continue",19);case 41:if("dafushijian"!=c){i.next=45;break}return t.ruleForm.dafushijian=o[c],t.ro.dafushijian=!0,i.abrupt("continue",19);case 45:if("tupian"!=c){i.next=49;break}return t.ruleForm.tupian=o[c],t.ro.tupian=!0,i.abrupt("continue",19);case 49:if("gonghao"!=c){i.next=53;break}return t.ruleForm.gonghao=o[c],t.ro.gonghao=!0,i.abrupt("continue",19);case 53:if("yishengxingming"!=c){i.next=57;break}return t.ruleForm.yishengxingming=o[c],t.ro.yishengxingming=!0,i.abrupt("continue",19);case 57:if("userid"!=c){i.next=61;break}return t.ruleForm.userid=o[c],t.ro.userid=!0,i.abrupt("continue",19);case 61:i.next=19;break;case 63:t.styleChange();case 64:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},dafushijianChange:function(e){this.ruleForm.dafushijian=e.target.value,this.$forceUpdate()},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return u(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.ruleForm.id){n.next=5;break}return n.next=3,e.$api.update("wenzhenhuifu",e.ruleForm);case 3:n.next=7;break;case 5:return n.next=7,e.$api.add("wenzhenhuifu",e.ruleForm);case 7:e.$utils.msgBack("提交成功");case 8:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,i=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(t,"-").concat(r,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},d14c:function(e,n,t){"use strict";(function(e){t("1673");r(t("66fd"));var n=r(t("f4cd"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},dde7:function(e,n,t){"use strict";t.r(n);var r=t("b7f2"),i=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=i.a},f4cd:function(e,n,t){"use strict";t.r(n);var r=t("7be7"),i=t("dde7");for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);t("459b");var u,o=t("f0c5"),c=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"b1773be2",null,!1,r["a"],u);n["default"]=c.exports}},[["d14c","common/runtime","common/vendor"]]]);