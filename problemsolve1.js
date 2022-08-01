// Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
var fruits = ['Apple', 'Banana', 'Orange']
console.log(fruits);
var index = fruits.indexOf('Banana');
console.log(index);

// replace ‘Banana’ with ‘Mango’.
fruits.splice(1, 1, "Mango");
console.log(fruits);

// Remove ‘Orange’ and add ‘Watermelon’.
fruits.pop();
console.log(fruits);
fruits.push('watermelon');
console.log(fruits);
//

