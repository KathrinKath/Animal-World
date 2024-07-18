# 🐀🐖 Animals World - Tamagochi Game 🐕🐈

## Description

Welcome to Animals World, a virtual pet simulation game where you can choose an animal companion and take care of its needs to keep it happy and healthy.
I made this project based on my Java script skills I gained until now, and combined my experience with my real pets and a digital world.
The projects is documented with comments in order to make further developments easier when I will combine it with HTML and CSS.
Have fun 🪅

## Code Overview

### General declarations for interactive game design.

- Main menu allowing the selection of one out of 10 different animals.
- Needs management system with automatic decrease over time.
- Health management based on needs.
- You have to wait at least 2 seconds between each action you take.
- When your action has been calculated, you will be notify about the need you just filled.
- Age progression and birthday celebrations.
- Functionality Highlights
- Each need (food, energy, etc.) affects others when managed.
- Health deteriorates if needs are not met adequately.
- Points system rewards fulfilling needs and birthdays.
- When you have more than 30 points and your pets health is under 90, your pet will "buy" 10 health and pay 15
  points for that.
- Continuous age progression and health updates.
- When your pet is happy you will get a compliment.
- However, if your pet is neglected or dying, you may be reprimanded.

## Getting Started

To start the game:

1. Clone this repository.
2. Install dependencies with npm install.
3. Install the color package via the terminal of the game: sudo npm install colors - the game will not run without it.
4. install the table element for better view in the terminal: sudo npm install cli-table3
5. Install play-sound addition to hear the sounds of the game: sudo npm install play-sound
6. Run the game with node game.js (node Tamagochi.js).
7. Leave the game by clicking "Ctrl + z" inside the terminal.

## How to Play

1. Choose an animal by entering a number between 0 to 9.
2. Name your pet - you can use special characters and numbers in order to create a uniqe name and benefit the advantage of a virtual life.
3. Manage your pet's needs using the menu options:
   ### Feed 🍲, Energy 🔋, Toilet 🚽, Fun 🎉, Hygiene 🚿 and Socialize 🤝.
4. Monitor mood, health, age, and points.
5. You will see on the monitor 2 main tables which will indicate the status of the needs of your pet.
6. In additoin to the table, you will see comments regarding the way you take care of the pet - you can be an awesome parent but also a neglecting one.
7. Keep needs balanced to prevent health decline.
8. Celebrate birthdays every 10 days and get 5 points bonus for each birthday.
9. Get a speacial reward of 30 points every century your pet will celebrate.
10. Age is unlimited, enjoy all the benefit of a virtual pet.
11. Weight of your pet will be affected by its age and food, pay attention not to overfeed it and dont let it stay hungry.
12. Every 7 days, a random even will happen and affect your pet, positivly or nagativly. Be prepared to fill the needs - the chage can be drastic and can affects all the paramethers.
13. Note - without taking any action from the moment you began to play, your pets life expectancy will be maximum 30 days.

### The first step of the game is to choose an animal and give it a name. Here you can see all the options:

| Animal  | Emoji | Number |
| ------- | ----- | ------ |
| Dragon  | 🐉    | 0      |
| Dog     | 🐶    | 1      |
| Cat     | 🐱    | 2      |
| Bunny   | 🐰    | 3      |
| Mouse   | 🐭    | 4      |
| Pig     | 🐷    | 5      |
| Chick   | 🐥    | 6      |
| Monkey  | 🐵    | 7      |
| Shark   | 🦈    | 8      |
| Unicorn | 🦄    | 9      |

## Needs and Parameters

