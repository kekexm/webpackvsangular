import tpl from './foot.html';

function Ctrl(footser) {
	console.log('$$$$$$$',footser);
	this.name = '2010-2017';
	this.footerOpen = function() {
		window.open('http://sports.qq.com/nba/');
	};
}

export default {
	controller: Ctrl,
	template: tpl
}