var angular=require('angular')
var app=angular.module('myApp',[]);
app.directive('myDirective',function(){
    // return {
    //     restrice:'',//String
    //     priority:'',//Number
    //     terminal:'',//Boolean
    //     template:'',//String or Template Function:function(tElement,tAttrs)
    //     templateUrl:'',//String
    //     replace:'',//Boolean or String
    //     scope:'',//Boolean or Object
    //     transclude:'',//Boolean
    //     controller:'',//String or 
    //     //function(scope,element,attrs,transclude,otherInjectables){}
    //     controllerAs:'',//String
    //     require:'',//String
    //     link:'',//function(scope,iElement,iAttrs){}
    //     compile:'',//返回一个对象或连接函数，如下所示:
    //             // function(tElement,tAttrs,transclude){
    //             //     return {
    //             //         pre:function(scope,iElement,iAttrs,controller){},
    //             //         post:function(scope,iElement,iAttrs,controller){}
    //             //     }
    //             //     或者
    //             //     return function postlink(){}
    //     }
    // }
})
app.controller('myCtrl',function($scope){
    
})