| Need    | Emoji | Description                                               | Range       |
| ------- | ----- | --------------------------------------------------------- | ----------- |
| Food    | 🍲    | Satisfy hunger                                            | 0 - 100     |
| Energy  | 🔋    | Provide rest                                              | 0 - 100     |
| Toilet  | 🚽    | Manage bodily functions                                   | 0 - 100     |
| Fun     | 🎉    | Engage in enjoyable activities                            | 0 - 100     |
| Hygiene | 🚿    | Maintain cleanliness                                      | 0 - 100     |
| Social  | 🤝    | Interact with others                                      | 0 - 100     |
| Mood    | 🎭    | Average of all needs, indicates overall happiness         | 0 - 100     |
| Health  | 🩺    | Indicates overall health                                  | 0 - 100     |
| Points  | 💰    | Collected points to increase health                       | 0 and above |
| Age     | 👩‍🦳    | Days since the pet's birth                                | 0 and above |
| Weight  | 🏋️‍♂️    | Age + 1, gained by overfeeding or decreased when starving | 1 and above |

## Needs Management

| Emoji | Action    | Description                                                | Food | Energy | Toilet | Fun | Hygiene | Social |
| ----- | --------- | ---------------------------------------------------------- | ---- | ------ | ------ | --- | ------- | ------ |
| 😋    | Feed      | Increases food, decreases energy, increases toilet urgency | +30  | -5     | -10    | -   | -       | -      |
| 💤    | Nap       | Increases energy, decreases food, hygiene, social          | -5   | +30    | -5     | +5  | -5      | -      |
| 💩    | Toilet    | Increases toilet, decreases food, hygiene                  | -5   | -      | +30    | -   | -10     | -      |
| 🎡    | Play      | Increases fun, decreases energy, food, toilet              | -10  | -10    | -5     | +30 | -5      | - +10  |
| 💦    | Shower    | Increases hygiene, energy, toilet                          | -    | +5     | +5     | +5  | +30     | -      |
| 🧑‍🤝‍🧑    | Socialize | Increases social, decreases energy, food, toilet           | -    | -10    | -5     | +10 | -       | +30    |

## Weight Status and Effects

| Status      | Emoji | Parameters                             | Effects                                      |
| ----------- | ----- | -------------------------------------- | -------------------------------------------- |
| Overweight  | 🐽    | weight >= age + 11                     | `health--`, `hygiene--`, `energy--`, `fun--` |
| Normal      | 💯    | weight < age + 11 && weight > age - 10 | `health++`, `social++`, `energy++`, `fun++`  |
| Underweight | ❗    | weight <= age - 10                     | `health--`, `energy--`                       |

## Calculations

### Mood: Average of all needs and health.

### Health: Decreases if needs are neglected (under 50).

### Points: Collected to increase health every 30 points.

### Age: Your pet will get older by 1 day every 10 seconds.

### Weight: The weight of your pet is a combination of its age and hunger status, including overfeeding.

## Random Events Table

