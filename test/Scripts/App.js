/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var userProfilePropertyNames = __webpack_require__(1);

	userProfilePropertyNames(function (propertyNames) {
	    var html = '';

	    for (var i = 0, length = propertyNames.length; i < length; i++) {
	        html += '<li>' + propertyNames[i] + '</li>';
	    }

	    $('#message').html('<p>User profile property names are:</p><ul>' + html + '</ul>');
	}, function (errorMessage) {
	    $('#message').html(errorMessage);
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);