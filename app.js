var app = angular.module("classifieds", []);

app.controller("ClassifiedsController", function ($scope) {
  $scope.categories = [
    "Education",
    "Property",
    "Recruitment",
    "Services",
    "Shopping",
    "Vehicles",
  ];
  $scope.category = $scope.categories[0];
  $scope.postDate = new Date();
  $scope.posts = [
    {
      category: "Services",
      desc: "Full stack Application Development",
      date: new Date(),
    },
  ];

  $scope.Post = function () {
    if (!$scope.postContent || $scope.postContent.trim() === "") {
      alert("Please enter a description for the post.");
      return; // Exit the function if content is empty
    }

    // Create a new post object
    var post = {
      category: $scope.category,
      desc: $scope.postContent,
      date: $scope.postDate,
    };

    // Push the new post object to the posts array
    $scope.posts.push(post);

    // Clear the postContent field
    $scope.postContent = "";
    $scope.postDate = new Date();
    $scope.category = $scope.categories[0];
  };
});
