
angular.module('blogApp').controller('postsController', function($scope,$http){

	$http.get('posts.json').success(function(data) {
		$scope.posts = data.posts;
	});
	
});