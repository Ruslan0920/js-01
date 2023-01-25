
// const x = 5;
// const y = 10;
// console.log(x + y);

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
// }

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Знайшли число 3, перериваємо виконання циклу");
//     break;
//   }
// }

// console.log("Лог після циклу");

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// const sillyString = "эЙ, кАК деЛа?";
// const lowerString = sillyString.toLowerCase();
// const firstCharacter = lowerString[0];
// const firstCharacterUpper = firstCharacter.toUpperCase();
// const restOfString = lowerString.slice(1);
// console.log(firstCharacterUpper + restOfString);

// var hasApple = false;
// var hasOrange = false;
// console.log(hasApple || hasOrange);


// const age = 10;
// const accompanied = false;
// const accessPermited = age >= 12 || accompanied;
// console.log(accessPermited);

// const numbers = [1, 3, 14, 18, 5, 28, 37, 46, 54, 8];
// const threshold = 15;

// console.table(numbers);

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > threshold) {
//     continue;
//   }
//   console.log(`Число менше за ${threshold}: ${numbers[i]}`);
// }

const languages = ["C", "C++", "Java", "JavaScript"];
languages.splice(1, 2, "Python", "Swift", "Go");
console.log(languages);

// function multiply(x, y, z) {
  
//   console.log(`Результат множення дорівнює ${x * y * z}`)
  
// }

// multiply(2, 3, 4);
// multiply(10, 10, 10);
// multiply(5, 5, 5);

// function multiply(x, y, z) {
//   console.log("Код до return виконується звичайним чином");

//   // Повертаємо результат виразу множення
//   return x * y * z;

//   console.log("Цей лог ніколи не виконається, він стоїть після return");
// }

// // Результат роботи функції можна зберегти у змінну
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550

// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// console.log("Лог до виклику функції multiply");
// multiply(10, 3, 5); // Результат множення дорівнює 30
// console.log("Лог після виклику функції multiply");

// Послідовність логів в консолі
// "Лог до виклику функції multiply"
// "Результат множення дорівнює 30"
// "Лог після виклику функції multiply"

function withdraw(amount, balance) {
  if (amount === 0) {
    console.log("Для проведення операції введіть суму більшу за нуль");
  return;
  }

  if (amount > balance) {
    console.log("Недостатньо коштів на рахунку");
    return;
  }
  console.log("Операція зняття коштів проведена");
}

withdraw(0, 300);
withdraw(500, 300);
withdraw(100, 300);

// function add(a, b, c) {
//   console.log(`Addition result equals ${a+b+c}`);
//   // Change code above this line
  
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function add(a, b, c) {
  // Change code below this line
  // console.log(`Addition result equals ${a+b+c}`);
// return a + b + c;


  // Change code above this line
// }

// let result = add(2, 5, 8); // 15
// console.log(result);

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
  let totalPrice = (orderedQuantity * pricePerDroid + deliveryFee);
  console.log(`You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`);
  const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
  // Change code above this line
  return message;
}
// console.log(message);

makeOrderMessage(2, 100, 50);
makeOrderMessage(4, 300, 100);
makeOrderMessage(10, 70, 200);

function isAdult(age) {
  // Change code below this line
  const passed = ((age) >= 18);
console.log(passed);
  // Change code above this line
  return passed;
}

isAdult(20);
isAdult(14);
isAdult(8);
isAdult(37);

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = (password === 'jqueryismyjam') ;

  // Change code above this line
  return isMatch;
}

console.log(isValidPassword("mangodab3st"));
console.log(isValidPassword("kiwirul3z"));
console.log(isValidPassword("jqueryismyjam"));

