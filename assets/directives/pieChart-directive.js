define([
    './directives',
    'echarts',
    'echarts/chart/pie'
], function (directives, echarts) {
    'use strict';
    directives.directive('pieChart', [function () {

        return {
            restrict: 'E',
            template: '<div class="chart"></div>',
            replace: true,
            scope: {
                "option": "="
            },
            link: function (scope, element,attrs) {

                //设置饼图高度
                element[0].style.height =  "600px";
                element[0].style.width =  "1200px";

                // 基于准备好的dom，初始化echarts图表
                var myChart = echarts.init(element[0]);

                //监听options变化
                scope.$watch('option', function () {
                    myChart.setOption(scope.option);
                }, true);


            }
        };
    }]);
});