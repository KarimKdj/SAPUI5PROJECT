sap.ui.define([
	"sapui5/SAPUI5_FINAL/model/GroupSortState",
	"sap/ui/model/json/JSONModel",
	"sap/ui/thirdparty/sinon",
	"sap/ui/thirdparty/sinon-qunit"
], function (GroupSortState, JSONModel) {
	"use strict";

	QUnit.module("GroupSortState - grouping and sorting", {
		beforeEach: function () {
			this.oModel = new JSONModel({});
			// System under test
			this.oGroupSortState = new GroupSortState(this.oModel, function () {});
		}
	});

	QUnit.test("Should always return a sorter when sorting", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.sort("ProjectId").length, 1, "The sorting by ProjectId returned a sorter");
		assert.strictEqual(this.oGroupSortState.sort("Titel").length, 1, "The sorting by Titel returned a sorter");
	});

	QUnit.test("Should return a grouper when grouping", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.group("ProjectId").length, 1, "The group by ProjectId returned a sorter");
		assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
	});

	QUnit.test("Should set the sorting to ProjectId if the user groupes by ProjectId", function (assert) {
		// Act + Assert
		this.oGroupSortState.group("ProjectId");
		assert.strictEqual(this.oModel.getProperty("/sortBy"), "ProjectId", "The sorting is the same as the grouping");
	});

	QUnit.test("Should set the grouping to None if the user sorts by Titel and there was a grouping before", function (assert) {
		// Arrange
		this.oModel.setProperty("/groupBy", "ProjectId");

		this.oGroupSortState.sort("Titel");

		// Assert
		assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
	});
});