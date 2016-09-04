// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controller'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function ($stateProvider,$urlRouterProvider) {
	$stateProvider
	.state('tabs',{
		url:'/tab',
		templateUrl:'./tpl/tabs.html',
		controller:'tabctr'
	})
	.state('tabs.home',{
		url:'/home',
		views:{
			'home-tab':{
				templateUrl:'./tpl/home.html',	
			}
		},
	})
	.state('tabs.list',{
		url:'/list',
		views:{
			'list-tab':{
				templateUrl:'./tpl/list.html',
				controller:'myctr'
			}
		}
	})
	.state('tabs.detail',{
		url:'/detail/:id',
		views:{
			'list-tab':{
				templateUrl:'./tpl/detail.html',
				constroller:'detailCtrl'
			}
		}
	})
	.state('tabs.script',{
		url:'/script/:id',
		views:{
			'list-tab':{
				templateUrl:'./tpl/script.html',
				constroller:'secretCtrl'
			}
		}
	})
	.state('tabs.desc',{
		url:'/desc/:desc',
		views:{
			'list-tab':{
				templateUrl:'./tpl/desc.html',
				controller:'descCtrl'
			}
		}
	})
	.state('tabs.my',{
		url:'/my',
		views:{
			'my-tab':{
				templateUrl:'./tpl/my.html',
				controller:'wodectr'
			}
		}
	})
	
	$urlRouterProvider.otherwise('/tab/list')
})
