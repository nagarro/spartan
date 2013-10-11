// Making views modular.
define(['jquery', 'underscore'], 
function ($, _) {
	var CharacterDetailsView = function(controller, Template){
		var context = this;
		// reference to the controller object.
		this.controller = controller;
		
		// saving reference to template to be used for this instance.
		this.Template = Template;
		
		// containing element
		this.Container = null;
		
		// index of model being shown
		this.index = -1;
			
		// the rendering function
		this.render = function(element, model, index){
			this.Container = element;
			
			// handling click of save button
			$(element).on('click', '#btnSave', function(){
				var dialogue, model;
				
				dialogue = $('#txtQuote').val();
				
				context.controller.addDialogueFor(dialogue, context.index);
				model = context.controller.getCharacterDetails(index);
				
				context.setHTML(model);
			});	
		
			this.setHTML(model);
			this.index = index;
		};
		
		// sets HTML
		this.setHTML = function(model){
			var compiledTemplate = _.template(context.Template);
			var htmlFromTemplate = compiledTemplate(model);
			
			$(context.Container).html('');
			$(context.Container).html(htmlFromTemplate);
		};
		
		return this;
	};
	
	return CharacterDetailsView;
});