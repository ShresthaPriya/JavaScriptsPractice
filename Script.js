// // object in js =Collection of values

// const student={
//   fullName: 'Priya Shrestha',
//   age:23,
//   cgpa:3.89,
// };
// // console.log(student.fullName);//accessing the key's value
// // console.log(student["fullName"]); //accessing the key's value

// //updating the values of object.
// // student.age=student.age+1;
// // console.log(student.age);

// // student.fullName="Pia";
// // console.log(student.fullName);

// const product={
//     name: "pen",
//     rating: 4,
//     price:270,
//     offer: 5,


// };

// console.log(product);

// const profile={
//     fullName: "Shraddha Khapra",
//     followers:569,
//     totalPosts: 195,
//     following:4,
//     isFollowed: true,
// }

// console.log(profile);
// console.log(profile.fullName);
// console.log( typeof profile.fullName);


//arthmeric operators
// let a = 15;
// let b = 5;
// console.log("a+b= ", a+b);
// console.log("a=", a ,"& b= ", b); //add
// console.log("a-b= ", a-b); //sub
// console.log("a*b= ", a*b); //multiply
// console.log("a/b= ", a/b); //divide
// console.log("a%b= ", a%b); //modulus
// console.log("a**b= ", a**b); //exponential
// console.log("b**2= ", b**2);

//unary oprators
// let p=5;
// p++
// console.log("p increment by 1= ", p); //post increment, 5
// console.log(p); //6
// console.log("++p", ++p); //pre increment, output=6


//assignment operator
//+=, -=, *=, /=, %=, **=
// let a =6;
// a+=6;
// console.log("a+6= ", a); //12
// let b=12
// b-=2;
// console.log("b-2= ", b); //10
// let c=10;
// c*=2;
// console.log("c*2= ", c); //20
// let d= 20;
// d/=2;
// console.log("d/2= ", d); //10
// let e=10;
// e**=2;
// console.log("e**2= ", e); //100
// let f = 100;
// f%=2;
// console.log("f%2= ", f); //0

//practice questions:
// let number = prompt("Enter the number");
// if(number%5===0){
//     console.log(number,"is the multiple of 5");
// }else{
//     console.log(number,"is not the multiple of 5.")
// }
// let number = prompt("Enter the number");
// if(number%5===0){
//     console.log(`${number} is the multiple of 5.`);
// }else{
//     console.log(`${number} is not the multiple of 5.`)
// }

// let scores =prompt("Enter your grade:");
// if(scores >=90 && scores <= 100){
//    console.log(scores, " ,A grade!!")
// }else if(scores>=70 && scores < 90){
//     console.log(scores, " ,B grade!!")
// }else if(scores >=60 && scores < 70){
//     console.log(scores, " ,C grade!!")
// }else if(scores >=50 && scores < 60){
//     console.log(scores, ", D grade!!")
// }else{
//     console.log(scores, " ,E grade!!")
// }

// Loops= for, while, do while
// let sum =0;
// for (let i=1; i<=5; i++){
//     sum+=i;
    
// }
// console.log(sum);

// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// let i=1;
// do{
//     console.log("do while loop",i);
//     i++;

// }while(i<=5);


//print all even numbs from 0-100;
// for(let i=0; i<=100; i++){
//     if(i%2===0){
//       console.log(i);
//     }
// }

//guessing gamr
// let gameNum=7;
// let guessNum = prompt("Guess the number: ");
// while(guessNum != gameNum){
//     guessNum= prompt("You have failed to guess the number correctly. Guess the number again: ");
// }
//     console.log("Congratulations!! You have guessed the number,");

//for-of loop//used in strings and arrays
// let myName="Priya";
// for(let i of myName){
//     console.log(i);

// }


//string
// let firstName="Priya";
// console.log("Length of",firstName,"is: ", firstName.length);
// console.log("Letter in 0 index is: ", firstName[0]);

//template literals: Special type of string
// let sentence = `This is a template literals, which is the special type of string.`;
// console.log(sentence);


//string interpolation
//obj
// let details={
//     fullName : "Priya Shrestha",
//     age: 22,
//     address: "Panchkhal"
// };
// //instead of doing
// // console.log("I am", details.fullName, details.age, "year old female, residing in ", details.address );
// //we can use template literals
// let output=`I am ${details.fullName}, ${details.age} years old female, residing in ${details.address}.`;
// console.log(output);

// let calc = `The sum of 2 and 3 is ${2+3}`; //we can use exoressions in template literals using string interpolation
// console.log(calc);

//Escape Characters
// \n= nextline
// let myName ="Priya Shrestha";
// let age =12;
// console.log(`${myName}\n${age}`);
// console.log("Or \n" +myName+'\n'+age);

// \t=tabspace
// let myName ="Priya Shrestha";
// let age =12;
// console.log(`${myName}\t${age}`);
// console.log("Or \t" +myName+'\t'+age);

// let myName = "Pri\tya";
// console.log(myName.length);//6 as it calculates the space as a charater as well.

//string methods
// let str="Hi!!"
// let myName="Priya Shrestha ";
// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());
// console.log(myName.trim());
// console.log(myName.slice(1,4));//end is non inclusive
// console.log(myName.concat(str));
// console.log(myName.replace("i", "ee"));

// console.log(myName.replaceAll("r", "e"));//replaces all the r with e
// console.log(myName.charAt(0));

