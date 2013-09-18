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
    //var list;
    //$.getJSON('../widgets/grid1/config.json', function (data) {
    //    var items = [];

    //    debugger;
    //    $.each(data, function (key, val) {
    //        items.push('<li id="' + key + '">' + val + '</li>');
    //    });

    //    list = $('<ul/>', {
    //        'class': 'my-new-list',
    //        html: items.join('')
    //    });
    //});

    var returnData = function () {


        this.getGrid = function () {
            var dumGrid = $('<table/>');// document.createElement('div');
            // dumGrid.append('<p><b>vinay</b></p>');
            debugger;
            dumGrid.bind = function () {
                var grid1 = $('<table/>');
                $.ajaxSetup({ cache: false });
                $.getJSON('widgets/grid1/config.json',
                   function (json) {
                       alert('json');
                       var tr;
                       debugger
                       var thead = $('<th/>').addClass('tableRowHeader');

                       thead.append("<td>id</td>");
                       thead.append("<td>name</td>");
                       grid1.append(thead);
                       for (var i = 0; i < json.length; i++) {
                           tr = $('<tr/>');
                           tr.append("<td>" + json[i].id + "</td>");
                           tr.append("<td>" + json[i].name + "</td>");


                           grid1.append(tr);
                       }
                   });
                alert('gridbind');
                this.trigger('newData');
                return grid1;
            };

            //dumGrid.sort = function () {
            //    alert('sort');
            //    this.trigger('sort');
            //}

            //dumGrid.filter = function () {
            //    alert('filter');
            //    this.trigger('filter');
            //}

            return dumGrid;
        }
        this.getList = function () {

            debugger;
            return list;
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
