'use strict';



/**
* Play the sound in english of the key pressed 
* @param {event} e - Keydown event
**/
function playSound(e){ 
    const audio = document.querySelector(`audio[data-key=${CSS.escape(e.keyCode)}]`);
    const key = document.querySelector(`div[data-key=${CSS.escape(e.keyCode)}]`);

    if (!audio) return; //Stop the function

    audio.currentTime=0; //rewind 
    
    addClass(key, 'playing');
    audio.play(); 
}

/**
 * Add a class to a element
 * @param {element} - element to class change
 * @param {class_element} - Class to assing to the element
 */
function addClass(element, class_element){
    element.classList.add(class_element);
}

/**
 * Remove a class to a element
 * @param {element} - element to class change
 * @param {class_element} - Class to remove to the element
 */
function removeClass(element, class_element){
    element.classList.remove(class_element);
}

/**
* Remove class style later to transition
* @param {event} e - element of transition property
**/
function removeTransition(e){   
    const key = document.querySelector(`div[data-key=${CSS.escape(e.keyCode)}]`);

    if (!key) return;

    removeClass(key, 'playing');    
}

/**
 * change the speed audio to selected
 */
function changeSpeedaudio(element) {
    const  audio = document.querySelectorAll('.speed_control');
    audio.playBackRate = element.speed
    console.log('spedd');
}


window.addEventListener('keydown', playSound);
window.addEventListener('keyup', removeTransition);



/**
 * To draw sound button in a container (.keys)  
 */
(function drawSoundButtons(){
    const EXT_ = ".wav", PREFIX_ = "sounds/";
    let container_keys = '<div class="keys">';  

    keys.forEach(function getKeys(key){ 
    
        container_keys +=   `<div class="bg_button"><div data-key="${key.keyCode}" class="key"> \
                                <kbd>${key.letter}</kbd> \
                                <span class="sound">${key.pronunciation}</span> \
                                <audio data-key="${key.keyCode}" src="${PREFIX_}${key.letter+EXT_}"></audio> \
                             </div></div>`;     
    });

    container_keys += "</div>"; //Close .keys

    const prepend =    '<div class="bg_text"></div> \
                        <div class="text"> \
                            <h1>English Sound Alphabet</h1> \
                            <p>Please press a letter of the your keyboard for listening its sound in english.</p> \
                        </div> \
                        ';
    
    const append = '<div class="velocity_control"> \
                        <div class="title_speed_control">Speed control</div>\
                        <div class="speed_control fast_speed" speed="2">+</div> \
                        <div class="speed_control normal_speed"  speed="1"></div> \
                        <div class="speed_control slow_speed" speed="0.5">-</div> \
                    </div>';

    container_keys = `${prepend}${container_keys}${append}`;  
    document.body.innerHTML = container_keys; // Show sound buttons at main page    
})();

/**
 * Render the page with main content
 */
function renderPage(){

}

// Get the speed controls
let speed = document.querySelectorAll(".speed_control ");
// Click to speed control 
speed.forEach(function(element){ 
    element.addEventListener('click', function(even){ changeSpeedAudio(element.getAttribute('speed')) });
});


/**
 * Change the speed sound reproduction
 * @param = { } speed - speed ratio to set
 */
function changeSpeedAudio(speed){
    const audio = document.querySelectorAll('audio');
    
    audio.forEach(function(audio, index, array){
        array[index].playbackRate = speed;
    });
}