function checkAge(age) {
  let message;

  if (age >= 18) { // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}

console.log(checkAge(20));
console.log(checkAge(8));
console.log(checkAge(14));
console.log(checkAge(38)); 

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (available < ordered) {
//     message = 'Not enough goods in stock!'
//   } else {
//     message = 'Order is processed, our manager will contact you.'
//   }
//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 50)); 
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));


let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
d /= 10;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  let totalPrice = pricePerDroid * orderedQuantity;
  // console.log(totalPrice);
  if (totalPrice > customerCredits) {
    message = "Insufficient funds!"
  } else {
    const leftCredits = customerCredits - totalPrice;
    message = `You ordered ${orderedQuantity} droids, you have ${leftCredits} credits left`;
  }
  // Change code above this line
  return message;
}

console.log(makeTransaction(3000, 5, 23000));
console.log(makeTransaction(1000, 3, 15000));
console.log(makeTransaction(5000, 10, 8000));
console.log(makeTransaction(2000, 8, 10000));
console.log(makeTransaction(500, 10, 5000));


// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));


// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   } else if (available < ordered) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }

//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));


function isNumberInRange(start, end, number) {
  const isInRange = (number >= start && number <= end); // Change this line

  return isInRange;
}

console.log(isNumberInRange(10, 30, 17));
console.log(isNumberInRange(10, 30, 5));
console.log(isNumberInRange(20, 50, 24));
console.log(isNumberInRange(20, 50, 76));


function checkIfCanAccessContent(subType) {
  const canAccessContent = (subType === "pro" || subType === "vip"); // Change this line

  return canAccessContent;
}

console.log(checkIfCanAccessContent("pro"));
console.log(checkIfCanAccessContent("starter"));
console.log(checkIfCanAccessContent("vip"));
console.log(checkIfCanAccessContent("free"));


function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Change this line

  return isNotInRange;
}

console.log(isNumberNotInRange(10, 30, 17));
console.log(isNumberNotInRange(10, 30, 5));
console.log(isNumberNotInRange(20, 50, 24));
console.log(isNumberNotInRange(20, 50, 76));


function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 2;
  const SILVER_DISCOUNT = 5;
  const GOLD_DISCOUNT = 10;
  let discount;
  // Change code below this line
  if (totalSpent < 5000) {
    discount = BASE_DISCOUNT;
  } else if (totalSpent >= 5000 && totalSpent < 20000) {
    discount = BRONZE_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
    discount = SILVER_DISCOUNT;
  } else {
    discount = GOLD_DISCOUNT;
  }
    
  

  // Change code above this line
  return discount;
}

console.log(getDiscount(137000));
console.log(getDiscount(46900));
console.log(getDiscount(8250));
console.log(getDiscount(1300));
console.log(getDiscount(5000));
console.log(getDiscount(20000));
console.log(getDiscount(50000));


function checkStorage(available, ordered) {
  let message;
  // Change code below this line

    message = ordered > available ? 'Not enough goods in stock!' : 'The order is accepted, our manager will contact you';
  

  // Change code above this line
  return message;
}

// console.log(message);


console.log('Повідомлення:', checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180));


// function add(a, b, c) {
//   // Change code below this line
// return a + b + c;


//   // Change code above this line
// }

// let result = add(2, 5, 8); // 15
// console.log(result);
// result = add(15, 27, 10);
//     console.log(result);
// result = add(10, 20, 30);
// console.log(result);
// result = add(5, 10, 15);
// console.log(result);
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//   // Change code above this line
//   return message;
// }

// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));

function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

 switch (type) { // Change this line
    case "starter": // Change this line
      price = 0; // Change this line
      break;

    case "professional": // Change this line
      price = 20; // Change this line
      break;

    case "organization": // Change this line
      price = 50; // Change this line
      break;
  }

  // Change code above this line
  return price;
}

console.log(getSubscriptionPrice("professional"));
console.log(getSubscriptionPrice("organization"));
console.log(getSubscriptionPrice("starter"));


function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line

  switch (password) {
    case null:
      message = "Canceled by user!";
      break;
    
    case ADMIN_PASSWORD:
    message = "Welcome!";
      break;
    
   default:
    message = "Access denied, wrong password!";
  }

  // Change code above this line
  return message;
}

