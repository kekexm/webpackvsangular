import echarts from './echarts.js';
export default angular.module('app.echarts', [])
	.directive('echartsdire', echarts).name;