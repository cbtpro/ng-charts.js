'use strict';
adminModule.directive('ngCharts', function() {
	return {
		restrict : 'EA',
		//template : '<canvas width="800" height="400"></canvas>',
		scope : {
			id : '@',
			type : '=',
			label: '=',
			labels: '=',
			data: '='
		},
		link : function($scope, element, attrs, controller) {
			var ctx = document.getElementById($scope.id);
			var canvas;
			if(ctx.nodeName !== 'CANVAS') {
				canvas = document.createElement('canvas');
				ctx.appendChild(canvas);
			}
			var backgroundColor = [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)',

				'rgba(0, 204, 0, 0.2)',
				'rgba(153, 102, 102, 0.2)',
				'rgba(153, 153, 51, 0.2)',
				'rgba(204, 0, 0, 0.2)',
				'rgba(255, 255, 51, 0.2)',
				'rgba(102, 102, 153, 0.2)'
			];
			var borderColor = [
				'rgba(255,99,132,1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				

				'rgba(0, 204, 0, 1)',
				'rgba(153, 102, 102, 1)',
				'rgba(153, 153, 51, 1)',
				'rgba(204, 0, 0, 1)',
				'rgba(255, 255, 51, 1)',
				'rgba(102, 102, 153, 1)'
			];
			var options = {
				type: $scope.type || 'bar',
				data: {
					labels: $scope.labels,
					datasets: function() {
						var datasets = [];
						for(var i=0;i<$scope.data.length;i++) {
							var dataset = {
								label: $scope.label[i],
								data: $scope.data[i],
								backgroundColor: backgroundColor[i],
								borderColor: borderColor[i],
								borderWidth: 1
							};
							datasets.push(dataset);
						}
						return datasets;
					}()
				},
				options: {
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero:true
							}
						}]
					}
				}
			};
			var myChart = new Chart(canvas || ctx, options);
		}
	};
});