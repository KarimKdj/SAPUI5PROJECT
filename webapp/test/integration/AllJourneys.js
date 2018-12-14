jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ProjectSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"sapui5/SAPUI5_FINAL/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"sapui5/SAPUI5_FINAL/test/integration/pages/App",
	"sapui5/SAPUI5_FINAL/test/integration/pages/Browser",
	"sapui5/SAPUI5_FINAL/test/integration/pages/Master",
	"sapui5/SAPUI5_FINAL/test/integration/pages/Detail",
	"sapui5/SAPUI5_FINAL/test/integration/pages/Create",
	"sapui5/SAPUI5_FINAL/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "sapui5.SAPUI5_FINAL.view."
	});

	sap.ui.require([
		"sapui5/SAPUI5_FINAL/test/integration/MasterJourney",
		"sapui5/SAPUI5_FINAL/test/integration/NavigationJourney",
		"sapui5/SAPUI5_FINAL/test/integration/NotFoundJourney",
		"sapui5/SAPUI5_FINAL/test/integration/BusyJourney",
		"sapui5/SAPUI5_FINAL/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});