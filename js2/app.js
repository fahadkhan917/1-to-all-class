// Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.


// var arr=[320,230,480,120]
// document.write(arr+"<br>")
// document.write(arr.sort())

// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array

// var city=["karachi","lahore","Islamabad","Quetta","Peshawar"];
// document.write(city+"<br>")
// var newcity=city.slice(2,4);
// document.write(newcity)

// Write a program to create a single string from the
// below mentioned array:

// var arr=["this","is","my","cat"];
// document.write(arr+"<br>")
// var a=arr.join('*');
// document.write(a)


// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// var arr=["keyborad","mouse","printer","monitor"];
// document.write(arr+"<br>")

// arr.shift();
// document.write(arr+"<br>")
// arr.shift();
// document.write(arr+"<br>")
// arr.shift();
// document.write(arr+"<br>")
// arr.shift();
// document.write(arr+"<br>")



// Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)


// var arr=["keyborad","mouse","printer","monitor"];
// document.write(arr+"<br>")

// arr.pop();
// document.write(arr+"<br>")
// arr.pop();
// document.write(arr+"<br>")
// arr.pop();
// document.write(arr+"<br>")
// arr.pop();
// document.write(arr+"<br>")



// Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:


// var ph=["apple","samsung","motorola","nokia","haier"];
// document.write("<select><option>"+ph[1]+"</option></select>")




// Declare and initialize a multidimensional array
// representing the following matrix:


// var activities = [];


// var activities = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1],
  
// ];

// for(var i=0;i<activities.length;i++){

// document.write(activities[i].join(' ')+"<br>")

// }


// Write a program to print numeric counting from 1 to 10.



// for(var i=0;i<=10;i++){


//     document.write(i+"<br>")
// }



// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user


// var user=prompt("enter the number")
// var len=prompt("enter the lenght")
// for(var i=1;i<=len;i++){

// document.write(user+"*"+i+"="+user*i+"<br>")

// }


// Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// var fruits=["apple", "banana","mango","orange","strawberry"]
// for(var i=0;i<fruits.length;i++){

// document.write("Element at index"+fruits.indexOf(fruits[i])+"is"+fruits[i]+"<br>")


// }
    


// Generate the following series in your browser. See
// example output.


// for(var i=0;i<=15;i++){

//     document.write(i)

// }

// for(var i=10;i>=1;i--){

//     document.write(i)

// }

// for(var i=0;i<=20;i++){
// if(i%2==0){
//     document.write(i)
// }
// }

// for(var i=0;i<=20;i++){
//     if(i%2==1){
//         document.write(i)
//     }
//     }



// You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:




// var user=prompt("enter the user")
// var a= ["cake", "apple pie", "cookie", "chips", "patties"]
// for(var i=0;i<a.length;i++){
// if(user==a[i]){

// document.write("yes"+a[i].indexOf(user[i]))
// }


// }



// Write a program to identify the largest number in the
// given array.
//

// var a=[24,78,98,65,55]
// var len=a[0];
// for(var i=0;i<a.length;i++){
// if(a[i]>len){
// len=a[i]


// }



// }

// document.write(len)


// Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// var a = [24, 53, 78, 91, 12]
// var len=a[0];
// for(var i=0;i<a.length;i++){
// if(a[i]<len){
// len=a[i]


// }



// }

// document.write(len)


// Write a program to print multiples of 5 ranging 1 to
// 100.


// for(var i=0;i<=100;i=i+5){

// document.write(i)

// }



// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.



// var fir=prompt("enter the first name")
// var sec=prompt("enter the last name")
// var full=fir+sec;
// document.write(full)


// Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser


// var user=prompt("enter the user")
// document.write(user+"<br>")
// document.write(user.length)


// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .


// var word="paksistani";
// document.write(word.indexOf('n'))



// Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser


// var word="hellow world";
// document.write(word.lastIndexOf('l'))


// Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var wo="pakistani"
// document.write(wo.charAt(3))



// 6. Repeat Q1 using string concat() method.

// var fi=prompt("enter the first name")
// var sec=prompt("enter the second name")
// var full=fi.concat(sec);
// document.write(full)


// Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.


// var word="hyderabad";
// var rep=word.replace('hyder','islam')
// document.write(rep)



// Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.



// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var rep=message.replace(/and/g,'&')
// document.write(rep)



//  Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.


// var nu="472"
// document.write(nu)
// var con=nu.toString();
// document.write(con)


// Write a program that takes user input. Convert and
// show the input in capital letters.


// var word="PEANUTS"
// document.write(word.toLowerCase())

// Write a program that takes user input. Convert and
// show the input in title case.


// var word="javascript"
// var fiwo=word[0].toUpperCase();
// var sewo=word.slice(1)
// var fi=fiwo+sewo
// document.write(fi)


// Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36 ;
// var re=num.toString()
// var la=re.replace('.','')
// document.write(la)



// Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .


// var user=prompt("enter the user")
// for(var i=0;i<user.length;i++){
// if(user.charCodeAt(i)==33||user.charCodeAt(i)==44||user.charCodeAt(i)==46||user.charCodeAt(i)==64){

// document.write("welcome")

// }


// }


// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// var user=prompt("enter the value")
// var a=["cake", "apple pie","cookie", "chips", "patties"]
// for(var i=0;i<a.length;i++){
// if(user==a[i]){

// document.write(a[i].indexOf(user[i])+"yes")

// }






// }

// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.


// var usr=prompt("enter the user");
// if(usr.length>6){

//     for(var i=0;i<usr.length;i++){
//         if((usr.charCodeAt(i)>=97&&usr.charCodeAt(i)<=122)||(usr.charCodeAt(i)>48&&usr.charCodeAt(i)<57)&&(usr.length==6)){
        
//         document.write("yes")
        
//         }

// }


// // else if(){

// // document.write("lenght is okay")

// // }

// }


// Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.


// var names="university of karachi";
// var b=names.split('')
// for(var i=0;i<names.length;i++){

// document.write("<br>"+b[i])




// }



// Write a program to display the last character of a user
// input.


// var user=prompt("enter the user")
// var str=user[user.length-1]
// document.write(str)



// You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.


// var word="the quick brown fox jumps over the lazy dog";
// var match=word.match(/the/g).length
// document.write(match)


// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number*/


// var number=3.45214
// document.write(number+"<br>")
// var roundoff=Math.round(number)
// document.write(roundoff+"<br>")
// var floor=Math.floor(number)
// document.write(floor+"<br>")
// var cei=Math.ceil(number)
// document.write(cei+"<br>")



// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var number=-2.673
// document.write(number+"<br>")
// var roundoff=Math.round(number)
// document.write(roundoff+"<br>")
// var floor=Math.floor(number)
// document.write(floor+"<br>")
// var cei=Math.ceil(number)
// document.write(cei+"<br>")



// Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5



// var nu=-4;
// var ch=Math.abs(nu)
// document.write(ch)



// Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:


// var num='5';
// var ran=Math.random(num).toFixed(1)*10;
// document.write(ran)





// Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser




// var num='';
// var ran=Math.floor(Math.random(num)*2+1);
// if(ran==2){

// document.write("heads")

// }
// else if(ran==1){

// document.write("Tails")

// }


// Write a program that shows a random number between 1
// and 100 in your browser.


// var nu=Math.random().toFixed(1)*100;
// document.write(nu)


// Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:



// var user=prompt("enter the weight")
// var par=parseInt(user)
// document.write(par)


// Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// var num=Math.floor(Math.random()*10);
// var user=prompt("enter the user")
// if(user==num){


// document.write("congratulate the user")

// }



// Write a program that displays current date and time in
// your browser.


// var a=new Date();
// document.write(a)



// Write a program that alerts the current month in words.
// For example December.


// var a=new Date();
// var gets=a.getMonth();
// var month=["","jan","feb","mar","may","june","july"];
// document.write(month[gets])



// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show sun.


// var a=new Date();
// var gets=a.getDay();
// var dys=["sun","mon","tue","wed","thu","fri","sat"]
// document.write(dys[gets])