SApp.service('EmployeeDBServices', function ($http) {  
    //-------------------Get All Record-------------------
    var urlGet = '';  
    this.getAll = function (apiRoute) {  
        urlGet = apiRoute;  
        return $http.get(urlGet);  
        
    }  
}); 