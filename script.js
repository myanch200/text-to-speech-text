let speech = new SpeechSynthesisUtterance();

let voices = [];

let voicesDropdown = document.querySelector('select');


window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach((voice, index) => {
    voicesDropdown.options[index] = new Option(voice.name + ' (' + voice.lang + ')', index);
  });
};

voicesDropdown.addEventListener('change', () => {
  speech.voice = voices[voicesDropdown.value];
});

document.querySelector('button').addEventListener('click', () => {
    console.log(document.querySelector('textarea').value);
    speech.text = document.querySelector('textarea').value;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
});