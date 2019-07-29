// Code here handles what happens when a user submits a new reservastion on the form.
// Takes the form inputs then sends it to the server to save in the DB.
$("#resDetail").hide();

// when user clicks BOOK NOW
$(document).on("click", "#add-btn", function (event) {
    event.preventDefault();
    $("#resDetail").show();
    $("#bookAppointment").hide();
    console.log($("#starts").val())
    $("#con-pet").text($("#selectPet").val())
    $("#con-pet2").text($("#start").val())
    $("#con-pet3").text($("#end").val())

});


// on click code for pop up modals

