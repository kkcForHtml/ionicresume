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
.controller('backdropCtrl',['$scope','$ionicBackdrop','$timeout',function ($scope,$ionicBackdrop,$timeout) {
	$scope.flag = false;
	$scope.backdropAction = function () {
		//alert(1)
		//开启蒙层 开启几个蒙层就需要释放几个蒙层
		
		$ionicBackdrop.retain()
		$ionicBackdrop.retain()
		$scope.$broadcast('backdrop.show');
		$timeout(function () {
			//释放蒙层
			$ionicBackdrop.release();
			$ionicBackdrop.release();
			
			$scope.$broadcast('backdrop.hide');
		},3000)
	}
	$scope.$on('backdrop.show',function () {
		console.log("show");
		$scope.flag = true
	})
	$scope.$on('backdrop.hide',function () {
		console.log("hide");
		$scope.flag = false
	})	
}])
