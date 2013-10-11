// Making controller modular.
define(['jquery', 'models/Character'], 
function ($, CharacterModel) {
	var CharacterController = function(){
		var context = this;
		
		// list of characters
		this.Characters = null;
		
		// sets initial list of characters and return it.
		this.getInitialCharacterList = function(){
			var characterList = [], characterDetails, wrapperObject;
		
			characterDetails = new CharacterModel('Jack', 'Sparrow', 'Johhny Depp');
			characterDetails.addDialogue('Savvy!');
			characterDetails.addDialogue('Leverage says you, change of the wind in sails says I!');
			characterDetails.addDialogue('The only rules that matter are, what a man can do and what a man cannot!');
			
			characterList.push(characterDetails);
			
			characterDetails = new CharacterModel('Joker', '', 'Heath Ledger');
			characterDetails.addDialogue('Why so serious!');
			characterDetails.addDialogue('What that doesnot kill you only makes you stranger!');
			characterDetails.addDialogue('I am a dog chasing cars!');
			
			characterList.push(characterDetails);
			
			characterDetails = new CharacterModel('Agent', 'Smith', 'Hugo Weaving');
			characterDetails.addDialogue('Me Me Me!');
			characterDetails.addDialogue('The best thing about me is.. there are so many of me!');
			characterDetails.addDialogue('We are not here because we are free, we are here because we are not free!');
			
			characterList.push(characterDetails);
			context.Characters = characterList;
		
			wrapperObject = {
				Characters: characterList
			};
			
			return wrapperObject;
		};
		
		// retrieves the character details of a character
		this.getCharacterDetails = function(index){
			if(context.Characters != null && context.Characters.length >= index){
				return context.Characters[index - 1];
			}
		};
		
		// creates a new character
		this.saveNewCharacter = function(firstName, lastName, playedBy){
			var characterDetails;
		
			characterDetails = new CharacterModel(firstName, lastName, playedBy);
			
			context.Characters.push(characterDetails);
		};
		
		// returns latest character list
		this.getLatestCharacterList = function(){
			var retVal;
			
			retVal = {
				Characters: context.Characters
			};
			
			return retVal;
		};
		
		// adds a dialogue to a character
		this.addDialogueFor = function(dialogue, index){
			context.Characters[index - 1].addDialogue(dialogue);
		};
	};	
	
	return CharacterController;
});