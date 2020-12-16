$(function() {
    getAllRestaurants();
    restaurantOperationsListeners();
});

function getAllUsers() {
    $.ajax({
        url: 'http://localhost:3000/api/users',
        type: 'GET',
        success: function(users) {
            recreateRestaurantsTable(users);
            console.log()
        }
    });
}

function getUserById(userId) {
    $.ajax({
        url: `http://localhost:3000/api/users/${userId}`,
        type: 'GET',
        success: function(user) {
            showRestaurant(user);
        }
    });
}

function updateUsersById(userId) {
    $.ajax({
        url: `http://localhost:3000/api/users/${userId}`,
        type: 'PUT',
        success: function(user){
            
        }
    });
}

function showRestaurant(rest) {
    $("#restaurant-result").empty();

    $("#restaurant-result").append(
        '<p>' +
        'Name: ' + rest.name + '<br>' +
        'Longitude: '  + rest.location[0].lng + '<br>' +
        'Latitude: ' + rest.location[0].lat + '<br>' +
        'Stars: ' + rest.stars + '<br>' +
        '<p>'
    );
}

function recreateRestaurantsTable(rests) {
    $("table").empty().remove();

    // Continue

    $('#restaurants-list').append("");
}

function restaurantOperationsListeners() {
    $("#get-button").click(() => {
        $("#get-delete-restaurant").css("display", "block");
        $("#get-delete-do").text("Get");
    });

    $("#delete-button").click(() => {
        $("#get-delete-restaurant").css("display", "none");
        alert("Delete");
    });

    $("#add-button").click(() => {
        $("#get-delete-restaurant").css("display", "none");
        alert("Add");
    });

    $("#update-button").click(() => {
        $("#add-update-restaurant").css("display", "none");
        alert("Update");
    });

    $("#get-delete-do").click(() => {
        if ($("#get-delete-do").text() === "Get") {
            const restaurantId = $("#rest-id").val();

            getRestaurantById(restaurantId);
        } else {
            // Delete
        }
    });
}
