import './style.css';
import loginComp from './login.component.js';
import csModule from '../../common/service'; //引入最终公共服务模块
import loginService from './login.service.js'; //登录模块服务函数
import router from './login.router.js';
var appLogin = angular.module('app.login', [csModule])
	.config(router)
	.config(['$provide', function($provide) {
		$provide.service('loginSer', loginService);
	}])
	.component('login', loginComp);

export default appLogin.name;