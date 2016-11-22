angular.module('incidentMgmt').directive('incidentList', function ($state,api) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'src/incident/components/incident-list/incident-list.template.html',
        link:function(scope){
            var incidentUrl = 'https://cg-incident-service-1.run.aws-usw02-pr.ice.predix.io/service/incident/list';
            var param = {
                ssoId: 502437175
            };
            api.getData(incidentUrl,param).then(function(res){
                scope.incidentList = res.data;
            });

            scope.goToIncidentDetails = function(incident){
                $state.go('details',{incident:incident});
            };
            
        }
    };
});
