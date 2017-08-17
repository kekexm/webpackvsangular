import './style.css';
// import csModule from '../../common/service/common.service.js';//可以不用引
// 入，login模块已经引入，可共用。
import contentService from './content.service.js';
import router from './content.router.js';
import contentComp from './content.component.js';
import contentdetailComp from './content.detail.js';
console.log('%%%%%%%%%%%%%%%%%%%%',contentdetailComp)
var content = angular.module('app.content', [])
	.config(router)
	.config(['$provide', function($provide) {
		$provide.service('contentServie',contentService);
	}])
	.component('content',contentComp)
	.component('contdetail',contentdetailComp);

export default content.name;