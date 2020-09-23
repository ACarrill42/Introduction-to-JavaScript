/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
var votingAge = Math.random() * 30;
if (votingAge > 18){
    console.log("true");
} else {
  console.log("false");
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let x = 10;
let y = 30;
let z = 20;
if (x < y){
  console.log(z);
}




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
var string = "1999";
Number(string);




//Task d: Write a function to multiply a*b 
function math(a,b){
    return a*b;
}




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
let x = newAge(26,7);

function newAge(a,b){
  return a * b;
}
console.log(x);




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

dogFeeder(1,15)
function dogFeeder(age,weight){
  if(age >= 1){
    if (weight <= 5){
      console.log(`Dog must eat ${weight* .05}lbs of food`)
    } else if (weight <= 10){
      console.log(`Dog must eat ${weight * .04}lbs of food`)
    }else if (weight <=15){
      console.log(`Dog must eat ${weight * .03}lbs of food`)
    }else {
      console.log(`Dog must eat ${weight * .02}lbs of food`)
    }
  }else{
    if (age <= 2 / 4){
      console.log(`Puppies must eat ${weight * 0.10}lbs of food`)
    }else if (age <= 4 / 7){
      console.log(`Puppies must eat ${weight * 0.05}lbs of food`)
    }else {
      console.log(`Puppies must eat ${weight * 0.04}lbs of food`)
    }
  }
}  




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
let human = prompt("Choose rock, paper, or scissors?");
let computer = Math.random() * 1;
if (computer < 0.34){
  computer = "rock";
}else if(computer >= 0.67) {
  computer = "paper";
}else {
  computer = "scissors";
}

let game = function(p1,p2) {
  if(p1===p2){
    return "It's a tie"
  }

  if (p1==="rock"){
  if(p2==="scissors"){
    return "rock wins";
  }else {
    return "paper wins";
  }
  }
  if (p1==="paper"){
  if (p2==="rock"){
    return "paper wins";
  } else {
    if (p2===scissors){
      return "scissors wins";
    }
  }
  }
  if (p1==="scissors") {
  if (p2==="rock") {
    return "rock wins";
  } else {
    if ( p2 === "paper"){
      return "scissors wins";
    }
  }
  }
};
game(human,computer)
  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
let x = 0.62137;
let y = Math.random() * 100;
let z = conversion(x,y)
function conversion (x,y){
  return x*y;
}
console.log(z, 'mi');




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
let x = 30.48;
let y = Math.random() * 50;
let z = conversion(x,y)
function conversion (x,y){
  return x*y;
}
console.log(z,'cm');  




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
annoyingSong(100)  
function annoyingSong(bottles) {
  for (let i = bottles; i > 0; i--) {
    console.log(`${i} of soda on the wall, ${i} of soda. Take one down, pass it around. ${bottles -1} bottles of soda on the wall.`)
  }

}



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F


let grades = Math.random() * 100;
if (grades > 90) {
  console.log("A");
} else if (grades > 80) {
  console.log("B");
}  else if (grades > 70) {
  console.log("C");
}  else if (grades > 60) {
  console.log("D");
}  else if (grades < 60) {
  console.log("F");
}  

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





