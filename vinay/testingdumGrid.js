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

define(['jQuery'], function ($) {
    var list;
    $.getJSON('../widgets/grid1/config.json', function (data) {
        var items = [];
        
        debugger;
        $.each(data, function (key, val) {
            items.push('<li id="' + key + '">' + val + '</li>');
        });

        list = $('<ul/>', {
            'class': 'my-new-list',
            html: items.join('')
        });
    });
    
    var returnData = function () {
        
        
        this.getGrid = function () {
            var dumGrid = $('<div/>');// document.createElement('div');
            dumGrid.append('<p><b>vinay</b></p>');
            alert('dumgrid');
            dumGrid.bind = function () {
                alert('gridbind');
                this.trigger('newData');
            }
            return dumGrid;
        }
        this.getList = function () {
           
            debugger;
            return list;
        }
        this.on = function (event) {
            switch (event) {
                case ('newData'):
                    alert('new data');
                    break;
                default:
                    alert('default');
                    break;

            }
            this.trigger = function (event) {
                switch (event) {
                    case ('newData'):
                        alert('new data1');
                        break;
                    default:
                        alert('default');
                        break;

                }
            }
        }
    };
    return returnData;
});

    //define(['jQuery'], function ($) {
    //    var triggerEvent = function () {
    //        if (window.CustomEvent) {
    //            var newDataEvent = new CustomEvent("newData", {
    //                detail: {
    //                    message: 'event data',
    //                    time: new Date(),
    //                },
    //                bubbles: true,
    //                cancelable: true
    //            });
    //            alert('trigger');
    //        }

    //    };

    //    return triggerEvent;
    //});
