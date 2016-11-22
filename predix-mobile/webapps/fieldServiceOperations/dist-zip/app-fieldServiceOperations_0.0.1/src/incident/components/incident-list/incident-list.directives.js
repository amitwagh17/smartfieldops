angular.module('incidentMgmt').directive('incidentList', function ($state,api) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'src/incident/components/incident-list/incident-list.template.html',
        link:function(scope){
            var incidentUrl = 'incident/list';
            var param = {
                ssoId: 502437175
            };
            api.getData(incidentUrl,param).then(function(res){
                     console.log(JSON.stringify(res));
            });
            scope.incidentList = [
                {
                    title: 'Incident Title 1',
                    type : 'Audit Check',
                    submissionDate : '11 Jan 2016',
                    impact: 'Medium',
                    urgency: 'Low',
                    isEscalated : false,
                    checkList: [
                        {"option":"option 1","recommendation":"Recommendation for Option 1"},
                        {"option":"option 2","recommendation":"Recommendation for Option 2"},
                        {"option":"option 3","recommendation":"Recommendation for Option 3"},
                        {"option":"option 4","recommendation":"Recommendation for Option 4"}
                    ]
                },
                {
                    title: 'Incident Title 2',
                    type : 'Routine Maintainance',
                    submissionDate : '07 Oct 2016',
                    impact: 'Medium',
                    urgency: 'High',
                    isEscalated : true,
                    checkList: [
                        {"option":"option 1","recommendation":"Recommendation for Option 1"},
                        {"option":"option 2","recommendation":"Recommendation for Option 2"},
                        {"option":"option 3","recommendation":"Recommendation for Option 3"},
                        {"option":"option 4","recommendation":"Recommendation for Option 4"}
                    ]
                }
            ];

            scope.goToIncidentDetails = function(incident){
                $state.go('details',{incident:incident});
            };
            
        }
    };
});
