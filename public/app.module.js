'use strict';

angular.module('twitsearch', [
    'ngRoute'
]);

angular.module('twitsearch').controller('mainController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {

    $scope.query = "";

    var consumerKey = 'HlGV8UnlvdmmMc80d530kHwv1';
    var consumerSecret = 'YnsRc5hU0a3ugHaB3T0KZ9ilbTPiujWpC7CIBThNdjuQroiYuY';

        var base64EncodedKey = btoa(consumerKey + ":" + consumerSecret);
        console.log(base64EncodedKey);

        $scope.search = function () {
            console.log("BANG!");
            console.log($scope.query);

            // $cordovaOauth.twitter('HlGV8UnlvdmmMc80d530kHwv1', 'YnsRc5hU0a3ugHaB3T0KZ9ilbTPiujWpC7CIBThNdjuQroiYuY').then(
            //     function(result) {
            //         console.log(result);
            //     },
            //     function (error) {
            //         console.log(error);
            //
            //     });

            // $twitterOAuth.init('HlGV8UnlvdmmMc80d530kHwv1', 'YnsRc5hU0a3ugHaB3T0KZ9ilbTPiujWpC7CIBThNdjuQroiYuY');
            // $twitterOAuth.connect().then(
            //     function (data) {
            //         console.log(data);
            //     },
            //     function (error) {
            //         console.log(error);
            //     }
            // );

            // var rqConfig = {
            //     method: 'POST',
            //     data: "grant_type=client_credentials",
            //     headers: {
            //         'Content-Type': 'application/x-www-form-urlencoded',
            //         'Authorization': 'Basic '+base64EncodedKey
            //     }
            // };
            // $http.post('https://api.twitter.com/oauth2/token', rqConfig)
            //     .then(
            //         function successCallback(response) {
            //             console.log(response);
            //         },
            //         function errorCallback(response) {
            //             console.log(response);
            //         }
            //     );

            var url = 'https://api.twitter.com/1.1/search/tweets.json?q=%40twitterapi';
            // $sce.trustAsUrl('https://api.twitter.com/1.1/search/**');

            // var trustedUrl = $sce.getTrustedUrl(url);

            // console.log($sce.getTrustedUrl(url));
            // console.log("?");

            $http({
                method: 'JSONP',
                url: url
            })
                .then(
                    function successCallback(response) {
                        console.log(response);
                    },
                    function errorCallback(response) {
                        console.log(response);
                    }
                );



        };
    }]);