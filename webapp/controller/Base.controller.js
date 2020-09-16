sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ToolDev.Toolpage.controller.Base", {
		onInit: function () {

		},
		onitemPressed: function(oEvt){
			
			var oKey = oEvt.getParameter("item").getKey();
			this.getOwnerComponent().getRouter().navTo(oKey);
		},
		
		onHomePressed: function(){
		var oHome = "Home";
		this.getOwnerComponent().getRouter().navTo(oHome);
		},
		
		onSlide: function(){
			var oTool = this.byId("toolPage");
		//	var oSelect =this.byId("sideNavigation");
		
			var oSlide = oTool.getSideExpanded();
			this._setToggleButtonTooltip(oSlide);
		//	oTool.setExpanded(!oSlide);
			oTool.setSideExpanded(!oTool.getSideExpanded());
		},
		
		_setToggleButtonTooltip: function (bLarge) {
			var oToggleButton = this.byId('navigation');
			if (bLarge) {
				oToggleButton.setTooltip('Large Size Navigation');
			} else {
				oToggleButton.setTooltip('Small Size Navigation');
			}
		}
	});
});