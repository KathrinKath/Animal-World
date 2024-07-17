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
11. Every 7 days, a random even will happen and affect your pet, positivly or nagativly. Be prepared to fill the needs - the chage can be drastic.

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

| Need    | Emoji | Description                                       | Range       |
| ------- | ----- | ------------------------------------------------- | ----------- |
| Food    | 🍲    | Satisfy hunger                                    | 0 - 100     |
| Energy  | 🔋    | Provide rest                                      | 0 - 100     |
| Toilet  | 🚽    | Manage bodily functions                           | 0 - 100     |
| Fun     | 🎉    | Engage in enjoyable activities                    | 0 - 100     |
| Hygiene | 🚿    | Maintain cleanliness                              | 0 - 100     |
| Social  | 🤝    | Interact with others                              | 0 - 100     |
| Mood    | 🎭    | Average of all needs, indicates overall happiness | 0 - 100     |
| Health  | 🩺    | Indicates overall health                          | 0 - 100     |
| Points  | 💰    | Collected points to increase health               | 0 and above |
| Age     | 👩‍🦳    | Days since the pet's birth                        | 0 and above |

## Needs Management

| Emoji | Action    | Description                                                | Food | Energy | Toilet | Fun | Hygiene | Social |
| ----- | --------- | ---------------------------------------------------------- | ---- | ------ | ------ | --- | ------- | ------ |
| 😋    | Feed      | Increases food, decreases energy, increases toilet urgency | +30  | -5     | -15    | -   | -       | -      |
| 💤    | Nap       | Increases energy, decreases food, hygiene, social          | -5   | +30    | -10    | -   | -5      | -10    |
| 💩    | Toilet    | Increases toilet, decreases food, hygiene                  | -5   | -10    | +30    | -   | -15     | -      |
| 🎡    | Play      | Increases fun, decreases energy, food, toilet              | -15  | -15    | -10    | +30 | -       | -      |
| 💦    | Shower    | Increases hygiene, energy, toilet                          | -5   | +5     | -      | -   | +30     | -      |
| 🧑‍🤝‍🧑    | Socialize | Increases social, decreases energy, food, toilet           | -10  | -20    | -10    | +10 | -       | +20    |

## Calculations

### Mood: Average of all needs and health.

### Health: Decreases if needs are neglected (under 50).

### Points: Collected to increase health every 30 points.

### Age: Your pet will get older by 1 day every 10 seconds.

## Randomal events table:

| Name                       | Description                                                                                                           | Affect                                              | Event Emoji |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ----------- |
| Pet is in love             | Increases social need to 100                                                                                          | { social: 100 }                                     | 💘          |
| Pet lost a friend          | Decreases social need by 20                                                                                           | { social: -20 }                                     | 😭          |
| Pet gets a snack           | Gives 10 points for the food need                                                                                     | { food: +10 }                                       | 🥮          |
| Pet is sick                | Decreases energy need by 20 and fun by 10                                                                             | { energy: -20, fun: -10 }                           | 🤢          |
| Pet has travelled          | Increases social and fun needs by 20                                                                                  | { social: +20, fun: +20 }                           | 🌍          |
| Pet visited a friend       | Increases social and fun needs by 20                                                                                  | { social: +20, fun: +20 }                           | 🍻          |
| Pet has a new toy          | Increases fun need by 20                                                                                              | { fun: +20 }                                        | 🧸          |
| Pet has been vaccinated    | Increases health need by 30 and costs 10 points                                                                       | { health: +30, points: -10 }                        | 💉          |
| Pet found a treasure       | Increases points by 30                                                                                                | { points: +30 }                                     | 💰          |
| Pet Went to the Vet        | Your pet had a check-up at the vet. It costs 10 points and increases the health by 20                                 | { health: +20, points: -10 }                        | 🩺          |
| Pet Found a Friend         | Your pet made a new friend! Social need increased by 50                                                               | { social: +50 }                                     | 🤼          |
| Pet Got a Bath             | Your pet got a refreshing bath. Increases hygiene need to 100 and increases health and social needs by 10             | { health: +10, social: +10, hygiene: 100 }          | 🛁          |
| Pet Played in the Mud      | Your pet played in the mud. It decreases the hygiene need by 40 and health by 5, increases social by 10 and fun by 30 | { health: -5, social: +10, hygiene: -40, fun: +30 } | 🏖           |
| Pet Had a Bad Dream        | Your pet had a scary dream. Decreases fun by 10 and social by 5                                                       | { social: -5, fun: -10 }                            | 👹          |
| Pet Discovered a New Place | Your pet explored a new area. You gained 10 points and increased social need by 20                                    | { social: +20, points: +10 }                        | 🏞           |
| Pet Played in the Rain     | Increases fun by 30 but decreases hygiene by 10                                                                       | { fun: +30, hygiene: -10 }                          | 🌧           |
| Pet Found a Cozy Spot      | Increases energy by 20                                                                                                | { energy: +20 }                                     | 🏝           |
| Pet Got Stung by a Bee     | Decreases health by 10 and fun by 10                                                                                  | { health: -10, fun: -10 }                           | 🐝          |
| Pet Visited a Park         | Increases social and fun by 25                                                                                        | { social: +25, fun: +25 }                           | 🌳          |
| Pet Attended a Pet Show    | Increases social by 30 and fun by 20, it costs 10 points and decreases the energy by 15                               | { social: +30, fun: +20, points: -10, energy: -15 } | 🤡          |
| Pet Had a Sunny Day        | Increases energy and fun by 10                                                                                        | { energy: +10, fun: +10 }                           | 🌞          |
| Pet Learned a New Game     | Increases fun by 25 and points by 15                                                                                  | { fun: +25, points: +15 }                           | 🎮          |

# Development History

### Version 17.07.2024 14:30

## Latest updates: (15-16.07.2024)

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
- [x] Randomal evens happening during the game. For example:

* In love
* Sick
* Getting a snack
* Travel in nature
* Visitors
* New toy

### Internal info - future improvments and development

- [ ] Connect sounds to the game.
- [ ] Add sub-menu to each one of the needs giving the user more options.
- [ ] Create small games to play with the pet.
- [ ] Weight as a new paramether can affect the health parameter.
- [ ] Add a language.
- [ ] Add levels and difficulties.

### Internal info - functions order:

## Functions Tree

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

  ## Functions Tree

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
