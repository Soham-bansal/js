const myarr=[1,2,3,4,5,6,7,8,9,0];  //stores different data types
const myarr2=["shaktiman","naagraj"];
console.log(myarr[0]);
console.log(myarr[1]);
console.log(myarr[2]);
console.log(myarr[3]);
console.log(myarr[4]);
console.log(myarr[5]);
console.log(myarr[6]);
console.log(myarr[7]);
console.log(myarr[8]);
console.log(myarr[9]);
console.log(myarr[10]);
//array methods
// 1.push
myarr.push(100);
console.log(myarr);
myarr.push(2000);
console.log(myarr);

// 2.pop  removes the last element and returns it
let a=myarr.pop();
console.log(a);
console.log(myarr);

// 3.unshift   insert element at starts 
myarr.unshift(47);
console.log(myarr);
// 4.shift removes the first element from array
let x=myarr.shift();
console.log(x);
console.log(myarr);

// 5.includes (search for the  element in array)
console.log(myarr.includes(900));
// 6.indexof  (gaves the index of inout number in arrray)
console.log(myarr.indexOf(10));

let n=[1,2,3,4,5];
// 7.join()
console.log(n.join("="));


// 6.delete Element of Array


//9.array to string
let arr=[1,2,4,7,4,178,15];
console.log(arr.toString());

// 10 concat arrays
let arr1=[10,20,30,40,50];
let arr2=[100,200,400,500,600];
let arr3=arr1.concat(arr2);
console.log(arr3);
console.log(arr1);
console.log(arr2);


//11.reverse =reverse the element in arrays
let arrnew=[10,20,30,40,20];
arrnew.reverse();
console.log(arrnew);

//12.splice()=used to add and removes the element from array
let arre=[1,4,7,8,2,5,9,6,30];
arre.splice(2,1,10,20,30,40);    //splice(2(posiiton to be addeded),no. of elemnent to be removed,elements to be added);
console.log(arre);

arre.splice(0,6);    //gave the deleted elements array
console.log(arre);


//13.slice 
console.log(arre.slice(1,4));

//14.convert  to arrays Array.isArray
//Array.from("string");
console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));//converts into array



