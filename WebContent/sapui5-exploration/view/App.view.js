sap.ui.jsview("mvc.view.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sapui5-exploration.view.mainView
	*/ 
	getControllerName : function() {
		return "mvc.controler.mainView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf sapui5-exploration.controler.mainView
	*/ 
	createContent : function(oController) {
		var app = new sap.m.App('app');
		return app;
		
	}
});