console.log(checkPassword("mangohackzor"));
console.log(checkPassword(null));
console.log(checkPassword("polyhax"));
console.log(checkPassword("jqueryismyjam"));


function getShippingCost(country) {
  
  let message;
  let price;
    message = `Shipping to ${country} will cost ${price} credits`;
  // Change code below this line
  switch (country) {
    case "China":
      price = 100;
      break;
    
    case "Chile":
      price = 250;
      break;
    
    case "Australia":
      price = 170;
      break;
    
    case "Jamaica":
      price = 120;
      break;
    
    default:
      
  }
  
  // Change code above this line
  return message;
}
console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));


function getNameLength(name) {
  let lengthName = name.length;
  const message = `Name ${name} is ${lengthName} characters long`; // Change this line

  return message;
}

console.log(getNameLength("Poly"));
console.log(getNameLength("Harambe"));
console.log(getNameLength("Billy"));
console.log(getNameLength("Joe"));


const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length -1];

// Change code above this line
console.log(courseTopicLength);
console.log(firstElement);
console.log(lastElement);

function getSubstring(string, length) {
  const substring = string.slice(0, length); // Change this line

  return substring;
}

console.log(getSubstring("Hello world", 3));
console.log(getSubstring("Hello world", 6));
console.log(getSubstring("Hello world", 8));
console.log(getSubstring("Hello world", 11));
console.log(getSubstring("Hello world", 0));


function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  result = message.slice(0, maxLength);
  if (message.length > maxLength) {
    result += "..."
  } else {
  }
  
  /// Change code above this line
  return result;
}

console.log(formatMessage("Curabitur ligula sapien", 16));
console.log(formatMessage("Curabitur ligula sapien", 23));
console.log(formatMessage("Vestibulum facilisis purus nec", 20));
console.log(formatMessage("Vestibulum facilisis purus nec", 30));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));


function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line

  return normalizedInput;
}

console.log(normalizeInput("Hello world"));
console.log(normalizeInput("This ISN'T SpaM"));
console.log(normalizeInput("Big SALE"));


// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//   return result;
// }

// console.log(checkForName("Egor Kolbasov", "Egor"));
// console.log(checkForName("Egor Kolbasov", "egor"));
// console.log(checkForName("Egor Kolbasov", "egOr"));
// console.log(checkForName("Egor Kolbasov", "Zhenya"));
// console.log(checkForName("Vadim Nekrasov", "Vadim"));
// console.log(checkForName("Vadim Nekrasov", "vadim"));
// console.log(checkForName("Vadim Nekrasov", "Dima"));


function checkForSpam(message) {
  let result;

  // Change code below this line

  console.log(message.toLowerCase());
  if (message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale")) {
    result = true;
  } else {
    result = false;
  }

  // Change code above this line
  return result;
}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
console.log(checkForSpam("SPAM? NOT SPAM"));
console.log(checkForSpam("Spam? Not spam"));
console.log(checkForSpam("SALE? NOT sale"));


function checkAge(age) {
  if (age >= 18) { // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}
console.log(checkAge(20));
console.log(checkAge(8));
console.log(checkAge(14));
console.log(checkAge(38));


function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line


  if (ADMIN_PASSWORD === password) {
    return "Welcome!";
  }
    return "Access denied, wrong password!";
  
  // Change code above this line
}

console.log(checkPassword("mangohackzor"));
console.log(checkPassword("polyhax"));
console.log(checkPassword("jqueryismyjam"));


function checkStorage(available, ordered) {
  // Change code below this line
 
  if (ordered === 0) {
    return "Your order is empty!";
  } 
  if (ordered > available) {
   return "Your order is too large, not enough goods in stock!";
  } 
   return  "The order is accepted, our manager will contact you";
  
  // Change code above this line
}
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));


// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length -1];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);


// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log(fruits);


// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);


// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);

