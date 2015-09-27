/**
 * Created by ling on 15-9-28.
 */
define(['./app'], function (app) {
    'use strict';
    return app.getNgModule().config(['$routeProvider', function ($routeProvider) {
        // $routeProvider.when('/view1', {
        //   templateUrl: 'partial/sample.html',
        //   controller: 'sampleCtrl'
        // });

        // $routeProvider.when('/view2', {
        //   templateUrl: 'partial/sample2.html',
        //   controller: 'mainCtrl'
        // });

        // $routeProvider.otherwise({
        //   redirectTo: '/view1'
        // });
    }]);
});