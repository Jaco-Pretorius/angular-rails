var todoApp = angular.module('todoApp', [])

todoApp.config(function ($routeProvider) {
  $routeProvider
    .when('/list',
      {
        controller: 'TodoController',
        template: JST['views/list']()
      })
    .when('/new',
      {
        controller: 'TodoController',
        template: JST['views/new']()
      })
    .when('/item/:itemID',
      {
        controller: 'TodoController',
        templateUrl: '/app/views/item.html'
      })
    .otherwise({ redirectTo: '/list' });
});
