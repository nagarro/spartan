
/// <reference path="lib/JQuery.js" />
/// <reference path="lib/require.js" />
require.config({
    paths: {
        'jQuery': 'lib/JQuery',
        'grid': '../../lib/grid'
    },
    shim: {
        'jQuery': {
            exports: '$'
        },
        'grid': {
            exports: 'g'
        }
    }
});

define(['grid', 'jQuery'], function (g, $) {

    var returnGrid = function () {

        this.gridData = function () {

            //var newGrid = g();

            //var grid1 = newGrid.getGrid();
            //grid1.on('newData', function () {
            //    alert('data is binded');
            //});
            //grid1.bind();
            //var grid1 = $('<table/>');
            //dumGrid.append('<table>');



            //$.getJSON("widgets/grid1/config.json", function (result) {
            //    var obj = $.parseJSON(result);
            //    debugger
            //    $.each(obj, function (i, field) {
            //        grid1.append('<tr><td>' + field + "</td></tr> ");
            //    });
            //});
            var g2 = new g();
            debugger;
            //$(".grid").append(g2);
            //$(".grid").on('newData', function () {
            //    alert('g1');
            //});
            var dum = g2.getGrid();
            $(".grid").append(dum.bind());
            dum.on('newData', function () {
                alert('data is binded');
            });
            dum.bind();
            return grid1;
        }

        //var g2 = new g();
        //debugger;
        ////$(".grid").append(g2);
        ////$(".grid").on('newData', function () {
        ////    alert('g1');
        ////});
        //var dum = g2.getGrid();
        //$(".grid").append(dum);
        //dum.on('newData', function () {
        //    alert('new data found');
        //});
        //dum.bind();
        //g2.add
        //$(".grid").trigger('newData');
        //alert(g1.getName());

    };
    return returnGrid;

});
