'use strict';

angular.
module('twitsearch').
config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/phones', {
            template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
            template: '<phone-detail></phone-detail>'
        }).
        otherwise('/phones');
    }
]);

angular.module('twitsearch').constant('CONSUMER_KEY', 'HlGV8UnlvdmmMc80d530kHwv1');