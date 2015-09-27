/**
 * Created by ling on 15-9-27.
 */
requirejs.config({
    appDir: '.',
    baseUrl: '../assets/src',
    // Set paths
    paths: {
        'angular': ['//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.6/angular.min'],
        'angular-route': ['//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.6/angular-route.min'],
        'semantic': ['//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.4/semantic.min'],
        'echarts': '//cdnjs.cloudflare.com/ajax/libs/echarts/2.2.7/echarts',
        'echarts/chart/line': '//cdnjs.cloudflare.com/ajax/libs/echarts/2.2.7/echarts',
        'echarts/chart/scatter': '//cdnjs.cloudflare.com/ajax/libs/echarts/2.2.7/echarts',
        'echarts/chart/k': '//cdnjs.cloudflare.com/ajax/libs/echarts/2.2.7/echarts',
        'echarts/chart/pie': '//cdnjs.cloudflare.com/ajax/libs/echarts/2.2.7/echarts',
        'echarts/chart/radar': '//cdnjs.cloudflare.com/ajax/libs/echarts/2.2.7/echarts',
        'echarts/chart/map': '//cdnjs.cloudflare.com/ajax/libs/echarts/2.2.7/echarts',
        'echarts/chart/chord': '//cdnjs.cloudflare.com/ajax/libs/echarts/2.2.7/echarts',
        'echarts/chart/force': '//cdnjs.cloudflare.com/ajax/libs/echarts/2.2.7/echarts',
        zrender: '//cdnjs.cloudflare.com/ajax/libs/echarts/2.2.7/echarts',
        'domReady': ['http://cdnjs.cloudflare.com/ajax/libs/require-domReady/2.0.1/domReady.min'],
        'jquery': ['//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min']
    },
    // Set dependencies
    shim: {
        'angular': {exports: 'angular'},
        'angular-route': ['angular'],
        'semantic': ['jquery']
    }
});

requirejs(["main"]);
