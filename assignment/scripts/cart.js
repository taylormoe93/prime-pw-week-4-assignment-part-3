console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create a global variable — basket — set as an empty array
basket = [];
console.log(basket); // Test

// Create a function called 'addItem'
// Take an input paramter for a string 'item'
function addItem(item) {
	basket.push(item);
	console.log('added', item);
	return true; // Return true indicating item was added
}
addItem('eggs'); // Test
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
