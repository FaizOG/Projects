// I am making using an array to store the quotes, and then I will use Math.random() to select a random quote from the array and display it on the page when the button is clicked.

let quote = document.getElementById("quote");
let btn = document.getElementById("getQuote");

let quotes = [
  {
    "quote": "Out beyond ideas of wrongdoing and rightdoing there is a field. I'll meet you there. When the soul lies down in that grass the world is too full to talk about.",
    "author": "Rumi"
  },
  {
    "quote": "Walk as if you are kissing the Earth with your feet.",
    "author": "Thich Nhat Hanh"
  },
  {
    "quote": "Man suffers only because he takes seriously what the gods made for fun.",
    "author": "Alan Wilson Watts"
  },
  {
    "quote": "Learning to let go should be learned before learning to get. Life should be touched, not strangled. You’ve got to relax, let it happen at times, and at others move forward with it.",
    "author": "Ray Bradbury"
  },
  {
    "quote": "Life is a journey. Time is a river. The door is ajar",
    "author": "Jim Butcher"
  },
  {
    "quote": "I have lived with several Zen masters -- all of them cats.",
    "author": "Eckhart Tolle"
  },
  {
    "quote": "It is simply sitting silently, witnessing the thoughts passing before you... you are not the mind, you are the witness.",
    "author": "Osho"
  },
  {
    "quote": "It is the power of the mind to be unconquerable.",
    "author": "Seneca"
  },
  {
    "quote": "The truth knocks on the door and you say, 'Go away, I'm looking for the truth,' and so it goes away. Puzzling.",
    "author": "Robert M. Pirsig"
  },
  {
    "quote": "The way out is through the door. Why is it that no one will use this method?",
    "author": "Confucius"
  },
  {
    "quote": "Life is more or less a lie, but then again, that's exactly the way we want it to be.",
    "author": "Bob Dylan"
  },
  {
    "quote": "You must only concentrate on the next step, the next breath, the next stroke of the broom.",
    "author": "Michael Ende"
  },
  {
    "quote": "You are the big bang, the original force of the universe, coming on as whoever you are.",
    "author": "Alan Watts"
  },
  {
    "quote": "Not being tense but ready. Not thinking but not dreaming. Not being set but flexible.",
    "author": "Bruce Lee"
  },
  {
    "quote": "In the beginner’s mind there are many possibilities, but in the expert’s there are few.",
    "author": "Shunryu Suzuki"
  },
  {
    "quote": "If you just sit and observe, you will see how restless your mind is... over time it does calm.",
    "author": "Walter Isaacson"
  },
  {
    "quote": "Too lazy to be ambitious, I let the world take care of itself.",
    "author": "Ryōkan"
  },
  {
    "quote": "Some people live as though they are already dead.",
    "author": "Thich Nhat Hanh"
  },
  {
    "quote": "Like vanishing dew, a passing apparition... thus should one regard one's self.",
    "author": "Ikkyu"
  },
  {
    "quote": "Always ask yourself: 'What will happen if I say nothing?'",
    "author": "Kamand Kojouri"
  },
  {
    "quote": "The ultimate goal of farming is not the growing of crops, but the cultivation and perfection of human beings.",
    "author": "Masanobu Fukuoka"
  },
  {
    "quote": "The problem with all students is that they inevitably stop somewhere... true Zen never stops.",
    "author": "Robert Greene"
  }
];

btn.addEventListener("click", function () {
//   quote.innerText = "Loading...";

    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quote.innerText = `"${randomQuote.quote}"\n\n- ${randomQuote.author}`;

});