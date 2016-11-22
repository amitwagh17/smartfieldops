/**
 * Created by amitwagh on 10/26/16.
 */

var incidentMgmtApp = angular.module('incidentMgmt', ['ui.router','geolocation']);

incidentMgmtApp.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('incident', {
            url:'/',
            templateUrl: 'src/incident/incident.view.html'
        })
        .state('details', {
            url:'/details',
            templateUrl: 'src/incident/incident-details.view.html',
            controller : 'IncidentDetailsCtrl',
            params: {
                incident: null
            }
        });


});

incidentMgmtApp.run(function ($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function (event, to, toParams, from, fromParams) {
        $rootScope.previousState = from.name;
    });
});
