const pianoElement = document.querySelector('.js-piano');

pianoElement.addEventListener('click', onPianoClick);
pianoElement.addEventListener('mouseover', removeTransition);
window.addEventListener('keydown', onWindowKeyDown);

function onWindowKeyDown(e) {
    const element = document.querySelector(`.js-piano-key[data-letter="${e.key}"]`);
    if (!element) return;

    const note = element.dataset.note;
    const src = `assets/audio/${note}.mp3`;

    highlightKey(element);
    playSound(src);
}

function onPianoClick(e) {
    if (!e.target.classList.contains('js-piano-key')) return;
    const note = e.target.dataset.note;
    const src = `assets/audio/${note}.mp3`;
    highlightKey(e.target);
    playSound(src);
}

function playSound(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}

function highlightKey(element) {
    if (element.classList.contains('piano-key--active')) {
        element.classList.remove('piano-key--active');
    }
    element.classList.add('piano-key--active');
}

function removeTransition(e) {
    console.log(e);
    // classList.remove('piano-key--active');
}
