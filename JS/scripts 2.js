$(document).ready(function(){
      $("#main-pic").show(200);
      $("#container-form").show(1000);
  });

  $(document).ready(function(){
      $("#welcome-msg-1").show(500);
    });

    $(document).ready(function(){
        $("#welcome-msg-2").show(500);
      });

    $(document).ready(function(){
        $("#welcome-msg-1").hide(10000);
      });

    $(document).ready(function(){
        $("#welcome-msg-2").hide(10000);
      });

$(document).ready(function(){
    $(".container-form").show(1500);
  });



var beach = 0;
var city = 0;
var mountains = 0;
var country = 0;

$(document).ready(function(){
  $("#make-selections").submit(function(event){
    var locales = $("#locale").val();
    var activity = $("#activity").val();
    var sights = $("#sights").val();
    var transportation = $("#transportation").val();
    var food = $("#food").val();

    //locale
      if(locale === "1") {
        beach +=1;
      } else if(locale === "2") {
        city +=1;
      } else if(locale === "3") {
        mountains +=1;
      } else if(locale === "4") {
        country +=1;
      }

    //activity
      if(activity === "1") {
        mountains +=1;
      } else if(activity === "2") {
        beach +=1;
      } else if(activity === "3") {
        city +=1;
      } else if(activity === "4") {
        city +=1;
      }

    //sights
      if(sights === "1") {
        city +=1;
      } else if(sights === "2") {
        mountains+=1;
      } else if(sights === "3") {
        city +=1;
      } else if(sights === "4") {
        country +=1;
      }

    //transportation
      if(transportation === "1") {
        city +=1;
      } else if(transportation === "2") {
        country+=1;
      } else if(transportation === "3") {
        mountains +=1;
      } else if(transportation === "4") {
        beach +=1;
      }

    //food
      if(food === "1") {
        city +=1;
      } else if(food === "2") {
        country+=1;
      } else if(food === "3") {
        beach +=1;
      } else if(food === "4") {
        mountains +=1;
      }

    //calculate results-pics
      if (city > mountains && country > beach) {
        $("#city").show();
      } else if (mountains > beach && country) {
        $("#mountains").show();
      } else if (beach > country) {
        $("#beach").show();
      } else {
        $("#country").show();
      }

      event.preventDefault();


  });
});