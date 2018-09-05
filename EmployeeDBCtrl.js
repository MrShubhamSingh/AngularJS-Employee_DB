SApp.controller('EmployeeDBCtrl', ['$scope', 'EmployeeDBServices', '$uibModal', '$uibModalStack', '$http', '$filter',

    function ($scope, EmployeeDBServices, $uibModal, $uibModalStack, $http, $filter) {
        // this is base url   
        var baseUrl = 'http://empdbdev.southeastasia.cloudapp.azure.com/api/employee';
        // get all Employee from databse  
        $scope.getEmployee = function () {
            var apiRoute = baseUrl + '';
            var Employee = EmployeeDBServices.getAll(apiRoute);
            Employee.then(function (response) {
                $scope.regdata = response.data;
     
            },
                function (error) {
                    console.log("Error: " + error);
                });

        }
        $scope.getEmployee();

        $scope.Currency=[
            {CurrencyID : 1, CurrencyName:"INR"},
            {CurrencyID : 2, CurrencyName:"YEN"},
            {CurrencyID : 3, CurrencyName:"USD"}
            ]
        
        $scope.designationList= function ()  {
            $http.get("http://empdbdev.southeastasia.cloudapp.azure.com/api/Designation")
            .then(function(response){ $scope.designationDetails = response.data;
         
             });
            
          }
       
          $scope.locationList= function (){
            $http.get("http://empdbdev.southeastasia.cloudapp.azure.com/api/Location")
            .then(function(response){ $scope.locationDetails = response.data; });
          
            
          }

         $scope.projectList =function (){
            $http.get("http://empdbdev.southeastasia.cloudapp.azure.com/api/Project")
            .then(function(response){ $scope.projectDetails = response.data; });
          }
    $scope.designationList();
    $scope.locationList();
    $scope.projectList();

        $scope.ViewEmpRecord = function (ID) {


            var specificID = $scope.regdata.filter(function (v) {
                return v.ID === ID;
            })

            modalInstance = $uibModal.open({
                animation: false,
                templateUrl: './Pages/ViewEmpRcrd.html',
                controller: 'ViewEmpRcrdCtrl',
                scope: $scope,
                size: '',
                resolve: {
                    record: function () {

                        return specificID;

                    }
                }
               
            });
            

        }

     

        $scope.EditEmpRecord = function (ID) {

            var editID = $scope.regdata.filter(function (v) {
                return v.ID === ID;
                
            })

            modalInstance = $uibModal.open({
                animation: false,
                templateUrl: './Pages/EditEmpRecord.html',
                controller: 'UpdateEmpCtrl',
                scope: $scope,
                size: '',

                resolve: {
                    record: function () {
                      
                        return editID;
                        return $scope.getEmployee();
                        
                    }
                   
                }
               
            });

           
        }


        $scope.deleteRecord = function (e) {
            console.log(e)
            e.IsActive=false
            $http({
                method: 'POST',
              
              /*   data: ID, */
              
                url: ('http://empdbdev.southeastasia.cloudapp.azure.com/api/Employee/DeleteEmployee/' +e.ID),
                
             
               data: e
              
            })
            .then(function(result) {
                
                $scope.getEmployee();
                alert(e.FirstName+ ' deleted!');
             }, function(error) {
                alert('Failed');
              
            });
        }


        $scope.cancel = function () {
            $uibModalStack.dismissAll();
        }

        $scope.search = '';
        $scope.filterOnLocation = function(e) {
          return (e.FirstName.toUpperCase()+ e.EmailID.toUpperCase()).indexOf($scope.search.toUpperCase()) >= 0;
        };
     
    
    }]);
SApp.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);



