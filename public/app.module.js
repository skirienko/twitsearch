'use strict';

angular.module('twitsearch', [
    'ngRoute'
]);

angular.module('twitsearch').controller('mainController', ['$scope', '$http', function($scope, $http) {

    $scope.query = "";
    $scope.tweets = [];

    $scope.search = function () {
        console.log("BANG!");
        console.log($scope.query);

        $http.get('/search?q=' + window.encodeURIComponent($scope.query))
            .then(
                function(response) {
                    console.log(response);
                    $scope.tweets = response.data.statuses;
                },
                function(error) {
                    console.log(error);
                }
            );

    };
}]);