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
.controller('myctr',['$scope','$ionicListDelegate','$http','$timeout',function ($scope,$ionicListDelegate,$http,$timeout) {
var items = [
    {
      title: 'item1',
      description: 'item1 description'
    },
    {
      title: 'item2',
      description: 'item2 description'
    },
    {
      title: 'item3',
      description: 'item3 description'
    },
    {
      title: 'item4',
      description: 'item4 description'
    },
    {
      title: 'item5',
      description: 'item5 description'
    },
    {
      title: 'item6',
      description: 'item6 description'
    },
    {
      title: 'item7',
      description: 'item7 description'
    },
    {
      title: 'item8',
      description: 'item8 description'
    },
    {
      title: 'item9',
      description: 'item9 description'
    },
    {
      title: 'item10',
      description: 'item10 description'
    }
  ];
	
	$scope.listData = items;
	$scope.showDelete = true;
	$scope.showReorder = true;
	$scope.moveItem = function (item,$from,$to) {
		this.listData.splice($from,1);
		this.listData.splice($to,0,item);
	}
	$scope.removeItem = function (item) {
		this.listData.splice(item,1)
	}
	$scope.showDeleteButtons = function () {
		//ionic 内置事件委托服务对象
		this.showDelete = !this.showDelete;
		$ionicListDelegate.showDelete(this.showDelete)
	}
	$scope.showAllrg = function () {
		//getByHandle 获取委托好的手柄
		$scope.showReorder = !$scope.showReorder;
		$ionicListDelegate.$getByHandle('my-handle').showReorder($scope.showReorder);
	}
	//下拉刷新
	$scope.pullingText = '下拉刷新';
	$scope.dorefresh = function () {
		$timeout(function () {
			$http({
				url:'../mock/new-items.json',
				method:'get',
			}).success(function (data) {
				console.log(data);
				$scope.listData = data
			}).finally(function () {
				$scope.$broadcast('scroll.refreshComplete')
			})			
		},2000)
	}
	$scope.$on('scroll.refreshComplete',function () {
		$scope.pullingText = '刷新成功';
		document.getElementsByClassName('text-pulling')[0].innerHTML = '下拉刷新';
	})
	$scope.dopulling = function () {
		console.log("1");
		document.getElementsByClassName('text-pulling')[0].innerHTML = '松开刷新';
	}
	//加载更多
	$scope.loadmore = function () {
		$timeout(function () {
			$http({
				url:'../mock/more-items.json',
				method:'get'
			}).success(function (data) {
				$scope.listData = $scope.listData.concat(data);
				$scope.$broadcast('scroll.infiniteScrollComplete')
			})			
		},1000)

	}
}])

