const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let storedValue1 = "";
let storedValue2 = "";
let storedValue3 = "";
let storedValue4 = "";
let storedValue5 = "";
let storedValue6 = "";
let storedValue7 = "";

const question1 = () => {
  return new Promise((resolve) => {
    rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
      storedValue1 += answer;
      resolve();
    });
  });
};

const question2 = () => {
  return new Promise((resolve) => {
    rl.question('q2 What\'s an activity you like doing? ', (answer) => {
      storedValue2 += answer;
      resolve();
    });
  });
};

const question3 = () => {
  return new Promise((resolve) => {
    rl.question('What do you listen to while doing that?', (answer) => {
      storedValue3 += answer;
      resolve();
    });
  });
};

const question4 = () => {
  return new Promise((resolve) => {
    rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
      storedValue4 += answer;
      resolve();
    });
  });
};

const question5 = () => {
  return new Promise((resolve) => {
    rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
      storedValue5 += answer;
      resolve();
    });
  });
};

const question6 = () => {
  return new Promise((resolve) => {
    rl.question('Which sport is your absolute favourite?', (answer) => {
      storedValue6 += answer;
      resolve();
    });
  });
};

const question7 = () => {
  return new Promise((resolve) => {
    rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
      storedValue7 += answer;
      resolve();
    });
  });
};

const main = async () => {
  await question1();
  await question2();
  await question3();
  await question4();
  await question5();
  await question6();
  await question7();
  console.log(`${storedValue1} loves ${storedValue2} and listens to ${storedValue3} while doing it. Their favorite meal is ${storedValue4} and they love to eat ${storedValue5} with it. Their favorite sport is ${storedValue6} and their superpower is:${storedValue7}. `);
  rl.close();
};

main();