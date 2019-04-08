/**
 Vincent Cheng
 Client Program
 Project 1
 Bubble Tea Shop

*/

// Default
var defaultChoice = "default";
var number = 0;
// Create Question header for the each question
function createSelectOptions(select, div) {
	// Create the <span> Tag
	var question = document.createElement("span");		
	var gif = document.createElement("img");
	// Swap/Show any of the drink[defaultchoice as "Select a Kind"
	var selectText = document.createTextNode(drink[defaultChoice][0]);	
	// Using header 2 for "Select a kind"
	question.appendChild(selectText);
	// Appear the question
	div.appendChild(question);
	// Create Select 
	var option = document.createElement("option");		// Option tags
	var selectPick = document.createTextNode("Select one");		// Txt node
	option.appendChild(selectPick);
	select.appendChild(option);		// <select><option> </option></select>

	// Iterate, for each question (looping)
	for (var i = 1; i < drink[defaultChoice].length; i++) {
		option = document.createElement("option");			// Create another <option> Tag
		var optionText = document.createTextNode(drink[defaultChoice][i]);		// Create options for choices, such as Android, iOS, etc.
		option.appendChild(optionText);
		select.appendChild(option);
	}	// for
}	// createSelectOptions function, drink[defaultChoice]

// Dynamically Dropmenu selection, clear everything once a different selection been made from the upper node
function order() {
	var div = document.createElement("div");
	var select  = document.createElement("select");

	if(number !== 0) {
		defaultChoice = this.value;
	}  

	// When an option is changed, reset all choices
	if((number !== 0) && (this.parentNode.firstChild !== this.parentNode.parentNode.lastChild.lastChild)) {
		while(this.parentNode.parentNode.lastChild !== this.parentNode) {
			this.parentNode.parentNode.removeChild(this.parentNode.parentNode.lastChild);
			if(formCreated) {
				clearForm();
			}
		}	// End While
	}	// End If

	// Select last questions, change option will clear form/chocies
	if((number != 0) && (formCreated)) {
		clearForm();
	}

   // Once changes had been made to the last question, form will reset
    if((number !== 0) && (defaultChoice == this[0].value)) {
	    clearForm();
    }

	// Reset form with a new form
	else if(drink[defaultChoice] == undefined) {
		createForm();
	}
	else { 
		// selections, next selections
		createSelectOptions(select, div);
		select.onchange = order;
		div.appendChild(select);
		document.getElementById("orderDrink").appendChild(div);
		number++;
	}
}