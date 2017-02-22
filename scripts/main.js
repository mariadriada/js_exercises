
/**
* Play the sound in english of the key pressed 
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
 * To draw sound button in a container (.keys)
 * @constructor
 */
(function drawSoundButtons(){
    const EXT_ = ".wav", PREFIX_ = "sounds/";
    let container_keys = '<div class="keys">';  

    keys.forEach(function getKeys(key){ 
    
        container_keys +=   '<div data-key="'+key.keyCode+'" class="key"> \
                                <kbd>'+key.letter+'</kbd> \
                                <span class="sound">'+key.pronunciation+'</span> \
                                <audio data-key="'+key.keyCode+'" src="'+PREFIX_+key.letter+EXT_+'"></audio> \
                             </div>';    
    });

    container_keys += "</div>"; //Close .keys
    const prepend =     '<h1>English Sound Alphabet</h1>\
                        <div class="bg_text"></div>\
                        <div class="text"><p>Please press a letter of the your keyboard for listening its sound in english.</p></div>';

                        console.log(prepend);
    container_keys = prepend+container_keys;                    
    //container_keys.insertbefore(prepend, container_keys);
    document.write(container_keys); // Show sound buttons at main page    
})();



