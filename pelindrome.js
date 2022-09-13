//chech if it is pelindrome or not.
let text1="aman";
let bag="";

for (let i=text1.length-1; i>=0; i--){
    bag=bag+text1[i];
}

if (bag===text1){
    console.log("Yes");
} else{
    console.log("No");
}