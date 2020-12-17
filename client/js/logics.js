$(document).ready(function () {
    getAllUsers();
    // operationsListeners();
});

function getAllUsers() {
    $.ajax({
        url: 'http://localhost:3000/api/users',
        type: 'GET',
        success: function(users) {
            recreateUsersTable(users);
        }
    });
}

function getUserById(userId) {
    $.ajax({
        url: `http://localhost:3000/api/users/${userId}`,
        type: 'GET',
        success: function (user) {
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

function appendTableRow(id, first_name, last_name, email, gender, avatar, job)
{
    let tableRow = "<tr><td>$userId</td><td>$first_name</td><td>$last_name</td><td>$email</td><td>$gender</td><td><img src='$avatar' alt='Avatar' class='avatar'></td><td>$job</td></tr>";
    tableRow = tableRow.replace("$userId",id);
    tableRow = tableRow.replace("$first_name",first_name);
    tableRow = tableRow.replace("$last_name",last_name);        
    tableRow = tableRow.replace("$email",email);        
    tableRow = tableRow.replace("$gender",gender);        
    tableRow = tableRow.replace("$avatar",avatar);        
    tableRow = tableRow.replace("$job",job);        
    $("#usersTable tbody").append(tableRow);
}

function recreateUsersTable(users) {
    $("#usersTable tbody").empty().remove();
    const usersLen = users.length;
    if (usersLen) {
        $('table').append('<tbody></tbody>');
        for (let i = 0; i < usersLen; i++) {
            appendTableRow(users[i].id, users[i].first_name, users[i].last_name, users[i].email, users[i].gender, users[i].avatar, users[i].job)
        }
    } 
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
