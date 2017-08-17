commonService.$inject = ['$http', '$q'];
export default function commonService($http, $q) {
	var submit = function(type) {
		console.log(type);
		const delay = $q.defer();
		$http({
			// method: type,
			url: 'https://cdn.bootcss.com/Swiper/3.4.2/js/swiper.js'
		}).then(function(res) {
			var data;
			if (type == 'get') {
				data = {
					name: '李雷',
					age: '19',
					like: '韩梅梅',
					password: 'apple'
				}
			} else if (type == 'post') {
				data = {
					hate: '苍蝇',
					like: '小鱼'
				}
			}

			delay.resolve(data);
		}, function(err) {
			delay.reject('******:$http is wrong!');
		})
		return delay.promise;
	}

	return {
		get: function() {
			return submit('get')
		},
		post: function() {
			return submit('post');
		}
	}
}