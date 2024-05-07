// expose.js

window.addEventListener('DOMContentLoaded', init);

function init(){
    const userSelect = document.getElementById('horn-select');
    const imgChoice = document.querySelector('section#expose img');
    const imgAudio = document.querySelector('section#expose audio');
  
    userSelect.addEventListener('change', function() {
    const selectedHorn = userSelect.value;

    if (selectedHorn === 'air-horn'){
        imgChoice.src = 'assets/images/air-horn.svg';
        imgAudio.src = 'assets/audio/air-horn.mp3';
    } else if (selectedHorn === 'car-horn'){
        imgChoice.src = 'assets/images/car-horn.svg';
        imgAudio.src = 'assets/audio/car-horn.mp3';
    } else if (selectedHorn === 'party-horn'){
        imgChoice.src = 'assets/images/party-horn.svg';
        imgAudio.src = 'assets/audio/party-horn.mp3';
    }
  });

    const volSlider = document.getElementById('volume');
    const volImg = document.querySelector('div#volume-controls img');
    const playButton = document.querySelector('section#expose button');

    volSlider.addEventListener('input', function(){
    const volLevel = volSlider.value;

    if (volLevel == 0){
      volImg.src = 'assets/icons/volume-level-0.svg';
    } else if (volLevel < 33) {
      volImg.src = 'assets/icons/volume-level-1.svg';
    } else if (volLevel < 67) {
      volImg.src = 'assets/icons/volume-level-2.svg';
    } else {
      volImg.src = 'assets/icons/volume-level-3.svg';
    }
      imgAudio.volume = volLevel / 100;
  });

  playButton.addEventListener('click', function(){
    imgAudio.play();

    if (userSelect.value === 'party-horn'){
      const confetti = new JSConfetti();
      confetti.addConfetti();
    }
  });

}
