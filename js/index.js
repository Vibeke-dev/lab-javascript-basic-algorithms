// Iteration 1: Names and Input
// 
const hacker1 = "Vibeke";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Christian";
console.log(`The navigators name is ${hacker2}`);

const hacker3 = "Laszlo";
console.log(`The navigators name is ${hacker3}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log("hacker1 has the longest name");
}
else if (hacker1.length < hacker2.length) {
    console.log("hacker2 has the longest name");
}
else{
    console.log("hacker1 and hacker2 has the same length");
}

// Iteration 3: Loops
let tempHacker1 = "";

for(let i = 0; i < hacker1.length; i++)
{
    tempHacker1 += `${hacker1[i]} `;
}

console.log(tempHacker1.toUpperCase());

let tempHacker2 = "";

for(let i = hacker2.length-1; i >= 0; i--)
{
    tempHacker2 += `${hacker2[i]}`;
}

console.log(tempHacker2);

if (hacker1.localeCompare(hacker2)===-1){
    console.log("The driver's name goes first.");
}
else if (hacker2.localeCompare(hacker1)===-1){
    console.log("Yo, the navigator goes first definitely.");
}
else{
    console.log("What?! You both have the same name?");
}