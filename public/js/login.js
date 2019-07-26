$("#submit").on("click", function(event){
    event.preventDefault();
    console.log(document.getElementById("defaultLoginFormEmail").value)
    var postdata = {
        "email":document.getElementById("").value,
        "password":document.getElementBvyId("").value
    }

    $.ajax({
        url: "/api/loginuser",
        method: "POST",
        data: postdata 
    })
})
