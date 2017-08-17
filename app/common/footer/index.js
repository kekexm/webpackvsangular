import footerComp from './footerCmps.js';
var footer = angular.module('app.footer', [])
	.config(['$provide',function($provide){
		$provide.service('footser',['headerser',function(headerser){
			console.log(headerser);
			this.ser = headerser.name;
		}])
	}])
	.component('footer', footerComp);

export default footer.name;