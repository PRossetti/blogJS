var app = angular.module('blogApp', ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/layout/home');

	$stateProvider
		.state('layout', {
			url: '/layout',
			templateUrl: 'partial-index.html',
			controller: 'layoutController'
		})		

		.state('layout.home', {
			url: '/home',
			templateUrl: 'partial-home.html',
			controller: 'homeController'
		})

		.state('layout.posts', {
			url: '/posts',
			templateUrl: 'posts.html',
			controller: 'postsController'
		})

		.state('layout.crear_post', {
			url: '/crear_post',
			templateUrl: 'crear_post.html',
			controller: 'crearPostController'
		});

}); // closes $routerApp.config()