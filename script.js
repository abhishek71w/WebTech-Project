let food1s = document.getElementById('food1');
let food2s = document.getElementById('food2');
let foods = document.getElementById('food');

food1s.addEventListener('click',()=>{
    foods.style.backgroundImage="url('food1.png')";
});

food2s.addEventListener('click',()=>{
    foods.style.backgroundImage="url('food2.jpeg')";
});

var a = angular.module("myapp",[]);

a.controller("ctrl", function($scope) {
    $scope.foods = [
        "Apple Pie",
        "Bacon",
        "Cheeseburger",
        "Donuts",
        "Eggplant Parmesan",
        "French Fries",
    ];

    $scope.swl = function(food) {
        if ($scope.Abhishek && $scope.Abhishek.trim() !== "") {
            return food.toLowerCase().charAt(0) === $scope.Abhishek.toLowerCase().charAt(0);
        } else {
            return true;
        }
    };
});
