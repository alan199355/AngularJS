console.log('entry')
var angular=require('angular');
angular.module('myApp',[])
.directive('countDown',function($timeout,$interval){
    return {
        restrict:'A',
        replace:true,
        scope:{
            dataSecond:'@',
            ngSecond:'@'
        },
        link:function(scope,element,attrs){
            console.log(attrs);
            if(isNaN(scope.ngSecond)) return "";
            if(scope.ngSecond <= 0){
                $interval.cancel(timer);
            }
            scope.seconds=Math.floor(scope.ngSecond);                                    
            var timer=$interval(function(){
                scope.seconds--;
                var h, m, s;
                h = Math.floor(scope.seconds / 3600);
                h < 10 ? h = "0" + h : h;
                m = Math.floor((scope.seconds - h * 3600) / 60);
                m < 10 ? m = "0" + m : m;
                s = Math.floor(scope.seconds - h * 3600 - m * 60);
                s < 10 ? s = "0" + s : s;
                scope.hour=h;
                scope.minute=m;
                scope.second=s;
                if(scope.seconds <= 0){
                    $interval.cancel(timer);
                    scope.$emit('countDownFinished',attrs.id)
                }
            },1000)            
        },
        template:'<p second={{seconds}}>剩余时间：<span ng-bind="hour"></span>时 <span ng-bind="minute"></span>分 <span ng-bind="second"></span>秒</p>'
    }
})
.controller('myController',['$scope','$http',function($scope,$http){
    var vm=this;
    
    vm.getData=function(){
        $http({
            method:'get',
            url:'./test.json'
        }).then(function successCallback(response,data){
            vm.countList=response.data;            
        },function errorCallback(response){

        })
    };
    vm.getData();
    $scope.$on('countDownFinished',function(event,data){
        console.log(data);
        vm.getData();
    });
}])