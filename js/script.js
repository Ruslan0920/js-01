// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

// console.log(message);

// var sillyString = "эЙ, кАК деЛа?";
// var lowerString = sillyString.toLowerCase();
// var firstCharacter = lowerString[0];
// var firstCharacterUpper = firstCharacter.toUpperCase();
// var restOfString = lowerString.slice(1);
// firstCharacterUpper + restOfString;

// console.log(firstCharacterUpper + restOfString);

// const x = 10;
// const y = 5;
// console.log(x + y);

// const question = prompt("Яка офіційна назва JavaScript?").toLowerCase();
// const ecma = "ECMAScript";

// if (question === ecma.toLowerCase()) {
//     alert("Вірно!");
// } else {
//     alert("Не знаєте? ECMAScript!")
// }

const value = Number(prompt("Введіть число"));

if (value > 0) {
    alert("Це позитивне число");
} else if (value === 0) {
    alert("Це нуль");
} else if (value < 0) {
    alert("Це від'ємне число");
} else {
    alert("Це не число");
}