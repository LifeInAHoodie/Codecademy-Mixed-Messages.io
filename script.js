const getRandomElement = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };
  
  const generateRandomMessage = () => {
    const starters = [
      "Believe in yourself",
      "Stay positive",
      "Dream big",
      "Embrace challenges",
      "Focus on your goals",
    ];
  
    const middles = [
      "and you will succeed",
      "and great things will happen",
      "and you'll overcome any obstacle",
      "and you'll find happiness",
      "and you'll make a difference",
    ];
  
    const endings = [
      "no matter what",
      "one step at a time",
      "in the face of adversity",
      "with passion and determination",
      "because you're capable",
    ];
  
    const starter = getRandomElement(starters);
    const middle = getRandomElement(middles);
    const ending = getRandomElement(endings);
  
    const randomMessage = `${starter} ${middle} ${ending}`;
    return randomMessage;
  };
  
  console.log(generateRandomMessage());


/*
I love you more
Lily loves you the most
Tom Sandoval is a Liar!
You're a foot fetishist
*/