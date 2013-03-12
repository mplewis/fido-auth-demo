function loginUser() {
    var formDataArray = $('.login-form').serializeArray();
    var formData = {}
    for (var i = 0; i < formDataArray.length; i++) {
        var singleData = formDataArray[i];
        formData[singleData.name] = singleData.value;
    };
    console.log(formData);
    var passHash = Sha1.hash(formData.password);
    console.log('Password hash:', passHash);

    var userMatched = false;
    var passMatched = false;

    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        if (userMatched = (user.username == formData.username)) {
            passMatched = (user.passhash == passHash);
            break;
        }
    };

    if (userMatched && passMatched) {
        $('.data-out').text('Username and password matched!');
    } else if (userMatched) {
        $('.data-out').text('Username found, but password did not match.');
    } else {
        $('.data-out').text('Username not found.');
    }
    $(".data-out").show().delay(3000).fadeOut();
}