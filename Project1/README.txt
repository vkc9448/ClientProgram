Brainstorming:
Thinking of adding two img or gif to the top and the bottom
Body will have the form that meet the requirement with a submit and clear button
Also would like to add name and email to the form
The theme of the color will be related to the Microsoft logo color

What I did:
Follow the basic requirement
For the Theme, I decided to use the color from Microsoft logo
Added text node for name and email with validation 


/*Vincent Cheng
* Client Program
* Project 1 HW 2, Data Type
* Bubble Tea Shop
*/
/* Description: Use homework one to make a data JavaScript 
*/

// Create new Object
var drink = new Object();

drink["default"] = ["Select a Category:", "Tea", "Smoothies"];

// Bubble/boba Tea
drink["Tea"] = ["Select Temperature:", "Hot", "Cold"];
drink["Hot"] = ["What Type of Drink you want?", "Mocha", "Latte"];
drink["Cold"] = ["What Type of Drink you want?", "Milk Tea" "Green Tea"]


// Smoothies
drink["Smoothies"] = ["How many flavor do you want?", "One Flavor", "Two Flavor"];
drink["One Flavor"] = ["Which Flavor do you want?", "Strawberry", "Banana"];
drink["Two Flavor"] = ["Which of the two Flavor do you want?", "Strawberry Banana", "Strawberry Mango"];


// When items are selected, new data object for each items
var drinkSelected = new Object();
// Hot tea
drinkSelected["Mocha"] = [drink["Tea"][1] + " - " + drink["Hot"][1], "../media/ I NEED TO FIND A PICTURE"];
drinkSelected["Latte"] = [drink["Tea"][1] + " - " + drink["Hot"][2], "../media/ I NEED TO FIND A PICTURE"];

// Cold tea
drinkSelected["Milk Tea"] = [drink["Tea"][1] + " - " + drink["Cold"][1], "../media/ I NEED TO FIND A PICTURE"];
drinkSelected["Green Tea"] = [drink["Tea"][1] + " - " + drink["Cold"][2], "../media/ I NEED


// one flavor smoothies
drinkSelected["Strawberry"] = [drink["Smoothies"][1] + " - " + drink["One Flavor"][1], "../media/ I NEED TO FIND A PICTURE"];
drinkSelected["Banana"] = [drink["Smoothies"][1] + " - " + drink["One Flavor"][2], "../media/ I NEED TO FIND A PICTURE"];


// Two Flavor SMoothies
drinkSelected["Strawberry Banana"] = [drink["Smoothies"][2] + " - " + drink["Two Flavor"][1], "../media/ I NEED TO FIND A PICTURE"];
drinkSelected["Strawberry Mango"] = [drink["Smoothies"][2] + " - " + drink["Two Flavor"][2], "../media/ I NEED TO FIND A PICTURE"];
