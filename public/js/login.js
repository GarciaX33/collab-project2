$("#submit").on("click", function(event){
    event.preventDefault();
    // console.log(document.getElementById("LoginFormEmail").value)
    var postdata = {
        "email": $("#LoginFormEmail").val().trim(),
        "password": $("#LoginFormPassword").val().trim()
    }

    $.ajax({
        url: "/api/loginuser",
        method: "POST",
        data: postdata 
    })
})
