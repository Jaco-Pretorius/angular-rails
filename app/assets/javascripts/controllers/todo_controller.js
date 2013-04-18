function TodoController($scope, $http) {
 
  $http.get('/todo/index.json').success(function(data) {
    $scope.items = data;
  });
 
}

