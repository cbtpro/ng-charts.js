'use strict';
var adminModule = angular.module('demoApp' ,[]);
adminModule.controller('demoController', function($scope) {
	$scope.charts = {};
	$scope.charts.type = 'bar';
	$scope.charts.label = ['# of 女神', '# of 御姐', '萝莉'];
	$scope.charts.labels = ['身高', '体重', '年龄', '胸围', '腰围', '臀围'];
	$scope.charts.data = [
		[165, 50, 22, 88, 56, 50],
		[165, 45, 24, 90, 60, 49],
		[150, 40, 20, 67, 49, 45]
	];
});