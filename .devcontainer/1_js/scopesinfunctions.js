// var c=300
let c=300
if(true){
    let c=30;
    console.log("Inner ",c);
}

console.log(c);


//scope level in functions
function one(){
       const username="hitesh";

    function two(){
        const web="website";
        console.log(username);
    }
    // console.log(web);
    two();
}

one();


