// explore.js

window.addEventListener('DOMContentLoaded', init);

function init(){
  const userText = document.getElementById('text-to-speak');
  const currVoice = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  const faceImage = document.querySelector('img');

  window.speechSynthesis.onvoiceschanged = function(){
    voiceOptions();
  };

  talkButton.addEventListener('click', () =>{
    const text = userText.value;
    const selectedVoice = currVoice.selectedOptions[0].getAttribute('data-name');

    speak(text, selectedVoice, faceImage);
  });
}

function voiceOptions(){
  const selectedVoice = document.getElementById('voice-select');
  const voices = window.speechSynthesis.getVoices();

  voices.forEach(voice =>{
    const choice = document.createElement('option');
    choice.textContent = `${voice.name} (${voice.lang})`;
    choice.setAttribute('data-name', voice.name);
    choice.setAttribute('data-lang', voice.lang);
    selectedVoice.appendChild(choice);
  });
}

function speak(text, voiceName, faceImage){
  const speakingVoice = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();
  
  const selectedVoice = voices.find(voice => voice.name === voiceName);
  speakingVoice.voice = selectedVoice;
  faceImage.src = 'assets/images/smiling-open.png';
  
  speakingVoice.onend = function() {
  faceImage.src = 'assets/images/smiling.png';
  };
  
  window.speechSynthesis.speak(speakingVoice);
}
