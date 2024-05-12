// script.js

// Get references to HTML elements
const textInput = document.getElementById("text-input");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

// Initialize SpeechSynthesisUtterance object
const synth = window.speechSynthesis;
let utterance = new SpeechSynthesisUtterance();

// Event listener for Start button
startBtn.addEventListener("click", () => {
    // Set text to be spoken
    utterance.text = textInput.value;
    // Speak the text
    synth.speak(utterance);
});

// Event listener for Stop button
stopBtn.addEventListener("click", () => {
    // Stop speaking
    synth.cancel();
});
