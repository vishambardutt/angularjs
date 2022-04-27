

//let myApp = angular.module("myModule", []);

//myApp.controller ("myController", function($scope) {
//  let employee = {
//      firstName: "Vishnu",
//      lastName: "Jakhmola",
//gender: "Male"
//  };
//   $scope.employee = employee;
//   $scope.message = "Angular JS Tutorial";
//});


// creating module and controller single line
//module and controller chaining method 

let myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        let employee = {
            firstName: "Vishnu",
            lastName: "Jakhmola",
            gender: "Male"
        };
        $scope.employee = employee;
        $scope.message = "Angular JS Tutorial";
        $scope.newmessage = "Two Way Binding";

        let cntry = {
            name: "India",
            capital: "New Delhi",
            flag: "images/indiaflag.jpg"
        }
        $scope.cntry = cntry;

        let student = {
            firstName: "Ravi",
            lastName: "Raj",
            gender: "Male"
        }
        $scope.student = student;


        let cemp = [
            { firstName: "Vartika", lastName: "Jakhmola", Gender: "Female", Salary: "30000" },
            { firstName: "Yutika", lastName: "Jakhmola", Gender: "Female", Salary: "50000" },
            { firstName: "Savita", lastName: "Dhasmana", Gender: "Female", Salary: "60000" },
            { firstName: "Kapil", lastName: "Sharma", Gender: "Male", Salary: "35000" },
            { firstName: "Sohan", lastName: "Singh", Gender: "Male", Salary: "25000" }
        ]
        $scope.cemp = cemp;

        let countries = [
            {
                name: "UK",
                city: [
                    { name: "London" },
                    { name: "Manchester" },
                    { name: "Birmingham" }
                ]
            },

            {
                name: "USA",
                city: [
                    { name: "Los Angles" },
                    { name: "Chicago" },
                    { name: "Huston" }
                ]
            },

            {
                name: "INDIA",
                city: [
                    { name: "Delhi" },
                    { name: "Pune" },
                    { name: "Noida" }
                ]
            }

        ]
        $scope.countries = countries;

        let websites = [
            {name: "facebook", likes: 0, dislikes:0},
            {name: "Linkedin", likes: 0, dislikes:0},
            {name: "Youtube", likes: 0, dislikes:0},
            {name: "Twitter", likes: 0, dislikes:0}
         ];

        $scope.websites = websites;

        $scope.incrementLikes = function (website){
            website.likes++;

        }
        $scope.incrementDislikes = function (website){
            website.dislikes++;

        }

        let empLists = [
            {name: "Yutika", dateofBirth: new Date("December 24, 2011"), Gender:"Female", Salary: 44000},
            {name: "Vartika", dateofBirth: new Date("November 11, 2013"), Gender:"Female", Salary: 42000},
            {name: "Vipin" , dateofBirth: new Date("April 04, 2009"), Gender:"Male", Salary: 34000},
            {name: "Arpit", dateofBirth: new Date("Jan 24, 2020"), Gender:"Male", Salary: 54000},
            {name: "Deepak", dateofBirth: new Date("March 14, 1990"), Gender:"Male", Salary: 54000},
            {name: "Ankit", dateofBirth: new Date("Sep 20, 2000"), Gender:"Male", Salary: 24000}
        ];
        $scope.empLists = empLists;
        $scope.rowLimit = 3;

    });

    

