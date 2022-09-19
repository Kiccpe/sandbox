var x = 10;
var yoo = "stromngasdg";

// function printName(name) {
//     console.log("Hello " + name);
// }

// printName("Billy");
// printName("Billy");

// var names = ["Donald", "Lola", "Taz"];

// console.log(names);

// names.forEach(function printName(name) {
//     console.log("Hello " + name)
// })

// console.log(names[1]);
// console.log(names[2]);
// console.log(names[0]);

// function callMeAfter(callback) {
//     console.log("Do me first")
//     callback("ted", "chicken");
//     console.log("after")
// }

// callMeAfter(function cb(name, animal ) {
//     console.log("hello " + name + " - " + animal)
// });

// var shoppingList = [];

// shoppingList.push("Eggs")
// shoppingList.push("Bacon")

// console.log(shoppingList)

// shoppingList.push("Sausage")

// console.log(shoppingList)

// var shoppingList = [];

// function addItemToList(foodItem) {
//     shoppingList.push(foodItem);
// }

// addItemToList("Eggs");
// addItemToList("Bacon");
// addItemToList("Lettuce");
// addItemToList("Milk");

// console.log(shoppingList);

// var shoppingList = ["Eggs", "Milk", "Bacon"]

// console.log(shoppingList);

// // Removes the last item from the array
// shoppingList.pop()

// console.log(shoppingList);

// shoppingList.push("Bacon")

// console.log(shoppingList);

// // Take something from the beginning
// shoppingList.shift();

// console.log(shoppingList);

// // Puts something to the begining
// shoppingList.unshift("Tea");

// console.log(shoppingList);


// var shoppingList = ["Eggs", "Milk", "Bacon"];

// console.log(shoppingList);

// function removeItem() {
//     var removedItem = shoppingList.shift();

//     console.log("You have removed " + removedItem);
//     console.log(shoppingList);
// }

// removeItem();
// removeItem();
// removeItem();

// boolean
// var isRaining = false;

// if (isRaining) {
//     console.log("wet!")
// } else {
//     console.log("Dry")
// }

// function canRideRollercoaster(height) {
//     if (height > 100) {
//         console.log("Enjoy the ride!")
//     } else {
//         console.log("Sorry Champ")
//     }
// }

// canRideRollercoaster(120)
// canRideRollercoaster(50)
// var example = 100 < 20;

// console.log(example)
// console.log()

//   a > b
//   a < b
//   a >= b
//   a <= b
//   a === b
//   a !== b

// console.log(2 == '2');
// console.log(2 === '2');
// console.log(1 != '1')
// console.log(1 !== '1')

// function birthday(name) {
//     if (name === 'joe') {
//         console.log('Happy Birthday')
//     } else {
//         console.log('Get lost loser')
//     }
// }

// birthday('mike')

var shoppingList = ['eggs', 'bacon', 'lettuce', 'milk'];

function removeLastItem() {
    if (shoppingList.length > 0) {
        var lastItem = shoppingList.pop();
        console.log("Removed " + lastItem);
    } else {
        console.log("you have nothing in there dingus")
    }
    console.log(shoppingList);
}

removeLastItem();
removeLastItem();
removeLastItem();
removeLastItem();
removeLastItem();