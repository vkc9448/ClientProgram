/*Vincent Cheng
* Client Program
* Project 1 HW 2, Data Type
* Bubble Tea Shop
*/

/* Description: Use homework one and class demo/sample of old project that was shown in class to make a data JavaScript 
*/

// Create new Object
var drink = new Object();

drink["default"] = ["Select a Category:", "Tea", "Smoothies"];

// Bubble/boba Tea
drink["Tea"] = ["Select Temperature:", "Hot", "Cold"];
drink["Hot"] = ["What Type of Drink you want?", "Mocha", "Latte"];
drink["Cold"] = ["What Type of Drink you want?", "Milk Tea", "Green Tea"];


// Smoothies
drink["Smoothies"] = ["How many flavor do you want?", "One Flavor", "Two Flavor"];
drink["One Flavor"] = ["Which Flavor do you want?", "Strawberry", "Banana"];
drink["Two Flavor"] = ["Which of the two Flavor do you want?", "Strawberry Banana", "Strawberry Mango"];


// When items are selected, new data object for each items
// All imgs and gif are not mine
var drinkSelected = new Object();
// Hot tea
drinkSelected["Mocha"] = [drink["Tea"][1] + " " + drink["Hot"][1], "../media/mocha.jpg"];
drinkSelected["Latte"] = [drink["Tea"][1] + " - " + drink["Hot"][2], "../media/latte.jpg"];

// Cold tea
drinkSelected["Milk Tea"] = [drink["Tea"][1] + " - " + drink["Cold"][1], "../media/bubbletea.jpg"];
drinkSelected["Green Tea"] = [drink["Tea"][1] + " - " + drink["Cold"][2], "../media/greentea.jpg"];


// One Flavor smoothies
drinkSelected["Strawberry"] = [drink["Smoothies"][1] + " - " + drink["One Flavor"][1], "../media/strawberry.jpg"];
drinkSelected["Banana"] = [drink["Smoothies"][1] + " - " + drink["One Flavor"][2], "../media/banana.jpg"];


// Two Flavor Smoothies
drinkSelected["Strawberry Banana"] = [drink["Smoothies"][2] + " - " + drink["Two Flavor"][1], "../media/sbanana.jpg"];
drinkSelected["Strawberry Mango"] = [drink["Smoothies"][2] + " - " + drink["Two Flavor"][2], "../media/smango.png"];
