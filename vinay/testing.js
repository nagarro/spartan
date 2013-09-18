/// <reference path="lib/require.js" />
/// <reference path="lib/JQuery.js" />
require.config({
    paths: {
        'jQuery': 'lib/JQuery'

    },
    shim: {
        'jQuery': {
            exports: '$'
        }

    }
});

define(['jQuery'], function () {
    var returnedModule = function (n) {
        var _name = 'module1 name' + n;
        this.getName = function () {
            return _name;
        }
    };

    return returnedModule;
});
