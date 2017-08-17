import './static/css/style.css'; //引入总的样式
import './static/components/jqplugin/css/grumble.min.css'; //jquery插件 静态
import './static/components/jqplugin/js/jquery.grumble.min.js';
import './static/css/style.scss';
// import './static/css/style.less'; 在style.css 通过@import引入
$('.jq-plugin').grumble({
	text: 'jQuery 插件提示框',
	angle: 25,
	distance: 70,
	showAfter: 10
});

angular.module('myApp',['ui.router'])
.config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	var left = {
		name:'left',
		url:'/left',
		template:'<h3>左边</h3>'
	};

	var right = {
		name:'right',
		url:'/right',
		template:'<h3>右边</h3>'
	}

	$stateProvider.state(left);
	$stateProvider.state(right);
	$locationProvider.html5Mode(true);//去掉url中的#，<head></head>标签里面需要添加<base href="/">
}])