(function(){
  'use strict';

  angular.module('app', []).controller('CourseController', CourseController);
  
  function CourseController () {
    var vm = this;
    vm.test = 'Hello Kama ;)';
  }

})();