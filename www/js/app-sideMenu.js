// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])
.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){


$ionicConfigProvider.platform.ios.tabs.style('standard');
$ionicConfigProvider.platform.ios.tabs.position('bottom');
$ionicConfigProvider.platform.android.tabs.style('standard');
$ionicConfigProvider.platform.android.tabs.position('standard');

$ionicConfigProvider.platform.ios.navBar.alignTitle('center');
$ionicConfigProvider.platform.android.navBar.alignTitle('center');

$ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-android-arrow-back');
$ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

$ionicConfigProvider.platform.ios.views.transition('ios');
$ionicConfigProvider.platform.android.views.transition('android');
})
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
	.state('app',{
		url:'/app',
		abstract:true,
		templateUrl:'./template/menu.html',
		controller:'appCtrl'
	})
	.state('app.login',{
		url:'/login',
		views:{
			'menuContent':{
				templateUrl:'./template/login.html',
				//controller:'loginCtrl'
			}
		}
	})
	.state('app.photo',{
		url:'/photo',
		views:{
			'menuContent':{
				templateUrl:'./template/photo.html',
				controller:'photoCtrl'
			}
		}
	})
	.state('app.ewm',{
		url:'/ewm',
		views:{
			'menuContent':{
				templateUrl:'./template/ewm.html'
			}
		}
	})
	.state('app.player',{
		url:'/player',
		views:{
			'menuContent':{
				templateUrl:'./template/player.html',
				controller:'playCtrl'
			}
		}
	})
	.state('app.detail',{
		url:'/detail/:id',
		views:{
			menuContent:{
				templateUrl:'./template/playerDetail.html',
				controller:'detailCtrl'
			}
		}
	})
	.state('app.resume',{
		url:'/resume',
		views:{
			menuContent:{
				templateUrl:'./template/resume.html',
				controller:'resumeCtrl',
			}
		}
	})
	$urlRouterProvider.otherwise('/app/photo')
})
.controller('appCtrl',['$scope','$ionicModal',function ($scope,$ionicModal) {
	var w = document.body.clientHeight ||  window.innerWidth;
	$scope.owidth = w/1.5;
	$ionicModal.fromTemplateUrl('./template/login.html',{
	      scope:$scope,
	      animation:'slide-in-up',
	     }).then(function(modal){
	        $scope.modal = modal;
	     })
	    // 打开modal
	    // $scope.modal.isShown() 表示 modal 显示 
	    $scope.openModal = function($event){
	        $scope.modal.show($event);    
	    }
	
	    $scope.closeModal = function(){
	      $scope.modal.hide();
	    }
	
}])

.controller('loginCtrl',['$scope','$http','$timeout',function ($scope,$http,$timeout) {
	$scope.listData = ['下拉刷新']
	$scope.dorefresh = function () {
		$http({
			url:'mock/mySkill.json',
			method:'get'
		}).success(function (data) {
			$timeout(function () {
				$scope.listData = data;
				document.getElementsByClassName('text-pulling')[0].innerHTML = '下拉刷新';
				$scope.pullingText = '下拉刷新';
			},700)
			console.log($scope.listData[1])
		}).finally(function () {
			$scope.$broadcast('scroll.refreshComplete');
		})
	}
	$scope.pullingText = '下拉刷新';
	$scope.onpulling = function () {
		$scope.pullingText = '下拉刷新';		
		document.getElementsByClassName('text-pulling')[0].innerHTML = '释放刷新'
	}	
}])

.controller('playCtrl',['$scope','Chats',function ($scope,Chats) {
	$scope.playList = Chats.all();
	$scope.remove1 = Chats.remove
}])

.controller('detailCtrl',['$scope','Chats','$stateParams',function ($scope,Chats,$stateParams) {
	console.log($stateParams.id,1);
	$scope.playData = Chats.get($stateParams.id);
}])

.controller('resumeCtrl',function () {
	
})

