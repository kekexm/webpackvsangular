
#########说明不是很详细详情见https://github.com/kekexm/webpack##########

index.bak.html和app中的index.bak.js不参与到项目中，只是和index.html的对比。

操作步骤：

npm install

npm run dev 本地调试

npm run build 打包压缩

思路：

webpack会自动将js代码，打包添加到index.html中,修改index.html不会自动刷新，所以直接ui-view>ui-view

人口文件app/index.js  

公共头部，尾部，组件等都是单独的模块，每个模块包含：service，路由，样式，组件等。注入到用一个模块中

common/index.js
		
modules部分login，content和common 注入到入口文件index.js中，这样都能共享定义的服务，组件，指令等。

angular引入第三方插件echarts：npm install echarts --save    new webpack.ProvidePlugin({ $: 

'jquery', jQuery: 'jquery', jquery: 'jquery','window.jQuery': 'jquery',echarts: 'echarts' })

全局的jquery   echarts也需要全局变量，否则无法获取到echarts对象 

http://blog.csdn.net/vuturn/article/details/51272816


原生echarts 写法：https://github.com/ecomfe/echarts  

http://echarts.baidu.com/echarts2/doc/example/tree.html

var myChart = echarts.init(document.getElementById('main'));

        var option = {

            ...

        }

myChart.setOption(option);


用angular 引入需要指令 directive  详情请看app/common/directives/echarts

echarts图参数在login.component.js里面

指令在login.html 页面 h4标签，需要加上--- echartsdire obj="$ctrl.echartsOpts" style="height: 

200px;width: 400px;"   style是要控制echarts图宽高的宽高的
