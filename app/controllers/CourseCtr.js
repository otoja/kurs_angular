app.controller('CourseController', function($scope, $uibModal){
    $scope.test = 'Hello Kama ;)';

    $scope.openModal = function () {
      $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title-bottom',
        ariaDescribedBy: 'modal-body-bottom',
        template: 'test',
        size: 'sm',
        controller: function($scope) {
          $scope.name = 'bottom';  
        }
      });
    }
});

