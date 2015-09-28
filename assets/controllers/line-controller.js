/**
 * Created by ling on 15-9-26.
 */
define([
    './controllers'
], function (controllers) {
    'use strict';

    controllers.controller('lineController', ['$scope','$http','$filter', function ($scope,$http,$filter) {

        $http.get("./data-demo/pie1.json")
            .then(function (data) {

                var xDt =[];
                var lsDt_1 = [];
                var lsDt_2 = [];
                var date = [];
                var dzSt = 0;
                angular.forEach(data, function (value, key) {
                    for (var i in value['total']){
                        date[i] = $filter('limitTo')(value['total'][i]['date'],10);
                        xDt.push(date[i]);
                        lsDt_1.push(value['total'][i]['total']);
                        lsDt_2.push(value['users'][i]['userCount']);
                    }
                });
                if(lsDt_1.length>=7){
                    dzSt = (1-7/lsDt_1.length)*100;
                }else{
                    dzSt = 0
                }

                $scope.line1 = {
                    tooltip: {
                        show: true,
                        formatter: '<div class="ui blue label">{b}</div><div class="ui blue label">{c}</div>'
                    },
                    legend: {
                        data: ['日发言量','日活跃用户']
                    },
                    yAxis: [{},{
                        scale: true
                    }],
                    xAxis: [
                        {
                            data: xDt
                        }
                    ],
                    dataZoom : {
                        show : true,
                        realtime : true,
                        start : dzSt,
                        end :100
                    },
                    series: [
                        {
                            name: "日发言量",
                            type: "line",
                            yAxisIndex:0,
                            smooth: true,
                            data: lsDt_1,
                            markPoint: {
                                data: [
                                    {type: 'max',name: 'max'},
                                    {type: 'min',name: 'min'}
                                ]
                            }
                        },
                        {
                            name: "日活跃用户",
                            type: "line",
                            yAxisIndex:1,
                            smooth: true,
                            data: lsDt_2,
                            markLine: {
                                data: [
                                    {type: 'average', name: 'avg'}
                                ]
                            },
                            markPoint:{
                                data: [
                                    {type: 'max',name:'max'},
                                    {type: 'min',name:'min'}
                                ]
                            }
                        }

                    ]
                };



            });


    }]);
});