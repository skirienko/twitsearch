'use strict';

angular.module('twitsearch', [
    'ngRoute'
]);

angular.module('twitsearch').controller('mainController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {

    $scope.query = "";
    $scope.tweets = [];

    var consumerKey = 'HlGV8UnlvdmmMc80d530kHwv1';
    var consumerSecret = 'YnsRc5hU0a3ugHaB3T0KZ9ilbTPiujWpC7CIBThNdjuQroiYuY';

        var base64EncodedKey = btoa(consumerKey + ":" + consumerSecret);
        console.log(base64EncodedKey);

        $scope.search = function () {
            console.log("BANG!");
            console.log($scope.query);

            $http.get('/search?q=' + $scope.query)
                .then(function(response) {
                    console.log(response);
                    $scope.tweets = response.data.statuses;
                });

        };
    }]);