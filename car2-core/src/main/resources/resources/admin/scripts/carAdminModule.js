'use strict';
//平台管理模块的配置
angular.module('carAdminModule',[]).config(function($stateProvider) {
	//路由配置
	$stateProvider.state('index.carManage', {
		url: "/carManage",
		controller: "carManageCtrl",
		templateUrl: "admin/views/carManage.html"
	});
//服务配置
}).service("carRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	return $resource("car/:id", {id:"@id"}, config);
//控制器
}).controller('carManageCtrl', function($scope, $uibModal, carRestService, commonService){
	
	$scope.pageInfo = commonService.getDefaultPageSetting();
	
	$scope.query = function() {
		var condition = commonService.buildPageCondition($scope.condition, $scope.pageInfo);
		carRestService.query(condition).$promise.then(function(data){
			$scope.pageInfo.totalElements = data.totalElements;
			$scope.cars = data.content;
		});
	}
	
	$scope.create = function() {
		$scope.save({
			index: 0
		});
	}
	
	$scope.update = function(car) {
		$scope.save(car);
	}
	
	$scope.save = function(car){
		$uibModal.open({
			size: "lg",
			templateUrl : 'admin/views/carForm.html',
			controller: 'carFormCtrl',
			resolve: {
		        car : function() {return car;},
			}
		}).result.then(function(form){
			if(form.id){
				new carRestService(form).$save().then(function(){
					commonService.showMessage("修改车型信息成功");
				},function(response){
					for (var i = 0; i < $scope.cars.length; i++) {
						if(form.id == $scope.cars[i].id) {
							$scope.cars[i] = carRestService.get({id:form.id});
							break;
						}
					}
				});
			}else{
				new carRestService(form).$create().then(function(car){
					$scope.cars.unshift(car);
					commonService.showMessage("新建车型成功");
				});
			}
		});
	}
	
	$scope.remove = function(car) {
		commonService.showConfirm("您确认要删除此车型?").result.then(function() {
			carRestService.remove({id:car.id}).$promise.then(function(result){
				commonService.showMessage("删除车型成功");
				$scope.cars.splice($scope.cars.indexOf(car), 1);
				if($scope.cars.length == 0){
					$scope.pageInfo.page = $scope.pageInfo.page - 1;
					$scope.query();
				}
			})
		});
	} 
	
	$scope.cleanCondition = function() {
		$scope.condition = {};
		$scope.query();
	}
	
	$scope.query();
	
}).controller('carFormCtrl',function ($scope, $uibModalInstance, car, commonService) {

	$scope.popup1 = {
		opened : false
	};

	$scope.popup2 = {
		opened : false
	};
	
	$scope.open1 = function() {
		$scope.popup1.opened = true;
	};

	$scope.open2 = function() {
		$scope.popup2.opened = true;
	};
	
	$scope.dateOptions = {
		minDate : new Date(),
		startingDay : 1
	};
	
	$scope.car = car;
	
	$scope.tinymceOptions = commonService.getDefaultTinymceOptions();
	
	$scope.save = function(car) {
		$uibModalInstance.close(car);
	};
	
	$scope.removeImg = function(image) {
		$scope.car.images.splice($scope.car.images.indexOf(image), 1);
	}
	
	$scope.doUpload = function(files){
		commonService.uploadImage(files, $scope, function(result){
			$scope.car.image = result;
		});
	}
	
	$scope.doUpload2 = function(files){
		commonService.uploadImage(files, $scope, function(result){
			if($scope.car.images == null){
				$scope.car.images = [];
			}
			console.log(result);
			$scope.car.images.push(result);
		});
	}
	
});