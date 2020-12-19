// Noah670
// 12-20-2020
// personal info

// readline for input
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let userFirstName;
let userLastName;
let userAge;
let userFavouriteGame;

rl.question("What is your first name? ", (firstName) => {
    let person = {
        fName: userFirstName,
        lName: userLastName,
        age: userAge,
        favouriteGame: userFavouriteGame,
    };

    // TODO: Log the answer in a database
    person.fName = firstName;
    console.log(`Hi there: ${firstName}`);

    rl.question("What is your last name?", (lastName) => {
        person.lName = lastName;
        console.log(`Hi there: ${lastName}`);

        rl.question("What is your age ? ", (age) => {
            person.age = age;
            console.log(`Hi there: ${age}`);

            rl.question("What is your favourite game? ", (game) => {
                person.favouriteGame = game;
                console.log(`Game: ${game}`);

                rl.close();

                console.log("---------------------------------------");
                console.log("Thanks here are the details recorded:");
                console.log("First Name: " + person.fName);
                console.log("Last Name: " + person.lName);
                console.log("Age: " + person.age);
                console.log("Favourite Game: " + person.favouriteGame);
                console.log("---------------------------------------");
                console.log(" ");

                let personInfo = [];

                for (let key in person) {
                    let value = person[key];

                    personInfo.push(value + " ");
                }

                fs = require("fs");
                fs.writeFile("personInfo.txt", personInfo, (err) => {
                    // throws an error, you could also catch it here
                    if (err) throw err;

                    // success case, the file was saved
                    console.log("Info successfully saved to file!");
                });
            });
        });
    });
});