const faker = require('faker');
const getRandomElement = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };
  
  const generateRandomMessage = () => {
    const starters = [
      "I love you more",
      "Lily loves you most",
      "Tom Sandoval is a liar",
      "You're a foot fetishist",
      "You're a horse girl at heart",
    ];
  
    const middles = [
      "and you have impeccable taste",
      "and can't mix hot and cold foods",
      "and bequeth very smelly farts",
      "and you give the best gifts",
      "and you make me happy",
    ];
  
    const endings = [
      "always",
      "Sharon!",
      "despite being a colonialist",
      "despite you loving feet",
      "because you're a strong independent woman who don't need no man",
    ];
  
    const starter = getRandomElement(starters);
    const middle = getRandomElement(middles);
    const ending = getRandomElement(endings);
  
    const randomMessage = `${starter} ${middle} ${ending}`;
    return randomMessage;
  };
  
  console.log(generateRandomMessage());