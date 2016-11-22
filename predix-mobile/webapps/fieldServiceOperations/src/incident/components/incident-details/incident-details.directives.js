angular.module('incidentMgmt').directive('incidentDetails', function ($state,api) {
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
            var ip = 'http://192.168.43.174/';
            var temp,humidity;

            scope.incident = $state.params.incident;
            var list = [
                {
                    id: 2,
                    context: 'dangerous',
                    option: 'Are all dangerous parts of the machinery guarded?'
                },
                {
                    id: 3,
                    context: 'turbine',
                    option: 'Do guards permit an adequate view of the operation where this is necessary?'
                },
                {
                    id: 4,
                    context: 'power',
                    option: 'Are all guards of good construction, adequate strength and well maintained?'
                },
                {
                    id: 5,
                    context: 'safety',
                    option: 'Is it difficult to bypass or disable guards?'
                },
                {
                    id: 7,
                    context: 'equipments',
                    option: 'Can the machinery only be started when a specific labelled start device is used? '
                },
                {
                    id: 6,
                    context: 'safety',
                    option: 'Is it impossible to start the machine just by resetting a safety device?'
                },
                {
                    id: 8,
                    context: '',
                    option: 'Is there a readily accessible stop device which stops the machinery in a  safe way?'
                },
                {
                    id: 9,
                    context: '',
                    option: 'Where appropriate is there a prominent easily accessible emergency stop device?'
                },
                {
                    id: 10,
                    context: '',
                    option: 'Can controls be operated safely and easily?'
                },
                {
                    id: 11,
                    context: '',
                    option: 'Is there any system of work which ensures that nobody is in a dangerous position when machinery is about to be started?'
                },
                {
                    id: 12,
                    context: '',
                    option: 'Does the start device need to be activated to restart the machine if the power fails?'
                },
                {
                    id: 13,
                    context: 'compressor',
                    option: 'Does the start device need to be activated to restart the machine if the power is isolated does the machinery come to rest safely without the possibility of access to dangerous parts?'
                },
                {
                    id: 14,
                    context: 'leakage',
                    option: 'Can the equipment be securely isolated from power, to prevent inadvertent reconnection by removing a plug from a socket which is easily visible to the person at risk?'
                },
                {
                    id: 15,
                    context: '',
                    option: 'Can the equipment be securely isolated from power, to prevent inadvertent reconnection by locking it off?'
                }
            ];
            scope.incident.checkList = [];
            for(var i=0;i<list.length;i++){
                 if(scope.incident.id%2 === 0 && i%2 ===0){
                     scope.incident.checkList.push(list[i]);
                 }
                if(scope.incident.id %2 !== 0 && i%2 !==0){
                    scope.incident.checkList.push(list[i]);
                }
            }


            scope.recommendations = [];
            var url = 'https://contextual-app-dev.run.aws-usw02-pr.ice.predix.io/getSentanceByContext';

            /*Get the checkbox status and display recommendations for those*/

            scope.check = false;
            scope.checkAll = function (isChecked, item) {
                if (isChecked) {
                    var param = {
                        contextId : item.context
                    };
                    scope.recommendations[scope.recommendations.length]  ={
                        option : item.option,
                        id : item.id
                    };
                    api.getData(url,param).then(function(res){
                        var contextualHelp = res.data.contextual;
                        if(contextualHelp){
                            for(var i=0 ;i< contextualHelp.length ;i++){
                                scope.recommendations[ scope.recommendations.length] = {
                                     option :  item.option,
                                     help : contextualHelp[i],
                                     id : item.id
                                }
                            }
                        }
                    });
                } else {
                    for (var i = scope.recommendations.length - 1; i >= 0; i--) {
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
            };

            scope.saveIncidentDetails = function() {
                var saveObservationUrl = 'https://cg-incident-service-1.run.aws-usw02-pr.ice.predix.io/saveObservation';
                var param = [];
                var obj = {};
                obj.incidentId = scope.incident.id;
                if (scope.location) {
                    obj.latitude = String(scope.location.lat);
                    obj.longitude = String(scope.location.long);
                }
                obj.Impact = scope.incident.impact;
                obj.Type = 'PROBLEM';
                obj.option = 'test';
                var tempObservationArray = [];
                for(var i=0;i<scope.recommendations.length;i++){
                    tempObservationArray[i] = scope.recommendations[i].id;
                }
                obj.observationIds = tempObservationArray.join();
                param.push(obj);

                api.postData(saveObservationUrl,param).then(function(res){
                   if(res.data){
                       for (var i = 0; i < scope.stages.length; i++) {
                           if (scope.currentStage.title === scope.stages[i].title) {
                               scope.stages[i].isComplete = true;
                           }
                       }
                       scope.currentStage = scope.stages[1];
                   }
                });

            };

            if (navigator.geolocation) {
                var timeoutVal = 10 * 60 *60;
                navigator.geolocation.getCurrentPosition(
                    displayPosition,
                    displayError,
                    { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
                );
            }
            else {
                console.log("Geolocation is not supported by this browser");
            }

            function displayPosition(data) {
                console.log(JSON.stringify(data));
                scope.location = {lat: data.coords.latitude, long: data.coords.longitude};
                scope.$apply();
            }

            function displayError(error) {
                var errors = {
                    1: 'Permission denied',
                    2: 'Position unavailable',
                    3: 'Request timeout'
                };
                alert("Error: " + errors[error.code]);
            }

            setInterval(function() {
                readParams();
            }, 5000);

            function readParams() {
                api.getData(ip + 'gettemp').then(function (res) {

                    scope.temp = parseFloat(res.data);
                    scope.tempChartConfig = {
                        options: {
                            chart: {
                                type: 'solidgauge'
                            },
                            pane: {
                                center: ['50%', '85%'],
                                size: '100%',
                                startAngle: -90,
                                endAngle: 90,
                                background: {
                                    backgroundColor: '#EEE',
                                    innerRadius: '60%',
                                    outerRadius: '100%',
                                    shape: 'arc'
                                }
                            },
                            solidgauge: {
                                dataLabels: {
                                    y: -30,
                                    borderWidth: 0,
                                    useHTML: true
                                }
                            }
                        },
                        series: [{
                            data: [scope.temp],
                            dataLabels: {
                                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                                '<span style="font-size:12px;color:silver">Celsius</span></div>'
                            },
                        }],
                        title: {
                            text: 'Temperature',
                            y: 140
                        },
                        yAxis: {
                            currentMin: 0,
                            currentMax: 100,
                            title: {
                                y: 0
                            },
                            stops: [
                                [0.1, '#DF5353'], // red
                                [0.5, '#DDDF0D'], // yellow
                                [0.9, '#55BF3B'] // green
                            ],
                            lineWidth: 0,
                            tickInterval: 20,
                            tickPixelInterval: 400,
                            tickWidth: 0,
                            labels: {
                                y: 15
                            }
                        },
                        loading: false
                    }

                });


                api.getData(ip + 'gethumidity').then(function (res) {
                    scope.humidity = parseFloat(res.data);
                    scope.humidityChartConfig = {
                        options: {
                            chart: {
                                type: 'solidgauge'
                            },
                            pane: {
                                center: ['50%', '85%'],
                                size: '100%',
                                startAngle: -90,
                                endAngle: 90,
                                background: {
                                    backgroundColor: '#EEE',
                                    innerRadius: '60%',
                                    outerRadius: '100%',
                                    shape: 'arc'
                                }
                            },
                            solidgauge: {
                                dataLabels: {
                                    y: -30,
                                    borderWidth: 0,
                                    useHTML: true
                                }
                            }
                        },
                        series: [{
                            data: [scope.humidity],
                            dataLabels: {
                                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                                '<span style="font-size:12px;color:silver">Percentage</span></div>'
                            },
                        }],
                        title: {
                            text: 'Humidity',
                            y: 140
                        },
                        yAxis: {
                            currentMin: 0,
                            currentMax: 100,
                            title: {
                                y: 0
                            },
                            stops: [
                                [0.1, '#DF5353'], // red
                                [0.5, '#DDDF0D'], // yellow
                                [0.9, '#55BF3B'] // green
                            ],
                            lineWidth: 0,
                            tickInterval: 20,
                            tickPixelInterval: 400,
                            tickWidth: 0,
                            labels: {
                                y: 15
                            }
                        },
                        loading: false
                    }
                });
            }
        }
    }
});
