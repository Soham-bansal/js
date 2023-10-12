function saymyname(){
    console.log("h");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");

}

// saymyname();
// saymyname();
// saymyname();
// saymyname();

function add( a, b){ // a and b are parameters
    return a+b;
}
console.log(add(10,30));  // a and b is arguments


function userloginmessage(username){
           return `${username} just logged in `;
}
console.log(userloginmessage("hitesh"));
console.log(userloginmessage());


//shoppingcartprice function has no limit on input price so its function is written in this ways
function shoppingcartprice(...num){      //...put all arguments in an array
    return num;
}
// console.log(shoppingcartprice(10,20,30,40,50,60,70));


//object as arguments in js
const obj={
    username:"soham",
    price:199
}
function handleobject(anyobject){
   console.log(`The username is ${anyobject.username} and Price is ${anyobject.price}`);
}
handleobject(obj);

//put paramters as object in functions
handleobject({
    username:"hitesh",
    price:7989
})





