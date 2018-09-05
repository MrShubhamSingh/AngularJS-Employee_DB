'use strict';
var SApp = angular.module('SApp', ['ngRoute', 'ui.bootstrap']);

// configure our routes
SApp.config(function ($routeProvider) {
    $routeProvider


        .when('/', {
            controller: 'EmployeeDBCtrl',
            templateUrl: "Pages/ViewEmployee.html"


        })


        .when('/NewEmployee', {
            controller: 'NewEmployeeCtrl',
            templateUrl: "Pages/NewEmployee.html"

        })

        .when('/NewProject', {
            controller: 'NewProjectCtrl',
            templateUrl: "Pages/NewProject.html"


        })

        .when('/ViewProject', {
            controller: 'EmployeeProjectCtrl',
            templateUrl: "Pages/ViewProject.html"

        })

    });