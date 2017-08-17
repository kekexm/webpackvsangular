import './alert.css';
import tpl from './alert.html';
function Ctrl(){
	const ctrl = this;
	ctrl.title = '我是公共弹窗组件';
	ctrl.text = '';
	ctrl.myLog = function(){
		console.log(ctrl.text)
		const opts = {
			_data:{
				text:ctrl.text
			}
		}
		ctrl.toLog(opts);
	}
	ctrl.$onInit = function(){
		console.log('data from Father!',ctrl.staticData);
		console.log('data from Father2!',ctrl.staticData2);
		ctrl.name = ctrl.staticData.staticA.name;
		ctrl.age = ctrl.staticData.staticA.age;
		ctrl.B = ctrl.staticData2;
	}
}

export default{
	controller: Ctrl,
	template:tpl,
	bindings:{
		toLog:'&',//函数方法向父元素传递数据 &
		staticData:'<',//单项绑定，将父元素数据传递到组件 一般不用"="
		staticData2:'<'
	}
}