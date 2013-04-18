function TodoController($scope, $http, $location) {
 
  $http.get('/todo.json').success(function(data) {
    $scope.items = data;
  });

  $scope.newTodo = function() {
    $location.path("new");
  };

  $scope.addTodo = function() {
    var description = $scope.newTodo.description;
    $http.post('/todo.json', { description: description }).success(function() {
      $scope.newTodo.description = '';
      $location.path("list");
    });
  }

  $scope.deleteTodo = function(todo) {
    var id = todo._id;
    $http.delete('/todo/' + id).success(function() {
      $location.path("list");
    });
  }

  $scope.backToList = function() {
    $location.path("list");
  }
}

