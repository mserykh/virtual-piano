const pianoElement = document.querySelector('.js-piano');

pianoElement.addEventListener('click', onPianoClick);

window.addEventListener('keydown', onWindowKeyDown);

function onWindowKeyDown(e) {
    
    highlightKey(e.key);
    playSound(e.key);
}

function onPianoClick(e) {
    if (!e.target.classList.contains('js-piano-key')) return;

    highlightKey();
    playSound();
}

function playSound(key) {
    const element = document.querySelector(`.js-piano-key[data-letter="${key}"]`);
    if (!element) return;

    console.log(element);

    const note = element.dataset.note;
    const src = `assets/audio/${note}.mp3`
    console.log(src);
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}

function highlightKey() {

}
