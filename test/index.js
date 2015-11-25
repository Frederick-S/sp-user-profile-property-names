var queryString = require('query-string');
var userProfilePropertyNames = require('../index');

var hostWebUrl = queryString.parse(location.search).SPHostUrl;
var options = {
    webUrl: hostWebUrl,
    useAppContextSite: true
};

userProfilePropertyNames(options, function (propertyNames) {
    var html = '';

    for (var i = 0, length = propertyNames.length; i < length; i++) {
        html += '<li>' + propertyNames[i] + '</li>';
    }

    $('#message').html('<p>User profile property names are:</p><ul>' + html + '</ul>');
}, function (errorMessage) {
    $('#message').html(errorMessage);
});
