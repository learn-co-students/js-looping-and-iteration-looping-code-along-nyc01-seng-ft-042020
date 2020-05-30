// Code your solutions in this file
const writeCards = names => {
  const arr = [];
  for (let i = 0; i < names.length; i += 1) {
    arr.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return arr;
};

const countDown = num => {
  for (let i = 0; i <= num; i += 1) {
    console.log(num - i);
  }
};
