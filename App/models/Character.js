// Making model modular.
define([], function () {
	var CharacterModel = function(firstName, lastName, playedBy){
		this.FirstName = firstName;
		this.LastName = lastName;
		this.PlayedBy = playedBy;
		this.Dialogues = [];
		
		this.addDialogue = function(dialogue){
			this.Dialogues.push(dialogue);
		}
		
		return this;
	};
	
	return CharacterModel;
});