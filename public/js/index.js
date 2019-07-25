// Get references to page elements
var $reservationText = $("#reservation-text");
var $reservationDescription = $("#reservation-description");
var $submitBtn = $("#submit");
var $reservationList = $("#reservation-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveReservation: function(reservation) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/reservations",
      data: JSON.stringify(reservation)
    });
  },
  getReservations: function() {
    return $.ajax({
      url: "api/reservations",
      type: "GET"
    });
  },
  deleteReservation: function(id) {
    return $.ajax({
      url: "api/reservations/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshReservations = function() {
  API.getReservations().then(function(data) {
    var $reservations = data.map(function(reservation) {
      var $a = $("<a>")
        .text(reservation.text)
        .attr("href", "/reservation/" + reservation.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": reservation.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteReservation(idToDelete).then(function() {
    refreshReservations();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$reservationList.on("click", ".delete", handleDeleteBtnClick);
