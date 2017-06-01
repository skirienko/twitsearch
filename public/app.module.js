'use strict';

angular.module('twitsearch', [
    'ngRoute'
]);

angular.module('twitsearch').controller('mainController', ['$scope', '$http', function($scope, $http) {

    $scope.query = "";
    $scope.tweets = [];
    $scope.lastQuery = '';

    $scope.search = function () {

        $scope.lastQuery = '/search?q=' + window.encodeURIComponent($scope.query);
        $http.get($scope.lastQuery)
            .then(
                function(response) {
	                $scope.meta = response.data.search_metadata;
                    $scope.tweets = response.data.statuses;
                },
                function(error) {
                    console.log(error);
                }
            );
    };

    $scope.addMoreTweets = function() {
	    $scope.lastQuery = '/search' + $scope.meta.next_results;
        $http.get($scope.lastQuery)
            .then(
                function(response) {
                    if (response.statusText === 'OK') {
                        $scope.tweets = $scope.tweets.concat(response.data.statuses);
	                    $scope.meta = response.data.search_metadata;
                    }
                }
            );
    };
}]);