function getExtremeElements(array) {
  // Change code below this line
  const firstAndLast = [array[0], array[array.length -1]];
  // console.log(firstAndLast);
  return firstAndLast;
  // let first = array[0];
  // console.log(first);
  // let last = array[array.length - 1];
  // // console.log(last);
  // let firstAndLast = ([first, last]);
  // console.log(firstAndLast);
  
  // Change code above this line
}

getExtremeElements([1, 2, 3, 4, 5]);
getExtremeElements(["Earth", "Mars", "Venus"]);
getExtremeElements(["apple", "peach", "pear", "banana"]);
console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));


// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }


function splitMessage(message, delimiter) {
  let words;
  // Change code below this line
  words = message.split(delimiter);
  // Change code above this line
  return words;
}

console.log(splitMessage("Mango hurries to the train", " "));
console.log(splitMessage("Mango", ""));
console.log(splitMessage("best_for_week", "_"));


function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
  const str = message.split(" ");
  // console.log(str);
  const lengthMessage = str.length;
  // console.log(lengthMessage);
  const pricePerMessage = lengthMessage * pricePerWord;
  return pricePerMessage;

   // Change code above this line
}

// calculateEngravingPrice("JavaScript is in my blood", 10);
console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log(calculateEngravingPrice("Web-development is creative work", 40));
console.log(calculateEngravingPrice("Web-development is creative work", 20));

// 12.2
function makeStringFromArray(array, delimiter) {
  let string;
  // Change code below this line

  string = array.join(delimiter);

  // Change code above this line
  return string;
}

console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// 13.2
function slugify(title) {
  // Change code below this line
  const littleWords = title.toLowerCase();
  // console.log(littleWords);
  let dashBetweenWords = littleWords.split(" ");
    // console.log(dashBetweenWords);
  const slug = dashBetweenWords.join("-");
  // console.log(slug);

  return slug;


  // Change code above this line
}


console.log(slugify("Arrays for begginers"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// 14.2
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// console.log(firstTwoEls);
// const nonExtremeEls = fruits.slice(1, fruits.length -1);
// console.log(nonExtremeEls);
// const lastThreeEls = fruits.slice(-3);
// console.log(lastThreeEls);

// 15.2
const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); // Change this line
console.log(allClients);

// 16.2
function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
  const twoArray = firstArray.concat(secondArray).slice(0, maxLength);
  // console.log(twoArray);
  return twoArray;

    // Change code above this line
}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));


// 17.2
const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { // Change this line
  console.log(i);
}


// 18.2
function calculateTotal(number) {
 // Change code below this line
  let total = 0;
  for (let i = 1; i <= number; i += 1) {
     total += i;
    }
  return total;

  // Change code above this line
}
console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(7));
console.log(calculateTotal(18));
console.log(calculateTotal(24));


// 19.2
const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}


// 20.2
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }
  // Change code above this line
    return total;
  
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


// 21.2

// function findLongestWord(string) {
//   const splitString = string.split(" ");
//   console.log(splitString);
//   let wordsLength = 0;
//   // let longestWord;

//   for (let i = 0; i < splitString.length; i = + 1) {
//     wordsLength = splitString[i].length;
  
//     if (splitString[i].length > wordsLength) {

// function findLongestWord(string) {
//   const splitString = string.split(" ");
//   console.log(splitString);
//   let wordsLength = 0;
  // let longestWord;

  // for (let i = 0; i < splitString.length; i = + 1) {
  //   wordsLength = splitString[i].length;

    // if (splitString[i].length > wordsLength) {

//       longestWord = splitString[i];
// // console.log(longestWord)
      
//
    
  // }

//   // Change code below this line
  //   const splitString = string.split(" ")
  // console.log(splitString);
  // let longestWord;
  // for (let i = 0; i < splitString.length; i += 1) {
  //   console.log(splitString[i]);
  //   // const word = splitString[i].length;
  //   // console.log(word);
  //   longestWord = splitString[i].length < splitString[i].length;
  //   console.log(longestWord);
  //   // const longestWord = string[i] > string.length - 1;

  // }
  // const longStr = string.split(" ");
  // console.log(longStr);
  // const viewWords = longStr.length;
  // console.log(viewWords);
