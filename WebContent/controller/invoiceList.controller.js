sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sapui5-exploration/model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, JSONModel, formatter, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("controller.invoiceList", {
		
		formatter: formatter,
		onInit : function () {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},
		onFilterInvoices : function (oEvent) {

			// build filter array
			var aFilter = [];
			var oFilter = null;
//			var sQuery = oEvent.getParameter("query");
			var sQuery = oEvent.getParameter("newValue");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
				aFilter.push(new Filter("Quantity", FilterOperator.EQ, sQuery));
				
				oFilter = new Filter(aFilter, false);
			}
			
			// filter binding
			var oList = this.getView().byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(oFilter);			
		},
		onFilterInvoicesRemote : function (oEvent) {

			// build filter array
			var aFilter = [];
			var oFilter = null;
//			var sQuery = oEvent.getParameter("query");
			var sQuery = oEvent.getParameter("newValue");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
				aFilter.push(new Filter("Quantity", FilterOperator.EQ, sQuery));
				
				oFilter = new Filter(aFilter, false);
			}
			
			// filter binding
			var oList = this.getView().byId("invoiceListRemote");
			var oBinding = oList.getBinding("items");
			oBinding.filter(oFilter);			
		}
	});
});