sap.ui.jsview("view.mainView", {

	/** Specifies the Controller belonging to this View.
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sapui5-exploration.view.mainView
	*/
	getControllerName : function() {
		return "controller.mainController";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	* Since the Controller is given to this method, its event handlers can be attached right away.
	* @memberOf sapui5-exploration.controler.mainView
	*/
	createContent : function(oController) {
		var ch = sap.ui.getCore().byId('btn');
		if (ch == undefined) {
			var buttonGoToPage2 = new sap.m.Button('btn',{
		    	text : "Go to Page 2",
				class : "sapUiSmallMarginEnd",
				press : function() {
					oController.onGoToPage2_pressed()
				}
			});
			var inputField = new sap.m.Input("input1", {
				value : "{/recipient/name}",
				// description : "Hello {/recipient/name}",
				valueLiveUpdate : true,
				width : "60%",
				liveChange : function() {
					oController.onInputChanged()
				}
			});

			var text = new sap.m.Text({
				text : "Hello {/recipient/name}",
				class : "sapUiSmallMargin"
			});

			var panel = new sap.m.Panel("panel",{
				headerText : "{i18n>helloPanelTitle}",
				class : "sapUiResponsiveMargin",
				width : "auto",
				content : [
					buttonGoToPage2,
					inputField,
					text
				]
			});


	//		var page = new sap.m.Page({
	//			title: "naslov"
	//		});
	//		page.addContent(buttonGoToPage2);
	//		page.addContent(inputField);
	//		return page;
			var page = new sap.m.Page('idPage',{
				// title: "{i18n>title}",
				title : "{i18n>homePageTitle}",
				content : [
					panel
				]
			}).addStyleClass('idPage');

		}


		// var view2 = sap.ui.getCore().('view.view2');
		// page.addContent(view2);

		return new sap.m.App({
			pages : page
		});
	}
});
