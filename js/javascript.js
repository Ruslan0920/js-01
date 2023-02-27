
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


// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

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
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }


// 18.2
// function calculateTotal(number) {
//  // Change code below this line
//   let total = 0;
//   for (let i = 1; i <= number; i += 1) {
//      total += i;
//     }
//   return total;

//   // Change code above this line
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));


// 19.2
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }


// 20.2
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//     return total;
  
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


// 21.2

function findLongestWord(string) {
  const stringSplit = string.split(' ');
  let longestWord = "";

  for (let word of stringSplit) {
    if (word.length > longestWord.length) {
      longestWord = word;
   }
  
  }
      return longestWord;
  }
  
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));


// 22.2
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // console.log(numbers)
//   // Change code below this line
//   for ( let i = min; i <= max; i += 1){
//     numbers.push(i);
//     // console.log(numbers.push(i))
//   }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

// 23.2
// function filterArray(numbers, value) {
//    // Change code below this line
//   let newMassive = [];
  
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//         newMassive.push(numbers[i]);
//     }
//   }
  
// return newMassive;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// 24.2
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));


// 25.2
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const commonElements = [];
//   for (let i = 0; i < array1.length; i += 1){
//     // console.log(array1[i])
//     // console.log(array2[i])
//     if (array2.includes(array1[i])) {
      
//       commonElements.push(array1[i])
//     }
    
//   }
// return commonElements

//  // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));


// 26.2
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }
//   for (const number of order) {
//     total += number;
//   }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));


// 27.2
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   //   if (number > value) {
//   //     filteredNumbers.push(number);
//   //   }
//   // }
//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));


// 28.2
// Change code below this line
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);


// 29.2
// function getEvenNumbers(start, end) {
//   // console.log(end)
// //    // Change code below this line
  
//   let evenNumbers = [];
//   // console.log(evenNumbers)

//   for (let i = start; i <= end; i +=1) {
//     // console.log(i)
//     let allNumbers = i;
//     // console.log(allNumbers)
//     // evenNumbers.push(allNumbers)
//     // console.log(evenNumbers)

//     if (allNumbers % 2 ===0) {
//       evenNumbers.push(allNumbers)
//       // console.log(evenNumbers)
//     }
//   }
// return evenNumbers


// //     // Change code above this line
// }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));


// 30.2
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);


// 31.2
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       // break;
//       return number;
//     }
//   }

//   return number;
//   // Change code above this line
// }
// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));


// 32.2
// function includes(array, value) {
//   // Change code below this line
//   for (let i = 0; i < array.length; i += 1){
//     const check = array.includes(value)
//     return check;
//   }
  
//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));



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
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// console.log(apartment.area);
// apartment.rooms = 3;
// apartment.location = {country : "Jamaica"} ;
// console.log(apartment.location.country);
// apartment.location.city = "Kingston";
// console.log(apartment.location.city);
// console.log(apartment.owner.name)


// 8.3
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags
//   // Change code above this line
// };
// console.log(product.name, price, image, tags);

// // 9.3
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//   [emailInputName] : "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
//   // Change code above this line
// };
// console.log([credentials.email, credentials.password])

// 10.3
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// console.log(keys);
// const values = [];
// console.log(values);
// // Change code below this line
// for (const key in apartment) {
//   // console.log(key);
//   keys.push(key);
//   console.log(keys);
//   // console.log(apartment[key]);
//   values.push(apartment[key])
//   console.log(values);
  
// }
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// 11.3
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;
// // Change code below this line
// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//    keys.push(key);
//   console.log(keys);

//   values.push(apartment[key])
//   console.log(values);
//  }
// }

// 12.3
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
// }
//   // Change code above this line
//   return propCount;
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


// 13.3
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys)
// for (const key of keys) {
//   values.push(apartment[key]);
//   console.log(values)
// }


// 14.3
// function countProps(object) {
//   // Change code below this line
//   let propCount = Object.keys(object).length;

//   return propCount;
//   // Change code above this line
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


// 15.3
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);
// const values = Object.values(apartment);
// console.log(values);


// 16.3
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   console.log(values);
//   for (let value of values)
//     totalSalary += value;
//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));


// 17.3
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];


// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (let color of colors) {
//   // console.log(color.rgb);
//   hexColors.push(color.hex);
//   console.log(hexColors);
//   rgbColors.push(color.rgb);
//   console.log(rgbColors);
// }


