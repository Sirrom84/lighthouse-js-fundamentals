const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:

let i = 0;
while (i < ingredients.length) {
  console.log("while loop " +ingredients[i]);
  i++;

}
 for (let x = 0; x < ingredients.length; x++) {
  console.log("for loop " +ingredients[x]);
 }

 for (let y = ingredients.length - 1; y >= 0;  y--) {
  console.log("reverse for loop " +ingredients[y]);
 }