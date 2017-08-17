import tip from './tips.js';
export default angular.module('app.tip', [])
	.directive('tip', tip).name;