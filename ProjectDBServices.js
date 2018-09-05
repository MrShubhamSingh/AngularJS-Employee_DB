SApp.service('ProjectDBServices', function ($http) {  
    //-------------------Get All Project Record-------------------
    var urlGet = '';  
    this.getAll = function (apiRoute) {  
        urlGet = apiRoute;  
        return $http.get(urlGet);  
    }  
});  