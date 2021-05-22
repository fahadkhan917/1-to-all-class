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
// A = [24, 53, 78, 91, 12].


// var a=[24,53,78,91,12]
// var len=0;
// for(var i=0;i<a.length;i++){

// if(a[i]>len){
// len=a[i]
// // document.write("yes")

// }
// document.write(len)
//    }


var a=[24,53,78,91,12];
var largest= 0
for(var i=0;i<a.length;i++){
if(a[i]>largest){
  largest=a[i];
}

}

document.write(largest);



