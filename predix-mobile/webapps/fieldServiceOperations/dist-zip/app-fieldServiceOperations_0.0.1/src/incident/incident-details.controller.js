angular.module('incidentMgmt')
    .controller('IncidentDetailsCtrl', function ($scope, geolocation) {
        geolocation.getLocation().then(function (data) {
            $scope.coords = {lat: data.coords.latitude, long: data.coords.longitude};
        });

        $scope.stages = [
            {state: 'stage1', title: 'Stage 1', isComplete: false},
            {state: 'stage2', title: 'Stage 2', isComplete: false},
            {state: 'stage3', title: 'Stage 3', isComplete: false},
            {state: 'stage4', title: 'Stage 4', isComplete: false},
            {state: 'stage5', title: 'Stage 5', isComplete: false}
        ];
        $scope.currentStage = $scope.stages[0];

    });