// let fullName = prompt('Enter the full name: ');
// let nameLen=fullName.length;
// // let username = `@${fullName}${fullName.length}`;
// // console.log(username);
// let username="@"+fullName.concat(nameLen);
// console.log(username);

//Arrays: collection of values/item of same datatype..
// let arr =[23, 66, 98, 77, 81];
// console.log(arr);

//we can also change the value using the index.
// arr[0]=99;
// console.log(arr);
// result=(5) [99, 66, 98, 77, 81]


//looping over array:
//for of = to give the values
//for in= to give the indices
//print all the elements of the ARRAY
// let flowers =["Rose", "Tulips", "Lillies", "Sunflowes", "Daisy"];
// for(let i of flowers){
//     console.log(i);
// }

// for(let i=0; i<5; i++){

// console.log(flowers[i]);
// }
// output:  Rose
// Tulips
// Lillies
//  Sunflowes
//  Daisy

//While loop
// let index=0;
// while(index<5){
//     console.log(flowers[index]);
//     index++;
// }

//do while
// let index=0;
// do{
//     console.log(flowers[index]);
//     index++;
// }while(index<5);



//practice qn
// let marks=[85, 97, 44, 37, 76, 60];
// let ave =0;
// let sum =0;
// for(let i of marks){
//     sum = sum +i;
//     ave=sum/marks.length;
// }
// console.log(`Total marks of the students= ${sum}`);
// console.log(`Average marks of the students in the class is ${ave}`);

// let items =[250, 645, 300, 900, 50];
// for(let i =0; i<items.length; i++ ){
//     let offerPrice = items[i]/10;
//     items[i]-=offerPrice;
    
// }
// console.log(`Price after offer is ${items}`);

// let items =[250, 645, 300, 900, 50];
// let i =0
// for(let val of items){
//     let offer = val/10;
//     items[i]=items[i]-offer;
//     console.log(`Price after offer is ${items[i]}`);
//     i++
// }

// Array Method
//push(), pop(), toString()


// let fullName = prompt("Enter the name");
// let strLen = fullName.length;
// console.log(`@${name}${strLen}`);
// console.log("@"+fullName.concat(strLen));


// let marks = [85, 87, 44, 37, 76, 60];
// let sum = 0;

// for(let i=0; i<marks.length; i++){
//     sum = sum + i;
    
// }
// let ave = sum / marks.length;

// console.log(`The average marks is ${ave}.`)

// let prices = [250, 645, 300, 900, 50];
// for(let i=0; i<prices.length; i++){
//     let offerPrice=  prices[i]/10;
// prices[i] = prices[i]- offerPrice;

// }
// console.log(prices);

// let prices = [250, 645, 300, 900, 50];
// let items =["Pen", "Book", "Copies", "Markers", "Pencil"]
// let joinedItems = prices.concat(items);
// console.log(joinedItems);


//unshift: adds to start of array
// let items =["Pen", "Book", "Copies", "Markers", "Pencil"];
// let addedItem = items.unshift("Laptop");
// // console.log(addedItem);
// console.log(items);

//shift: deletes from the start
// let items =["Pen", "Book", "Copies", "Markers", "Pencil"];
// let deletedItem = items.shift();
// console.log(items);
// console.log(`Deleted items= ${deletedItem}.`);

//slice: returns a piece of array //doesnt change original array
// let items =["Pen", "Book", "Copies", "Markers", "Pencil"];
// let sliced = items.slice(0, 4);
// console.log(`Sliced items= ${sliced}`)
// console.log(items);

//splice: change the original array[add, remove, replace]
// let items =["Pen", "Book", "Copies", "Markers", "Pencil"];
// let splicedItems= items.splice(1,2, "Colours", "Ink");
// console.log(splicedItems);
// console.log(items);


//practice qn of array method
// let companies = ["Bloomberg", "Microsoft", "Uber", "Google","IBM", "Netflix"];
// console.log(companies.shift());
// console.log(`Array after removing first company ${companies}.`);

// companies.splice(2, 1 ,"Ola"); //go to index 2 and remove 1 element
// console.log(companies);

// companies.push("Amazon");
// console.log(companies);



//FUNCTIONS = Block of code that performs specific tasks.
// function sum(a,b){
//     s=a+b;
//     console.log("Before: ");
//     return s;
// }

// let val = sum(3, 5);
// console.log("After: ", val);


//Arrow function:Compact way of writing functions
// const sumFunc = (a,b)=>{
//     return a + b;
// }

 
// console.log("After: ", sumFunc(3, 5));


//practice for function:
// function countVowel(word){
//     let count = 0;
//     for (let i of word){
//         if(i === 'a'|| i === 'e' || i === 'i' || i === 'o' || i === 'u'){
//            count ++;    
//         }      
//     }
//     return count;
    
// }

// const vowel = countVowel("Priya");
// console.log(vowel);

//with arrow function
// const countVowel = (word)=>{
//     let count = 0;
//     for(let i of word){
//         if(i === 'a'|| i === 'e' || i === 'i' || i === 'o' || i === 'u'){
//             count ++;
//         }
//     }
//     return count;
// }

// console.log(countVowel("Priya"));


// function countVowel(str) {
//     let count = 0; // Initialize count
//     for (let i = 0; i < str.length; i++) {
//         // Check if the current character is a vowel
//         if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ||
//             str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U') {
//             count++;
//         }
//     }
//     return count; // Return the count
// }

// console.log(countVowel("Priyaaa")); // Output: 3
