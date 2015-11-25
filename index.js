module.exports = function (done, error) {
    var clientContext = SP.ClientContext.get_current();
    var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);
    var properties = peopleManager.getMyProperties();

    clientContext.load(properties);
    clientContext.executeQueryAsync(function () {
        var userProfileProperties = properties.get_userProfileProperties();
        var propertyNames = [];

        for (var key in userProfileProperties) {
            if (userProfileProperties.hasOwnProperty(key)) {
                propertyNames.push(key);
            }
        }

        done(propertyNames);
    }, function (sender, args) {
        error(args.get_message());
    });
};
