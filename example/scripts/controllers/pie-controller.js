define([
    './controllers'
], function (controllers) {
    'use strict';

    controllers.controller('pieController', ['$scope', 'echartService', function ($scope, echartService) {

      echartService.getPullRequests("./data-demo/pie1.json")
            .then(function (data) {

               var ajaxData = [];

                angular.forEach(data, function (value, key) {

                    ajaxData.push({'name': value['name'], 'value': value['count']});

                });

              $scope.pie1 = {
                  options: {
                      title: {
                          text: '某站点用户访问来源',
                          subtext: '纯属虚构',
                          x: 'center'
                      },
                      tooltip: {
                          trigger: 'item',
                          formatter: "{a} <br/>{b} : {c} ({d}%)"
                      },
                      toolbox: {
                          show: false,
                          feature: {
                              mark: {show: true},
                              dataView: {show: true, readOnly: false},
                              restore: {show: true},
                              saveAsImage: {show: true}
                          }
                      },
                      calculable: true,
                      series: [
                          {
                              name: '访问来源',
                              type: 'pie',
                              radius: '55%',
                              center: ['50%', '60%'],
                              data: ajaxData
                          }
                      ]
                  }
              }



            });


    }]);
});
