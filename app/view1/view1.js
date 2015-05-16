'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.randomSelection = null;
    $scope.nameShown = false;
    $scope.descriptionShown = false;
    $scope.resultsVisible = false;

    var falseNames = ["Ben Hodgson", "Callum Merriman", "Dean Elbaz", "Johanna Cherry", "Dave MacLadrie", "Alex Read", "Ryan Simms", "Jamie Wright", "David Hernandez"];

    $rootScope.employeeList = [
        {
            name: "Ian Hograth",
            description: "Ian got a master’s in machine learning at Cambridge and loves dystopian robot takeover narratives. Seven years ago, Ian realized being a choirboy came with no street cred, so he started DJing hip-hop, funk, drum & bass, and grime. Ian quit his job at Bain & Company, Singapore to start Songkick.",
            title: "Co-founder, CEO",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/ih-790dea3.jpg"
        },
        {
            name: "Michelle You",
            description: "Michelle studied English and philosophy at Columbia before receiving her master’s in English at Cambridge, all of which was training for writing the snappy copy you read on Songkick. She was the managing editor of Theme magazine before starting Songkick.",
            title: "Co-founder, Chief Product Officer",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/my-6fab8b8.jpg"
        },
        {
            name: "Dan Crow",
            description: "Dan enjoys watching other people play music. He joined Songkick from Google where he spent five years working on search. He lived in Silicon Valley for 10 years, working at Apple and a bunch of startups including co-founding Blurb. He has a PhD in AI and a degree in Computer Science, both from Leeds University.",
            title: "CTO",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/dc-c850a92.jpg"
        },
        {
            name: "David Anderson",
            description: "David joined Songkick from Google, prior to which he worked as a strategy consultant, and ran a small not-for-profit company. David studied Natural Sciences and Management at Cambridge University, and outside of work enjoys eating (and occasionally cooking) fine food, playing a competitive round of golf, and spending an afternoon watching the latest HBO boxset.",
            title: "Operations Director",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/da-f566223.jpg"
        },
        {
            name: "Gideon Bullock",
            description: "Gideon has been designing since the early 1990’s, across mobile, iTV, and the web. He was lead designer at the BBC, helming their homepage redesign in 2000. Since then, he was at Skype in their early years and started his own T-shirt design website. Gideon also DJs at a night called 99p Records in Shoreditch.",
            title: "Design Director",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/gb-636c84a.jpg"
        },
        {
            name: "Marc Pacheco",
            description: "Before joining Songkick, Marc lead the client-side development of the Guardian’s R2 project, which, over the course of 2.5 years, moved the entire website onto a more modern and robust platform. Before that, he worked on a wide variety of standards-compliant websites for the likes of Unilever, BT, Sky, and Halifax.",
            title: "Client-side Architect",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/marc-4f313f3.png"
        },
        {
            name: "Vivien Barousse",
            description: "Vivien came to the UK from Montpellier, France to study for a master’s degree at Brookes University in Oxford. He then moved to London to start working at Songkick. Besides writing code, Vivien enjoys writing more code, climbing stuff, and snowboarding.",
            title: "Hard Worker",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/vivien-c7a7b55.jpg"
        },
        {
            name: "Daniel Lucraft ",
            description: "Dan has a Master’s in probability from Durham University, and came to Songkick in 2008 as a Junior Developer from an ill-fated PhD programme. He likes writing software for fun and has presented at a number of Ruby conferences.",
            title: "Chief Architect",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/dl-1c25747.jpg"
        },
        {
            name: "Alexey Blinov",
            description: "Alexey grew up in rural Russia, where he spent his teenage years drooling over the gigs on the back pages of NME that he borrowed from the local British Council library. He then moved to Christchurch, New Zealand where he got his B.Sc. in Computer Science. Having grown tired of paying for an airfare any time he wanted to see a band he eventually moved to London. In his spare time he likes to brew things (mainly beer and coffee).",
            title: "Go getter",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/alexey-591e7cd.jpg"
        },
        {
            name: "Sam Briggs",
            description: "Sam joined Songkick after working as a music journalist, running his own theatre and events company, failing as a folk singer, giving up a burgeoning career dressing up as a friendly alien at an indoor children’s playground and winning Beaver of the Year 1998. These days, he enjoys growing his beard and listening to Springsteen.",
            title: "Hustler",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/sr-1b8ee30.jpg"
        },
        {
            name: "Tom Clark",
            description: "Tom joined Songkick after working as a Product Manager for the Sibelius music notation software family. Prior to that he trained as a jazz saxophonist at Leeds College of Music. These days, instead of playing and composing music, he’s content performing the role of jazz snob. Tom owns a cat called Mingus.",
            title: "Jazz Man",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/tom-e3ff7d6.jpg"
        },
        {
            name: "Elliot Hancock",
            description: "Elliot grew up making the weekly pilgrimage from Dorking to London for his gig fix, before choosing Manchester University exclusively for its live music scene. With a degree in Politics & Modern History, he festival-hopped his way around Europe and returned home to apply for the Songkick graduate internship. Elliot secretly loathes Songkick, and longs for a time when he knew about gigs before anyone else.",
            title: "Boss Man",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/elliot-d752a00.jpg"
        },
        {
            name: "Jamie Hughes",
            description: "Jamie was putting on gigs in his hometown before he was allowed to go to them. At university he used his student radio show as an excuse to go to gigs and interview the likes of Skream, Mumford & Sons and his teen idols 65DaysofStatic. Although he had a burgeoning career at a smoothie bar, Jamie decided he’d rather come work at Songkick.",
            title: "Songkick Soldier",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/jamie-1bc0404.jpg"
        },
        {
            name: "Paul Lawson",
            description: "Paul has a degree in maths from Oxford University, and a PhD from Leeds University. Prior to software development, he was an operational research analyst in the Civil Service. Besides writing code and going to gigs, Paul enjoys playing darts for his pub team, hiking in the Scottish mountains, playing guitar, and the occasional friendly game of poker.",
            title: "Songkick Soldier",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/paul-aa35973.jpg"
        },
        {
            name: "Tracey Lee-Joe",
            description: "Tracey is a user experience designer. When she’s not in the office or attending Human-Computer Interaction classes, you’ll find her at a gig or eating-out.",
            title: "User-experience Designer",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/tracey-c23dea6.jpg"
        },
        {
            name: "Sabrina Leandro",
            description: "Sabrina left a sunny island in Brazil to do a MSc in software engineering at Queen Mary, University of London. Before that, she worked at Grupos Internet, an e-learning company. Her main reason for moving to London is the live music scene, especially concerts of sweet indiepop sounds. Sabrina goes to more concerts than anyone else at Songkick!",
            title: "Director of Engineering",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/sl-759e4d5.jpg"
        },
        {
            name: "Thomas May",
            description: "Tom studied Maths at Oxford University before gaining an MA in pop music at its younger, cooler sibling Oxford Brookes. Outside the office, when he’s not reading Robert Christgau, he’s trying to sound like Robert Christgau as a music journalist in the likes of Loud And Quiet and the Quietus.",
            title: "Songkick Soldier",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/tmay-404674b.jpg"
        },
        {
            name: "Adam McIsaac",
            description: "Adam has more than a decade of experience in the live music industry. Somewhere in the attic he has a BA from McGill University and an MBA from Oxford University. When not at Songkick, Adam can be found building igloos with Celine Dion and The Biebs in his home country of Canada.",
            title: "Songkick Soldier",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/adam-b7a246c.jpg"
        },
        {
            name: "Michael Orland",
            description: "Michael joined a start-up immediately after graduating university and has been working at start-ups ever since, primarily to keep current with youth culture and avoid direct sunlight. Working for Songkick in London achieves both. His academic background is in Economics and Cognitive Neuroscience, with an MBA as garnish.",
            title: "Chief Revenue Officer",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/morland-38d0fdf.jpg"
        },
        {
            name: "Brooke Parrott",
            description: "Brooke attended Berklee College of Music in Boston on scholarship, studying songwriting and piano. In May 2008, she released her debut album, Another City, on her record label, Ten til Six Records. (Available on iTunes) She plays gigs throughout London, so check out her Songkick artist page.",
            title: "Songkick Soldier",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/bp-4c0d6e2.jpg"
        },
        {
            name: "Aaron Randall",
            description: "While studying for a degree in Software Engineering, Amy discovered that the skills she’d previously used only to test people’s patience could also be used to test software. Amy has previously been a QA at Yahoo! and The Guardian.",
            title: "Songkick Soldier",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/aaron-31e8e24.jpg"
        },
        {
            name: "Sam Rudge",
            description: "Sam started his career as a freelance web developer, before taking a position building e-commerce solutions for YouTubers. During this time he discovered a love of infrastructure, and now spends his days at Songkick looking at graphs and moving servers about. He also takes lots of photos and can often be seen on trains drinking coffee.",
            title: "Infrastructure Engineer",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/sam-55a7c64.jpg"
        },
        {
            name: "Emily Sergent",
            description: "Emily studied Geography at University College London. After a short stint in marketing, she realized she wasn’t ready for the whole career thing, so she travelled around the world for 5 months. On her return, she studied for a journalism diploma at Harlow college. She reads and responds to our feedback, so if you write to us, you’re in good hands!",
            title: "Head of Community",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/emily-7446981.jpg"
        },
        {
            name: "Paul Springett",
            description: "Paul studied Computer Science at Cardiff University before moving to Bristol where he worked for a number of agencies and startups. Looking to combine a passion for live music and programming he moved to London to join Songkick. In his spare time you'll find him teaching others about programming or out on the water sailing and scuba-diving.",
            title: "Songkick Soldier",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/paul-springett-a64d818.jpg"
        },
        {
            name: "Karim Dia Toubajie",
            description: "Karim is an interaction designer/maker/artist whose face was once licked by a cow. The latest version is powered only by bacon and coffee and has Zero CO2 Emissions.",
            title: "Ace",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/karim-960b99f.jpg"
        },
        {
            name: "Robin Tweedie",
            description: "Robin grew up in Cape Town and has introduced team Songkick to Die Antwoord—no small achievement. He took trumpet lessons to avoid taking accounting in high school and briefly played in a ska/punk band. After graduating from University of Cape Town with a double-major in Computer Science and Psychology, he moved to London to see more bands.",
            title: "Songkick Soldier",
            image: "https://assets.sk-static.com/assets/nw/static-pages/team/deathwarmedover-7d6e22a.jpg"
        }
    ];

    $scope.showName = function() {
        $scope.nameShown = true;
    };

    $scope.showDescription = function() {
        $scope.descriptionShown = true;
    };

    $scope.hideDescription = function() {
        $scope.descriptionShown = false;
    };


    $scope.showNext = function() {

        // ClEAR ANY SELECTED PEOPLE

        $scope.selectedName = null;
        $scope.resultsVisible = false;
        $scope.nameShown = false;
        $scope.descriptionShown = false;

        // Create random list of 3, non matching numbers

        $scope.randomArray = [];

        while($scope.randomArray.length < 3){
            var randomnumber=Math.floor(Math.random()*$rootScope.employeeList.length)
            var found=false;
            console.log($scope.randomSelection);

            for(var i=0;i<$scope.randomArray.length;i++){
                if($scope.randomArray[i]==randomnumber && randomnumber != $scope.randomSelection){
                    found=true;break
                }
            } if(!found)$scope.randomArray[$scope.randomArray.length]=randomnumber;
        }

        // DEFINE FUNCTION TO GENERATE A NEW NUMBER FOR NEXT PERSON
        var selectEmployee = function() {
            var randomSelectionNumber = (Math.ceil(Math.random()*3));
            $scope.randomSelection = $scope.randomArray[randomSelectionNumber-1];

            console.log($scope.randomArray, randomSelectionNumber);
            console.log($scope.randomSelection);

            //SET THE EMPLOYEE NAME / TITLE
            $scope.selectedEmployee = $rootScope.employeeList[$scope.randomSelection];
            $scope.listOfPeople = [$rootScope.employeeList[$scope.randomArray[0]], $rootScope.employeeList[$scope.randomArray[1]], $rootScope.employeeList[$scope.randomArray[2]]];

            console.log($scope.selectedEmployee.name);
        };

        selectEmployee();



        // RANDOMIZE THE LIST

        $scope.generateRandomOrderBy = function(){
            $scope.randomOrderBy = Math.random();
            //console.log($scope.randomOrderBy);
        };

        $scope.generateRandomOrderBy();

    };

    $scope.selectPerson = function(person) {

        $scope.selectedName = person.name;
        $scope.resultsVisible = true;
        $scope.nameShown = true;

        // Waas the selection correct?
        if ($scope.selectedEmployee.name === $scope.selectedName) {
            $scope.correctAnswer = true;
        } else {
            $scope.correctAnswer = false;
        };

    };

}]);
