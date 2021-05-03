var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

const synth = window.speechSynthesis;
let voices = synth.getVoices();

let recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const startButton = document.querySelector('button');
const diagnostic = document.querySelector('.output');
const bg = document.querySelector('html');

startButton.onclick = function() {
    recognition.start();
    console.log('I\'m listening to you!');
}

recognition.onresult = function(event) {
    let recognitionResult = event.results[0][0].transcript;
    diagnostic.textContent = 'Result received: ' + recognitionResult;
    if (recognitionResult == "good morning") {
        speak("Good morning! How did you sleep?");
    }
    if (recognitionResult == "hi") {
        speak("howdy!");
    }
    if (recognitionResult == "nice weather") {
        speak("Indeed, it's nice weather today!");
    }
}

function speak(text) {
    let utterThis = new SpeechSynthesisUtterance(text);
    utterThis.lang = "en-US";
    console.log(utterThis);
    synth.speak(utterThis);
}
