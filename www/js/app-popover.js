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
.controller('popoverCtrl',['$scope','$ionicPopover',function ($scope,$ionicPopover) {
var template="<ion-popover-view><ion-header-bar class='bar-balanced'><h3 class='title'>popover标题</h3></ion-header-bar><ion-content>文本模板</ion-content></ion-popover-view>"	
	//引入popover 模板
	$scope.popover = $ionicPopover.fromTemplate(template,{
		scope:$scope,
	})
//	$ionicPopover.fromTemplateUrl('popover.html',{
//		scope:$scope
//	}).then(function (popover) {
//		$scope.popover = popover;
//		$scope.username = 'asdasd';
//	})
	//打开popover
	$scope.openPopover = function ($event) {
		$scope.popover.show($event);
	}

}])
