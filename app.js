
//For loop Structure
// for (Initialization;condition;iteration)

//}
//? EX/ Look below vvv

for (let i = 0; i < 10; i++) {
    console.log(`I am currently ${i} and I am still under 10`);
};

//I'm a teacher and I want to get a mean of the total of the class
let grades = [78, 89, 35, 90, 76];
let sum = 0;


console.log(grades.length)

for(let i = 0;i < grades.length; i++) {
    //console.log(grades[i])
    sum += grades[i];
}

console.log(sum);
console.log (sum / grades.length);



const favFruits = ["pineapple", "orange", "strawberry", "grapes"]

let fruit = "strawberry"

for (let i = 0; i < favFruits.length; i++) {

    if(fruit == favFruits[i]) {
        console.log("I'm in da Basket!")
        break;
    } else {
        console.log("Not in the string");
    }
    
}

debugger
for (let i = 0; i < favFruits.length; i++) {

    if (favFruits[i] == "orange") {
        favFruits[i] = favFruits[i].toUpperCase()
        console.log(favFruits);
    } else {
        console.log("YOU'RE NOT MY ORANGE")
    }


}


for (let i =0; i < 5; i++) {
    //We can utilize the variable i in for loop arguments
    // "i" variable number is changing each loop bc of the iteration argument (i++)
     console.log("Monday is a Amazing day to start the week!" + i);
}


debugger
let seasons =["fall", "winter", "summer", "spring"];
let favSeasons = "fall";
//Display all seasons on the websites console
for (let i = 0; i < seasons.length; i++) {
    //we call array strings by variables index.
    //ex. seasons [1], seasons [2]...
    console.log(seasons[i]);
}


for (let i =0; <seasons.length; i++) {

    if (favSeason == seasons {i})
        console.log("That's my favorite season!");
}