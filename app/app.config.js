var tpl = `
			<header></header>
			<div class="container con-box">
				<div class="row">
					<div class="col-sm-2 col-sm-offset-3">
						{{ctrl.opt_1}}
					</div>
					<div class="col-sm-2 col-sm-offset-2">
						{{ctrl.opt_2}}
					</div>
				</div>
				<hr />
				<div class="row">
					<div class="col-sm-2 col-sm-offset-3">
						<a ui-sref="app.left" ui-sref-active="active">left</a>
					</div>
					<div class="col-sm-2 col-sm-offset-2">
						<a ui-sref="app.right" ui-sref-active="active">right</a>
					</div>
				</div>
				<hr />
				<div class="row">
					<div class="col-sm-2 col-sm-offset-3">
						<a ui-sref="app.login" ui-sref-active="active">login</a>
					</div>
					<div class="col-sm-2 col-sm-offset-2">
						<a ui-sref="app.content" ui-sref-active="active">content</a>
					</div>
				</div>
				<ui-view></ui-view>
			</div>
			<footer></footer>
			`;

function Ctrl(serformhead, headerser) {
	console.log('入口注册服务**************:', serformhead);
	this.method = serformhead.method;
	this.opt_1 = this.method();
	this.opt_2 = headerser.name;
	console.log('入口来自公共头部的服务**************:', headerser);

}
config.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', '$provide'];

export default function config($stateProvider, $locationProvider, $urlRouterProvider, $provide) {

	//入口文件注册一个服务，该服务来自common模块中的header模块，angular.module('myApp', ['ui.router', login, content, common])，也可以注入进来
	$provide.service('serformhead', ['headerser', function(headerser) {
		this.method = function() {
			console.log('入门的配置文件注册一个服务:serformhead', headerser);
			return '来自头部公共服务';
		}
	}]);
	$stateProvider.state({
		name: 'app',
		url: '/app',
		template: tpl,
		controller: Ctrl,
		controllerAs:'ctrl'
	})

	//****************************可以在这里面写路由***************************
	var left = {
		name: 'app.left',
		url: '/left',
		template: '<div class="container box"><h3>左边</h3></div>'
	};

	var right = {
		name: 'app.right',
		url: '/right',
		template: '<div class="container box"><h3>右边</h3></div>'
	}
	$stateProvider.state(left);
	$stateProvider.state(right);

	//****************************可以在这里面写路由***************************

	$urlRouterProvider.otherwise('/app/login');
	$locationProvider.html5Mode(true); //去掉url中的#，<head></head>标签里面需要添加<base href="/">
}