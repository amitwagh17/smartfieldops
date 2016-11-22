angular.module('incidentMgmt').directive('appHeader', function ($state,$rootScope) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                headerTitle: '@',
                backBtnEnabled : '='
            },
            templateUrl: 'src/components/header/header.template.html',
            link:function(scope){
                scope.goBack = function(){
                    $state.go($rootScope.previousState)
                }

                scope.getClass = function(){
                    if(scope.backBtnEnabled){
                       return 'page-title-left'
                    }else{
                        return 'page-title-right'
                    }
                }
            }
        };
    });

