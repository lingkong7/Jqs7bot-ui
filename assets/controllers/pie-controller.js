/**
 * Created by ling on 15-9-26.
 */
define([
    './controllers'
], function (controllers) {
    'use strict';

    controllers.controller('pieController', ['$scope','$http','$filter', function ($scope,$http,$filter) {

        $http.get("./data-demo/pie1.json")
            .then(function (data) {

                var psDt = [];
                var date = [];
                angular.forEach(data, function (value, key) {
                    for (var i in value['total']){
                        date[i] = $filter('limitTo')(value['total'][i]['date'],10);
                        psDt.push({'name': date[i], 'value': value['total'][i]['total']});
                    }
                });
                $scope.pie1 = {
                    tooltip:{
                        show :true,
                        formatter: '<div class="ui blue label">{b}</div></br>{c}</br>'

                    },
                    series: [
                        {
                            name: "日活跃用户",
                            type: "pie",
                            center: [ '50%' , '60%'],
                            radius: '80%',
                            data:psDt
                        }
                    ]
                    };



            });


    }]);
});