//   const stringSplit = string.split(' ');
//   console.log(stringSplit);
//   let longestWord = 0;
//   // console.log(longestWord);

//   for (let i = 0; i < stringSplit; i += 1) {
//     // console.log([i])
//     if (stringSplit[i].length > longestWord.length) {
      
//       longestWord = stringSplit[i].length;
      
      
    // }
//     console.log(stringSplit[i].length)
//     console.log(longestWord);
// }
//  return longestWord;


//   // Change code above this line
// }
// console.log(findLongestWord("T qck broootytyown fox jumped over the lazy dog"));
// <<<<<<< HEAD
// findLongestWord("T qck broootytyown fox jumped over the lazy dog");
// findLongestWord("Gole dooremar a roll");
// findLongestWord("M e for be witytha you");
// findLongestWord("Mayor the forceshing be with you")
// =======
// findLongestWord("T qck broootytyown fox jumped over the lazy dog");
// findLongestWord("Gole dooremar a roll");
// findLongestWord("M e for be witytha you");
// findLongestWord("Mayor the forceshing be with you")
// >>>>>>> a443f548ff1e504896aee665e3862c0bda4a072b

// function findLongestWord(string) {
//     const splitString = string.split(" ");
//   console.log(splitString);
//   let wordsLength = 0;

//   for (let i = 0; i < splitString.length; i += 1) {
//     console.log(splitString[i].length);
//     wordsLength = splitString[i].length;
  
//     let longestWord = splitString[i].length > wordsLength;
//     return longestWord
//   }
// }

// console.log(findLongestWord("T qck broootytyown fox jumped overs then lazy dog"));

// function findLongestWord(str) {
//   var strSplit = str.split(' ');
//   var longestWord = 0;
//   for(var i = 0; i < strSplit.length; i++){
//     if(strSplit[i].length > longestWord){
// 	longestWord = strSplit[i];
//      }
//   }
//   return longestWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// const findLongestWord = function(str) {
//   let arrStr = str.split(' ');
//   let wordLength = 0;
//   let longestWord;

//   for (let i = 0; i < arrStr.length; i += 1) {
//     wordLength = arrStr[1].length;

//     if (arrStr[i].length > wordLength) {
//       longestWord = arrStr[i];

//       return longestWord;
//     }

//   }
// };

// // Вызовы функции для проверки
// console.log(
//   findLongestWord("The quick brown fox jumped overflowersing the lazy dog")
// ); // вернет 'jumped'

// console.log(
//   findLongestWord("Google do a roll")
// ); // вернет 'Google'

// console.log(
//   findLongestWord("May the force be with you")
// ); // вернет 'force'

// function findLongestWord(string) {
//   var stringSplit = string.split(' ');
//   console.log(stringSplit);
//   var longestWord = 1;
//   for(var i = 0; i < stringSplit.length; i+= 1){
//     console.log(stringSplit[i]);
//     if (stringSplit[i].length > longestWord) {
//       console.log(stringSplit[i].length);
//       longestWord = stringSplit[i];
//       console.log(longestWord);
//      }
//   }
//   return longestWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));


let numbers = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];
// Метод перебирання forEach
numbers.forEach(function (number, index) {
  console.log(`Індекс ${index}, значення ${number}`);
});
console.log(numbers.forEach.length)


//  3.3
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// Change code above this line

// 4.3
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// console.log(firstTag);
// const lastTag = apartment.tags[apartment.tags.length -1];
// console.log(lastTag);
// Change code above this line

// 5.3
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line

// 6.3
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
// console.log(apartment.tags)
// Change code below this line

// 7.3
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {country: "Jamaica"};
apartment.location = {city: "Kingston" };
