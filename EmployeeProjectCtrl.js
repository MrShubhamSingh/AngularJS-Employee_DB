SApp.controller('EmployeeProjectCtrl', ['$scope', 'ProjectDBServices', '$uibModal', '$uibModalStack', '$filter', '$http',

    function ($scope, ProjectDBServices, $uibModal, $uibModalStack, $http, $filter) {
        // this is base url   
        var baseUrl = '';
        // get all Project from databse  
        $scope.getProject = function () {
            var apiRoute = baseUrl + 'http://empdbdev.southeastasia.cloudapp.azure.com/api/Project';
            var Project = ProjectDBServices.getAll(apiRoute);
            Project.then(function (response) {
                $scope.regdata = response.data;

            },
                function (error) {
                    console.log("Error: " + error);
                });

        }
        $scope.getProject();


        $scope.ViewProjectRecord = function (ProjectID) {


            var onlyID = $scope.regdata.filter(function (v) {
                return v.ProjectID === ProjectID;
            })

            modalInstance = $uibModal.open({
                animation: false,
                templateUrl: './Pages/ViewProjectRecord.html',
                controller: 'ViewProjectRcrdCtrl',
                scope: $scope,
                size: '',
                resolve: {
                    record: function () {

                        return onlyID ;
                        
                    }
                }
               
            });
            

        }

        
        $scope.EditProjectRecord = function (ProjectID) {

            var editProjectID = $scope.regdata.filter(function (v) {
                return v.ProjectID === ProjectID;
                console.log(editProjectID)
            })

            modalInstance = $uibModal.open({
                animation: false,
                templateUrl: './Pages/EditProjectRecord.html',
                controller: 'UpdateProjectCtrl',
                scope: $scope,
                size: '',

                resolve: {
                    record: function () {
                      
                        return editProjectID;
                        return $scope.getProject();
                        
                    }
                   
                }
               
            });

           
        }



        $scope.cancel = function () {
            $uibModalStack.dismissAll();
        }

        $scope.searchProject = '';
        $scope.filterOnLocation = function(e) {
          return (e.ProjectName.toUpperCase()).indexOf($scope.searchProject.toUpperCase()) >= 0;
        };

    }]);
SApp.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);
