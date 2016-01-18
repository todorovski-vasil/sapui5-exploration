sap.ui.jsview("sapui5-exploration.view.mainView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sapui5-exploration.view.mainView
	*/ 
	getControllerName : function() {
		return "sapui5-exploration.controler.mainView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf sapui5-exploration.controler.mainView
	*/ 
	createContent : function(oController) {
		var buttonGoToPage2 = new sap.m.Button({
	    	text : "Go to Page 2",
			press : function() {
				oController.onGoToPage2_pressed()
			}
		})
		
		var inputField = new sap.m.Input("input1", {
			value : "{/recipient/name}",
			description : "Hello {/recipient/name}",
			valueLiveUpdate : true,
			width : "60%",
			liveChange : function() {
				oController.onInputChanged()
			}
		})
				
		return new sap.m.Page({
			title: "{i18n>title}",
			content: [
			          buttonGoToPage2,
			          inputField
			          ]
		});
	}
});