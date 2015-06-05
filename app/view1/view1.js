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
            image: "images/CrowdSurge/1.png",
            gender: "m"
        },
        {
            name: "Alyea Afzal",
            title: "Commercial Coordinator",
            image: "images/CrowdSurge/2.jpg"
        },
        {
            name: "Jon Attfield",
            title: "Designer Manager",
            image: "images/CrowdSurge/3.jpg",
            gender: "m"
        },
        {
            name: "Dan Bagnall",
            title: "Client Services",
            image: "images/CrowdSurge/4.jpg",
            gender: "m"
        },
        {
            name: "Josh Baron",
            title: "Business Development",
            image: "images/CrowdSurge/5.jpg",
            gender: "m"
        },
        {
            name: "Laura Becker",
            title: "Director of Sales",
            image: "images/CrowdSurge/6.jpg",
            gender: "f"
        },
        {
            name: "Jesse Bellin",
            title: "Director of Client Services",
            image: "images/CrowdSurge/7.jpg",
            gender: "f"
        },
        {
            name: "Kyle Bolt",
            title: "Ticketing Operations Coordinator",
            image: "images/CrowdSurge/8.jpg",
            gender: "m"
        },
        {
            name: "Shaun Burke",
            title: "Campaign Operations Manager",
            image: "images/CrowdSurge/9.jpg",
            gender: "m"
        },
        {
            name: "Caitlin Came",
            title: "Marketing Coordinator",
            image: "images/CrowdSurge/10.jpg",
            gender: "f"
        },
        {
            name: "Gonzalo Castro",
            title: "Client Services",
            image: "images/CrowdSurge/11.jpg",
            gender: "m"
        },
        {
            name: "Johanna Cherry",
            title: "Software Engineer",
            image: "images/CrowdSurge/12.jpg",
            gender: "f"
        },
        {
            name: "Jake Cohen",
            title: "Business Development, Strategy Manager",
            image: "images/CrowdSurge/13.jpg",
            gender: "m"
        },
        {
            name: "Meredith Croy",
            title: "Client Services Manager",
            image: "images/CrowdSurge/14.jpg",
            gender: "f"
        },
        {
            name: "Zack Davenport",
            title: "Business Development Assistant",
            image: "images/CrowdSurge/15.jpg",
            gender: "m"
        },
        {
            name: "Andy Deeley",
            title: "Financial Controller",
            image: "images/CrowdSurge/16.jpg",
            gender: "m"
        },
        {
            name: "Bill Domanick",
            title: "Web Designer",
            image: "images/CrowdSurge/17.jpg",
            gender: "m"
        },
        {
            name: "Christine Dombrowski",
            title: "Ticketing Operations",
            image: "images/CrowdSurge/18.jpg",
            gender: "f"
        },
        {
            name: "Mac Donoghue",
            title: "Client Services Coordinator",
            image: "images/CrowdSurge/19.jpg",
            gender: "m"
        },
        {
            name: "Kendyl Dunn",
            title: "Customer Service",
            image: "images/CrowdSurge/20.jpg",
            gender: "f"
        },
        {
            name: "Leona Edwards",
            title: "Customer Service",
            image: "images/CrowdSurge/21.jpg",
            gender: "f"
        },
        {
            name: "Noel Edwards",
            title: "Business Development, Strategy Manager",
            image: "images/CrowdSurge/22.jpg",
            gender: "m"
        },
        {
            name: "Dean Elbaz",
            title: "Software Engineer",
            image: "images/CrowdSurge/23.jpg",
            gender: "m"
        },
        {
            name: "Ewan Eyre",
            title: "Fulfillment Coordinator",
            image: "images/CrowdSurge/24.jpg",
            gender: "m"
        },
        {
            name: "Ricky Faillace",
            title: "Ticketing Operations Manager",
            image: "images/CrowdSurge/25.jpg",
            gender: "m"
        },
        {
            name: "Yamile Fernandez",
            title: "Business Development",
            image: "images/CrowdSurge/26.jpg",
            gender: "f"
        },
        {
            name: "Matt Flanagan",
            title: "Finance Program Manager",
            image: "images/CrowdSurge/27.jpg",
            gender: "m"
        },
        {
            name: "Andrea Frey",
            title: "Human Resources Manager",
            image: "images/CrowdSurge/28.jpg",
            gender: "f"
        },
        {
            name: "Stephen Glicken",
            title: "Director of Business Development",
            image: "images/CrowdSurge/29.jpg",
            gender: "m"
        },
        {
            name: "Brigitte Gomez",
            title: "Customer Service",
            image: "images/CrowdSurge/30.jpg",
            gender: "f"
        },
        {
            name: "Lauren Gottlieb",
            title: "Human Resources Assistant",
            image: "images/CrowdSurge/31.jpg",
            gender: "f"
        },
        {
            name: "Lydia Hecomovich",
            title: "Ticketing Operations Coordinator",
            image: "images/CrowdSurge/32.jpg",
            gender: "f"
        },
        {
            name: "Eddie Herdemian",
            title: "Product Manager",
            image: "images/CrowdSurge/33.jpg",
            gender: "m"
        },
        {
            name: "Paul Herdemian",
            title: "VP of Operations and Finance",
            image: "images/CrowdSurge/34.jpg",
            gender: "m"
        },
        {
            name: "Ryan Herrmann",
            title: "Business Development",
            image: "images/CrowdSurge/35.jpg",
            gender: "m"
        },
        {
            name: "Ben Hodgson",
            title: "Front-End Developer",
            image: "images/CrowdSurge/36.jpg",
            gender: "m"
        },
        {
            name: "Joey Isaacson",
            title: "Product Designer",
            image: "images/CrowdSurge/37.jpg",
            gender: "m"
        },
        {
            name: "Matt Jones",
            title: "Chief Executive Officer",
            image: "images/CrowdSurge/38.jpg",
            gender: "m"
        },
        {
            name: "Gareth Jones",
            title: "Business Development",
            image: "images/CrowdSurge/39.jpg",
            gender: "m"
        },
        {
            name: "Mark Kemp",
            title: "Operations Manager",
            image: "images/CrowdSurge/40.jpg",
            gender: "m"
        },
        {
            name: "Yi Lin",
            title: "Web Designer",
            image: "images/CrowdSurge/41.jpg",
            gender: "m"
        },
        {
            name: "Christian Marchand",
            title: "Accounting Associate",
            image: "images/CrowdSurge/42.jpg",
            gender: "m"
        },
        {
            name: "Alison McCowan",
            title: "Fulfillment Coordinator",
            image: "images/CrowdSurge/43.jpg",
            gender: "f"
        },
        {
            name: "Mark McIntyre",
            title: "VP of Engineering",
            image: "images/CrowdSurge/44.jpg",
            gender: "m"
        },
        {
            name: "Elyse McKenna",
            title: "Business Development",
            image: "images/CrowdSurge/45.jpg",
            gender: "f"
        },
        {
            name: "Antonio Mello",
            title: "Managing Director",
            image: "images/CrowdSurge/46.jpg",
            gender: "m"
        },
        {
            name: "Callum Merriman",
            title: "Product Manager",
            image: "images/CrowdSurge/47.jpg",
            gender: "m"
        },
        {
            name: "Conor Moran",
            title: "Marketing Operations",
            image: "images/CrowdSurge/48.jpg",
            gender: "m"
        },
        {
            name: "Charlie Morrison",
            title: "Human Resources and Office Manager",
            image: "images/CrowdSurge/49.jpg",
            gender: "m"
        },
        {
            name: "Matt Nelson",
            title: "Fulfillment Coordinator",
            image: "images/CrowdSurge/50.jpg",
            gender: "m"
        },
        {
            name: "Rachel Owusu-Tuffour",
            title: "Customer Service",
            image: "images/CrowdSurge/51.jpg",
            gender: "f"
        },
        {
            name: "Wilson Palmer",
            title: "Commercial Coordinator",
            image: "images/CrowdSurge/52.jpg",
            gender: "m"
        },
        {
            name: "Amy Polacsek",
            title: "Ticketing Operations, Special Projects",
            image: "images/CrowdSurge/53.jpg",
            gender: "f"
        },
        {
            name: "Justin Prescott",
            title: "Assistant Controller",
            image: "images/CrowdSurge/54.jpg",
            gender: "m"
        },
        {
            name: "Glenn Ray",
            title: "Executive Vice President",
            image: "images/CrowdSurge/55.jpg",
            gender: "m"
        },
        {
            name: "Lindsey Rothschild",
            title: "Executive Assistant",
            image: "images/CrowdSurge/56.jpg",
            gender: "f"
        },
        {
            name: "Lauren Rothschild",
            title: "Customer Service",
            image: "images/CrowdSurge/57.jpg",
            gender: "f"
        },
        {
            name: "Dave Rowett",
            title: "Industry Relations",
            image: "images/CrowdSurge/58.jpg",
            gender: "m"
        },
        {
            name: "Will Salt",
            title: "Dev Ops",
            image: "images/CrowdSurge/59.jpg",
            gender: "m"
        },
        {
            name: "Elena Sansigre Silva",
            title: "Customer Service",
            image: "images/CrowdSurge/60.jpg",
            gender: "f"
        },
        {
            name: "Adam Schiffer",
            title: "Chief Operating Officer",
            image: "images/CrowdSurge/61.jpg",
            gender: "m"
        },
        {
            name: "Ian Schiffer",
            title: "Business Development Operations Manager",
            image: "images/CrowdSurge/62.jpg",
            gender: "m"
        },
        {
            name: "Greg Schmale",
            title: "VP of Industry Relations",
            image: "images/CrowdSurge/63.jpg",
            gender: "m"
        },
        {
            name: "Adam Schuster",
            title: "Director of Human Resources",
            image: "images/CrowdSurge/64.jpg",
            gender: "m"
        },
        {
            name: "Ryan Simms",
            title: "Director of Architecture & Development",
            image: "images/CrowdSurge/65.jpg",
            gender: "m"
        },
        {
            name: "Alex Shellim",
            title: "Web Designer",
            image: "images/CrowdSurge/66.jpg",
            gender: "m"
        },
        {
            name: "Francesca Stabile",
            title: "Operations Manager",
            image: "images/CrowdSurge/67.jpg",
            gender: "f"
        },
        {
            name: "Nina Thistlethwaite",
            title: "Ticketing Operations Coordinator",
            image: "images/CrowdSurge/68.jpg",
            gender: "f"
        },
        {
            name: "Matt Vail",
            title: "Chief of Staff",
            image: "images/CrowdSurge/69.jpg",
            gender: "m"
        },
        {
            name: "Stephen Vallimarescu",
            title: "Business Development Associate",
            image: "images/CrowdSurge/70.jpg",
            gender: "m"
        },
        {
            name: "Leonie Wakeman",
            title: "Client Services",
            image: "images/CrowdSurge/71.jpg",
            gender: "f"
        },
        {
            name: "Merry Webster",
            title: "Customer Service Manager",
            image: "images/CrowdSurge/72.jpg",
            gender: "f"
        },
        {
            name: "Jake Williams",
            title: "Ticketing Operations",
            image: "images/CrowdSurge/73.jpg",
            gender: "m"
        },
        {
            name: "Jamie Wright",
            title: "Developer",
            image: "images/CrowdSurge/74.jpg",
            gender: "m"
        },
        {
            name: "Michelle Wood",
            title: "Client Services Manager",
            image: "images/CrowdSurge/75.jpg",
            gender: "f"
        },
        {
            name: "Allison Winkler",
            title: "Head of Philanthropy",
            image: "images/CrowdSurge/76.jpg",
            gender: "f"
        }
    ];



    $scope.employeeListSK = [
        {
            name: "Ian Hogarth",
            title: "Co-founder, CEO",
            image: "images/Songkick/IMG_1759.jpg",
            gender: "m"
        },
        {
            name: "Michelle You",
            title: "Co-founder, Chief Product Officer",
            image: "images/Songkick/IMG_1752.jpg",
            gender: "f"
        },
        {
            name: "Dan Crow",
            title: "CTO",
            image: "images/Songkick/IMG_1760.jpg",
            gender: "m"
        },
        {
            name: "David Anderson",
            title: "Operations Director",
            image: "images/Songkick/IMG_1738.jpg",
            gender: "m"
        },
        {
            name: "Gideon Bullock",
            title: "Design Director",
            image: "images/Songkick/IMG_1757.jpg",
            gender: "m"
        }
        ,
        {
            name: "Marc Pacheco",
            title: "Client-side Architect",
            image: "images/Songkick/IMG_1756.jpg",
            gender: "m"
        },
        {
            name: "Vivien Barousse",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1729.jpg",
            gender: "m"
        },
        {
            name: "Daniel Lucraft ",
            title: "Chief Architect",
            image: "images/Songkick/IMG_1744.jpg",
            gender: "m"
        },
        {
            name: "Alexey Blinov",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1751.jpg",
            gender: "m"
        },
        {
            name: "Sam Briggs",
            title: "Songkick Soldier",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/sr-1b8ee30.jpg",
            gender: "m"
        },
        {
            name: "Tom Clark",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1731.jpg",
            gender: "m"
        },
        {
            name: "Elliot Hancock",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1743.jpg",
            gender: "m"
        },
        {
            name: "Jamie Hughes",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1749.jpg",
            gender: "m"
        },
        {
            name: "Paul Lawson",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1748.jpg",
            gender: "m"
        },
        {
            name: "Tracey Lee-Joe",
            title: "User-experience Designer",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/tracey-c23dea6.jpg",
            gender: "f"
        },
        {
            name: "Sabrina Leandro",
            title: "Director of Engineering",
            image: "images/Songkick/IMG_1726.jpg",
            gender: "f"
        },
        {
            name: "Tom May",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1732.jpg",
            gender: "m"
        },
        {
            name: "Adam McIsaac",
            title: "Songkick Soldier",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/adam-b7a246c.jpg",
            gender: "m"
        },
        {
            name: "Michael Orland",
            title: "Chief Revenue Officer",
            image: "images/Songkick/IMG_1724.jpg",
            gender: "m"
        },
        {
            name: "Brooke Parrott",
            title: "Songkick Soldier",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/bp-4c0d6e2.jpg",
            gender: "f"
        },
        {
            name: "Aaron Randall",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1728.jpg",
            gender: "m"
        },
        {
            name: "Sam Rudge",
            title: "Infrastructure Engineer",
            image: "images/Songkick/IMG_1735.jpg",
            gender: "m"
        },
        {
            name: "Emily Sergent",
            title: "Head of Community",
            image: "images/Songkick/IMG_1736.jpg",
            gender: "f"
        },
        {
            name: "Paul Springett",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1745.jpg",
            gender: "m"
        },
        {
            name: "Karim Dia Toubajie",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_3718.jpg",
            gender: "m"
        },
        {
            name: "Robin Tweedie",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1734.jpg",
            gender: "m"
        },
        {
            name: "Aaron Rodgers",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1727.jpg",
            gender: "m"
        },
        {
            name: "Amy Phillips",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1733.jpg",
            gender: "f"
        },
        {
            name: "Lucy Wardley",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1740.jpg",
            gender: "f"
        },
        {
            name: "Kalyn Dobbs",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1741.jpg",
            gender: "f"
        },
        {
            name: "James Gibb",
            title: "Songkick Soldier",
            image: "images/Songkick/IMG_1742.jpg",
            gender: "m"
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
                if ( $scope.employeeList[setList[0]].gender === $scope.employeeList[randomNumber].gender && randomNumber != i && randomNumber != setList[i][1]) {
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
