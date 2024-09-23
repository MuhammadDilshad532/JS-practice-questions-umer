// 13: JS practice questions

// String methods and operations:

// 1. Extract the domain name: 
// 1=  Solution:

// function extractDomain(url) {
//     let domain = url.replace(/^https?:\/\//, '');
//     domain = domain.replace(/^www\./, '');
//     domain = domain.split('/')[0]; 
//     return domain;
// }

// const url = "https://www.example.com/path/to/page";
// const domainName = extractDomain(url);
// console.log(domainName);



// 2. Convert to Camel Case:
// 2=  Solution:

// function toCamelCase(str) {
//     return str
//         .split(' ') 
//         .map((word, index) => {
           
//             if (index === 0) {
//                 return word.toLowerCase();
//             }
            
//             return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//         })
//         .join(''); 
// }

// const inputString = "hello world this is javascript";
// const camelCaseString = toCamelCase(inputString);
// console.log(camelCaseString); 

// 3. Reverse the String:
// 3=  Solution:
// function reverseString(str) {
//     return str
//         .split('') 
//         .reverse() 
//         .join(''); 
// }

// const inputString = "JavaScript";
// const reversedString = reverseString(inputString);
// console.log(reversedString);


// 4. Count Vowels
// 4=  Solution:

// function countVowels(str) {
//     const vowels = 'aeiouAEIOU';
//     return Array.from(str) 
//         .filter(char => vowels.includes(char)) 
//         .length; 
// }

// const inputString = "This is a test string";
// const vowelCount = countVowels(inputString);
// console.log(vowelCount); 

// 5. Remove Duplicate Characters:
// 5=  Solution:


// function removeDuplicates(str) {
//     return Array.from(new Set(str)).join(''); 
// }

// const inputString = "programming";
// const uniqueCharacters = removeDuplicates(inputString);
// console.log(uniqueCharacters); 

// 6. Find the Longest Word:
// 6=  Solution:

// function findLongestWord(str) {
//     return str
//         .split(' ') 
//         .reduce((longest, current) => {
//             return current.length > longest.length ? current : longest; 
//         }, ''); 
// }

// const inputString = "The quick brown fox jumps over the lazy dog";
// const longestWord = findLongestWord(inputString);
// console.log(longestWord); 


// 7. Replace Characters:
// 7=  Solution:


// function replaceNumbers(str) {
//     return str.replace(/[0-9]/g, '#'); 
// }

// const inputString = "abc123xyz";
// const replacedString = replaceNumbers(inputString);
// console.log(replacedString); 

// 8. Extract Substring:
// 8=  Solution:

// by slice
// const inputString = "JavaScript is awesome";
// const substring = inputString.slice(10); 
// console.log(substring); 

// Using substring()
// const inputString = "JavaScript is awesome";
// const substring = inputString.substring(10); 
// console.log(substring); 


// 9. Format Phone Number:
//   Solution:

// function formatPhoneNumber(phone) {
//     return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
// }

// const inputString = "1234567890";
// const formattedPhone = formatPhoneNumber(inputString);
// console.log(formattedPhone); 

// 10. Uppercase the First Letter
//   Solution:


// function capitalizeFirstLetter(str) {
//     return str
//         .split(' ') 
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
//         .join(' '); 
// }

// const inputString = "javascript is fun";
// const capitalizedString = capitalizeFirstLetter(inputString);
// console.log(capitalizedString); 

// 11. Remove White Spaces:
//   Solution:

// const inputString = " Trim me ";
// const trimmedString = inputString.trim(); 
// console.log(trimmedString); 

// 12. Count Words 
//   Solution:

// const inputString = "Count the number of words in this sentence";
// const wordCount = inputString.trim().split(' ').filter(word => word.length > 0).length; 
// console.log(wordCount); 


// 13. Replace Substring:
//   Solution:
// const inputString = "I like cats";
// const replacedString = inputString.replace("cats", "dogs"); 
// console.log(replacedString); 

// 14. Check Substring Presence:
//   Solution:

// const inputString = "Hello, world!";
// const hasSubstring = inputString.indexOf("world") !== -1; 
// console.log(hasSubstring); 

// 15. Extract Initials:
//   Solution:


// function extractInitials(name) {
//     return name
//         .split(' ') 
//         .map(word => word.charAt(0).toUpperCase()) 
//         .join('.') + '.'; 
// }

// const inputString = "John Doe";
// const initials = extractInitials(inputString);
// console.log(initials); 

// 16. Find Character Index: 
//   Solution:

// const inputString = "Find the index of character";
// const characterIndex = inputString.indexOf("c");
// console.log(characterIndex); 

// 17. Pad String:
//   Solution:
// const inputString = "42";
// const paddedString = inputString.padStart(5, '0'); 
// console.log(paddedString); 


// 18. Split and Join: 
//   Solution:
// const inputString = "apple,banana,orange";
// const resultString = inputString.split(',').join(' '); 
// console.log(resultString); 


// 19. Generate Acronym:
//   Solution:
// function generateAcronym(str) {
//     return str
//         .split(' ')
//         .map(word => word.charAt(0).toUpperCase()) 
//         .join(''); 
// }

// const inputString = "HyperText Markup Language";
// const acronym = generateAcronym(inputString);
// console.log(acronym); 