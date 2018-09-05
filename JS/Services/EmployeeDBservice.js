SApp.service('EmployeeDBservice', function ($http) {  
   
    var urlGet = '';  
    this.getAll = function (apiRoute) {  
        urlGet = apiRoute;  
        return $http.get(urlGet);  
    }  
});  