.controller('photoCtrl',['$scope','$cordovaCamera',function ($scope,$cordovaCamera) {
	$scope.getPhoto = function () {
console.log('goCamera');
	   var options = {                                            //这些参数可能要配合着使用，比如选择了sourcetype是0，destinationtype要相应的设置
	    // quality: 50,                                            //相片质量0-100
	    destinationType: Camera.DestinationType.FILE_URI,        //返回类型：DATA_URL= 0，返回作为 base64 編碼字串。 FILE_URI=1，返回影像档的 URI。NATIVE_URI=2，返回图像本机URI (例如，資產庫)
	    sourceType: Camera.PictureSourceType.CAMERA,             //从哪里选择图片：PHOTOLIBRARY=0，相机拍照=1，SAVEDPHOTOALBUM=2。0和1其实都是本地图库
	    // allowEdit: false,                                        //在选择之前允许修改截图
	    // encodingType:Camera.EncodingType.JPEG,                   //保存的图片格式： JPEG = 0, PNG = 1
	    // targetWidth: 200,                                        //照片宽度
	    // targetHeight: 200,                                       //照片高度
	    // mediaType:0,                                             //可选媒体类型：圖片=0，只允许选择图片將返回指定DestinationType的参数。 視頻格式=1，允许选择视频，最终返回 FILE_URI。ALLMEDIA= 2，允许所有媒体类型的选择。
	    cameraDirection:0,                                       //枪后摄像头类型：Back= 0,Front-facing = 1
	    // popoverOptions: CameraPopoverOptions,
	    // saveToPhotoAlbum: true  ,                                 //保存进手机相册
	  };
	
	  // $cordovaCamera.getPicture(options).then(function(imageData){
	  //   alert(imageData);
	  //   $scope.photoSrc = imageData;
	  //   // "data:image/jpeg;base64,"
	  // },function(error){
	  //   alert('拍照失败!');
	  // })
	  $cordovaCamera.getPicture(options).then(function(imageData) {
	      // CommonJs.AlertPopup(imageData);
	      // var myImg = document.getElementById('photoImg');
	      // alert(myImg);
	        // myImg.style.backgroundImage = "url(data:image/jpeg;base64," + imageData+")";
	        // myImg.style.backgroundSize = "cover";
	      // myImg.src = imageData;
	      $scope.photoSrc = imageData;
	
	      // alert(myImg.src)
	  },function(err) {
	      // error
	     alert("拍照失败！");
	  });
		
	}
}])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '空色美术',
    lastText: 'WebApp+pc端',
    face: 'img/pic300.jpg',
    softElement:'window7-64bit,Android4.4.2,ios9',
    hardElement:'pc Android手机  iphone系列',
    softWare:'sublime,Hbuild,git,phonegap,Chrome',
    times:'8周',
    details:'空色美术商城是一家美术人的专业购物中心，开创了中国美术类团购自营式电商模式。',
    tasks:['负责部分页面布局（html5+css3）','利用Ajax进行数据渲染','利用zepto和原生JS实现动态效果'],
    skills:[' 采用响应式页面布局,基于媒体查询来适配不同移动终端','采用Swiper 插件',' 采用seaJs 来实现模块化开发，使项目开发变得简洁清晰']
  }, {
    id: 1,
    name: '北海365',
    lastText: 'Hybird',
    face: 'img/20141016013952941.jpg',
    softElement:'window7-64bit,Android4.4.2,ios9',
    hardElement:'pc Android手机  iphone系列',
    softWare:'sublime,Hbuild,git,phonegap,Chrome',
    times:'4周',
    details:'空色美术商城是一家美术人的专业购物中心，开创了中国美术类团购自营式电商模式。',
    tasks:['首页气象实时数据更新','首页分类信息模块及二级页面弹性盒布局','首页热点推荐模块iScroll触屏缓冲滚动','手机调取扫描二维码'],
    skills:['标准html响应式页面布局',' 首页气象数据模块，采用ajax获取气象局接口，并通过jsonP解决跨域问题','分类信息模块图标用webFont实现页面资源优化','二级页面采用弹性盒布局，准确适配不同移动终端','热点推荐模块采用AngularJS实现数据绑定，并用iScroll插件实现滚屏']
    
  }, {
    id: 2,
    name: '和成卫浴',
    lastText: '微信场景',
    face: 'img/07082909298260.jpg',
    softElement:'window7-64bit,Android4.4.2,ios9',
    hardElement:'pc Android手机  iphone系列',
    softWare:'sublime,Hbuild,git,phonegap,Chrome',
    times:'1周',
    details:'空色美术商城是一家美术人的专业购物中心，开创了中国美术类团购自营式电商模式。',
    tasks:['此项目属于个人项目，用时一周'],
    skills:['H5实现页面布局，使用audio实现音乐播放','CSS3的transform、animation等属性实现自定义动画效果','利用Swiper实现滑动和动画响应效果']
    
  }, {
    id: 3,
    name: '惠家有',
    lastText: 'pc端',
    face: 'img/ldpi_1036325_2c2a1b2d0-df6f-4a97-90ad-8034be3f637d.png',
    softElement:'window7-64bit',
    hardElement:'pc',
    softWare:'sublime,svn,IE,Chrome等主流浏览器',
    times:'4周',
    details:'空色美术商城是一家美术人的专业购物中心，开创了中国美术类团购自营式电商模式。',
    tasks:['负责页面布局','使用Ajax进行后台的登录注册','.首页的js联调（如：电梯图，轮播图，三级菜单等）','商品详情页和购物车页面的js联调（如：放大镜，购物车的增删改查）'],
    skills:['部分采用CSS3+HTML5技术(滑动商品弹跳效果);','采用懒加载前端优化方式来提高性能，预加载提升用户体验','利用gulp来自动构建项目，webpack打包依赖js']
    
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
     // alert(chat)
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
