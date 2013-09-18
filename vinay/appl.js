
/// <reference path="lib/JQuery.js" />
/// <reference path="lib/require.js" />
require.config({
    paths: {
        'jQuery': 'lib/JQuery',
        'hook': 'widgets/grid1/hooks'
    },
    shim: {
        'jQuery': {
            exports: '$'
        },
        'hook': {
            exports: 'h'
        }
    }
});

require(['jQuery','hook'], function ($,h) {

    // do something with the loaded modules
    $(document).ready(function () {
        var ddlMonth = $('.month');
        ddlMonth.change(function () { monthSelected(ddlMonth) });
        
        function monthSelected(obj) {
            debugger
            //alert( $('option:selected', $(obj)).text());
           
                var g1 = new h();
                $('.grid').append(g1.gridData());

                g1.sort = function (colName) {
                };
           
        }

        //    $.getJSON("widgets/grid1/config.json", function (result) {
        //        $.each(result, function (i, field) {
        //            $("#container").append(field + " ");
        //        });
        //});
       
        alert('ready');
            //var g1 = new g();
            //g1.on('newData', function () {
            //    alert('g1');});
            //$(".grid").append(g1);

            //list.dispatchEvent(newDataevent);
     


    });



});

//require(['testing'], function (template) {
//    var g1 = new template('vinay');
//    alert(g1.getName());
//});

//require(['lib/grid'], function (g) {
//    var g2 = new g();
//    debugger;
//    //$(".grid").append(g2);
//    //$(".grid").on('newData', function () {
//    //    alert('g1');
//    //});
//    var dum = g2.getGrid();
//    $(".grid").append(dum);
//    dum.on('newData', function () {
//        alert('new data found');
//    });
//    dum.bind();
//    //g2.add
//    //$(".grid").trigger('newData');
//    //alert(g1.getName());
//});
