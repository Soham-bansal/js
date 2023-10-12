let obj={
    name:"soham",
    id:"bansalsoham92@gmail.com",
    roll:102216052,
    "name":"soham Bansal",
    isloggedin:false,
}
console.log(obj["id"]);
console.log(obj.id);
console.log(obj["name"]);


//to add symbol in object
const mysmb=Symbol("mykey1");
const objec={
    name:"soham",
    id:"bansalsoham92@gmail.com",
    roll:102216052,
    [mysmb]:"mykey1"
}
console.log(objec);
console.log(objec["mysmb"]);

//objects decreations
const ob={
    coursename:"jsinhindi",
    courseinstructor:"hitesh",
    price:"999"
}
//decreations
 const  {courseinstructor:inst}=ob;
 const {coursename:name}=ob;
 const  {price:p}=ob;
//  console.log(courseinstructor);
//  console.log(coursename);
//  console.log(price);
console.log(p);
console.log(name);
console.log(inst);

//API
// {
//     "name":"soham",
//     "coursename":"js in hindi",
//     "price":"free"
// }