| Even Number | Event Emoji | Name of the Event                | Affects                                                                  |
| ----------- | ----------- | -------------------------------- | ------------------------------------------------------------------------ |
| 1           | 💘          | Pet is in love                   | social: +100, fun: +20                                                   |
| 2           | 😭          | Pet lost a friend                | social: -20, fun: -20                                                    |
| 3           | 🥮          | Pet gets a snack                 | food: +10, weight: +1                                                    |
| 4           | 🤢          | Pet is sick                      | energy: -20, fun: -10, hygiene: -5                                       |
| 5           | 🌍          | Pet has travelled                | social: +20, fun: +20, energy: -5                                        |
| 6           | 🍻          | Pet visited a friend             | social: +20, fun: +20                                                    |
| 7           | 🧸          | Pet has a new toy                | fun: +20, social: +10                                                    |
| 8           | 💉          | Pet has been vaccinated          | health: +30, points: -10                                                 |
| 9           | 💰          | Pet found a treasure             | points: +30, fun: +20                                                    |
| 10          | 🩺          | Pet Went to the Vet              | health: +20, points: -10                                                 |
| 11          | 🤼          | Pet Found a Friend               | social: +50, fun: +20                                                    |
| 12          | 🛁          | Pet Got a Bath                   | health: +10, social: +10, hygiene: +100                                  |
| 13          | 🏖           | Pet Played in the Mud            | health: -5, social: +10, hygiene: -40, fun: +30                          |
| 14          | 👹          | Pet Had a Bad Dream              | social: -5, fun: -10                                                     |
| 15          | 🏞           | Pet Discovered a New Place       | social: +20, points: +10                                                 |
| 16          | 🌧           | Pet Played in the Rain           | fun: +30, hygiene: -10                                                   |
| 17          | 🏝           | Pet Found a Cozy Spot            | energy: +20, fun: +15                                                    |
| 18          | 🐝          | Pet Got Stung by a Bee           | health: -10, fun: -10                                                    |
| 19          | 🌳          | Pet Visited a Park               | social: +25, fun: +25                                                    |
| 20          | 🤡          | Pet Attended a Pet Show          | social: +30, fun: +20, points: -10, energy: -15                          |
| 21          | 🌞          | Pet Had a Sunny Day              | energy: +10, fun: +10                                                    |
| 22          | 🎮          | Pet Learned a New Game           | fun: +25, points: +15                                                    |
| 23          | 💊          | Pet have got a medical treatment | health: +20, points: -5                                                  |
| 24          | 🌿          | Pet smoked marijuana             | health: +100, fun: +100, energy: -10                                     |
| 25          | 🍄          | Pet ate a mushroom               | health: -5, fun: +30, energy: +10                                        |
| 26          | ❤️‍🩹          | Pet is heartbroken               | health: -5, fun: -10, social: -20                                        |
| 27          | 💅          | Pet enjoyed a cosmetic treatment | health: +10, points: -5, fun: +20, social: +15, hygiene: +20             |
| 28          | 🎅          | Its CHRISTMAS!!                  | fun: +30, social: +30, hygiene: +20, food: +20, weight: +1               |
| 29          | 🍔          | Pet enjoyed eating some junkfood | health: -5, fun: +20, weight: +1                                         |
| 30          | 🍭          | Pet enjoyed eating some sweets   | health: -5, fun: +20, social: +5, weight: +1                             |
| 31          | 🥂          | Pet attended an event            | health: +10, energy: -10, fun: +20, social: +15, hygiene: +20, food: +20 |
| 32          | 🏆          | Pet won a competition! Bravo!    | social: +10, points: +15, fun: +30, social: +25                          |
| 33          | 🩹          | Pet is injured, auch!            | health: -10, fun: -10, hygiene: -10                                      |
| 34          | ☕          | Pet hosts a good friend          | fun: +20, social: +25                                                    |

# Development History

### Version 17.07.2024 14:30

## Latest updates: (15-18.07.2024)

- [x] Add 10 different animals to play with.
- [x] Add instrutions for the game.
- [x] Add an option to name the animal.
- [x] Add needs pramethers affected directly by the user: Food, Energie, Hygiene, Fun, Social and Energy.
- [x] Add needs paramether affected by the overall status of the animal and cant be changed by the user: Mood, Health, Age, Points.
- [x] Add birthdays for the animal.
- [x] Add counter for the points according to different events.
- [x] Health paramether will be affected if the animal is not neglected.
- [x] Mood will be the average of all paramethers.
- [x] If one of the needs (automatic or user choinces) is 0, pet will die.
- [x] Add comments to sum up the status of the pets every 3 seconds.
- [x] Add warnings if the need is under 25.
- [x] Arrange the Needs table in a table.
- [x] Arrange pet selection in a table.
- [x] Add emojis to points and age.
- [x] Weight as a new paramether can affect the health parameter.
- [x] Randomal evens happening during the game.

### Internal info - future improvments and development

- [ ] Connect sounds to the game.
- [ ] Add sub-menu to each one of the needs giving the user more options.
- [ ] Create small games to play with the pet.
- [ ] Add a language.
- [ ] Add levels and difficulties.

### Internal info - functions order:

## Functions Tree 18.07.2024

- startGame

