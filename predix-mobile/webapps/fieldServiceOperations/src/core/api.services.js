angular.module('incidentMgmt')
    .service('api', function ($http, $q) {

        var apiService = {
            getData: function (url, args, headers) {
                var returnData = $q.defer();
                $http({
                    url: url ,
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
                if(!headers){
                headers = { "Content-Type": "application/json; charset=UTF-8" }
                }
                $http({
                    url: url ,
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
