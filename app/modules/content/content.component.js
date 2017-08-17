import tpl from './content.html';

Ctrl.$inject = ['$state'];

function Ctrl($state) {
	const ctrl = this;
	console.log('from resolve data:', ctrl.contentData); //这个里面没有数据
	ctrl.$onInit = function() { //必须有这个初始化钩子，才能获得数据。
		console.log('from resolve data:', ctrl.contentData);
		ctrl.like = ctrl.contentData.like;
		ctrl.hate = ctrl.contentData.hate;

		ctrl._text = '通过属性值：=';
		ctrl.obj = {
			hehe:'好吧^_^'
		};
		ctrl.todirective = function(address){
			console.log(address);
		}

		ctrl.changeNum = function(){
			console.log('来自指令值的变化(会跟随指令部分的操作而变化):',ctrl.val);
		}
		ctrl.godetail = function() {
			$state.go('app.content.detail', {
				key: 2,
				name: 'Jack',
				age: 15
			});
		}
		this.key = '和directive相互绑定的ngModel'
	}
}

export default {
	controller: Ctrl,
	template: tpl,
	bindings: {
		contentData: '<'//通content.router.js  resolve 可以先获取数据，然后再加载。页面
	}
}