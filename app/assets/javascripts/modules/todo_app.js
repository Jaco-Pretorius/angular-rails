var todoApp = angular.module('todoApp', [])

todoApp.config(function ($routeProvider) {
  $routeProvider
    .when('/list',
        {
            controller: 'TodoController',
            template: JST['views/list']()
        })
    .when('/item/:itemID',
        {
            controller: 'TodoController',
            templateUrl: '/app/views/item.html'
        })
    .otherwise({ redirectTo: '/list' });
});
