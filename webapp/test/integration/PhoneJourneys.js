jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"sapui5/SAPUI5_FINAL/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"sapui5/SAPUI5_FINAL/test/integration/pages/App",
	"sapui5/SAPUI5_FINAL/test/integration/pages/Browser",
	"sapui5/SAPUI5_FINAL/test/integration/pages/Master",
	"sapui5/SAPUI5_FINAL/test/integration/pages/Detail",
	"sapui5/SAPUI5_FINAL/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "sapui5.SAPUI5_FINAL.view."
	});

	sap.ui.require([
		"sapui5/SAPUI5_FINAL/test/integration/NavigationJourneyPhone",
		"sapui5/SAPUI5_FINAL/test/integration/NotFoundJourneyPhone",
		"sapui5/SAPUI5_FINAL/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});