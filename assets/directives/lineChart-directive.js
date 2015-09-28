/**
 * Created by ling on 15-9-28.
 */
define([
    './directives',
    'echarts',
    'echarts/chart/line'
], function (directives, echarts) {
    'use strict';
    directives.directive('lineChart', [function () {

        return {
            restrict: 'E',
            template: '<div class="chart"></div>',
            replace: true,
            scope: {
                "option": "="
            },
            link: function (scope, element,attrs) {

                //设置饼图高度
                element[0].style.height =  "545px";

                // 基于准备好的dom，初始化echarts图表
                var lineChart = echarts.init(element[0]);

                //监听options变化
                scope.$watch('option', function () {
                    lineChart.setOption(scope.option);
                }, true);


            }
        };
    }]);
});