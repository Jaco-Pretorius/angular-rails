function TodoController($scope, $http, $location) {
 
  $http.get('/todo/index.json').success(function(data) {
    $scope.items = data;
  });

  $scope.newTodo = function() {
    $location.path("new");
  };

  $scope.addTodo = function() {
    alert('add todo');
  }

  $scope.backToList = function() {
    $location.path("list");
  }
 
}

