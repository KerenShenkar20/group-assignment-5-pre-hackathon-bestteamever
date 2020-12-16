$(function() {
    getAllUsers();
    userOperationsListeners();
});

function getAllUsers() {
    $.ajax({
        url: 'http://localhost:3000/api/users',
        type: 'GET',
        success: function(users) {
            recreateUsersTable(users);
            console.log()
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



function recreateRestaurantsTable(rests) {
    $("table").empty().remove();

    // Continue

    $('#users-list').append("");
}

function userOperationsListeners() {
    $("#get-button").click(() => {
        $("#get-delete-restaurant").css("display", "block");
        $("#get-delete-do").text("Get");
    });


    $("#update-button").click(() => {
        $("#add-update-user").css("display", "none");
        alert("Update");
    });


}
