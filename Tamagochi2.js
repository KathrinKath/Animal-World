// !Test version 16.07.2024 19:30
// ! Used as a main version 16.07.2024 ,23:30
// ! Used as a main version 16.07.2024 ,13:30
// Importing necessary modules
const readline = require("readline"); // Module for reading user input
const colors = require("colors"); // Module for colored output in the console
const Table = require("cli-table3"); // Module for creating ASCII tables
const rl = readline.createInterface({
  // Creating readline interface for input/output
  input: process.stdin,
  output: process.stdout
});

// Function to check if the input contains only letters
// ? Function name check
function isValidName(input) {
  return /^[a-zA-Z]+$/.test(input);
}
// Function to get emoji based on need level
// ? Function needs emojis
function getEmoji(value) {
  // Emoji selection based on different value ranges
  if (value >= 90) {
    return "🤩"; // Perfect!
  } else if (value >= 75) {
    return "😀"; // Great
  } else if (value >= 50) {
    return "😊"; // Good
  } else if (value >= 25) {
    return "😐"; // Okay
  } else if (value >= 10) {
    return "😢"; // Low
  } else if (value > 0) {
    return "😭"; // Critical
  } else {
    return "💀"; // Dead
  }
}
// Function to get age emoji based on the age value
// ? Function age emojis
function getAgeEmoji(value) {
  // Emoji selection based on different age ranges
  if (value >= 80) {
    return "👴";
  } else if (value >= 60) {
    return "🧓";
  } else if (value >= 40) {
    return "🧔‍♂️";
  } else if (value >= 25) {
    return "👨";
  } else if (value >= 10) {
    return "🧒";
  } else if (value >= 0) {
    return "👶";
  }
}
// Function to get points emoji based on the points value
// ? Function points emojis
function getPointsEmoji(value) {
  // Emoji selection based on different points ranges
  if (value >= 300) {
    return "💰";
  } else if (value >= 200) {
    return "🪙";
  } else if (value >= 150) {
    return "💴";
  } else if (value >= 120) {
    return "💵";
  } else if (value >= 100) {
    return "💶";
  } else if (value >= 80) {
    return "💷";
  } else if (value >= 50) {
    return "💸";
  } else if (value >= 20) {
    return "💳";
  } else {
    return "🧾";
  }
}
// Initial values for pet needs, health, age, and points
// ? Object needs
const needs = {
  food: 100,
  energy: 100,
  toilet: 100,
  fun: 100,
  hygiene: 100,
  social: 100
};
let health = 100;
let age = 0;
let points = 0;
// Array of random events with their effects and emojis
// ? Object events
const randomEvents = [
  {
    name: "Pet is in love",
    description: "Increases social need to 100",
    affect: { social: 100 },
    eventEmoji: "💘"
  },
  {
    name: "Pet lost a friend",
    description: "Deccreases social need by 20",
    affect: { social: -20 },
    eventEmoji: "😭"
  },
  {
    name: "Pet gets a snack",
    description: "Gives 10 points for the food need",
    affect: { food: +10 },
    eventEmoji: "🥮"
  },
  {
    name: "Pet is sick",
    description: "Decreases energy need by 20 and fun by 10",
    affect: { energy: -20, fun: -10 },
    eventEmoji: "🤢"
  },
  {
    name: "Pet has travelled",
    description: "Increases social and fun needs by 20",
    affect: { social: +20, fun: +20 },
    eventEmoji: "🌍"
  },
  {
    name: "Pet visited a friend",
    description: "Increases social and fun needs by 20",
    affect: { social: +20, fun: +20 },
    eventEmoji: "🍻"
  },
  {
    name: "Pet has a new toy",
    description: "Increases fun need by 20",
    affect: { fun: +20 },
    eventEmoji: "🧸"
  },
  {
    name: "Pet has been vaccinated",
    description: "Increases health need by 30 and cost 10 points",
    affect: { health: +30, points: -10 },
    eventEmoji: "💉"
  },
  {
    name: "Pet found a treasure",
    description: "Increases points by 30",
    affect: { points: +30 },
    eventEmoji: "💰"
  },
  {
    name: "Pet Went to the Vet",
    description:
      "Your pet had a check-up at the vet. It costs 10 points and increases the health by 20",
    affect: { health: +20, points: -10 },
    eventEmoji: "🩺"
  },
  {
    name: "Pet Found a Friend",
    description: "Your pet made a new friend! Social need increased by 50",
    affect: { social: +50 },
    eventEmoji: "🤼"
  },
  {
    name: "Pet Got a Bath",
    description:
      "Your pet got a refreshing bath. Icreases hygiene need to 100 and increases health and social needs by 10",
    affect: { health: +10, social: +10, hygiene: 100 },
    eventEmoji: "🛁"
  },
  {
    name: "Pet Played in the Mud",
    description:
      "Your pet played in the mud. It decreases the hygiene need by 40 and health by 5, increase social by 10 and fun by 30",
    affect: { health: -5, social: +10, hygiene: -40, fun: +30 },
    eventEmoji: "🏖"
  },
  {
    name: "Pet Had a Bad Dream",
    description:
      "Your pet had a scary dream. Decreases fun by 10 and social by 5",
    affect: { social: -5, fun: -10 },
    eventEmoji: "👹"
  },
  {
    name: "Pet Discovered a New Place",
    description:
      "Your pet explored a new area. You gained 10 points and increased social need by 20",
    affect: { social: +20, points: +10 },
    eventEmoji: "🏞"
  },
  {
    name: "Pet Played in the Rain",
    description: "Increases fun by 30 but decreases hygiene by 10",
    affect: { fun: +30, hygiene: -10 },
    eventEmoji: "🌧"
  },
  {
    name: "Pet Found a Cozy Spot",
    description: "Increases energy by 20",
    affect: { energy: +20 },
    eventEmoji: "🏝"
  },
  {
    name: "Pet Got Stung by a Bee",
    description: "Decreases health by 10 and fun by 10",
    affect: { health: -10, fun: -10 },
    eventEmoji: "🐝"
  },
  {
    name: "Pet Visited a Park",
    description: "Increases social and fun by 25",
    affect: { social: +25, fun: +25 },
    eventEmoji: "🌳"
  },
  {
    name: "Pet Attended a Pet Show",
    description:
      "Increases social by 30 and fun by 20, it cost 10 points and decrease the energy by 15",
    affect: { social: +30, fun: +20, points: -10, energy: -15 },
    eventEmoji: "🤡"
  },
  {
    name: "Pet Had a Sunny Day",
    description: "Increases energy and fun by 10",
    affect: { energy: +10, fun: +10 },
    eventEmoji: "🌞"
  },
  {
    name: "Pet Learned a New Game",
    description: "Increases fun by 25 and points by 15",
    affect: { fun: +25, points: +15 },
    eventEmoji: "🎮"
  }
];
// Function to check and trigger a random event based on pet's age
// ? Function randomal events
function checkAndTriggerRandomEvent() {
  if (age !== 0 && age % 7 === 0) {
    // Trigger event every 7 days
    const randomEvent =
      randomEvents[Math.floor(Math.random() * randomEvents.length)];
    console.log(
      colors.bgMagenta.black.bold(
        `Random Event after ${age} days: ${randomEvent.name} - ${randomEvent.description} ${randomEvent.eventEmoji}`
      )
    );
    // Apply the effects of the random event to the pet's needs
    for (let need in randomEvent.affect) {
      needs[need] += randomEvent.affect[need]; // Adjust the specified need
      if (needs[need] < 0) {
        needs[need] = 0; // Ensure needs don't go below 0
      } else if (needs[need] > 100) {
        needs[need] = 100; // Ensure needs don't exceed 100
      } else if (need === "health") {
        health += randomEvent.affect[need]; // Adjust health if affected
        if (health < 0) {
          health = 0; // Ensure health doesn't go below 0
        } else if (health > 100) {
          health = 100; // Ensure health doesn't exceed 100
        }
      } else if (need === "points") {
        points += randomEvent.affect[need]; // Adjust points if affected
        if (points < 0) {
          points = 0; // Ensure points don't go below 0
        }
      }
    }
  }
}
// Function to start the game and prompt user to choose an animal
// & Game main menu
// ? Function start game
function startGame() {
  // Greet the player with a colorful message
  console.log(colors.rainbow("Hello and welcome to the animals world!"));
  // Prompt the player to choose an animal
  console.log(
    colors.bold(
      "Please choose the animal you want to play with - press on a number between 0 to 9 accordingly:"
    )
  );
  // Display table of animals with corresponding emojis
  // ? Table animals choice emojis and numbers
  const animalsTable = new Table({
    head: [
      "0. 🐉",
      "1. 🐶",
      "2. 🐱",
      "3. 🐰",
      "4. 🐭",
      "5. 🐷",
      "6. 🐥",
      "7. 🐵",
      "8. 🦈",
      "9. 🦄"
    ],
    colWidths: [8, 8, 8, 8, 8, 8, 8, 8, 8, 9]
  });
  // Populate animal table with names corresponding to emojis
  // ? Table animals choice type
  animalsTable.push([
    "Dragon",
    "Dog",
    "Cat",
    "Bunny",
    "Mouse",
    "Pig",
    "Chick",
    "Monkey",
    "Shark",
    "Unicorn"
  ]);
  // ? Table printed on terminal
  console.log(colors.bgCyan.bold(animalsTable.toString())); // Display the animal table
  // Prompt user to enter their choice of animal
  rl.question("Enter your choice: ", (choice) => {
    let animalEmoji, animal;
    switch (choice.trim()) {
      // Assign emoji and name based on user's choice
      case "0":
        animalEmoji = "🐉";
        animal = "Dragon";
        console.log(`You chose Dragon! 🔥🔥🔥! ${animalEmoji}`);
        break;
      case "1":
        animalEmoji = "🐶";
        animal = "Dog";
        console.log(`You chose Dog! Woof Woof! ${animalEmoji}`);
        break;
      case "2":
        animalEmoji = "🐱";
        animal = "Cat";
        console.log(`You chose Cat! Meow! ${animalEmoji}`);
        break;
      case "3":
        animalEmoji = "🐰";
        animal = "Bunny";
        console.log(`You chose Bunny! Hop Hop! ${animalEmoji}`);
        break;
      case "4":
        animalEmoji = "🐭";
        animal = "Mouse";
        console.log(`You chose Mouse! Squeak Squeak! ${animalEmoji}`);
        break;
      case "5":
        animalEmoji = "🐷";
        animal = "Pig";
        console.log(`You chose Pig! Oink Oink! ${animalEmoji}`);
        break;
      case "6":
        animalEmoji = "🐥";
        animal = "Chick";
        console.log(`You chose baby Chick! Tweet Tweet! ${animalEmoji}`);
        break;
      case "7":
        animalEmoji = "🐵";
        animal = "Monkey";
        console.log(`You chose baby Monkey! Ooh Ooh Ah Ah! ${animalEmoji}`);
        break;
      case "8":
        animalEmoji = "🦈";
        animal = "Shark";
        console.log(`You chose a Shark! Yum Yum! ${animalEmoji}`);
        break;
      case "9":
        animalEmoji = "🦄";
        animal = "Unicorn";
        console.log(`You chose a Unicorn! Whinny! ${animalEmoji}`);
        break;
      default:
        console.log(`Invalid choice! Please enter a number between 0 and 9.`);
        startGame(); // Restart game if choice is invalid
        return;
    }
    // Prompt user to enter a name for their chosen animal
    rl.question(
      `You chose ${animalEmoji} ${animal}! What would you like to name your ${animal}? `,
      (name) => {
        // Check if the name contains only letters
        if (!isValidName(name)) {
          console.log("Invalid name! Please enter only letters.");
          startGame(); // Restart game if name is invalid
          return;
        }
        console.log(`Great! Your ${animalEmoji} ${animal}'s name is ${name}.`);
        console.log("\n");
        // Displaying game instructions and information
        console.log(
          colors.bgBlue.bold(
            `Here are some care instructions for your ${animalEmoji} ${animal} named ${name}:`
          )
        );
        // Display general care instructions and key actions for the game
        console.log(
          colors.bgRed.yellow.bold(
            "Your animal has 6 important needs you should pay attention to and take an action:\n🍲 Food (1), 🔋 Energy (2), 🚽 Toilet (3), 🎉 Fun (4), 🚿 Hygiene(5) and 🤝 Social(6).\n If you wish to stop the game, press 9."
          )
        );
        // Explain the mood parameter and its importance
        console.log(
          "There is also a mood parameter (🎭 Mood) which is the average of all the needs and will indicate you if your pet needs help and attention."
        );
        // Explain the consequences of needs dropping to critical levels
        console.log(
          colors.bgRed.yellow.bold(
            "The range of the needs is between 0 to 100, when one of the needs reaches to 0, your animal will die."
          )
        );
        // Provide guidance on interpreting high and low needs levels
        console.log(
          "You should consider your care according to the needs table you will see after every step you are going to do.\nWhen the needs of your animal are less than 25, you will be notified about it.\nWhen the needs of your animal are above 85, you will get a complement."
        );
        // Explain the health system and its importance
        console.log(
          colors.bgRed.yellow.bold(
            "You need to pay attention to the health of the pet, when the needs of your pet are lower than 50, you will lose a health point.\nWhen the health of your pet is 0, your pet will die."
          )
        );
        // Describe the point system and its benefits
        console.log(
          "During the game you can collect points every time when you fulfill a need or having birthday.\nEvery 30 points will increase your pet's health by 1."
        );
        // Explain the interdependence of needs
        console.log(
          "Keep in mind that every need you refill might decrease other needs.\nFor example, when you feed your pet, it will need to use the toilet more urgently. The same applies to sleep and fun needs."
        );
        // Explain aging and birthday celebrations
        console.log(
          "Your pet will grow by 1 day every 10 seconds. Every 10 days your pet will have a birthday."
        );
        // Describe the automatic decrease in needs over time
        console.log(
          "Keep in mind that every 3 seconds, the needs are decreasing automatically."
        );
        // Provide information about exiting the game
        console.log(
          colors.bgRed.bold.black(
            "You can leave the game any time by pressing on `Ctrl + Z`."
          )
        );
        // Offer a recommendation for terminal usage to enhance gameplay visibility
        console.log(
          colors.bold(
            "It is reommended to use the terminal in a height of 70% of the screen for better view of the game and your progress in it."
          )
        );
        // Print a blank line for separation
        console.log("\n");
        // Inform the user that the game is about to start
        console.log("Ready? Let's start!");
        // Wait for user input to continue the game
        rl.question("Press ´Enter´ to continue 💻", () => {
          // After user input, indicate that the game is starting
          console.log("Awesome! Starting the game...\n");
          // Function to calculate the pet's mood based on its needs and health
          // ? Function calculate mood
          function calculateMood() {
            // Calculate the average mood based on various needs and health
            return (
              (needs.food + // Add food need
                needs.energy + // Add energy need
                needs.toilet + // Add toilet need
                needs.fun + // Add fun need
                needs.hygiene + // Add hygiene need
                needs.social + // Add social need
                health) / // Add health status
              7 // Divide by the total number of factors (6 needs + 1 health)
            );
          }
          // Function to display needs of the pet
          // ? Function display needs
          function displayNeeds() {
            let mood = calculateMood(); // Calculate the pet's mood
            // Create a new table for user affect parameters
            // ? Table animals needs values and status columns
            const table = new Table({
              head: [
                colors.bold.bgMagenta("Number"), // Column header for Number with magenta background
                colors.bold.bgMagenta("Need"), // Column header for Need with magenta background
                colors.bold.bgMagenta("Value"), // Column header for Value with magenta background
                colors.bold.bgMagenta("Status") // Column header for Status with magenta background
              ],
              colWidths: [10, 15, 10, 10] // Setting column widths for Number, Need, Value, and Status
            });
            // Adding rows to the table for each need
            // ? Table animals needs values and status rows
            table.push(
              // Row for Food need
              ["1", "🍲 Food", `${needs.food}`, `${getEmoji(needs.food)}`],
              // Row for Energy need
              [
                "2",
                "🔋 Energy",
                `${needs.energy}`,
                `${getEmoji(needs.energy)}`
              ],
              // Row for Toilet need
              [
                "3",
                "🚽 Toilet",
                `${needs.toilet}`,
                `${getEmoji(needs.toilet)}`
              ],
              // Row for Fun need
              ["4", "🎉 Fun", `${needs.fun}`, `${getEmoji(needs.fun)}`],
              // Row for Hygiene need
              [
                "5",
                "🚿 Hygiene",
                `${needs.hygiene}`,
                `${getEmoji(needs.hygiene)}`
              ],
              // Row for Social need
              ["6", "🤝 Social", `${needs.social}`, `${getEmoji(needs.social)}`]
            );
            console.log(`Current needs of your pet ${animalEmoji} ${name}: `); // Displaying current pet's needs
            // ? Table printed on terminal
            console.log(table.toString()); // Outputting the table of needs
            // Checking if all needs are above 85
            if (Object.values(needs).every((need) => need > 85)) {
              console.log(colors.bold("\n🌟 You are a great parent! 🌟")); // Complimenting the player
            }
            // Create a table for authomatic parameters
            // ? Table affected automatic needs
            const additionalTable = new Table({
              head: [
                colors.bold.bgYellow("Parameter"), // Column header for Parameter with yellow background
                colors.bold.bgYellow("Value"), // Column header for Value with yellow background
                colors.bold.bgYellow("Status") // Column header for Status with yellow background
              ],
              colWidths: [15, 15, 10] // Setting column widths for Parameter, Value, and Status
            });
            // Adding rows to the additionalTable
            // ? Table values affected automatic needs
            additionalTable.push(
              ["🎭 Mood", `${mood.toFixed(2)}`, `${getEmoji(mood)}`], // Row for Mood parameter
              ["🩺 Health", `${health}`, `${getEmoji(health)}`], // Row for Health parameter
              ["👵 Age", `${age} days`, `${getAgeEmoji(age)}`], // Row for Age parameter
              ["💰 Points", `${points}`, `${getPointsEmoji(points)}`] // Row for Points parameter
            );
            // Outputting the additionalTable in string format
            // ? Table printed on terminal
            console.log(additionalTable.toString());
          }
          checkAndTriggerRandomEvent();
          // Function to check if any need is below 25
          // ? Function check needs
          function checkNeeds() {
            for (const need in needs) {
              if (needs[need] < 25) {
                console.log(
                  colors.bgRed.bold(
                    `Warning! ${need} is below 25! ${getEmoji(needs[need])}`
                  )
                );
              }
            }
          }
          // Function to decrease needs every second
          // ? Function decrease needs
          function decreaseNeeds() {
            for (const need in needs) {
              needs[need] -= 1;
              if (needs[need] <= 0) {
                // Checks and prints why animal died
                console.log(
                  colors.bgRed.black.bold(
                    `Your pet ${name} has died at ${age} days due to your neglect, your pet needed ${need}! 💀`
                  )
                );
                // Clear the interval associated with decreasing attributes (e.g., hunger, happiness)
                clearInterval(decreaseInterval);
                // Clear the interval associated with health-related updates
                clearInterval(healthInterval);
                // Clear the interval associated with age-related updates
                clearInterval(ageInterval);
                // Clear the interval associated with health bonus updates (if applicable)
                clearInterval(healthBonusInterval);
                // Close the readline interface, terminating the program or process
                rl.close();
              }
            }
            checkNeeds();
            displayNeeds();
          }

          // Function to decrease health every second if needs are low
          // ? Function decrease health
          function decreaseHealth() {
            // Check if any need is below 50
            if (Object.values(needs).some((need) => need < 50)) {
              health -= 1; // Decrease health by 1
              if (health <= 0) {
                // If health drops to 0 or below, pet dies
                console.log(
                  colors.bgRed.black.bold(
                    `Your pet ${name} has died due to poor health! 💀`
                  )
                );
                // Optionally, you may want to clear intervals and end the game here
                // Clear the interval associated with decreasing attributes (e.g., hunger, happiness)
                clearInterval(decreaseInterval);
                // Clear the interval associated with health-related updates
                clearInterval(healthInterval);
                // Clear the interval associated with age-related updates
                clearInterval(ageInterval);
                // Clear the interval associated with health bonus updates (if applicable)
                clearInterval(healthBonusInterval);
                // Close the readline interface, terminating the program or process
                rl.close(); // Close readline interface
                return;
              }
            }
          }

          // Function to increase age by 1 day every 10 seconds
          // ? Function increase age
          function increaseAge() {
            age += 1;
            checkAndTriggerRandomEvent(); // Checks if 7 days past for randomal events
            if (age % 100 === 0) {
              // Check if age reached to a century
              points += 30; // Add 30 points as a gift for a century
              console.log(
                colors.bgMagenta.bold.white(
                  "Congratulations!✨ Your pet lives over a century!🎊 "
                )
              );
            }
            if (age % 10 === 0) {
              // Checks id age had past a decade
              points += 5; // Bonus of 5 points if reached a decade
              console.log(
                `🎈 Happy Birthday to ${name}!🥳 ${name} is now ${age} days old! 🎈🎉`
              );
            }
          }

          // Function to increase health based on points
          // ? Function increase health
          function increaseHealth() {
            // Increase health if points are sufficient and health is not at maximum
            if (points > 30 && health <= 90) {
              health += 10;
              points -= 20;
            }
            // Check health status and inform the user for every change
            if (health >= 90) {
              // Health status: Healthy and strong
              console.log(
                colors.white.bold("Your pet is healthy and strong 💪")
              );
            } else if (health >= 70 && health < 90) {
              // Health status: Attention required (mild)
              console.log(colors.white.bold("Attention required 🤧"));
            } else if (health >= 50 && health < 70) {
              // Health status: Attention required, pet is getting sick
              console.log(
                colors.white.bold(
                  "Attention required - your pet is getting sick 🥴"
                )
              );
            } else if (health >= 25 && health < 50) {
              // Health status: Pet is sick, take actions faster
              console.log(
                colors.black.bgYellow.bold(
                  "Your pet is sick. Please take actions faster 🤢"
                )
              );
            } else if (health > 0 && health < 25) {
              // Health status: Pet is dying
              console.log(
                colors.bgRed.bold.black("😩 Your pet is dying!!! 😵")
              );
            }
            // Ensure points never go negative
            if (points < 0) {
              points = 0;
            }
          }

          // Start decreasing needs, health and increasing age
          // Start decreasing needs (e.g., hunger, happiness) every 3 seconds
          const decreaseInterval = setInterval(decreaseNeeds, 3000);
          // Start checking health every 3 seconds
          const healthInterval = setInterval(decreaseHealth, 3000);
          // Start increasing health periodically every 3 seconds (health bonus)
          const healthBonusInterval = setInterval(() => {
            increaseHealth();
          }, 3000);
          // Start increasing age every 10 seconds
          const ageInterval = setInterval(increaseAge, 10000);
          // Function to display menu and handle user input
          // ? Function display menu
          function displayMenu() {
            rl.question("Enter your choice: \n", (action) => {
              switch (action.trim()) {
                case "1":
                  // Option 1: Feed the animal
                  needs.food = Math.min(needs.food + 30, 100);
                  needs.toilet = Math.max(needs.toilet - 15, 0);
                  needs.energy = Math.max(needs.energy - 5, 0);
                  points++;
                  if (needs.food === 100) {
                    points++;
                  }
                  console.log(colors.bgCyan.bold(`${name} has been fed.😋`));
                  break;
                case "2":
                  // Option 2: Animal takes a nap
                  needs.energy = Math.min(needs.energy + 30, 100);
                  needs.toilet = Math.max(needs.toilet - 10, 0);
                  needs.food = Math.max(needs.food - 5, 0);
                  needs.hygiene = Math.max(needs.hygiene - 5, 0);
                  needs.social = Math.max(needs.social - 10, 0);
                  points++;
                  if (needs.energy === 100) {
                    points++;
                  }
                  console.log(colors.bgBlue.bold(`${name} has taken a nap.💤`));
                  break;
                case "3":
                  // Option 3: Animal uses the toilet
                  needs.toilet = Math.min(needs.toilet + 30, 100);
                  needs.food = Math.max(needs.food - 5, 0);
                  needs.hygiene = Math.max(needs.hygiene - 15, 0);
                  points++;
                  if (needs.toilet === 100) {
                    points++;
                  }
                  console.log(
                    colors.bgGreen.bold(`${name} has used the toilet.💩`)
                  );
                  break;
                case "4":
                  // Option 4: Animal has fun
                  needs.fun = Math.min(needs.fun + 30, 100);
                  needs.energy = Math.max(needs.energy - 15, 0);
                  needs.toilet = Math.max(needs.toilet - 10, 0);
                  needs.food = Math.max(needs.food - 15, 0);
                  points++;
                  if (needs.fun === 100) {
                    points++;
                  }
                  console.log(
                    colors.bgMagenta.bold(`${name} is having fun.🎡`)
                  );
                  break;
                case "5":
                  // Option 5: Animal takes a shower
                  needs.hygiene = Math.min(needs.hygiene + 30, 100);
                  needs.energy = Math.min(needs.energy + 5, 100);
                  needs.toilet = Math.min(needs.toilet + 5, 100);
                  points++;
                  if (needs.hygiene === 100) {
                    points++;
                  }
                  console.log(
                    colors.bgBlue.bold(`${name} has taken a shower.💦`)
                  );
                  break;
                case "6":
                  // Option 6: Animal socializes
                  needs.social = Math.min(needs.social + 20, 100);
                  needs.fun = Math.min(needs.fun + 10, 100);
                  needs.energy = Math.max(needs.energy - 20, 0);
                  needs.toilet = Math.max(needs.toilet - 10, 0);
                  needs.food = Math.max(needs.food - 10, 0);
                  console.log(
                    colors.bgMagenta.bold(`${name} is socializing.🧑‍🤝‍🧑`)
                  );
                  points++;
                  if (needs.social === 100) {
                    points++;
                  }
                  break;
                case "9":
                  // Option 9: Quit the game
                  // Stop all interval timers
                  clearInterval(decreaseInterval);
                  clearInterval(healthInterval);
                  clearInterval(ageInterval);
                  clearInterval(healthBonusInterval);
                  // Display exit message
                  console.log(colors.rainbow("Exiting the game...Bye bye"));
                  console.log("👋 🙋 👋");
                  // Close readline interface after 3 seconds delay
                  setTimeout(() => {
                    rl.close();
                  }, 3000);
                  return;
                default:
                  // Invalid choice
                  console.log(
                    "Invalid choice! Please enter a number between 1 and 6, or 9 to quit."
                  );
              }
              setTimeout(() => {
                // Display current needs after 3 seconds
                displayNeeds();
                // If action is not "9", display the menu again after 3 seconds
                if (action.trim() !== "9") {
                  displayMenu();
                }
              }, 3000);
            });
          }
          // Initial display of needs and starting the game
          displayNeeds();
          displayMenu();
        });
      }
    );
  });
}
// Start the game
startGame();
// Close readline interface on 'close' event
rl.on("close", () => {
  // Display a thank you message when the game is closed
  console.log(colors.bgWhite.magenta.bold("Thank you for playing! 🥰"));
  process.exit(0);
  // Exit the process gracefully
});
