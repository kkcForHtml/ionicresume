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
//constant 定义一个全局的loading配置
.constant('$ionicLoadingConfig',{
	noBackdrop:true,
	templateUrl:'tpl/loading.html',
	//duration:'2000',
	animation:'fade-in',
	delay:'500'	
})
.controller('actionsheetCtrl',['$scope','$ionicActionSheet','$timeout',function ($scope,$ionicActionSheet,$timeout) {
	$scope.showActionsheet = function () {
		$ionicActionSheet.show({
			titleText:'编辑相册',
			buttons:[
				{text:'分享'},
				{text:'移除'}
			],
			buttonClicked:function (index) {
				switch (index){
					case 0:
						console.log('分享成功');
						break;
					case 1:
						console.log('移除成功');
						break;						
					default:
						break;
				}
			},
			destructiveText:'删除',
			destructiveButtonClicked:function () {
				
			},
			cancelText:'取消',
			cancel:function () {
				return false;
			},
			cancelOnStateChange:true,
			cssClass:'as',
		})
	}
}])
