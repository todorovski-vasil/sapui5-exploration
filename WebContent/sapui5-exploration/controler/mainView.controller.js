sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel){
	return Controller.extend("sapui5-exploration.controler.mainView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sapui5-exploration.mainView
*/
		onInit: function() {
			// set data model on view
	         var oData = {
	            recipient : {
	               name : "Vasil"
	            }
	         };
	         var oModel = new JSONModel(oData);
	         this.getView().setModel(oModel);
		},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sapui5-exploration.mainView
*/
	//	onBeforeRendering: function() {
	//
	//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sapui5-exploration.mainView
*/
		onAfterRendering: function() {
//			jQuery.sap.require("sap/m/MessageToast");
			MessageToast.show("Zdr", {
				duration: 2000,
				animationDuration: 500
			});
		},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sapui5-exploration.mainView
*/
	//	onExit: function() {
	//
	//	}

	
/**
* Called when the Button pointing to View2 is pressed.
* @memberOf sapui5-exploration.controler.mainView
*/	
		onGoToPage2_pressed: function () {
			// navigate to page2
			app.to("idView2");
		}
	});
});