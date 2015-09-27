/**
 * Created by ling on 15-9-27.
 */

define([
    'echarts',
    'echarts/chart/line',
    'd3'
], function(ec){
    function line_chart_ctrl($http,$scope){

    }
    return line_chart_ctrl;
});



/*(function(angular){
        'use strict';
        var Jqs7botApp = angular.module('Jqs7botApp');
            Jqs7botApp.controller('lineController',['$scope','$http','$filter','$element'
                ,function($scope,$http,$filter){
                    $http.get('data1.json')
                        .then(function(data){
                            $scope.xData = [];
                            $scope.lineData_1 = {'name': '日发言量','datapoints':[]};
                            $scope.lineData_2 = {'name': '日活跃用户','datapoints': []};
                            var date=[];
                            var fdate = [];
                            angular.forEach(data, function(value,key){
                                for(var i in value['total']){
                                    date[i] = value['total'][i]['date'];
                                    fdate[i] = $filter('limitTo')(date[i], 10);
                                    $scope.lineData_1.datapoints.push({'x':fdate[i], 'y': value['total'][i]['total']})
                                }
                                for (i in value['users']){
                                    $scope.lineData_2.datapoints.push({'x':fdate[i], 'y': value['users'][i]['total']})
                                }
                            });
                            $scope.dzst = 7/fdate.length*100;

                            $scope.config={
                                debug: true,
                                showXAxis: true,
                                showYAxis: true,
                                showlegend: true
                            };

                            $scope.mutiple = [$scope.lineData_1,$scope.lineData_2]

                        })
                }]);
    })(window.angular);*/
