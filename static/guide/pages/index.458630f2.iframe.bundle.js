(window.webpackJsonp=window.webpackJsonp||[]).push([[26,8,11,16],{1001:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(10),__webpack_require__(3),__webpack_require__(29),__webpack_require__(38),__webpack_require__(73),__webpack_require__(25),__webpack_require__(42),__webpack_require__(75),__webpack_require__(76);var defineProperty=__webpack_require__(33),vuex_esm=__webpack_require__(178),env=__webpack_require__(1011);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var components_ContentHomePagevue_type_script_lang_js_={data:function data(){return{MOBILE_WIDTH_SIZE:env.a.MOBILE_WIDTH_SIZE,windowWidth:window.innerWidth}},computed:_objectSpread({},Object(vuex_esm.c)({tasks:"getTasks",isLoadingGetTasks:"getIsLoadingGetTasks",isErrorAnyRequest:"getIsErrorAnyRequest"})),created:function created(){0===this.tasks.length&&this.getTasks()},mounted:function mounted(){var _this=this;window.addEventListener("resize",(function(){_this.windowWidth=window.innerWidth}))},methods:_objectSpread({},Object(vuex_esm.b)(["getTasks"]))},componentNormalizer=(__webpack_require__(1052),__webpack_require__(153)),component=Object(componentNormalizer.a)(components_ContentHomePagevue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("Box",{staticClass:"homeContent",style:_vm.windowWidth<_vm.MOBILE_WIDTH_SIZE?"--home-content-padding: 0px 10px 0px 10px":"--home-content-padding: 0px 40px 0px 40px"},[_c("TaskBar",{staticClass:"taskBar"}),_vm._v(" "),_c("Box",{staticClass:"listBox"},[_vm.isLoadingGetTasks?_c("Box",{staticClass:"listInnerCenterBox"},[_c("Spinner",{attrs:{size:40,color:"blue"}})],1):_vm.isErrorAnyRequest?_c("Box",{staticClass:"listInnerCenterBox"},[_c("BaseText",[_vm._v("\n        An error occurred. Please refresh the page and try again.\n      ")])],1):0===_vm.tasks.length?_c("Box",{staticClass:"listInnerCenterBox"},[_c("BaseText",[_vm._v("\n        There aren't any tasks in our records. Please add a new task.\n      ")])],1):_c("Box",{staticClass:"listInnerBox"},[_c("BaseText",{staticClass:"listTitle"},[_vm._v("All Tasks")]),_vm._v(" "),_vm._l(_vm.tasks,(function(task){return _c("TaskCard",{key:task._id,staticClass:"taskCard",attrs:{task:task}})}))],2)],1)],1)}),[],!1,null,"a834666e",null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{TaskBar:__webpack_require__(987).default,Spinner:__webpack_require__(985).default,Box:__webpack_require__(982).default,BaseText:__webpack_require__(984).default,TaskCard:__webpack_require__(992).default}),__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"ContentHomePage",description:"",tags:{}}},1013:function(module,exports,__webpack_require__){var content=__webpack_require__(1022);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(206).default)("6dd048f4",content,!0,{sourceMap:!1})},1014:function(module,exports,__webpack_require__){var content=__webpack_require__(1025);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(206).default)("340e7108",content,!0,{sourceMap:!1})},1017:function(module,exports,__webpack_require__){var content=__webpack_require__(1030);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(206).default)("6f4c43d3",content,!0,{sourceMap:!1})},1018:function(module,exports,__webpack_require__){var content=__webpack_require__(1032);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(206).default)("212a420e",content,!0,{sourceMap:!1})},1021:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1013)},1022:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(205)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".root[data-v-5cec39b4]{display:flex;align-items:center;justify-content:center;height:35px}.root .input[data-v-5cec39b4]{width:100%;height:35px;padding:0 20px;border-radius:5px;border:1px solid #5466e2;cursor:pointer;background-color:#fff;font-size:14px;color:#000}.root .button[data-v-5cec39b4]{height:100%;width:60px;border-radius:5px;cursor:pointer;background-color:#5466e2;margin-left:10px}.root .button .plusIcon[data-v-5cec39b4]{height:15px;width:15px;color:#fafafa}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},1023:function(module,exports,__webpack_require__){var content=__webpack_require__(1034);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(206).default)("39a51eee",content,!0,{sourceMap:!1})},1024:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1014)},1025:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(205)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".nuxtLink[data-v-fc66839e]{text-decoration:none}.nuxtLink .buttonMobile[data-v-fc66839e]{margin-left:15px;background-color:transparent;cursor:pointer}.nuxtLink .buttonMobile .text[data-v-fc66839e]{font-size:14px}.nuxtLink .buttonMobile .textSelected[data-v-fc66839e]{color:#5466e2}.nuxtLink .buttonDesktop[data-v-fc66839e]{padding:10px 20px;border-radius:5px;cursor:pointer;background-color:transparent;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.nuxtLink .buttonDesktop .text[data-v-fc66839e]{font-size:14px}.nuxtLink .buttonDesktop .textSelected[data-v-fc66839e]{color:#5466e2}.nuxtLink .buttonDesktop[data-v-fc66839e]:hover{color:#5466e2;background-color:rgba(84,102,226,.1)}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},1027:function(module,exports,__webpack_require__){var content=__webpack_require__(1038);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(206).default)("10c84360",content,!0,{sourceMap:!1})},1028:function(module,exports,__webpack_require__){var content=__webpack_require__(1040);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(206).default)("3736f8d4",content,!0,{sourceMap:!1})},1029:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1017)},1030:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(205)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".nuxtLink .root[data-v-effe47f4]{display:flex;align-items:center;justify-content:center}.nuxtLink[data-v-effe47f4]{text-decoration:none}.nuxtLink .root[data-v-effe47f4]{background-color:transparent;cursor:pointer}.nuxtLink .root .icon[data-v-effe47f4]{height:30px;width:22px;color:#5466e2}.nuxtLink .root .text[data-v-effe47f4]{margin-left:10px;font-size:18px}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},1031:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1018)},1032:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(205)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".root[data-v-0e5c0f56]{display:flex;flex-direction:row}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},1033:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1023)},1034:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(205)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".header[data-v-7e882352]{display:flex;justify-content:space-between;align-items:center;flex-direction:row;padding:var(--home-content-padding);border-bottom:1px solid #dbdbdb;background-color:#fff}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},1037:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1027)},1038:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(205)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".footer[data-v-09309144]{display:flex;align-items:center;justify-content:center;font-size:13px;border-top:1px solid #dbdbdb;background-color:#fff}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},1039:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1028)},1040:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(205)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".layout[data-v-064fe2c2]{height:100vh;display:grid;grid-template-rows:80px 1fr 80px;min-width:300px}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},1044:function(module,exports,__webpack_require__){var content=__webpack_require__(1053);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(206).default)("2fe4b049",content,!0,{sourceMap:!1})},1052:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1044)},1053:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(205)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".homeContent .listBox .listInnerCenterBox[data-v-a834666e]{display:flex;align-items:center;justify-content:center}.homeContent[data-v-a834666e]{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding:var(--home-content-padding)}.homeContent .listBox[data-v-a834666e],.homeContent .taskBar[data-v-a834666e]{display:flex;width:100%;max-width:1000px;margin-top:30px}.homeContent .listBox[data-v-a834666e]{height:100%;margin-bottom:30px}.homeContent .listBox .listInnerCenterBox[data-v-a834666e]{width:100%;height:100%}.homeContent .listBox .listInnerBox[data-v-a834666e]{display:flex;flex-direction:column;width:100%}.homeContent .listBox .listInnerBox .listTitle[data-v-a834666e]{width:100%;margin-bottom:10px;text-align:start;font-size:18px}.homeContent .listBox .listInnerBox .taskCard[data-v-a834666e]{margin-top:20px}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},1129:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var componentNormalizer=__webpack_require__(153),component=Object(componentNormalizer.a)({},(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("TheLayout",[_c("Header",{attrs:{selectedPage:"home"}}),this._v(" "),_c("ContentHomePage"),this._v(" "),_c("TheFooter")],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{Header:__webpack_require__(993).default,ContentHomePage:__webpack_require__(1001).default,TheFooter:__webpack_require__(994).default,TheLayout:__webpack_require__(995).default}),__vuedocgen_export_0.__docgenInfo={displayName:"pages",description:"",tags:{}}},986:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var componentNormalizer=__webpack_require__(153);const __vuedocgen_export_0=Object(componentNormalizer.a)({},(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("svg",{attrs:{width:"14",height:"14",viewBox:"0 0 14 14",xmlns:"http://www.w3.org/2000/svg"}},[_c("path",{attrs:{d:"M12.75 5.75H8.5C8.36194 5.75 8.25 5.63806 8.25 5.5V1.25C8.25 0.559692 7.69031 0 7 0C6.30969 0 5.75 0.559692 5.75 1.25V5.5C5.75 5.63806 5.63806 5.75 5.5 5.75H1.25C0.559692 5.75 0 6.30969 0 7C0 7.69031 0.559692 8.25 1.25 8.25H5.5C5.63806 8.25 5.75 8.36194 5.75 8.5V12.75C5.75 13.4403 6.30969 14 7 14C7.69031 14 8.25 13.4403 8.25 12.75V8.5C8.25 8.36194 8.36194 8.25 8.5 8.25H12.75C13.4403 8.25 14 7.69031 14 7C14 6.30969 13.4403 5.75 12.75 5.75Z",fill:"currentColor"}})])}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"PlusIcon",description:"",tags:{}}},987:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(10),__webpack_require__(3),__webpack_require__(29),__webpack_require__(38),__webpack_require__(73),__webpack_require__(25),__webpack_require__(42),__webpack_require__(75),__webpack_require__(76),__webpack_require__(154);var defineProperty=__webpack_require__(33),vuex_esm=__webpack_require__(178);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var components_TaskBarvue_type_script_lang_js_={data:function data(){return{taskDescription:""}},computed:_objectSpread({},Object(vuex_esm.c)({isLoadingCreateTask:"getIsLoadingCreateTask"})),watch:{isLoadingCreateTask:function isLoadingCreateTask(){!1===this.isLoadingCreateTask&&(this.taskDescription="")}},methods:_objectSpread(_objectSpread({},Object(vuex_esm.b)(["createTask"])),{},{onKeyPress:function onKeyPress(event){"Enter"===event.key&&""!==this.taskDescription.trim()&&this.addTask()},addTask:function addTask(){this.createTask({description:this.taskDescription})}})},componentNormalizer=(__webpack_require__(1021),__webpack_require__(153)),component=Object(componentNormalizer.a)(components_TaskBarvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("Box",{staticClass:"root"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.taskDescription,expression:"taskDescription",modifiers:{trim:!0}}],staticClass:"input",attrs:{type:"text",placeholder:"Add a new task..."},domProps:{value:_vm.taskDescription},on:{keypress:_vm.onKeyPress,input:function($event){$event.target.composing||(_vm.taskDescription=$event.target.value.trim())},blur:function($event){return _vm.$forceUpdate()}}}),_vm._v(" "),_vm.taskDescription.length>0?_c("BaseButton",{staticClass:"button",nativeOn:{click:function($event){return _vm.addTask.apply(null,arguments)}}},[_vm.isLoadingCreateTask?_c("Spinner",{attrs:{size:10,color:"white"}}):_c("PlusIcon",{staticClass:"plusIcon"})],1):_vm._e()],1)}),[],!1,null,"5cec39b4",null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{Spinner:__webpack_require__(985).default,PlusIcon:__webpack_require__(986).default,BaseButton:__webpack_require__(983).default,Box:__webpack_require__(982).default}),__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"TaskBar",description:"",tags:{}}},988:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var env=__webpack_require__(1011),components_NavigationButtonvue_type_script_lang_js_={props:{type:{type:String,default:"home"},selected:{type:Boolean,default:!1}},data:function data(){return{MOBILE_WIDTH_SIZE:env.a.MOBILE_WIDTH_SIZE,windowWidth:window.innerWidth}},mounted:function mounted(){var _this=this;window.addEventListener("resize",(function(){_this.windowWidth=window.innerWidth}))}},componentNormalizer=(__webpack_require__(1024),__webpack_require__(153)),component=Object(componentNormalizer.a)(components_NavigationButtonvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("NuxtLink",{staticClass:"nuxtLink",attrs:{to:"/"+_vm.type}},[_c("BaseButton",{class:_vm.windowWidth<_vm.MOBILE_WIDTH_SIZE?"buttonMobile":"buttonDesktop"},["completed"===_vm.type?_c("BaseText",{staticClass:"text",class:_vm.selected&&"textSelected"},[_vm._v("Completed")]):_c("BaseText",{staticClass:"text",class:_vm.selected&&"textSelected"},[_vm._v("Incompleted")])],1)],1)}),[],!1,null,"fc66839e",null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{BaseText:__webpack_require__(984).default,BaseButton:__webpack_require__(983).default}),__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"NavigationButton",description:"",tags:{},props:[{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'home'"}},{name:"selected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]}},989:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var componentNormalizer=__webpack_require__(153);const __vuedocgen_export_0=Object(componentNormalizer.a)({},(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("svg",{attrs:{width:"22",height:"30",viewBox:"0 0 22 30",xmlns:"http://www.w3.org/2000/svg"}},[_c("g",{attrs:{"clip-path":"url(#clip0)"}},[_c("path",{attrs:{d:"M15.6875 1.875H13.6512C13.265 0.78375 12.2225 0 11 0C9.7775 0 8.735 0.78375 8.34688 1.875H6.3125C5.795 1.875 5.375 2.295 5.375 2.8125V6.5625C5.375 7.08 5.795 7.5 6.3125 7.5H15.6875C16.205 7.5 16.625 7.08 16.625 6.5625V2.8125C16.625 2.295 16.205 1.875 15.6875 1.875Z",fill:"currentColor"}}),this._v(" "),_c("path",{attrs:{d:"M20.375 3.75H18.5V6.5625C18.5 8.11312 17.2381 9.375 15.6875 9.375H6.3125C4.76188 9.375 3.5 8.11312 3.5 6.5625V3.75H1.625C0.591875 3.75 -0.25 4.59188 -0.25 5.625V28.125C-0.25 29.1769 0.573125 30 1.625 30H20.375C21.4269 30 22.25 29.1769 22.25 28.125V5.625C22.25 4.57313 21.4269 3.75 20.375 3.75ZM10.7262 20.3512L6.97625 24.1012C6.7925 24.2831 6.5525 24.375 6.3125 24.375C6.0725 24.375 5.8325 24.2831 5.64875 24.1012L3.77375 22.2262C3.40812 21.8606 3.40812 21.2663 3.77375 20.9006C4.13937 20.535 4.73375 20.535 5.09938 20.9006L6.3125 22.1119L9.39875 19.0256C9.76437 18.66 10.3588 18.66 10.7244 19.0256C11.09 19.3913 11.0919 19.9837 10.7262 20.3512ZM10.7262 12.8512L6.97625 16.6012C6.7925 16.7831 6.5525 16.875 6.3125 16.875C6.0725 16.875 5.8325 16.7831 5.64875 16.6012L3.77375 14.7262C3.40812 14.3606 3.40812 13.7662 3.77375 13.4006C4.13937 13.035 4.73375 13.035 5.09938 13.4006L6.3125 14.6119L9.39875 11.5256C9.76437 11.16 10.3588 11.16 10.7244 11.5256C11.09 11.8912 11.0919 12.4838 10.7262 12.8512ZM17.5625 22.5H13.8125C13.295 22.5 12.875 22.08 12.875 21.5625C12.875 21.045 13.295 20.625 13.8125 20.625H17.5625C18.08 20.625 18.5 21.045 18.5 21.5625C18.5 22.08 18.08 22.5 17.5625 22.5ZM17.5625 15H13.8125C13.295 15 12.875 14.58 12.875 14.0625C12.875 13.545 13.295 13.125 13.8125 13.125H17.5625C18.08 13.125 18.5 13.545 18.5 14.0625C18.5 14.58 18.08 15 17.5625 15Z",fill:"currentColor"}})]),this._v(" "),_c("defs",[_c("clipPath",{attrs:{id:"clip0"}},[_c("rect",{attrs:{width:"22",height:"30",fill:"white"}})])])])}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"LogoIcon",description:"",tags:{}}},990:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var components_Navigationvue_type_script_lang_js_={props:{selectedPage:{type:String,default:"home"}}},componentNormalizer=(__webpack_require__(1031),__webpack_require__(153)),component=Object(componentNormalizer.a)(components_Navigationvue_type_script_lang_js_,(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("Box",{staticClass:"root"},[_c("NavigationButton",{attrs:{type:"completed",selected:"completed"===this.selectedPage}}),this._v(" "),_c("NavigationButton",{attrs:{type:"incompleted",selected:"incompleted"===this.selectedPage}})],1)}),[],!1,null,"0e5c0f56",null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{NavigationButton:__webpack_require__(988).default,Box:__webpack_require__(982).default}),__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"Navigation",description:"",tags:{},props:[{name:"selectedPage",type:{name:"string"},defaultValue:{func:!1,value:"'home'"}}]}},991:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(1029);var componentNormalizer=__webpack_require__(153),component=Object(componentNormalizer.a)({},(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("NuxtLink",{staticClass:"nuxtLink",attrs:{to:"/"}},[_c("BaseButton",{staticClass:"root"},[_c("LogoIcon",{staticClass:"icon"}),this._v(" "),_c("BaseText",{staticClass:"text"},[this._v("Todolist")])],1)],1)}),[],!1,null,"effe47f4",null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{LogoIcon:__webpack_require__(989).default,BaseText:__webpack_require__(984).default,BaseButton:__webpack_require__(983).default}),__vuedocgen_export_0.__docgenInfo={displayName:"TheLogo",description:"",tags:{}}},993:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var env=__webpack_require__(1011),components_Headervue_type_script_lang_js_={props:{selectedPage:{type:String,default:"home"}},data:function data(){return{MOBILE_WIDTH_SIZE:env.a.MOBILE_WIDTH_SIZE,windowWidth:window.innerWidth}},mounted:function mounted(){var _this=this;window.addEventListener("resize",(function(){_this.windowWidth=window.innerWidth}))}},componentNormalizer=(__webpack_require__(1033),__webpack_require__(153)),component=Object(componentNormalizer.a)(components_Headervue_type_script_lang_js_,(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("Box",{staticClass:"header",style:this.windowWidth<this.MOBILE_WIDTH_SIZE?"--home-content-padding: 0px 10px 0px 10px":"--home-content-padding: 0px 40px 0px 40px"},[_c("TheLogo"),this._v(" "),_c("Navigation",{attrs:{selectedPage:this.selectedPage}})],1)}),[],!1,null,"7e882352",null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{TheLogo:__webpack_require__(991).default,Navigation:__webpack_require__(990).default,Box:__webpack_require__(982).default}),__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"Header",description:"",tags:{},props:[{name:"selectedPage",type:{name:"string"},defaultValue:{func:!1,value:"'home'"}}]}},994:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(1037);var componentNormalizer=__webpack_require__(153),component=Object(componentNormalizer.a)({},(function(){var _h=this.$createElement;return(this._self._c||_h)("Box",{staticClass:"footer"},[this._v(" Todolist @2021 ")])}),[],!1,null,"09309144",null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{Box:__webpack_require__(982).default}),__vuedocgen_export_0.__docgenInfo={displayName:"TheFooter",description:"",tags:{}}},995:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(1039);var componentNormalizer=__webpack_require__(153),component=Object(componentNormalizer.a)({},(function(){var _h=this.$createElement;return(this._self._c||_h)("Box",{staticClass:"layout"},[this._t("default")],2)}),[],!1,null,"064fe2c2",null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{Box:__webpack_require__(982).default}),__vuedocgen_export_0.__docgenInfo={displayName:"TheLayout",description:"",tags:{},slots:[{name:"default"}]}}}]);