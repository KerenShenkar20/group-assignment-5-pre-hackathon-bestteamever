$(document).ready(function () {
    getAllUsers();
    userOperationsListeners();
});

function getAllUsers() {
    $.ajax({
        url: `http://localhost:3000/api/users`,
        type: 'GET',
        success: function(users) {
            recreateUsersTable(users);
        }
    });
}

function getAllUsersByFilter(str) {
    $.ajax({
        url: `http://localhost:3000/api/users${str}`,
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

function updateUserById(userId, jsonFile) {
    $.ajax({
        url: `http://localhost:3000/api/users/${userId}`,
        type: 'PUT',
        data: jsonFile,
        success: function(response){    
        }
    });
}

function appendTableRow(id, first_name, last_name, email, gender, avatar,color, job)
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
    $('#usersTable tr:last').css("color", color);
}

function recreateUsersTable(users) {
    $("#usersTable tbody").empty().remove();
    const usersLen = users.length;
    if (usersLen) {
        $('table').append('<tbody></tbody>');
        for (let i = 0; i < usersLen; i++) {
            appendTableRow(users[i].id, users[i].first_name, users[i].last_name, users[i].email, users[i].gender, users[i].avatar, users[i].color, users[i].job)
        }
    } 
}

function cleanUpdateData(data) {
    const obj = data;
    for (var propName in obj) {
        if (obj[propName] === '') {
          delete obj[propName];
        }
      }
    return obj;
}

function userOperationsListeners() {
    $("#updateBtn").click(() => {
        const id = $("#idInput").val();;
        const first_name = $("#first_nameInput").val();
        const last_name = $("#last_nameInput").val();
        const email = $("#emailInput").val();
        const gender = $("input[type='radio']:checked").val()
        const avatar = $("#avatarUpload").val();
        const color = $("#colorInput").val();
        const job = $("#jobInput").val();
        const userObj = {
            id,
            job,
            email,
            color,
            gender,
            first_name,
            last_name,
        }
        updateUserById(id, cleanUpdateData(userObj));

    });

    $("#searchBtn").click(() => {
        const gender = $("input[type='radio']:checked").val()
        const email = $("#emailInput").val();
        const job = $("#jobInput").val();
        let str = "?";
        if(gender)
        str += `gender=${gender}`;
        if(email)
        str += `&email=${email}`;
        if(job)
        str += `&job=${job}`;
        else if(!gender && !email && !job){
            str = "";
        }
        getAllUsersByFilter(str);
    });



}
