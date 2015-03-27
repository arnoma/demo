/**
 * Created by panma on 3/27/15.
 */
angular.module('demoApp')
  .directive('demoHeadRegion',[function(){
    return {

      restrict: 'E',
      templateUrl:'views/directives/demo-head-region.html',
      link:function(scope,element){

      }

    }

  }]);
