
Ctrl.$inject = ['_contentData','$scope'];
export default function Ctrl(_contentData,$scope){
	console.log('tplVsCtrl',_contentData);
	$scope.time = _contentData.time;
	this.hello = '您好：'
}