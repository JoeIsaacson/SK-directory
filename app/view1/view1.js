'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {

    // Basic Settings
    $scope.randomSelection = null;
    $scope.nameShown = false;
    $scope.descriptionShown = false;
    $scope.resultsVisible = false;
    $scope.count = 0;
    $scope.correctAnswers = 0;
    $scope.incorrectAnswers = 0;

    // Get CS Data
    $http.get('view1/CS.json').success(function(data) {
        $scope.employeeListCS = data;
    });

    // Get SK Data
    $http.get('view1/SK.json').success(function(data) {
        $scope.employeeListSK = data;
    });


    // Select A Directory
    $scope.selectDirectory = function(selectedDirectory) {
        console.log(selectedDirectory);

        if (selectedDirectory === "SK") {
            $rootScope.employeeList = $scope.employeeListSK;
            makeList();
            $scope.showNext();
        } else {
            $rootScope.employeeList = $scope.employeeListCS;
            makeList();
            $scope.showNext();
        };

    };

    var setList = [];

    var makeList = function() {

        // Addition of second / third person IF duplicate
        for (var i in $scope.employeeList) {

            if ($scope.randomnumber1 != i && $scope.randomnumber2 != i) {
                setList.push([i]);
            };
        };

        // Addition of second / third person IF duplicate
        for (var i = 0; i < setList.length; i++) {

            var selectedGender = $scope.employeeList[i].gender;

            while (setList[i].length < 3) {

                var randomNumber = Math.floor(Math.random()*setList.length);
                if (selectedGender === $scope.employeeList[randomNumber].gender && randomNumber != i && randomNumber != setList[i][1]) {
                    setList[i].push(randomNumber);
                };
            };
        };

        console.log(setList);
    };

    $scope.showName = function() {
        $scope.nameShown = true;
    };

    $scope.showNext = function() {

        // UPADATE THE COUNT
        $scope.count = $scope.count+1;
        // ClEAR ANY SELECTED PEOPLE
        $scope.selectedName = null;
        $scope.resultsVisible = false;
        $scope.nameShown = false;

        if ($scope.employeeList.length >= $scope.count) {

            $scope.selectedSetList = setList[$scope.count-1];

            $scope.employeeOne = $rootScope.employeeList[$scope.selectedSetList[0]].name;
            $scope.employeeTwo = $rootScope.employeeList[$scope.selectedSetList[1]].name;
            $scope.employeeThree = $rootScope.employeeList[$scope.selectedSetList[2]].name;

            $scope.listOfPeople = [$scope.employeeOne, $scope.employeeTwo, $scope.employeeThree];

            // RANDOMIZE THE LIST
            $scope.generateRandomOrderBy = function(){
                $scope.randomOrderBy = Math.random();
            };

            // a random number to randomize the list
            $scope.generateRandomOrderBy();

        } else {
            // console.log("finished!");
            console.log($scope.successRate = $scope.correctAnswers / ($scope.count-1));
        };

    };

    $scope.resultsArray = [];

    $scope.selectPerson = function(person) {

        if ($scope.employeeList.length >= $scope.count) {
            $scope.selectedName = person;
            $scope.resultsVisible = true;
            $scope.nameShown = true;

            // Was the selection correct?
            if ($scope.employeeOne === $scope.selectedName) {
                $scope.correctAnswer = true;
                $scope.correctAnswers = $scope.correctAnswers +1;
                $scope.resultsArray.push("right");
                $scope.showNext();
                console.log($scope.resultsArray);
            } else {
                $scope.correctAnswer = false;
                $scope.incorrectAnswers = $scope.incorrectAnswers +1;
                $scope.resultsArray.push("wrong");
                console.log($scope.resultsArray);
            };
        };

    };

}]);
