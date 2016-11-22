angular.module('incidentMgmt')
    .controller('IncidentDetailsCtrl', function ($scope) {

        $scope.stages = [
            {state: 'stage1', title: 'Preparation', isComplete: false},
            {state: 'stage2', title: 'Detection Analysis', isComplete: false},
            {state: 'stage3', title: 'Containment Eradication', isComplete: false},
            {state: 'stage4', title: 'Post-Incident Activity', isComplete: false}
        ];
        $scope.currentStage = $scope.stages[0];

    });
