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
.controller('popupCtrl',['$scope','$ionicPopup',function ($scope,$ionicPopup) {
	$scope.showPopup = function () {
		$scope.data = {}
		var	that = $scope;
		var mypopup = $ionicPopup.show({
			template:'<input type="password" ng-model=data.wifi />',
			title:'请输入WiFi密码',
			subTitle:'6-8位密码',
			//表示scope作用域链接
			scope:$scope,
			buttons:[
				{text:'<b>确定</b>',type:'button-calm',onTap:function (e) {
					if (that.data.wifi) {
						console.log(that.data.wifi);
						return that.data.wifi;
					}else{
						e.preventDefault();
					}
				}},
				{text:'<b>取消</b>',type:'button-dark'},
			],
			cssClass : 'pop',
		})
		mypopup.then(function (res) {
			console.log(res);
		})
//		setTimeout(function () {
//			mypopup.close();
//		},3000)
	}
	$scope.alertPopup = function () {
		var myAlert = $ionicPopup.alert({
			title:'警告',
			subTitle:'必须提示所有人',
			template:'不能吃',
			okText:'知道了',
			okTpye:'button-calm',
			cssClass:'cp'
		})
		myAlert.then(function (res) {
			console.log(res);
		})
	}	
	$scope.confirmPopup = function () {
		var mycomfirm = $ionicPopup.confirm({
//			title:'提示',
//			subTitle:'土豪你的流量已经操了，还继续吗？',
			okText:'继续观看',
			okType:'button-positive button-outline',
			cancelText:'取消观看',
			cancelType:'button-dark button-outline',
			cssClass:'cf',
			templateUrl:'tpl/confirm.html'
		})
		mycomfirm.then(function (res) {
			console.log(res);
		})
	}
	$scope.promptPopup = function () {
		$ionicPopup.prompt({
			title:'密码验证',
			subTitle:'请输入密码',
			okText:'确认',
			okType:'button-royal button-outline',
			inputType:'password',
			maxLength:'10',
			defaultText:'abc'
		}).then(function (res) {
			console.log(res);
		})
	}
}])
