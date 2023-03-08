// routing
var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "./sub-page/main.html",
    })
    .when("/face", {
      templateUrl: "./product-sub-page/face.html",
    })
    .when("/body", {
      templateUrl: "./product-sub-page/body.html",
    })
    .when("/hair", {
      templateUrl: "./product-sub-page/hair.html",
    })
    .when("/makeup", {
      templateUrl: "./product-sub-page/makeup.html",
    })
    .when("/sunscreen", {
      templateUrl: "./product-sub-page/sunscreen.html",
    })
    .when("/perfumes", {
      templateUrl: "./product-sub-page/perfumes.html",
    })
    .when("/other", {
      templateUrl: "./product-sub-page/other.html",
    })
    .when("/help", {
      templateUrl: "./sub-page/help.html",
    })
    .when("/about", {
      templateUrl: "./sub-page/about.html",
    })
    .when("/info", {
      templateUrl: "./sub-page/info.html",
    })
    .when("/buy", {
      templateUrl: "./sub-page/buy.html",
    })
    .when("/ex1", {
      templateUrl: "./faq/ex1.html",
    })
    .when("/ex2", {
      templateUrl: "./faq/ex2.html",
    })
    .when("/ex3", {
      templateUrl: "./faq/ex3.html",
    });

});

//product cards
app.directive("bodyProductCard", function () {
  return {
    restrict: "AE",
    template:
      '<div class="slave">\
    <div class=" content d-flex justify-content-center">\
      <div class="imgBx">\
        <img\
          src={{bodyUrl.link1}}\
          alt="" class="news-slave__image rounded">\
      </div>\
      <div class="contentBx">\
        <h3>{{bodyUrl.name}}<br><span>{{bodyUrl.state}}</span></h3>\
      </div>\
    </div>\
    <ul class="sci" >\
      <li>\
        <a href="" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={{bodyUrl.id}}>Preview</a>\
      </li>\
    </ul>\
  </div>',
  };
});

app.directive("hairProductCard", function () {
  return {
    restrict: "AE",
    template:
      '<div class="slave">\
    <div class=" content d-flex justify-content-center">\
      <div class="imgBx">\
        <img\
          src={{hairUrl.link1}}\
          alt="" class="news-slave__image rounded">\
      </div>\
      <div class="contentBx">\
        <h3>{{hairUrl.name}}<br><span>{{hairUrl.state}}</span></h3>\
      </div>\
    </div>\
    <ul class="sci">\
      <li>\
        <a href="" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={{hairUrl.id}}>Preview</a>\
      </li>\
    </ul>\
  </div>',
  };
});

app.directive("faceProductCard", function () {
  return {
    restrict: "AE",
    template:
      '<div class="slave">\
    <div class=" content d-flex justify-content-center">\
      <div class="imgBx">\
        <img\
          src={{faceUrl.link1}}\
          alt="" class="news-slave__image rounded">\
      </div>\
      <div class="contentBx">\
        <h3>{{faceUrl.name}}<br><span>{{faceUrl.state}}</span></h3>\
      </div>\
    </div>\
    <ul class="sci">\
      <li>\
        <a href="" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={{faceUrl.id}}>Preview</a>\
      </li>\
    </ul>\
  </div>',
  };
});

app.directive("makeupProductCard", function () {
  return {
    restrict: "AE",
    template:
      '<div class="slave">\
    <div class=" content d-flex justify-content-center">\
      <div class="imgBx">\
        <img\
          src={{makeupUrl.link1}}\
          alt="" class="news-slave__image rounded">\
      </div>\
      <div class="contentBx">\
        <h3>{{makeupUrl.name}}<br><span>{{makeupUrl.state}}</span></h3>\
      </div>\
    </div>\
    <ul class="sci">\
      <li>\
        <a href="" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={{makeupUrl.id}}>Preview</a>\
      </li>\
    </ul>\
  </div>',
  };
});

app.directive("sunscreenProductCard", function () {
  return {
    restrict: "AE",
    template:
      '<div class="slave">\
    <div class=" content d-flex justify-content-center">\
      <div class="imgBx">\
        <img\
          src={{sunscreenUrl.link1}}\
          alt="" class="news-slave__image rounded">\
      </div>\
      <div class="contentBx">\
        <h3>{{sunscreenUrl.name}}<br><span>{{sunscreenUrl.state}}</span></h3>\
      </div>\
    </div>\
    <ul class="sci">\
      <li>\
        <a href="" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={{sunscreenUrl.id}}>Preview</a>\
      </li>\
    </ul>\
  </div>',
  };
});

