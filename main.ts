//DAY 34 
//TASK 1 (Finding the square root of 144) using math.sqrt() method
let squareroot: number = Math.sqrt(144);
console.log(squareroot); //Result: 12
//This method easily find out square root of any value

//TASK 2 (Generate a random integer b/w 1 and 10) using math.random,math.floor method
function getrandomINT(): number {
    return Math.floor(Math.random() * 10) + 1 ;
}
getrandomINT();
console.log(getrandomINT()); //Result 9
//This method combines math.random and math.floor together to create a random integer within range.

//TASK 3 (Calculate absolute difference b/w the number -5 and 5)
function difference(): number {
    return Math.abs(-5 - 5);
}
difference();
console.log(difference()); //Result 10
//This method calculate the value together and ignoring the sign