// 18.3
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (let product of products) {
//     // console.log(product);
//     if (product.name === productName) {
//   return product.price;
//     }
// }
//   return null;

//   // Change code above this line
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

const users = [{name: 'Poly', age: 7, mood: 'happy'},
  {name: 'Mango', age: 4, mood: 'blissful'},
  {name: 'Ajax', age: 3, mood: 'tired'}
];

function getAllPropValues(arr, prop) {
  return arr.map(el => el[prop]);
}


// Вызовы функции для проверки
console.log(
  getAllPropValues(users, 'name')
); // ['Poly', 'Mango', 'Ajax']

console.log(
  getAllPropValues(users, 'mood')
); // ['happy', 'blissful', 'tired']

console.log(
  getAllPropValues(users, 'active')
); // []

// 19.3
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
// //   // Change code below this line
//   const allParametrs = {
//     propName: [],
//     name: [],
//     quantity: [],
//     price: [],
//   }
//   for (product of products) {
//     // console.log(product)
//     allParametrs.name.push(product.name);
//     allParametrs.quantity.push(product.quantity);
//     allParametrs.price.push(product.price);
//   }
//   // let array = [];
//   // let quantity = [];
//   // let price = [];
  

// // for (const product of products) {
// //   // console.log(product);
// //   // name = product.name;
// //   name.push(product.name)
// //   console.log(name);
// //   quantity.push(product.quantity);
// //   console.log(quantity);
// //   price.push(product.price);
// //   console.log(price);
// // //     if (product.name === productName) {
// // //   return product.price;
// //     }
// //   for (const product of products) {
// //     // console.log(product)
// //     array = Object.values(product.price)
// //     // array.push(product.name);
// //     // array.push(product.quantity);
// //     // array.push(product.price);
    

// //     console.log(array)
// //     // return Object.values(products.name)
// // }
// return allParametrs
// //   // Change code above this line
// }
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));


// 1.4
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// console.log(result);
// const pointer = makePizza;
// console.log(pointer);


// 2.4
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
//   console.log(pizzaName)
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Change code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));


// 3.4
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName){
//   console.log(`Eating pizza ${pizzaName}`)
// });


// 4.4
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {    
//       if (this.pizzas.includes(pizzaName)) {
//         return onSuccess(pizzaName);
//     }
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//     } 
//    }

// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//       return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));


// 5.4
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }
//   orderedItems.forEach(function calculateTotalPrice(number) {
//     totalPrice += number;
//   });
  
//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


// 6.4
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }
//   numbers.forEach(function filterArray(numbers) {
//     if(numbers > value)
//     filteredNumbers.push(numbers);
// })
//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));


// 7.4
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }
  
  // САМ ПРИДУМАВ
//   let firstMassive = 0;
 
  // firstArray.forEach(function getCommonElements(number) {
  //   // console.log(number)
  //   firstMassive = number;
  //   // console.log(firstMassive)
  //   if (secondArray.includes(firstMassive)) {
      
  //     commonElements.push(firstMassive)
  //   }
  // })
  // secondArray.forEach(function getCommonElements(number) {
       
  //   // console.log(number)
    
  // } )

  // САМ ПРИДУМАВ
//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }
// // console.log(getCommonElements([1, 2, 3], [1, 2, 3]));
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));


// 8.4
// Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Change code above this line
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


// 11.4
// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// 12.4
// Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));


// 13.4
// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
      
//   //     numbers[i] = numbers[i] + value;
   
//   //     newArray.push(numbers[i], numbers)
//   //   }
//   //   return newArray;
//   // }
//   numbers.forEach(element => {
//     if(element % 2 === 0)
//       newArray.push(element + value);
//     else newArray.push(element)
//   })

//   return newArray;

//   // Change code above this line
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


// 14.4
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);


// 15.4
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
// console.log(titles);


// 16.4
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(({ genres }) => genres);
// console.log(genres);


// 17.4
// Change code below this line
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];


// const getUserNames = users.map(user => user.name);
// console.log(getUserNames)
  // Change code above this line


// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// // }

// // Метод перебирання forEach
// numbers.forEach(function (num, index) {
//   console.log(`Індекс ${index}, значення ${num}...`);
// });

// const arrowAdd = (a, b, c) => {
//   return a + b + c;
  
// };
// console.log(arrowAdd(a, b, c))

// const add = (a, b, c) => {
//   return a + b + c;
// };


// const add = a => {
//   return a + 5;
// };
// console.log(add(a))

// const greet = () => {
//   console.log("Привіт!");
// };
// greet()


// const numbers = [5, 10, 15, 20, 25];

// // Оголошення функції
// // numbers.forEach(function (number, index) {
// //   console.log(`Індекс ${index}, значення ${number}`);
// // });

// // Анонімна стрілочна функція
// numbers.forEach((nu, index) => {
//   console.log(`Індекс ${index}, значення ${nu}`);
// });

// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(petya => petya > 3);
// console.log(filteredNumbers); // [4, 5]


// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));