sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
   "use strict";
   return UIComponent.extend("sapui5-exploration.Component", {
            	metadata : {
            		rootView: {
            			viewName: "mvc.view.App",
            			type: sap.ui.core.mvc.ViewType.JS
            		},
//            		viewType: sap.ui.core.mvc.ViewType.JS         			
//            		viewType: "JS View"  
            		routing: {
            			config:{
            				routerClass: "sap.m.routing.Router",
                            viewType: "JS",
                            viewPath: "mvc.view.mainView",
                            controlId: "app",
                            controlAggregation: "pages"
//                            targetAggregation: "pages",
//                            clearTarget: false
                        },
            			routes:[
            			        {
            				patern:"",
            				name: "mainView",
            				target: "mainView"
            			        },
            			        {
                    				patern:"view2",
                    				name: "view2",
                    				target: "view2"
                    			        }
            			],
            			targets:{
            				"mainView": {
            					viewName: "mainView"
            				},
            				"view2": {
            					viewName: "view2"
            				}
            			}
            		}
            	},
      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         this.getRouter().initialize();
         // set data model
         var oData = {
            recipient : {
               name : "World"
            }
         };
         var oModel = new JSONModel(oData);
         this.setModel(oModel);

         // set i18n model
         var i18nModel = new ResourceModel({
            bundleName : "mvc.i18n.i18n"
         });
         this.setModel(i18nModel, "i18n");
      }
   });
});