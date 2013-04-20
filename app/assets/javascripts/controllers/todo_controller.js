function TodoController($scope, $location, todoFactory) {
  loadTodos(); 

  $scope.newTodo = function() {
    $location.path("new");
  };

  $scope.addTodo = function() {
    todoFactory.save($scope.newTodoModel, backToList);
  }

  $scope.updateTodo = function(todo) {
    todo.$update(backToList);
  }

  $scope.deleteTodo = function(todo) {
    todo.$delete(function() {
      loadTodos();
      backToList();
    });
  }

  $scope.backToList = backToList;
  
  function backToList() {
    $location.path("list");
  }

  function loadTodos() {
    $scope.items = todoFactory.query() 
  }
}

