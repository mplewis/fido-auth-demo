var users = null;

$(document).ready(function() {
    $.getJSON('data/users.json', function(data) {
        console.log('User data from users.json:');
        users = data['users'];
        console.log(users);
        // sort alphabetically
        users.sort(function(userA, userB) {
            return userA.username > userB.username;
        })
        for (var i = 0; i < users.length; i++) {
            user = users[i];
            console.log(user.username);
            var tableRowData = '<tr><td>' + user.username + '</td><td>' + user.passhash + '</td></tr>';
            $('.user-table').append(tableRowData);
        };
    });
});