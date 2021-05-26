// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

const reverseString = (str) => {
  // *************************************
  // 1. Using reverse() method
  // *************************************
  // return str.split('').reverse().join('')
  // ***************************************
//  2. Using decrenenting for loop
//   let rewStr = '';
//   for(let i = str.length-1;i>=0;i--){
//     rewStr = rewStr + str[i]
//   }
//     return rewStr
//
// }
// ***************************************
// 3. Using incrementing for loop
//     let rewStr = '';
//   for(let i = 0;i<str.length;i++){
//
//     rewStr = str[i] + rewStr
//   }
//   return rewStr
// }
// ***************************************
// 4. Using "for of" loop
//   let rewStr = '';
//   for (let char of str) {
//     rewStr = char + rewStr
//   }
//   return rewStr
// ***************************************
//  5. Using forEach + es6
//   let rewStr = ''
//   str.split('').forEach(char=> rewStr = char + rewStr)
//   return rewStr;
// }
  // ***************************************
  // 6. Using reduce() + es6
  return str.split('').reduce((revStr, char)=>char + revStr,'');
}

// Output
// reverseString('hello')

// ***************************************
// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
// ***************************************



const isPalindrome = (str)=>{
  // console.log(str === str.split('').reverse().join(''))
  return str === str.split('').reverse().join('')
}

// Output
// console.log(isPalindrome('racecar'))
// console.log(isPalindrome('madam'))

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  let revStr = int.toString().split('').reverse().join('')

  return parseInt(revStr) * Math.sign(int)
}

//Output
// reverseInt(-4321)

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
// ***************************************
// Using for loop
// function capitalizeLetters(str) {
//   const strArr = str.toLowerCase().split(' ')
//
//   for(let i = 0;i<strArr.length;i++){
//     strArr[i] = strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1)
//   }
//   return strArr.join(' ')
// }
// ***************************************
// Using map()
// const capitalizeLetters = (str)=>{
//   return str
//     .toLowerCase()
//     .split(' ')
//     .map(word=>word[0].toUpperCase() + word.substr(1))
// }
// const output = capitalizeLetters('each first letter of a word is capitalized.');
// console.log(output)
//***************************************
// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
// function maxCharacter(str) {
//   const charMap = {}
//   let maxChar = '';
//   let maxNum = 0;
//   str.split('').forEach(char=>{
//     if(charMap[char]){
//       charMap[char]++
//     } else {
//       charMap[char] = 1
//     }
//   }
//   )
//     for(let char in charMap){
//       if(charMap[char] > maxNum){
// maxNum = charMap[char]
//         maxChar = char
//       }
//     }
//
//     return maxChar
//   }
//
//
// const output = maxCharacter('bumblebee');
// console.log(output)

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for(let i = 1;i<=100;i++){
    if(i%15===0){
      console.log('FizzBuzz')
    } else if(i%3===0){
      console.log('Fizz')
    }else if(i%5===0){
      console.log('Buzz')
    }else{
      console.log(i)
    }
  }
}



// Call Function
const output = fizzBuzz();

console.log(output);