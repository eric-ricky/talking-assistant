const btn = document.querySelector(".talk");
const content = document.querySelector(".content");
const replies = document.querySelector(".reply");

// replies
const greetings = [
  "YES FAITH, I'm fine. How about you.",
  // "I think I'm fine but i'm not sure",
  // "I'm doing quite fine. What about you?",
];
const jokes = [
  "The fact that jelly fish have survived for millions of years despite not having brains gives hope to many people. Ha ha",
  "Only a genius can say these four words, four times really fast without getting tongue twisted. EYE, YAM, STEW, PEED.",
  "Why do bicycles fall over? Because they are two-tired.",
  "I asked my dog what's 20 minus 20. He said nothing.",
];
const fine = ["fine", "okay", "good", "great", "fantastic"];

const recognition = new webkitSpeechRecognition();

recognition.onstart = () => {
  console.log("started");
};

recognition.onresult = (event) => {
  console.log(event);
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;

  content.textContent = "hello ";
  content.textContent += transcript;
  console.log(transcript);

  readOutLoud(transcript);
};

btn.addEventListener("click", () => {
  btn.classList.add("active");
  recognition.start();
});

const readOutLoud = (message) => {
  const speech = new SpeechSynthesisUtterance();
  let finalMessage;

  // finalMessage = message;

  // speech.text = finalMessage;
  if (message.includes("how are you")) {
    finalMessage = greetings[Math.floor(Math.random() * greetings.length)];

    replies.textContent = finalMessage;
    speech.text = finalMessage;
  }

  if (message.includes("tell me a joke")) {
    finalMessage = jokes[Math.floor(Math.random() * jokes.length)];
    // finalMessage = jokes[2];
    console.log(Math.floor(Math.random() * jokes.length));

    replies.textContent = finalMessage;
    speech.text = finalMessage;
  }

  if (
    message.includes(fine[0]) ||
    message.includes(fine[1]) ||
    message.includes(fine[2]) ||
    message.includes(fine[3]) ||
    message.includes(fine[4])
  ) {
    finalMessage = "Nice to hear that. What can I do for you?";

    replies.textContent = finalMessage;
    speech.text = finalMessage;
  }

  if (!finalMessage) {
    finalMessage =
      "Sorry, I can't understand what you're saying. Try saying HOW ARE YOU OR TELL ME A JOKE";

    replies.textContent = finalMessage;
    speech.text = finalMessage;
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
};
