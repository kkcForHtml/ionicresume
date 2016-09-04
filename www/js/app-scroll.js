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
.controller('myctr',['$scope','$ionicScrollDelegate',function ($scope,$ionicScrollDelegate) {
	//返回顶部
	$scope.backtop = function () {
		//过渡效果 true
		$ionicScrollDelegate.scrollTop(true);
	}
	$scope.tobottom = function () {
		//过渡效果 true
		$ionicScrollDelegate.scrollBottom(true);
	}
	$scope.scrollTo = function () {
		//过渡效果 true
		$ionicScrollDelegate.scrollTo(0,200,true);
	}
	$scope.scrollBy = function () {
		//过渡效果 true
		$ionicScrollDelegate.scrollBy(0,30,true);
	}
	$scope.zoomTo = function () {
		$ionicScrollDelegate.zoomTo(3,true);
		
	}
	$scope.zoomBack = function () {
		$ionicScrollDelegate.zoomTo(1,true);
		
	}
	$scope.zoomBy = function () {
		$ionicScrollDelegate.zoomBy(1.2,true);
		
	}
	$scope.freez = false
	$scope.freezeAllScrolls = function () {
		$scope.freez = !$scope.freez 
		$ionicScrollDelegate.freezeAllScrolls($scope.freez);
		
	}
	$scope.getScrollPosition = function () {
		var pos = $ionicScrollDelegate.$getByHandle('small-handle').getScrollPosition();
		console.log(pos);
	}
	//组滚动块
	$scope.backmainscroll = function () {
		$ionicScrollDelegate.$getByHandle('main-handle').scrollTop(true);
	}
	//子滚动块
	$scope.backsmallscroll = function () {
		$ionicScrollDelegate.$getByHandle('small-handle').scrollTop(true);
	}	
}])
