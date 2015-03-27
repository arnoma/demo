/**
 * Created by panma on 3/27/15.
 */
angular.module('demoApp')
  .directive('demoMainRegion',[function(){
    return {

      restrict: 'E',
      templateUrl:'views/directives/demo-main-region.html',
      link:function(scope,element){

      }

    }

  }]);
