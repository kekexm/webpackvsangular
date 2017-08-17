import headerComp from './headComp.js';
import headerser from '../service/head.service.js';
console.log(headerser)
var header = angular.module('app.header', [])
	.config(['$provide', function($provide) {
		$provide.service('headerser', [headerser]);
	}])
	.component('header', headerComp);

export default header.name;