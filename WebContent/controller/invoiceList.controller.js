sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sapui5-exploration/model/formatter"
], function (Controller, JSONModel, formatter) {
	"use strict";

	return Controller.extend("controller.invoiceList", {
		
		formatter: formatter,
		onInit : function () {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		}
	});
});