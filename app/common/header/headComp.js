import tpl from './head.html';
// console.log(tpl);
Ctrl.$inject = ['headerser'];
function Ctrl(headerser) {
	//也能够将头部服务注入进来
	console.log(headerser);
	this.name = headerser.name;
	this.arr = ['less', 'scss'];
}

export default {
	controller: Ctrl,
	template: tpl
}