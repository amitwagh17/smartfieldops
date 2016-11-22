angular.module('incidentMgmt')
    .service('api', function ($http, $q) {
        var baseUrl = 'https://fsa-dev.run.aws-usw02-pr.ice.predix.io/service/';
        var apiService = {
            getData: function (uri, args, headers) {
                var returnData = $q.defer();
                $http({
                    url: baseUrl + uri ,
                    method: 'GET',
                    params: args,
                    headers: headers
                })
                    .then(function (data) {
                        returnData.resolve(data);
                    }, function (error) {
                        returnData.reject(error);
                    });
                return returnData.promise;
            },
            postData: function (url, data, args, headers) {
                var returnData = $q.defer();
                $http({
                    url: baseUrl + uri ,
                    method: 'POST',
                    data: data,
                    params: args,
                    headers: headers
                })
                    .then(function (data) {
                        returnData.resolve(data);
                    }, function (error) {
                        returnData.reject(error);
                    });
                return returnData.promise;
            }
        }
          return apiService;

    });
