import csCtrl from './common.service.js';
export default angular.module('app.cs',[])
.config(['$provide',function($provide){
	$provide.service('commonService',csCtrl)
}]).name;