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




// Array methods and operations:
// 1. Extract Prices:
//   Solution:

// const pricesArray = ["Price: $5", "Cost: $10", "Amount: $15"];
// const extractedPrices = pricesArray.map(item => {
//     return parseInt(item.replace(/[^0-9]/g, ''), 10); 
// });

// console.log(extractedPrices); 


// 2. Filter URLs by Domain
//   Solution:
// const urls = [
//     "https://example.com/page1",
//     "https://test.com/page2",
//     "https://example.com/page3"
// ];

// const filteredUrls = urls.filter(url => {
//     return url.includes("example.com"); 
// });

// console.log(filteredUrls); 


// 3. Extract Titles:
//   Solution:

// const htmlArray = [
//     "<h1>Title 1</h1>",
//     "<h1>Title 2</h1>",
//     "<h1>Title 3</h1>"
// ];

// const extractedTitles = htmlArray.map(html => {
//     const match = html.match(/<h1>(.*?)<\/h1>/); 
//     return match ? match[1] : ''; 
// });

// console.log(extractedTitles); 


// 4. Count Word Occurrences:
//   Solution:
// const wordsArray = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const wordCount = wordsArray.reduce((count, word) => {
//     count[word] = (count[word] || 0) + 1; 
//     return count;
// }, {});

// console.log(wordCount); 

// 5. Find URLs with Query Parameters:
//   Solution:
// const urls = [
//     "https://example.com/page?query=test",
//     "https://example.com/page",
//     "https://example.com/page?query=example"
// ];

// const urlsWithQueryParams = urls.filter(url => {
//     return url.includes('?'); 
// });

// console.log(urlsWithQueryParams); 

// 6. Normalize Text:
//   Solution:

// const textArray = [" Text1 ", "Text2 ", " Text3"];

// const normalizedText = textArray.map(function(text) {
//     return text.trim(); 
// });

// console.log(normalizedText); 

// 7. Convert to Lowercase:
// const stringsArray = ["Hello", "WORLD", "JavaScript"];
// const lowercasedStrings = stringsArray.map(function(str) {
//     return str.toLowerCase(); 
// });
// console.log(lowercasedStrings); 

// 8. Extract Domains:
// const emailArray = ["user1@example.com", "user2@test.com", "user3@example.com"];

// const domains = emailArray.map(function(email) {
//     return email.split('@')[1]; 
// });

// console.log(domains); 
// 9. Check for Valid URLs:
// const urlArray = ["http://example.com", "example.com", "https://test.com"];

// const isValidUrl = urlArray.map(url => {
   
//     const pattern = /^(https?:\/\/)[^\s$.?#].[^\s]*$/;
//     return pattern.test(url); 
// });

// console.log(isValidUrl); 
// 10. Format Dates:
// const dateArray = ["2023-01-01", "2024-02-02", "2025-03-03"];

// const formattedDates = dateArray.map(function(date) {
//     const parts = date.split('-'); 
//     return `${parts[1]}/${parts[2]}/${parts[0]}`; 
// });

// console.log(formattedDates); 


// 11. Remove HTML Tags:
// const htmlArray = ["<div>Content 1</div>", "<p>Content 2</p>", "<span>Content 3</span>"];

// const cleanedContent = htmlArray.map(function(html) {
//     return html.replace(/<[^>]*>/g, '');
// });

// console.log(cleanedContent); 

// 12. Extract Image Sources: 
// const imageTags = ["<img src='image1.jpg'>", "<img src='image2.png'>", "<img src='image3.gif'>"];

// const imageSources = imageTags.map(function(tag) {
//     const match = tag.match(/src=['"]([^'"]+)['"]/); 
//     return match ? match[1] : ''; 
// });

// console.log(imageSources); 

// 13. Filter by Keyword: 
// const articleTitles = ["Breaking News: Economy", "Sports Update: Football", "Tech News: Gadgets"];

// const filteredTitles = articleTitles.filter(function(title) {
//     return title.includes("News"); 
// });

// console.log(filteredTitles); 

// 14. Find Elements with Length: 
// const stringsArray = ["short", "medium", "a very long string"];

// const longStrings = stringsArray.filter(function(str) {
//     return str.length > 5; 
// });

// console.log(longStrings); 

// 15. Extract Unique Domains:

// const urls = [
//     "https://example.com",
//     "https://test.com",
//     "https://example.com/about",
//     "https://test.com/contact"
// ];
// const domains = urls.map(url => {
//     const match = url.match(/\/\/([^\/]+)/); 
//     return match ? match[1] : ''; 
// });
// const uniqueDomains = domains.filter((domain, index, self) => {
//     return self.indexOf(domain) === index; 
// });

// console.log(uniqueDomains); 

// 16. Capitalize First Letter: 
// const wordsArray = ["word", "another word", "yet another word"];

// const capitalizedWords = wordsArray.map(function(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1); 
// });

// console.log(capitalizedWords); 
// 17. Split and Flatten Sentences:
// const sentences = ["This is a sentence.", "Here is another one."];
// const flattenedWords = sentences
//     .map(sentence => sentence.split(' ')) 
//     .flat(); 

// console.log(flattenedWords); 

// 18. Aggregate Text Content:

// const paragraphTags = ["<p>Paragraph 1.</p>", "<p>Paragraph 2.</p>", "<p>Paragraph 3.</p>"];
// const paragraphsText = paragraphTags.map(tag => tag.replace(/<[^>]*>/g, ''));
// const aggregatedText = paragraphsText.join(' '); 
// console.log(aggregatedText); 

// 19. Check All Elements:

// const urls = ["https://example.com", "http://test.com", "https://another.com"];
// const allHttps = urls.every(url => url.startsWith("https"));
// console.log(allHttps); 

// 20. Transform URL Parameters:
// const queryStrings = ["?name=John&age=30", "?name=Jane&age=25", "?name=Smith&age=40"];
// const transformedObjects = queryStrings.map(queryString => {
//     const params = new URLSearchParams(queryString); 
//     const obj = {}; 
//     params.forEach((value, key) => {
//         obj[key] = value;
//     });
//     return obj; 
// });
// console.log(transformedObjects); 





