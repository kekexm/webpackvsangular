import './static/bootstrap/css/bootstrap.min.css';
import './static/css/style.css'; //引入总的样式
import './static/components/jqplugin/css/grumble.min.css'; //jquery插件 静态
import './static/components/jqplugin/js/jquery.grumble.min.js';
// import './static/css/style.scss';
// import './static/css/style.less'; 在style.css 通过@import引入
$('.jq-plugin').grumble({
	text: 'jQuery 插件提示框',
	angle: 25,
	distance: 70,
	showAfter: 10
});
// console.log($('.jq-plugin').grumble)
import config from './app.config';
import login from './modules/login';
import content from './modules/content';
import common from './common';

//将模块注入到依赖中 如login  那么他的路由一起打包过来
angular.module('myApp', ['ui.router', login, content, common])
	.config(config)
	.run(['$rootScope','$location',function($rootScope,$location){
		$rootScope.$on('$locationChangeStart',function(a,b,c,d,e){//监听路由改变
			console.log('路由change：');
			console.log(a);
			console.log(b);
			console.log(c);
			console.log(d);
			console.log(e);
			console.log($location.path());
		})
	}])
//**************开始进入不会全部加载，以后会根据路由的切换，按需加载*****************
var myKey = {
	name:'白日依山尽'
}
var _key = myKey.name;
console.log('O(∩_∩)O~'+_key+'(⊙o⊙)嗯')
console.log(`O(∩_∩)O~`+_key+`(⊙o⊙)嗯~~~~~`)
console.log('******************************************');
console.log('O(∩_∩)O~${_key}(⊙o⊙)嗯')
console.log(`O(∩_∩)O~${_key}(⊙o⊙)嗯###############`)
