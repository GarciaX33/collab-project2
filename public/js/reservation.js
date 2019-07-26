// Code here handles what happens when a user submits a new reservastion on the form.
// Takes the form inputs then sends it to the server to save in the DB.

// when user clicks BOOK NOW
$(document).on("click", "#add-btn", function (event) {
    event.preventDefault();
    $("#resDetail").show();
    $("#bookAppointment").hide();
    console.log($("#starts").val())
    $("#con-pet").text($("#selectPet").val())
    $("#con-pet2").text($("#start").val())
    $("#con-pet3").text($("#end").val())


    // make a newCustomer Reservation
    // var newCustomer = {
    // Select type of PET
    // selectPet: $("#selectPet").val().trim(),
    // Select Start DATE
    // startDate: $("#startDate").val().trim(),
    // Select End DATE
    // endDate: $("#endDate").val().trim(),
    // };

    // send an AJAX POST-request with jQuery
    // $.post("/api/new", newCustomer)
    // on success, run this callback
    // .then(function (data) {
    // log the data we found
    // console.log(data);
    // tell the user we're adding a customers reservation with an alert window
    // alert("Reservation Details..");
    // });

    // empty each input box by replacing the value with an empty string
    // $("#selectPet").val("");
    // $("#startDate").val("");
    // $("endDate").val("");

});

