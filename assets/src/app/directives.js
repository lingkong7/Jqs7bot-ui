/**
 * Created by ling on 15-9-27.
 */


    'use strict';
    var Jqs7botApp = angular.module('Jqs7botApp');
    var chartCount = 0;
    Jqs7botApp.directive('search',function(){
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'search.html'
        }
    });
    Jqs7botApp.directive('footer',function(){
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'footer.html'
        }
    });
    Jqs7botApp.directive('lineChart',function(){
        return {
            restrict: 'EA',
            templateUrl: 'line.html',
            scope:{
              opt: '=lineChartOpt'
            },
            link: function(scope,element,attrs){


            }
        }
    });