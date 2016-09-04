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
.controller('modalCtrl',['$scope','$ionicModal',function ($scope,$ionicModal) {
//	var template="<ion-modal-view><ion-header-bar class='bar-balanced'><h3 class='title'>modal标题</h3></ion-header-bar><ion-content>文本模板</ion-content></ion-modal-view>"	
//	//生成modal
//	$scope.modal = $ionicModal.fromTemplate(template,{
//		scope:$scope,
//		animation:'slide-in-up',
//	})
//	$ionicModal.fromTemplateUrl('modal.html',{
//		scope:$scope,
//	}).then(function (modal) {
//		$scope.modal = modal;
//		$scope.username = 'asdasd';
//	})
	$ionicModal.fromTemplateUrl('tpl/modal.html',{
		scope:$scope,
	}).then(function (modal) {
		$scope.modal = modal;
	})
	
	//打开modal
	$scope.openModal = function ($event) {
		$scope.modal.show($event);
//		setTimeout(function () {
//			$scope.modal.hide()
//		},3000)
//		setTimeout(function () {
//			$scope.modal.remove()
//		},3000)
	}
	$scope.hideModal = function ($event) {
		$scope.modal.hide()
	}
	$scope.$on('modal.hidden',function () {
		//alert(1)
		console.log('modal,隐藏了');
	})
	$scope.$on('modal.removed',function () {
		//alert(1)
		console.log('modal,移除了');
	})	
}])
