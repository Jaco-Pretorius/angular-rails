//= require ../modules/todo_app

todoApp.factory('todoFactory', function($resource) {
  return $resource('/todo/:todoId', 
    { todoId:'@_id' }, 
    { update: { method: 'PUT' }}
  );
});
