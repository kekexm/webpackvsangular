import contentCtrl from './content.controller.js';
import contentTpl from './content.temp.html';
Router.$inject = ['$stateProvider'];
export default function Router($stateProvider) {
	$stateProvider.state('app.content', {
		url: '/content',
		component: 'content', //template:'',controller:'ctrl'?
		resolve: {
			contentData: ['contentServie', function(contentServie) {
				return contentServie.method2().then(function(res) {
					console.log('contentResolve', res);
					return res; //必须return 才能收到
				})
			}]
		}
	});
	$stateProvider.state('app.content.detail', {
		url: '/dtl/{key}/{name}/{age}',
		//component: 'contdetail',  用这种方式也可以
		template: '<contdetail></contdetail>'
	})

	$stateProvider.state('app.content.det', {
		url: '/det',
		template: contentTpl,
		controller: contentCtrl,
		controllerAs:'ctrl',
		resolve: {
			_contentData: ['contentServie', function(contentServie) {
				return {
					time: '2017-08-03'
				}
			}]
		}
	})
}