angular.module('incidentMgmt').directive('incidentDetails', function ($state) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            location: '=',
            stages: '=',
            currentStage: '='
        },
        templateUrl: 'src/incident/components/incident-details/incident-details.template.html',
        link: function (scope) {
            scope.incident = $state.params.incident;
            scope.recommendations = [];
            /*Get the checkbox status and display recommendations for those*/
            scope.check = false;
            scope.checkAll = function (isChecked, item) {
                if (isChecked) {
                    scope.recommendations.push(item);
                } else {
                    for (var i = 0; i < scope.recommendations.length; i++) {
                        if (scope.recommendations[i].option === item.option) {
                            scope.recommendations.splice(i, 1);
                        }
                    }
                }
            };

            scope.markComplete = function () {
                for (var i = 0; i < scope.stages.length; i++) {
                    if (scope.currentStage.title === scope.stages[i].title) {
                        scope.stages[i].isComplete = true;
                    }
                }
            }
        }
    }
});