app.directive("perfumesProductCard", function () {
  return {
    restrict: "AE",
    template:
      '<div class="slave">\
    <div class=" content d-flex justify-content-center">\
      <div class="imgBx">\
        <img\
          src={{perfumesUrl.link1}}\
          alt="" class="news-slave__image rounded">\
      </div>\
      <div class="contentBx">\
        <h3>{{perfumesUrl.name}}<br><span>{{perfumesUrl.state}}</span></h3>\
      </div>\
    </div>\
    <ul class="sci">\
      <li>\
        <a href="" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={{perfumesUrl.id}}>Preview</a>\
      </li>\
    </ul>\
  </div>',
  };
});

app.directive("otherProductCard", function () {
  return {
    restrict: "AE",
    template:
      '<div class="slave">\
    <div class=" content d-flex justify-content-center">\
      <div class="imgBx">\
        <img\
          src={{otherUrl.link1}}\
          alt="" class="news-slave__image rounded">\
      </div>\
      <div class="contentBx">\
        <h3>{{otherUrl.name}}<br><span>{{otherUrl.state}}</span></h3>\
      </div>\
    </div>\
    <ul class="sci">\
      <li>\
        <a href="" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={{otherUrl.id}}>Preview</a>\
      </li>\
    </ul>\
  </div>',
  };
});
app.filter('bestSeller', function () {
  return function (items) {
    var best = 0;
    var temp = 0;
    filtered = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var amount = item.amount;
      if (amount > best) {
        best = amount;
        temp = i;
      }
    }
    filtered.push(items[temp]);
    return filtered;
  }
});

// app.filter('startsWithLetter', function () {
//   return function (items, letter) {
//     var filtered = [];
//     var letterMatch = new RegExp(letter, 'i');
//     for (var i = 0; i < items.length; i++) {
//       var item = items[i];
//       if (letterMatch.test(item.name.substring(0, 1))) {
//         filtered.push(item);
//       }
//     }
//     return filtered;
//   };
// });

app.filter("myFilter", function () {
  return function (items, min, max) {
    var filtered = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var price = item.price;
      if (price >= min && price <= max) {
        filtered.push(item);
      }
    }
    // if (select == "0$-50$") {
    //   for (var i = 0; i < items.length; i++) {
    //     var item = items[i];
    //     var price = item.price;
    //     if (price >= 0 && price < 50) {
    //       filtered.push(item);
    //     }
    //   }
    // }
    // else if (select == "50$-100$") {
    //   for (var i = 0; i < items.length; i++) {
    //     var item = items[i];
    //     var price = item.price;
    //     if (price >= 50 && price < 100) {
    //       filtered.push(item);
    //     }
    //   }
    // }
    // else if (select == "100$-150$") {
    //   for (var i = 0; i < items.length; i++) {
    //     var item = items[i];
    //     var price = item.price;
    //     if (price >= 100 && price < 150) {
    //       filtered.push(item);
    //     }
    //   }
    // }
    // //iterate over /items/ array, in this case it is bodyUrls, or hairUrls, or etc...
    // for (var i = 0; i < items.length; i++) {
    //   var item = items[i];
    //   var price = item.price;
    //   if (select == "0$-50$") {
    //     if (price >= 0 && price < 50) {
    //       filtered.push(item);
    //     }
    //   }
    //   else if (select == "50$-100$") {
    //     if (price >= 50 && price < 100) {
    //       filtered.push(item);
    //     }
    //   }
    //   else if (select == "100$-150$") {
    //     if (price >= 100 && price < 150) {
    //       filtered.push(item);
    //     }
    //   }
    // }
    return filtered;
  }
})

