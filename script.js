const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

console.log("yeees");

// replies
const greetings = [
  "You sound like erick, yes I'm fine",
  // "I think I'm fine but i'm not sure",
  // "I'm doing quite fine. What about you?",
];
const weather = ["The weather is cool", "I think its going to rain"];

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

    speech.text = finalMessage;
  }

  if (message.includes("sour")) {
    finalMessage = "sour ni wewe";

    speech.text = finalMessage;
  }

  if (!finalMessage) {
    finalMessage =
      "You sound fun to talk to. But unfortunately I can't understand what you're saying.";
    speech.text = finalMessage;
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
};
