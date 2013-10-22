// View for displaying grid.
define(function(require){
	var $ = require('jquery');
	var _ = require('underscore');
	var Backbone = require('backbone');
	var hotJS = require('components/system/grid/jquery-handsontable-master/dist/jquery.handsontable.full.js');
	var hotCSS = require('css!components/system/grid/jquery-handsontable-master/dist/jquery.handsontable.full.css');

	function attr(attr) {
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
							//this.listenTo(this.model, 'add remove change', this.render);
					   },
					   render: function(name){				
							this.$el.handsontable({
							  data: this.model.toJSON(),
							  dataSchema: new this.model.model(),
							  columns: [
								  attr("id"),
								  attr("Name"),
								  attr("Age"),
								  attr("IsSingle")
							  ],
							  colHeaders: _.keys(new this.model.model().toJSON()),
							  columnSorting: true
							  });

							return this;
					   }
				   });
	
	return GridView;
});