app.controller("myCtrl", function ($scope, $location, $http) {
  $scope.min = 0;
  $scope.max = 150;
  // $scope.itemList = [];
  // $scope.store = [{ id: 1, name: "0$-50$" }, { id: 2, name: "50$-100$" }, { id: 3, name: "100$-150$" }]

  // $scope.changedValue = function (item) {
  //   $scope.itemList.push(item.name);
  // }

  $scope.re = /^[a-zA-Z]\w{3,14}$/;
  $scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
  $http.get("js/body.json").then(function (response) {
    $scope.bodyUrls = response.data.body;
  });
  $http.get("js/face.json").then(function (response) {
    $scope.faceUrls = response.data.face;
  });
  $http.get("js/hair.json").then(function (response) {
    $scope.hairUrls = response.data.hair;
  });
  $http.get("js/makeup.json").then(function (response) {
    $scope.makeupUrls = response.data.makeup;
  });
  $http.get("js/sunscreen.json").then(function (response) {
    $scope.sunscreenUrls = response.data.sunscreen;
  });
  $http.get("js/perfumes.json").then(function (response) {
    $scope.perfumesUrls = response.data.perfumes;
  });
  $http.get("js/bag.json").then(function (response) {
    $scope.bagUrls = response.data.bag;
  });
  $http.get("js/other.json").then(function (response) {
    $scope.otherUrls = response.data.other;
  });
  $scope.delete = function (id) {
    for (let index = 0; index < $scope.bagUrls.length; index++) {
      const element = $scope.bagUrls[index];
      if (parseInt(element.id) == parseInt(id)) {
        $scope.bagUrls.splice(index, 1);
        break;
      }
    }
  };
  $scope.getTotal = function (int) {
    var total = 0;
    angular.forEach($scope.bagUrls, function (el) {
      total += el[int];
    });
    return total;
  };
  //Nav highlighter
  $scope.$on("$routeChangeSuccess", function () {
    $scope.getActiveClass();
  });
  $scope.getActiveClass = function () {
    var test = $location.absUrl().split("/");
    $scope.weburl = $location.absUrl().split("/").pop();
    $(".nav-link").removeClass("active");
    if ($scope.weburl == "" || $scope.weburl == "#%2F!") {
      $(".home").addClass("active");
    } else if (
      $scope.weburl == "face" ||
      $scope.weburl == "body" ||
      $scope.weburl == "hair" ||
      $scope.weburl == "makeup" ||
      $scope.weburl == "other" ||
      $scope.weburl == "sunscreen" ||
      $scope.weburl == "perfumes"
    ) {
      $(".products").addClass("active");
    } else if ($scope.weburl == "help") {
      $(".help").addClass("active");
    } else if ($scope.weburl == "about") {
      $(".about").addClass("active");
    } else if ($scope.weburl == "info") {
      $(".info").addClass("active");
    } else if ($scope.weburl == "buy") {
      $(".buy").addClass("active");
    } else if (
      $scope.weburl == "ex1" ||
      $scope.weburl == "ex2" ||
      $scope.weburl == "ex3"
    ) {
      $(".help").addClass("active");
    }
  };
});

// appointment form
$(document).ready(function () {
  $(".cart").click(function () {
    alert("You have add an item to cart!")
  })
  var the_terms = $("#the-terms");
  the_terms.click(function () {
    if ($(this).is(":checked")) {
      $("#submitBtn").removeAttr("disabled");
    } else {
      $("#submitBtn").attr("disabled", "disabled");
    }
  });
});
function ap() {
  var a = $("#first_name").val();
  var b = $("#last_name").val();
  var c = $("#email_addr").val();
  var d = $("#inputPhone").val();
  if ($("#flexRadio1").prop("checked", true)) {
    var g = "Ha Noi";
  } else if ($("#flexRadio2").prop("checked", true)) {
    var g = "Da Nang";
  } else if ($("#flexRadio3").prop("checked", true)) {
    var g = "Ho Chi Minh";
  }
  var i = $("#date").val();
  var h = $("#time").val();
  if (a != 0 && b != 0 && c != 0 && d != 0 && h != 0) {
    alert(
      "Successfully made an appointment at " +
      h +
      ":00 on " +
      i +
      " at " +
      g +
      " store"
    );
  }
}
function loginmodal() {
  var a2 = $("#loginint1").val();
  var b2 = $("#loginint2").val();
  if (a2 != 0 && b2 != 0) {
    alert(
      "Successfully login with email: " +
      a2 +
      " and password: " +
      b2 
    );
  }
}

//comments
$("#commentbutton").click(function () {
  var cname = $("#commentname").val();
  var comment = $("#comments").val();
  if (comment.length != 0 && cname.length != 0) {
    $("#commentsection").prepend(
      '<div class="d-flex flex-start"> <img class="rounded-circle shadow-1-strong me-3" src="../img/ava3.png" alt="avatar" width="65" height="65" /> <div class="flex-grow-1 flex-shrink-1"> <div> <div class="d-flex justify-content-between align-items-center" > <p class="mb-1"> ' +
      cname +
      ' <span class="small">- Just posted</span> </p> <label for="comments"><i class="bi bi-reply"></i>Reply</label> </div> <p class="small mb-0"> ' +
      comment +
      " </p> </div>"
    );
    $("#commentname").val("");
    $("#comments").val("");
  } else {
    alert("Please fill in your name and comment to add");
  }
});
