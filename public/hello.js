function Hello($scope, $http, $log) {
    $http.get('http://myanimelist.net/malappinfo.php?u=machray505&status=all&type=anime').
        success(function(data) {
        		var x2js = new X2JS();
            $scope.greeting = x2js.xml_str2json(data);
            $log.log($scope.greeting);
        });
}