* - calculateMood
* - displayNeeds
  * - checkAndTriggerRandomEvent
  * - checkNeeds
  * - getWeightAffects
  * - checkWeightStatus
* - decreaseNeeds
  * - checkNeeds
  * - displayNeeds
* - decreaseHealth
* - increaseAge
  * - checkAndTriggerRandomEvent
* - increaseHealth
* - isValidName
* - getEmoji
* - getAgeEmoji
* - getPointsEmoji
* - getWeightEmoji
* - checkWeightStatus

### 18.07.2024

startGame
└── calculateMood
└── displayNeeds
└── checkAndTriggerRandomEvent
└── checkNeeds
└── getWeightAffects
└── checkWeightStatus
└── decreaseNeeds
└── checkNeeds
└── displayNeeds
└── decreaseHealth
└── increaseAge
└── checkAndTriggerRandomEvent
└── increaseHealth
└── isValidName
└── getEmoji
└── getAgeEmoji
└── getPointsEmoji
└── getWeightEmoji
└── checkWeightStatus

## Explanation:

- startGame: Entry point of the game logic.
- calculateMood: Calculates and returns the mood of the pet.
- displayNeeds: Displays current needs and additional parameters of the pet.
- checkAndTriggerRandomEvent: Checks if a random event should occur and triggers it.
- checkNeeds: Checks if any needs are critically low and displays warnings.
- getWeightAffects: Determines and applies effects based on weight status.
- checkWeightStatus: Checks the weight status of the pet.
- decreaseNeeds: Decreases all needs of the pet periodically.
- checkNeeds: Checks if any needs are critically low and displays warnings.
- displayNeeds: Updates and displays the current needs of the pet.
- decreaseHealth: Decreases the health of the pet periodically based on needs.
- increaseAge: Increases the age of the pet periodically.
- checkAndTriggerRandomEvent: Checks if a random event should occur and triggers it.
- increaseHealth: Increases the health of the pet periodically based on points.
- isValidName: Checks if a given name is valid (contains only letters).
- getEmoji: Returns an emoji based on a value.
- getAgeEmoji: Returns an emoji based on the age of the pet.
- getPointsEmoji: Returns an emoji based on the points collected.
- getWeightEmoji: Returns an emoji based on the weight status.
- checkWeightStatus: Determines the weight status of the pet.

## Functions Trees 17.07.2024

- **startGame**

  - **isValidName**
  - **getEmoji**
  - **startGame**
    - `rl.question` (Initial choice)
      - Nested `rl.question` (Name input)
        - **displayNeeds**
          - **calculateMood**
          - **getEmoji**
        - **checkNeeds**
        - **decreaseNeeds**
          - **displayNeeds**
          - **checkNeeds**
          - **getEmoji**
        - **decreaseHealth**
        - **increaseAge**
        - **increaseHealth**
        - **displayMenu**
          - **displayNeeds**
          - **checkNeeds**
          - **getEmoji**
      - **clearInterval**
        - `decreaseInterval`
        - `healthInterval`
        - `ageInterval`
        - `healthBonusInterval`
  - `rl.on ('close' event)`

### 17.07.2024

startGame
├── isValidName
├── getEmoji
└── startGame
├── rl.question (Initial choice)
│ └── rl.question (Name input)
│ ├── displayNeeds
│ │ ├── calculateMood
│ │ └── getEmoji
│ ├── checkNeeds
│ ├── decreaseNeeds
│ │ ├── displayNeeds
│ │ ├── checkNeeds
│ │ └── getEmoji
│ ├── decreaseHealth
│ ├── increaseAge
│ ├── increaseHealth
│ └── displayMenu
│ ├── displayNeeds
│ ├── checkNeeds
│ └── getEmoji
└── clearInterval
├── decreaseInterval
├── healthInterval
├── ageInterval
└── healthBonusInterval
rl.on ('close' event)

## Credits

### Developed by Kathrin Peled

## 🐲 Draculady 🧛‍♀️
