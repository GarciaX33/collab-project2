// Code here handles what happens when a user submits a new reservastion on the form.
// Takes the form inputs then sends it to the server to save in the DB.
$("#resDetail").hide();

// when user clicks BOOK NOW
$(document).on("click", "#add-btn",function (event) {
    
    event.preventDefault();
    $("#resDetail").show();
    $("#bookAppointment").hide();
    //console.log($("#starts").val())
    var petName= $( "#selectPet option:selected" ).text();
    var petId = $("#selectPet").val()
    $("#con-pet").text(petName)
    document.getElementById("con-pet").dataset.id=petId;
    $("#con-pet2").text($("#start").val())
    $("#con-pet3").text($("#end").val())
    
});

$("#confirmRes").on("click",function(){
    //get data and post to backend
    var postdata = {
        PetId: document.getElementById("con-pet").dataset.id,
        checkInDate: document.getElementById("con-pet2").innerHTML,
        checkOutDate: document.getElementById("con-pet2").innerHTML
    }
    console.log(postdata)
    $.ajax({
        url: "/api/reservation",
        method: "POST",
        data: postdata
    }).then(function (data) {
        console.log(data)
    })
});



$(document).on("click", "#d", function (event) {
    // "/api/Pet/:id"
});
// on click code for pop up modals

