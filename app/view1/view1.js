'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    // Basic Settings
    $scope.randomSelection = null;
    $scope.nameShown = false;
    $scope.descriptionShown = false;
    $scope.resultsVisible = false;
    $scope.count = 0;
    $scope.correctAnswers = 0;
    $scope.incorrectAnswers = 0;

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

    $scope.employeeListCS = [
        {
            name: "Josh Adams",
            title: "Information Technology Manager",
            image: "images/CrowdSurge/1.png"
        },
        {
            name: "Alyea Afzal",
            title: "Commercial Coordinator",
            image: "images/CrowdSurge/2.jpg"
        },
        {
            name: "Jon Attfield",
            title: "Designer Manager",
            image: "images/CrowdSurge/3.jpg"
        },
        {
            name: "Dan Bagnall",
            title: "Client Services",
            image: "images/CrowdSurge/4.jpg"
        },
        {
            name: "Josh Baron",
            title: "Business Development",
            image: "images/CrowdSurge/5.jpg"
        },
        {
            name: "Laura Becker",
            title: "Director of Sales",
            image: "images/CrowdSurge/6.jpg"
        },
        {
            name: "Jesse Bellin",
            title: "Director of Client Services",
            image: "images/CrowdSurge/7.jpg"
        },
        {
            name: "Kyle Bolt",
            title: "Ticketing Operations Coordinator",
            image: "images/CrowdSurge/8.jpg"
        },
        {
            name: "Shaun Burke",
            title: "Campaign Operations Manager",
            image: "images/CrowdSurge/9.jpg"
        },
        {
            name: "Caitlin Came",
            title: "Marketing Coordinator",
            image: "images/CrowdSurge/10.jpg"
        },
        {
            name: "Gonzalo Castro",
            title: "Client Services",
            image: "images/CrowdSurge/11.jpg"
        },
        {
            name: "Johanna Cherry",
            title: "Software Engineer",
            image: "images/CrowdSurge/12.jpg"
        },
        {
            name: "Jake Cohen",
            title: "Business Development, Strategy Manager",
            image: "images/CrowdSurge/13.jpg"
        },
        {
            name: "Meredith Croy",
            title: "Client Services Manager",
            image: "images/CrowdSurge/14.jpg"
        },
        {
            name: "Zack Davenport",
            title: "Business Development Assistant",
            image: "images/CrowdSurge/15.jpg"
        },
        {
            name: "Andy Deeley",
            title: "Financial Controller",
            image: "images/CrowdSurge/16.jpg"
        },
        {
            name: "Bill Domanick",
            title: "Web Designer",
            image: "images/CrowdSurge/17.jpg"
        },
        {
            name: "Christine Dombrowski",
            title: "Ticketing Operations",
            image: "images/CrowdSurge/18.jpg"
        },
        {
            name: "Mac Donoghue",
            title: "Client Services Coordinator",
            image: "images/CrowdSurge/19.jpg"
        },
        {
            name: "Kendyl Dunn",
            title: "Customer Service",
            image: "images/CrowdSurge/20.jpg"
        },
        {
            name: "Leona Edwards",
            title: "Customer Service",
            image: "images/CrowdSurge/21.jpg"
        },
        {
            name: "Noel Edwards",
            title: "Business Development, Strategy Manager",
            image: "images/CrowdSurge/22.jpg"
        },
        {
            name: "Dean Elbaz",
            title: "Software Engineer",
            image: "images/CrowdSurge/23.jpg"
        },
        {
            name: "Ewan Eyre",
            title: "Fulfillment Coordinator",
            image: "images/CrowdSurge/24.jpg"
        },
        {
            name: "Ricky Faillace",
            title: "Ticketing Operations Manager",
            image: "images/CrowdSurge/25.jpg"
        },
        {
            name: "Yamile Fernandez",
            title: "Business Development",
            image: "images/CrowdSurge/26.jpg"
        },
        {
            name: "Matt Flanagan",
            title: "Finance Program Manager",
            image: "images/CrowdSurge/27.jpg"
        },
        {
            name: "Andrea Frey",
            title: "Human Resources Manager",
            image: "images/CrowdSurge/28.jpg"
        },
        {
            name: "Stephen Glicken",
            title: "Director of Business Development",
            image: "images/CrowdSurge/29.jpg"
        },
        {
            name: "Brigitte Gomez",
            title: "Customer Service",
            image: "images/CrowdSurge/30.jpg"
        },
        {
            name: "Lauren Gottlieb",
            title: "Human Resources Assistant",
            image: "images/CrowdSurge/31.jpg"
        },
        {
            name: "Lydia Hecomovich",
            title: "Ticketing Operations Coordinator",
            image: "images/CrowdSurge/32.jpg"
        },
        {
            name: "Eddie Herdemian",
            title: "Product Manager",
            image: "images/CrowdSurge/33.jpg"
        },
        {
            name: "Paul Herdemian",
            title: "VP of Operations and Finance",
            image: "images/CrowdSurge/34.jpg"
        },
        {
            name: "Ryan Herrmann",
            title: "Business Development",
            image: "images/CrowdSurge/35.jpg"
        },
        {
            name: "Ben Hodgson",
            title: "Front-End Developer",
            image: "images/CrowdSurge/36.jpg"
        },
        {
            name: "Joey Isaacson",
            title: "Product Designer",
            image: "images/CrowdSurge/37.jpg"
        },
        {
            name: "Matt Jones",
            title: "Chief Executive Officer",
            image: "images/CrowdSurge/38.jpg"
        },
        {
            name: "Gareth Jones",
            title: "Business Development",
            image: "images/CrowdSurge/39.jpg"
        },
        {
            name: "Mark Kemp",
            title: "Operations Manager",
            image: "images/CrowdSurge/40.jpg"
        },
        {
            name: "Yi Lin",
            title: "Web Designer",
            image: "images/CrowdSurge/41.jpg"
        },
        {
            name: "Christian Marchand",
            title: "Accounting Associate",
            image: "images/CrowdSurge/42.jpg"
        },
        {
            name: "Alison McCowan",
            title: "Fulfillment Coordinator",
            image: "images/CrowdSurge/43.jpg"
        },
        {
            name: "Mark McIntyre",
            title: "VP of Engineering",
            image: "images/CrowdSurge/44.jpg"
        },
        {
            name: "Elyse McKenna",
            title: "Business Development",
            image: "images/CrowdSurge/45.jpg"
        },
        {
            name: "Antonio Mello",
            title: "Managing Director",
            image: "images/CrowdSurge/46.jpg"
        },
        {
            name: "Callum Merriman",
            title: "Product Manager",
            image: "images/CrowdSurge/47.jpg"
        },
        {
            name: "Conor Moran",
            title: "Marketing Operations",
            image: "images/CrowdSurge/48.jpg"
        },
        {
            name: "Charlie Morrison",
            title: "Human Resources and Office Manager",
            image: "images/CrowdSurge/49.jpg"
        },
        {
            name: "Matt Nelson",
            title: "Fulfillment Coordinator",
            image: "images/CrowdSurge/50.jpg"
        },
        {
            name: "Rachel Owusu-Tuffour",
            title: "Customer Service",
            image: "images/CrowdSurge/51.jpg"
        },
        {
            name: "Wilson Palmer",
            title: "Commercial Coordinator",
            image: "images/CrowdSurge/52.jpg"
        },
        {
            name: "Amy Polacsek",
            title: "Ticketing Operations, Special Projects",
            image: "images/CrowdSurge/53.jpg"
        },
        {
            name: "Justin Prescott",
            title: "Assistant Controller",
            image: "images/CrowdSurge/54.jpg"
        },
        {
            name: "Glenn Ray",
            title: "Executive Vice President",
            image: "images/CrowdSurge/55.jpg"
        },
        {
            name: "Lindsey Rothschild",
            title: "Executive Assistant",
            image: "images/CrowdSurge/56.jpg"
        },
        {
            name: "Lauren Rothschild",
            title: "Customer Service",
            image: "images/CrowdSurge/57.jpg"
        },
        {
            name: "Dave Rowett",
            title: "Industry Relations",
            image: "images/CrowdSurge/58.jpg"
        },
        {
            name: "Will Salt",
            title: "Dev Ops",
            image: "images/CrowdSurge/59.jpg"
        },
        {
            name: "Elena Sansigre Silva",
            title: "Customer Service",
            image: "images/CrowdSurge/60.jpg"
        },
        {
            name: "Adam Schiffer",
            title: "Chief Operating Officer",
            image: "images/CrowdSurge/61.jpg"
        },
        {
            name: "Ian Schiffer",
            title: "Business Development Operations Manager",
            image: "images/CrowdSurge/62.jpg"
        },
        {
            name: "Greg Schmale",
            title: "VP of Industry Relations",
            image: "images/CrowdSurge/63.jpg"
        },
        {
            name: "Adam Schuster",
            title: "Director of Human Resources",
            image: "images/CrowdSurge/64.jpg"
        },
        {
            name: "Ryan Simms",
            title: "Director of Architecture & Development",
            image: "images/CrowdSurge/65.jpg"
        },
        {
            name: "Alex Shellim",
            title: "Web Designer",
            image: "images/CrowdSurge/66.jpg"
        },
        {
            name: "Francesca Stabile",
            title: "Operations Manager",
            image: "images/CrowdSurge/67.jpg"
        },
        {
            name: "Nina Thistlethwaite",
            title: "Ticketing Operations Coordinator",
            image: "images/CrowdSurge/68.jpg"
        },
        {
            name: "Matt Vail",
            title: "Chief of Staff",
            image: "images/CrowdSurge/69.jpg"
        },
        {
            name: "Stephen Vallimarescu",
            title: "Business Development Associate",
            image: "images/CrowdSurge/70.jpg"
        },
        {
            name: "Leonie Wakeman",
            title: "Client Services",
            image: "images/CrowdSurge/71.jpg"
        },
        {
            name: "Merry Webster",
            title: "Customer Service Manager",
            image: "images/CrowdSurge/72.jpg"
        },
        {
            name: "Jake Williams",
            title: "Ticketing Operations",
            image: "images/CrowdSurge/73.jpg"
        },
        {
            name: "Jamie Wright",
            title: "Developer",
            image: "images/CrowdSurge/74.jpg"
        },
        {
            name: "Michelle Wood",
            title: "Client Services Manager",
            image: "images/CrowdSurge/75.jpg"
        },
        {
            name: "Allison Winkler",
            title: "Head of Philanthropy",
            image: "images/CrowdSurge/76.jpg"
        }
    ];



    $scope.employeeListSK = [
        {
            name: "Ian Hograth",
            title: "Co-founder, CEO",
            image: "images/Songkick/IMG_1759.JPG"
        },
        {
            name: "Michelle You",
            title: "Co-founder, Chief Product Officer",
            image: "images/Songkick/IMG_1752.JPG"
        },
        {
            name: "Dan Crow",
            title: "CTO",
            image: "images/Songkick/IMG_1760.JPG"
        },
        {
            name: "David Anderson",
            title: "Operations Director",
            image: "images/Songkick/IMG_1738.JPG"
        },
        {
            name: "Gideon Bullock",
            title: "Design Director",
            image: "images/Songkick/IMG_1757.JPG"
        }
        ,
        {
            name: "Marc Pacheco",
            title: "Client-side Architect",
            image: "images/Songkick/IMG_1756.JPG"
        },
        {
            name: "Vivien Barousse",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1729.JPG"
        },
        {
            name: "Daniel Lucraft ",
            title: "Chief Architect",
            image: "images/Songkick/IMG_1744.JPG"
        },
        {
            name: "Alexey Blinov",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1751.JPG"
        },
        {
            name: "Sam Briggs",
            title: "Songkick Soldier",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/sr-1b8ee30.jpg"
        },
        {
            name: "Tom Clark",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1731.JPG"
        },
        {
            name: "Elliot Hancock",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1743.JPG"
        },
        {
            name: "Jamie Hughes",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1749.JPG"
        },
        {
            name: "Paul Lawson",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1748.JPG"
        },
        {
            name: "Tracey Lee-Joe",
            title: "User-experience Designer",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/tracey-c23dea6.jpg"
        },
        {
            name: "Sabrina Leandro",
            title: "Director of Engineering",
            image: "images/Songkick/IMG_1726.JPG"
        },
        {
            name: "Tom May",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1732.JPG"
        },
        {
            name: "Adam McIsaac",
            title: "Songkick Soldier",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/adam-b7a246c.jpg"
        },
        {
            name: "Michael Orland",
            title: "Chief Revenue Officer",
            image: "images/Songkick/IMG_1724.JPG"
        },
        {
            name: "Brooke Parrott",
            title: "Songkick Soldier",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/bp-4c0d6e2.jpg"
        },
        {
            name: "Aaron Randall",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1728.JPG"
        },
        {
            name: "Sam Rudge",
            title: "Infrastructure Engineer",
            image: "images/Songkick/IMG_1735.JPG"
        },
        {
            name: "Emily Sergent",
            title: "Head of Community",
            image: "images/Songkick/IMG_1736.JPG"
        },
        {
            name: "Paul Springett",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1745.JPG"
        },
        {
            name: "Karim Dia Toubajie",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_3718.JPG"
        },
        {
            name: "Robin Tweedie",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1734.JPG"
        },
        {
            name: "Aaron Rodgers",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1727.JPG"
        },
        {
            name: "Amy Phillips",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1733.JPG"
        },
        {
            name: "Lucy Wardley",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1740.JPG"
        },
        {
            name: "Kalyn Dobbs",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1741.JPG"
        },
        {
            name: "James Gibb",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1742.JPG"
        }
    ];

    var setList = [];


    var makeList = function() {

        for (var i in $scope.employeeList) {

            if ($scope.randomnumber1 != i && $scope.randomnumber2 != i) {
                setList.push([i]);
            } else {
                console.log("duplicate");
            };
        };

        for (var i = 0; i < setList.length; i++) {
            while (setList[i].length < 3) {
                var randomNumber = Math.floor(Math.random()*setList.length);
                if (randomNumber != i && randomNumber != setList[i][1]) {
                    setList[i].push(randomNumber);
                };
            };
        };
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
