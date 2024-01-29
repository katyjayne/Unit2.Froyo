// user is prompted for froyo flavors upon entering the website -done
// user's input strings is split into an array of strings -done
// a loop is used to iterate through an array of flavors -done
// an object is used to keep count of how many orders there are of each flavor
// program correctly counts the number of each flavor in the users input
// logic for counting the frequencies of elements in an array is organized into a function that returns the object
// names are consistent and meaningful
// console output changes depending on user's input

// step one: user is prompted for froyo flavors upon entering the website
const userInputString = prompt(
  "Please enter some flavors separated by commas.",
  "vanilla,chocolate,strawberry,vanilla"
);

// step two: user's input strings is split into an array of strings
const flavorArray = userInputString.split(",");
console.log(flavorArray)

// Can you build an object to track which flavors you have observed so far?
// As you iterate through the array of flavors, when should that object be updated?
// Is your logic organized into a function?

// Create an empty object to hold counts that look like the below
const flavorCounts = {}

//loop over our array of flavors
for(let i=0; i<flavorArray.length; i++) {
// FOR each flavor ask: is there a count for this flavor
  const flavorsSoFar = Object.keys(flavorCounts)
// If yes, update that count (+1)
  if(flavorsSoFar.includes(flavorArray[i])) {
    flavorCounts[flavorArray[i]] += 1
  }
  // ELSE, start counting that flavor
  else {
    flavorCounts[flavorArray[i]] = 1
  }
}
console.table(flavorCounts)

