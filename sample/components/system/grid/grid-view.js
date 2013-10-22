// View for displaying grid.
define(function(require){
	var $ = require('jquery');
	var _ = require('underscore');
	var Backbone = require('backbone');
	var hotJS = require('components/system/grid/jquery-handsontable-master/dist/jquery.handsontable.full.js');
	var hotCSS = require('css!components/system/grid/jquery-handsontable-master/dist/jquery.handsontable.full.css');

	function attr_func(attr) {
		return {
			data: function (item, value) {
			  if (_.isUndefined(value)) {
				return item[attr];
			  }
			}
		};
    }
  
	var GridView = Backbone.View.extend({
					   initialize: function(){
					   },
					   render: function(name){				
							this.$el.handsontable({
							  data: this.collection.toJSON(),
							  columns: _.keys(new this.collection.model().attributes).map(function(attr){
								return attr_func(attr);
							  }),
							  colHeaders: _.keys(new this.collection.model().attributes),
							  columnSorting: true
							  });

							return this;
					   }
				   });
	
	return GridView;
});