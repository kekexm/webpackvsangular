Router.$inject = ['$stateProvider'];
export default function Router($stateProvider) {
	$stateProvider.state('app.login', {
		url: '/login',
		component: 'login'
	})
}