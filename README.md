# sp-user-profile-property-names
Get SharePoint user profile property names as array.

## Installation
```
npm install sp-user-profile-property-names --save
```

## Usage
```js
var userProfilePropertyNames = require('sp-user-profile-property-names');

var options = {
    webUrl: 'web url',
    useAppContextSite: true
};

userProfilePropertyNames(options, function (propertyNames) {
    // Do something
}, function (errorMessage) {
    // Error
});

```

## License
MIT.
