var app = angular.module("myApp",[]);
app.controller("myCtrl", function($scope, $http){

    $scope.map = "map.html";
    $scope.list = "list.html";
    $scope.url = $scope.map;

    $scope.showMap = function(){
        $scope.url = $scope.map;
    };
    $scope.showList = function(){
        $scope.url = $scope.list;
    };
    console.log("angular ok");

    $scope.sendRequest = function () {
        $http.get("https://jsonplaceholder.typicode.com/users").success(function (response) {
            $scope.items = response;
        })

    };
    $scope.sendRequest();

    $scope.initialize = function () {
        var latlng = new google.maps.LatLng(50.0, 50.0);
        var myOptions = {zoom: 10,center: latlng,mapTypeId: google.maps.MapTypeId.ROADMAP};
        var map = new google.maps.Map(document.getElementById("map"),
            myOptions);
        setMarkers(map, places);
    };
    var places = [
        ['Leanne Graham',-37.3159,81.1496],
        ['Ervin Howell',-43.9509,-34.4618],
        ['Clementine Bauch',-68.6102,-47.0653],
        ['Patricia Lebsack',29.4572,-164.2990],
        ['Chelsey Dietrich',-31.8129,62.5342],
        ['Mrs. Dennis Schulist',-71.4197,71.7478],
        ['Kurtis Weissnat',24.8918,21.8984],
        ['Nicholas Runolfsdottir V',-14.3990,-120.7677],
        ['Glenna Reichert',24.6463,-168.8889],
        ['Clementina DuBuque',-38.2386,57.2232]
    ];

    function setMarkers(map, locations) {
        var latlngbounds = new google.maps.LatLngBounds();

        for (var i = 0; i < places.length; i++) {
            var myLatLng = new google.maps.LatLng(locations[i][1], locations[i][2]);
            latlngbounds.extend(myLatLng);
            var marker = new google.maps.Marker({position: myLatLng,map: map,title: locations[i][0]});
        }
        map.setCenter( latlngbounds.getCenter(), map.fitBounds(latlngbounds));
    }
    $scope.initialize();

});
