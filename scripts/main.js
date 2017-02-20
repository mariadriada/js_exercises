
/**
* Play the sound in english of the key pressed
* @constructor
* @param {event} e - Keydown event
**/
function playSound(e){     
    const audio = document.querySelector(`audio[data-key=${CSS.escape(e.keyCode)}]`);
    const key = document.querySelector(`div[data-key=${CSS.escape(e.keyCode)}]`);
    
    if (!audio) return; //Stop the function

    audio.currentTime=0; //rewind 
    
    key.classList.add('playing');
    audio.play(); 
}

/**
* Remove class style later to transition
* @param {event} e - element of transition property
**/
function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

