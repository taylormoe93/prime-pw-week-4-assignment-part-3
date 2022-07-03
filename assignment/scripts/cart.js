console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create a global variable — basket — set as an empty array
basket = [];
console.log(basket); // Test

// Add a global 'const' named 'maxItems' and set it to 5
const maxItems = 5;
console.log('maxItems is:', maxItems); // Test

// Create a function called 'addItem'
// Take an input paramter for a string 'item'
function addItem(item) {
	basket.push(item); // Add item to basket
	console.log('added', item);
	return true; // Return true indicating item was added
}
console.log(addItem('eggs')); // Test
addItem('bread'); // Test
addItem('juice'); // Test

// Create a function called 'listItems' that will:
// Loop over the items in the 'basket' array
// Console log each individual item on a new line
//
// Expected to display the loop through the array on the console log
// Then list the items individually on new lines when the function is called
function listItems() {
	for (selection of basket) {
		console.log(selection);
	}
}
listItems(); // Test

// Create a function called empty
function empty() {
	basket.splice(0, basket.length); // Reset the array to empty
}
empty(); // Test
console.log(basket); // Test

// Create a function called isFull()
// Return 'false' if the baskets contains less than max # of items
function isFull() {
	if (basket.length < maxItems) {
		return false;
	} 
// Return 'true' otherwise
    else if (basket.length >= maxItems) {
		return true;
	}
}
console.log('Is the basket full?', isFull()); // Test

