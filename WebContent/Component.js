sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "controller/helloDialog",
   "sap/ui/model/resource/ResourceModel",
   "sap/ui/model/odata/v2/ODataModel"
], function (UIComponent, JSONModel, helloDialog, ResourceModel, ODataModel) {
	"use strict";

	return UIComponent.extend("sapui5-exploration.Component", {

		metadata : {
			manifest: "json"
		},

		init : function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// set data model
			var oData = {
				recipient : {
					name : "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
			
			// set invoice model - local
			var oConfig = this.getMetadata().getConfig();
			var sNamespace = this.getMetadata().getManifestEntry("sap.app").id;
			var oInvoiceModel = new JSONModel(jQuery.sap.getModulePath(sNamespace, oConfig.invoiceLocal));
			
			this.setModel(oInvoiceModel, "invoice");
			
			// set invoice model - remote
//			var oConfig = this.getMetadata().getConfig();
			var oInvoiceModelRemote = new ODataModel(oConfig.invoiceRemote);
			
			this.setModel(oInvoiceModelRemote, "invoiceRemote");
			
			// set dialog
			this.helloDialog = new helloDialog();

			// // set i18n model
			// var i18nModel = new ResourceModel({
			// 	bundleName : "i18n.i18n"
			// });
			// this.setModel(i18nModel, "i18n");

			// create the views based on the url/hash
			this.getRouter().initialize();
		}
	});
});
