/**
 * Created by panma on 3/27/15.
 */
angular.module('demoApp')
  .directive('userProfileRegion',[function(){
    return {

      restrict: 'E',
      templateUrl:'views/directives/user-profile-region.html',
      link:function(scope,element){

      }

    }

  }]);
