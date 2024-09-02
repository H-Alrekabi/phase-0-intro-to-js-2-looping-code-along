// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }

  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}

wrapGifts(gifts);

const people = ["Guadalupe", "Ollie", "Aki"];

function writeCards(people) {
    const surprise = [...people];
    for (let i = 0; i < surprise.length; i++) {
        surprise.splice([i], 1, `Thank you, ${surprise[i]}, for the wonderful surprise gift!`)
     console.log(surprise)
    }  
    return surprise;  
debugger;
}

//const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function countDown(num) {
    let i = 0;
    while (i <= num) {
        console.log(num);
        num--;
      //  return i;
    }
}
