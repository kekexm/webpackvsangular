Ctrl.$inject = ['$interval'];
// @针对的是字符串  =针对的是对象
export default function Ctrl($interval) {
	return {
		restrict: 'AE', //属性
		// require:'?ngModel',  
		// replace:true,
		scope: {
			obj2:'=',
			other:'&',
			obj:'=',//针对的是对象
			no:'@'//针对的是字符串
		},
		link: function(scope, ele, attrs,ngModel) {
			console.log('echarts***********',scope)
			console.log(ele.jquery)//jquery版本 1.12.4
			console.log(parseInt(ele.jquery))//jquery版本 1
			console.log('echarts***********',ele.text())//jquery 对象
			console.log('echarts***********',attrs)
			console.log('echarts***********',ngModel)


			console.log('echarts----------option',scope.obj.option);
			console.log(echarts)

			//ele 转为dom 对象  ele[0]
			echarts.init(ele[0]).setOption(scope.obj.option);
		}
	}
}