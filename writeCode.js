// # 1 Sum Zero
//function will take in array of numbers as parameter
// returns true if any two numbers in arr sum to 0
//returns false if otherwise
const isSumZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return true;
      }
    }
  }
  return false;
};

let arr1 = [1, 2, 3, 4, 5, 6, 7];
// console.log(isSumZero([1, 2, 3, -2]), `should return true`);
// console.log(isSumZero(arr1), `should return false`);

// since this code utilizes a nested for loop, it will have a runtime complexity of O(n^2)

/////////////////////////////////////////////////////////////////////////////////////////////////

// #2 Unique Characters
// a function that takes in a single word, a string
// return true if the word contains only unique chars --
// (letters will never repeat themselves)
// return false if they repeat

const hasUniqueChars = (word) => {
  let arr = word.split("");
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;
};

// console.log(hasUniqueChars("monday"), `should return true`);
// console.log(hasUniqueChars("moonday"), `should return false`);
// console.log(hasUniqueChars("moOnday"), `should return true`);

// since this code also utilizes a nested for loop, it will also have a runtime complexity of O(n^2)
// if asked in an interview, i would want to find out more about what the interviewer means by "unique".

// in this case i am considering capitalized versions of characters 'unique' to their lowercase counterparts, so if they appear in a string together they won't be counted as equal, therefore the function will still return true. if i wanted to check for case sensitivity, i would have led with let arr = word.toLowerCase()split('') and continued the function from there.

/////////////////////////////////////////////////////////////////////////////////////////////////

// #3 Pangram Sentence
// pangram sentence contains all the letters of the english alphabet at least once
// function will takes in a sentence (string)
// to lowercase so char will register if it was capitalized in the sentence or not
// function that will count all letters and assign a value into object
// will loop over each character and ++ particular alphabet character
// create an alphabet arr to compare it to
// return true if sentence is a pangram

// const isPangram = (str) => {
//   let arr = str.toLowerCase().split("");
//   let obj = {};
//   let alphaStr = "abcdefghijklmnopqrstuvwxyz";
//   let alphaArr = alphaStr.split("");
//   arr.forEach(function (char) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (
//         char === " " ||
//         char === "'" ||
//         char === `"` ||
//         char === "`" ||
//         char === "," ||
//         char === "!"
//       ) {
//         continue;
//       } else if (char == arr[i]) {
//         count += 1;
//       }
//       obj[char] = count;
//     }
//     let charArr = Object.keys(obj);
//     let sorted = charArr.sort();
//   });
//   //   const { sorted } = arr.forEach();
//   return sorted === alphaArr;
// };

/// ^^ my colossally clunky, unwieldy approach. the program was also picking up punctuation as well as spaces, so I began to add each as an edgecase. i realize how inefficient this would be. that being said, it could be salvagable, but it needs a way to access the sorted variable that was inside of the forEach to compare it to alphaArr in the return statement. (scope issue)

//researched indexOf method -- MUCH SIMPLER APPROACH -- can be used on a string or an array. in our case, returns the first index of the given element, or will return an index of -1 if not found. therefore, the logic of alphabet[i] < 0 would mean the character was not found in the array, meaning the input string doesn't contain the full alphabet, i.e. NOT a pangram.

// Pangram take # 2

const isPangram = (string) => {
  let strArr = string.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < alphabet.length; i++) {
    if (strArr.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }
  return true;
};

str1 = "The quick brown fox jumps over the lazy dog?!";
str2 = "Not a pangram but let's check anyway";
str3 = "Waxy and quivering, jocks fumble the pizza";
// console.log(isPangram(str1), `should return true`);
// console.log(isPangram(str2), `should return false`);
// console.log(isPangram(str3), `should return true`);
// console.log(
//   isPangram(
//     "I am a string please count my characters and see if i'm a pangram?"
//   ),
//   `should return false`
// );

// alternative code (as provided by Lukas)

const hasUniqueChars = (word) => {
  let checker = {}; // Creating the empty object
  for (let i = 0; i < word.length; i++) {
    if (!checker[word[i]]) {
      //If the letter doesn't exist in the object
      checker[word[i]] = 1; //Add it as a key
    } else {
      return false; //If it does exist, throw false.
    }
  }
  return true; //Otherwise if the loop ends, throw true.
};

/////////////////////////////////////////////////////////////////////////////////////////////////

// # 4 Longest Word

// function find_longest_word takes in an array of strings
// loop over array and turn each word into its length value
// order array by largest to smallest
// return array[0]

// return the length of the longest word

const findLongestWord = (arr) => {
  let lengthArr = [];
  for (let i = 0; i < arr.length; i++) {
    let wordLength = arr[i].length;
    lengthArr.push(wordLength);
    lengthArr.sort((a, b) => b - a);
  }
  return lengthArr[0];
};

// console.log(
//   findLongestWord(["one", "test", "length", "supercalifragilistic"]),
//   `should be 20`
// );
// console.log(findLongestWord(["this", "off", "elephant", "eye"]), `should be 8`);
// console.log(
//   findLongestWord(["refrigerator", "runs", "far", "capture"]),
//   `should be 12`
// );

// there is a for loop that will iterate over each word in the array, so the time complexity will be dependent upon the length of the array. the bigger the array, the longer this function will take. (at least O(n))
// methods like push only have a runtime of O(1)... BUT
// since this function utlizes the sort method, i believe it will have a runtime complexity of O(n log n)
