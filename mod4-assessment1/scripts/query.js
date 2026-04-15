$(document).ready(function() {

    $("#up").click(function() {
        $("#move").animate({
            marginTop: "-=10px"
        });
    });
    $("#down").click(function() {
        $("#move").animate({
            marginTop: "+=10px"
        });
    });
    $("#left").click(function() {
        $("#move").animate({
            marginLeft: "-=10px"
        });
    });
    $("#right").click(function() {
        $("#move").animate({
            marginLeft: "+=10px"
        });
    });
    $("#flip").click(function(){
        $("#quote").slideDown(5000);
    });
    $("#stop").click(function(){
        $("#quote").stop();
    });
    $("#callback").click(function(){
        $("#hide-p").hide("slow", function(){
            alert("The paragraph is now hidden!");
        });
    });
    $("#chaining").click(function(){
    $("#tatum").css("color", "green").slideUp(2000).slideDown(2000);
  });
});