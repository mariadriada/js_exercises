
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
    const key = document.querySelector(`div[data-key=${CSS.escape(e.keyCode)}]`);

    if (!key) return;

    key.classList.remove('playing');    
}

window.addEventListener('keydown', playSound);
window.addEventListener('keyup', removeTransition);


/**
 * To drawsound button in a container (.container_keys)
 */
(function drawSoundButtons(){

    let container_keys = '<div class="keys">';

    keys.forEach(function getKeys(element, index, arr){ 
    
        container_keys +=   '<div data-key="'+element.keyCode+'" class="key"> \
                                <kbd>'+element.letter+'</kbd> \
                                <span class="sound">'+element.pronunciation+'</span> \
                                <audio data-key="'+element.keyCode+'" src="sounds/a.wav"></audio> \
                            </div>';    
    });

    container_keys += "</div>"; //Close .keys
    document.write(container_keys); // Show sound buttons at main page
    
})();



