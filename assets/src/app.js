/**
 * Created by ling on 15-9-27.
 */

define([
    'domReady',
    'angular',
    'angular-route',


], function (domReady, ng) {
    'use strict';

    var Jqs7botApp = ng.module('Jqs7botApp', [
        'ngRoute'
    ]);

    function bootstrap() {
        domReady(function (document) {
            ng.bootstrap(document, ['Jqs7botApp']);
        });
    }

    return {
        bootstrap: bootstrap,
        getNgModule: function () {
            return Jqs7botApp;
        }
    };
});