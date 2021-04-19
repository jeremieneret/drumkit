"use strict";

function playSound(e) {
    const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key= "${e.keyCode}"]`);
    if (!audio) return; //annule la fonction quand on clique ailleurs que sur les touches
    audio.currentTime = 0; //réinitialise le sample dès qu'on appuie sur la touche
    audio.play();
    key.classList.add('playing');
    key.onkeydown();
};

function removeTransition(e) {
    if (e.propertyName != 'transform') return;
    this.classList.remove('playing');
}



const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

