import tpl from './content.detail.html';

Ctrl.$inject = ['$stateParams'];
function Ctrl($stateParams){
	console.log('content详情页面：',$stateParams);
	this.like = '爱好详情';
	this.hate = '讨厌详情';
	const ctrl = this;
	ctrl.name = $stateParams.name;
	ctrl.age = $stateParams.age;
}
export default {
	controller:Ctrl,
	template:tpl
}