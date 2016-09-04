angular.module('starter.controller',[])
.controller('tabctr',function ($scope,$rootScope) {
	$scope.tabName = '职员'
	$scope.homeTab = '首页'
	$scope.myTab = '我的'
	$rootScope.ontabSelect = function (data) {
		console.log("11");
		$rootScope.$broadcast('select1',data)
	}
})
.controller('myctr',['$scope','$state','$ionicListDelegate',function ($scope,$state,$ionicListDelegate) {
	$scope.title = '职员'
	$scope.$on("select1",function (e,data) {
		$scope.title = data;
	})
	
	$scope.godesc = function (name) {
		$state.go('tabs.desc',{
			desc:name
		})
	}
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
	$ionicListDelegate.showDelete(false)
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
}])
.controller('wodectr',['$scope','$ionicTabsDelegate',function ($scope,$ionicTabsDelegate) {
	$scope.showTabsIndex = function () {
		var oIndex = $ionicTabsDelegate.selectedIndex();
		console.log(oIndex);
	}
	$scope.enterTab = function (index) {
		$ionicTabsDelegate.select(index,true)
	}
	$scope.showTabs = true;
	$scope.showBars = function () {
		$scope.showTabs = !$scope.showTabs
		$ionicTabsDelegate.showBar($scope.showTabs)
	}	
}])
.controller('homectr',function () {
	
})
.controller('detailCtrl',function ($scope,$stateParams) {
	$scope.oIndex = $stateParams.id*1+1;
})
.controller('secretCtrl',function ($scope,$stateParams) {
	$scope.oIndex1 = $stateParams.id*1;
})
.controller('descCtrl',function ($scope,$stateParams) {
	$scope.itemifos = $stateParams.desc;
})