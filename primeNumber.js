// find prime number.
let num=17;
prime=true;


for (let i=2;i<num; i++){
    if (num%i===0){
        prime=false;
    }
}

if (prime===true){
    console.log("Prime no");
} else {
    console.log("Not prime");
}