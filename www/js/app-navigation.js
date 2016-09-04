// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

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
		url:'/zxiu',
		abstract:true,
		templateUrl:'tpl/tabs.html',
	})
	.state('tabs.home',{
		url:'/home',
		views:{
			'home-tab':{
				templateUrl:'tpl/home.html',
			}			
		}
	})
	.state('tabs.liebiao',{
		url:'/liebiao',
		views:{
			'home-tab':{
				templateUrl:'tpl/liebiao.html',
				controller:'liebiaoCtrl',
			}			

		}
	})
	.state('tabs.detail',{
		url:'/detail',
		views:{
			'home-tab':{
				templateUrl:'tpl/detail.html',
			}			

		}
	})	
	.state('tabs.list',{
		url:'/list',
		views:{
			'list-tab':{
				templateUrl:'tpl/list.html',
			}			

		}
	})
	.state('tabs.car',{
		url:'/car',
		views:{
			'car-tab':{
				templateUrl:'tpl/car.html',
			}			

		}
	})
	.state('tabs.show',{
		url:'/show',
		views:{
			'show-tab':{
				templateUrl:'tpl/show.html',
			}			

		}
	})
	.state('tabs.stack',{
		url:'/stack',
		views:{
			'show-tab':{
				templateUrl:'tpl/stack.html',
			}			

		}
	})	
	.state('tabs.more',{
		url:'/more',
		views:{
			'more-tab':{
				templateUrl:'tpl/more.html',
			}			

		}
	})
	$urlRouterProvider.otherwise('/zxiu/home');
})
.controller('liebiaoCtrl',['$scope','$ionicNavBarDelegate',function ($scope,$ionicNavBarDelegate) {
	$scope.showButtonFlag = true;
	$scope.showButton = function () {
		//alert(1)
		$ionicNavBarDelegate.showBackButton($scope.showButtonFlag=!$scope.showButtonFlag)
	}
	$scope.titleAlign = function (dir) {
		//alert(1)
		$ionicNavBarDelegate.align(dir)
	}
	$scope.changeTitle = function () {
		$ionicNavBarDelegate.title('我修改了你')
	}
	$scope.showBarFlag = true;
	$scope.showBar = function () {
		$ionicNavBarDelegate.showBar($scope.showBarFlag=!$scope.showBarFlag)
	}
}])
