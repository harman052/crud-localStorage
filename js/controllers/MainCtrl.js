angular.module('MainCtrl', []).controller('MainController', function($scope, $routeParams) {
    $scope.testing = "testing working";

    $scope.getElement = {};
    
    /* Fetching data from localStorage */
    var fetch = function(){
        $scope.allData = [];
        for (var i = 0; i < localStorage.length; i++) {
            $scope.allData[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
        };
    }

    fetch();

    /* Saving data into localStorage */
    $scope.save = function(person){
        person.id = Number(new Date());
        localStorage.setItem(person.id, JSON.stringify(person));  
        fetch();
    }

    /* Delete data */
    $scope.remove = function(id){
        localStorage.removeItem(id);
        fetch();
    }

    /* Edit data */
    $scope.edit = function(id){ 
        $scope.getElement = JSON.parse(localStorage.getItem(id));
        console.log("id: " + id);
    }
        
    /* Update data */
    $scope.update = function(person){ 
        $scope.remove(person.id);
        person.id = Number(new Date());
        localStorage.setItem(person.id, JSON.stringify(person));  
        fetch();
    }
});
