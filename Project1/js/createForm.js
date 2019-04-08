/**
 Vincent Cheng
 Client Program
 Project 1, CreateForm
 Bubble Tea Shop

*/

	// Attributes 
var formCreated = false;

	// After the last choice been selected by the user, Create Form
function createForm() 
	{
    var formId = document.createElement("div");
    var form = document.createElement("form");
    form.setAttribute("name", "form");
    
    // Print Title
    var questionTitle = document.createElement("h3");
    questionTitle.appendChild(document.createTextNode(drinkSelected[defaultChoice][0]));
    
	// Each order will Display images of that selected order
    var img = document.createElement("img");
    img.setAttribute("src", "media/" + drinkSelected[defaultChoice][1]);

    // Form: Name
    var name = document.createTextNode("Your Name: ");      // Create Text Node for Name
    var nameInput = document.createElement("input");     
    nameInput.setAttribute("id", "name");                   // Create ID for the name
    nameInput.onchange = store;								
    
    // Form: Email
    var email = document.createTextNode("Your Email: ");
    var emailInput = document.createElement("input");
    emailInput.setAttribute("id", "email");
    emailInput.onchange = store;
    
    var nextLine = document.createElement("br");		// Create a new "line"
    
    // Form: Order Now Button
    var orderButton = document.createElement("input");		// Create buttons
    orderButton.setAttribute("type", "button");
    orderButton.setAttribute("value", "Order");	
    orderButton.onclick = submitForm;		// Submit
    
    // Clear Button
    var reset = document.createElement("input");
    reset.setAttribute("type", "button");
    reset.setAttribute("value", "Reset");
    reset.onclick = clear;
    
	// Store the name into the storage
    if(GetCookie("name") !== null) {
	   nameInput.value = GetCookie("name"); 
    }
    else if(window.localStorage.getItem("name") !== null) {
	   nameInput.value = window.localStorage.getItem("name");
    }
    
	//	Save Email
    if(GetCookie("email") !== null) {
	   emailInput.value = GetCookie("email");
    }
    else if(window.localStorage.getItem("email") !== null) {
	   emailInput.value = window.localStorage.getItem("email");
    }
    //	Question Title
    form.appendChild(questionTitle);
    form.appendChild(nextLine);
    //	Img
    form.appendChild(img);
    form.appendChild(nextLine.cloneNode(true));
    // Name
    form.appendChild(name);
    form.appendChild(nameInput);
    form.appendChild(nextLine.cloneNode(true));
    // Email
    form.appendChild(email);
    form.appendChild(emailInput);
    form.appendChild(nextLine.cloneNode(true));
    // Order Button
    form.appendChild(orderButton);
    form.appendChild(reset);
	
    formId.appendChild(form);
    document.getElementById("orderForm").appendChild(formId);
    
    formCreated = true;
}
	// Clear Form  (not supported by IE
function clearForm() {
//  form.parentNode.removeChild(this.parentNode);       // Error still occur after replace from remove() to removeChild() 
    form.parentNode.remove(this.parentNode);        
    formCreated = false;
/*
	Issue for the IE
	Having issue with the clearForm function on the IE, works fine on other browser such as Chrome.
	Seem the remove() is not supported.

*/
}

	// Validation Submit Form
function submitForm() {
    
    // Validation attributes for letters and email
    var validateLetters = /^[A-Za-z ]+$/;
    var validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var actualName = document.forms["form"]["name"].value;      // Input field value
    var emailAddress = document.forms["form"]["email"].value;      
    
    // Name and Email Validation if the input is blank
    if(actualName === "" || emailAddress === "") {
        alert("Please enter the name and email");
    }

    // Validate if there are letters only
    else if(!(actualName.match(validateLetters))) {
        alert("Only letters can be submitted in the name field.");
    }

    // Validate if there are wrong input for email
    else if(!(emailAddress.match(validateEmail))) {
        alert("Please input an e-mail correctly with @ symbol");
    }
	else {
	   alert("Thank you for ordering!\nYour order has been submitted.");
	}
}

/* Customer information storage // code been borrowed */
function store() {
    if(window.localStorage) {
	   window.localStorage.setItem(this.id, this.value);
    }
    else {
	   SetCookie(this.id, this.value);
    }
}

	// Form clear 
function clear() {
    if(window.localStorage) {
	   localStorage.clear();
    }
    else {
        DeleteCookie("name");
        DeleteCookie("email");
    }
    
    // Clearing the input
    document.forms["form"]["name"].value = "";
    document.forms["form"]["email"].value = "";
}