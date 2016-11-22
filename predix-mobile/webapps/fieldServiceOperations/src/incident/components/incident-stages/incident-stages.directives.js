angular.module('incidentMgmt').directive('incidentStages', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            stages: '=',
            currentStage: '='
        },
        templateUrl: 'src/incident/components/incident-stages/incident-stages.template.html',
        link: function (scope) {
            scope.goToNextStage = function (index) {
                if (index !== 0) {
                    var previousStage = scope.stages[index - 1];
                    if (previousStage.isComplete) {
                        scope.currentStage = scope.stages[index];
                    }
                } else {
                    scope.currentStage = scope.stages[0];
                }
            };

            scope.getStatus = function (stage) {
                if (stage.title === scope.currentStage.title) {
                    return 'active';
                } else if (stage.isComplete) {
                    return 'completed';
                }
            }
        }
    }
});
