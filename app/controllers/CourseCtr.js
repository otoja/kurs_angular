app.controller('CourseController', function ($scope, $uibModal) {
    $scope.test = 'Hello Kama ;)';
    $scope.animationsEnabled = true;

    var modalConfig = {
        animation: $scope.animationsEnabled,
        ariaLabelledBy: 'modal-title-top',
        ariaDescribedBy: 'modal-body-top',
        templateUrl: './app/templates/modal.html',
        size: 'sm',
        controller: function ($scope, username) {
            $scope.name = username;
        },
        resolve:{ username: function () { return $scope.test; } }
    };

    $scope.openModal = function () {
        $uibModal.open(modalConfig);
    };
});

