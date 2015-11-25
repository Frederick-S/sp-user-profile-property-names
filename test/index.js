var userProfilePropertyNames = require('../index');

userProfilePropertyNames(function (propertyNames) {
    var html = '';

    for (var i = 0, length = propertyNames.length; i < length; i++) {
        html += '<li>' + propertyNames[i] + '</li>';
    }

    $('#message').html('<p>User profile property names are:</p><ul>' + html + '</ul>');
}, function (errorMessage) {
    $('#message').html(errorMessage);
});
