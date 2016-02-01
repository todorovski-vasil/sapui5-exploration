sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel){

	var core = sap.ui.getCore();

	return Controller.extend("controller.mainController", {

		/**
		* Called when a controller is instantiated and its View controls (if available) are already created.
		* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		* @memberOf controller.mainController
		*/
//		onInit: function() {
//
//		},

		/**
		* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		* (NOT before the first rendering! onInit() is used for that one!).
		* @memberOf controller.mainController
		*/
//		onBeforeRendering: function() {
//	
//		},

		/**
		* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		* This hook is the same one that SAPUI5 controls get after being rendered.
		* @memberOf controller.mainController
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
		* @memberOf controller.mainController
		*/
//		onExit: function() {
//	
//		}


		/**
		* Called when the Button pointing to View2 is pressed.
		* @memberOf controller.mainController
		*/
		onGoToPage2_pressed: function () {
			// navigate to page2
			// var app = this.getView();
			// app.to("view.view2");
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail");
		},

		/**
		* Called when Input field value gets changed.
		* @memberOf controller.mainController
		*/
		onInputChanged: function() {
			// read msg from i18n model
	        var oBundle = this.getView().getModel("i18n").getResourceBundle();
	        var sRecipient = this.getView().getModel().getProperty("/recipient/name");
//	        var sRecipient = sap.ui.getCore().byId('input1').getValue();
//	        var sRecipient = core.byId('input1').getValue();
	        var sMsg = oBundle.getText("helloMsg", [sRecipient, "today"]);
	        // show message
	        MessageToast.show(sMsg, {
				duration: 2000,
				animationDuration: 500
	        });
		},
		onOpenDialog : function () {
			this.getOwnerComponent().helloDialog.open(this.getView());
		}
	});
});
