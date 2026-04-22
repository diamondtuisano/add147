
$(document).ready(function() {
    //removes the dark-mode and sets it back to default light-mode
    //https://www.w3schools.com/jquery/html_removeclass.asp
    //light
    $("#light").on("click", function() {
        $("#container").removeClass("dark-mode");
    });

    //add class method
    //https://www.w3schools.com/jquery/html_addclass.asp
    //dark
    $("#dark").on("click", function() {
        $("#container").addClass("dark-mode");
    });
    
    //increase font
    //https://stackoverflow.com/questions/31652041/increase-font-size-with-jquery
    //create variable then + 10px
    $("#increase").on("click", function() {
        var normalSize = parseInt($("#container").css("font-size"));
        $("#container").css("font-size", normalSize + 10 + "px");
    });

    //decrease font
    //same logic as above just - 10px
    $("#decrease").on("click", function() {
        var normalSize = parseInt($("#container").css("font-size"));
        $("#container").css("font-size", normalSize - 10 + "px");
    });

    //get value from form input 
    //concactenate
    //and append function to attendees p-id
    $("#attendance").on("submit", function(event){
        //https://www.w3schools.com/Jsref/event_preventdefault.asp
        //noticed it in the video and wanted to cite my source as well
        event.preventDefault();

        var fName = $("#fname").val();
        var lName = $("#lname").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var jobTitle = $("#job-title").val();
        var company = $("#company").val();
        $("#attendees").append(fName + " " + lName + " " + email + " " + phone + " " + jobTitle + " " + company + "<br>");
     });

    //clears the input fields
    //https://www.geeksforgeeks.org/jquery/how-to-reset-a-form-using-jquery-with-reset-method/
    //was going to use remove() but it ended up removing the actual elements and not input fields
    $("#clear").on("click", function(){
        $("#attendance").get(0).reset();
     });
});