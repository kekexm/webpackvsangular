import './tips.css';
import tpl from './tips.html';
Ctrl.$inject = ['$interval'];
// @针对的是字符串  =针对的是对象
export default function Ctrl($interval) {
	return {
		restrict: 'AE', //属性
		template: tpl,
		require:'?ngModel',  
		// replace:true,
		scope: {
			obj2:'=',
			other:'&',
			obj:'=',//针对的是对象
			no:'@'//针对的是字符串
		},
		link: function(scope, ele, attrs,ngModel) {
			console.log('scope***:', scope);
			console.log('ele***:', ele);
			console.log('ele***html:', ele.html());
			// console.log('ele***$:', $(ele));
			// console.log('ele***$***html:', $(ele).html());
			console.log('attrs**:', attrs);
			if(!!ngModel){console.log('ngModel**:', ngModel)
				console.log(ngModel.$setViewValue('1235'));
				// scope.$apply(); 
			};
			// http://bijian1013.iteye.com/blog/2110609

			var objjj = {name:'index'};
			var aaa;
			scope.$eval(aaa = 3+4)
			console.log(aaa)
			console.log('关于&的方式：',scope.other)
			console.log('关于=的方式：',scope.obj)
			console.log('关于@的方式：',scope.no)
			console.log('888888888888888888',scope.obj2)

			scope.other(({addr:'1234'}));
			//函数参数必须为对象，切对象的属性和 引用本指令的 函数的参数一致
			//content.html <tip no='how' obj="$ctrl.obj" other="$ctrl.todirective(addr)"></tip>


			var timer = $interval(function() {
				scope.num = Math.random().toFixed(3);
			}, 1000);
			$(".tip-box h5").hover(function() {
				$interval.cancel(timer);
			}, function() {
				timer = $interval(function() {
					scope.num = Math.random().toFixed(3);
				}, 1000);
			});

			scope.dianji = function(){
				scope.obj2++;
			}
		}
	}
}