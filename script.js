const pianoElement = document.querySelector('.js-piano');

pianoElement.addEventListener('mousedown', onPianoClick);
pianoElement.addEventListener('mouseover', ensureHighlightState);
pianoElement.addEventListener('mouseout', onMouseOut);
window.addEventListener('keydown', onWindowKeyDown);
window.addEventListener('keyup', onWindowKeyUp);

function onWindowKeyDown(e) {
    const element = document.querySelector(`.js-piano-key[data-letter="${e.key}"]`);
    if (!element) return;

    const note = element.dataset.note;
    const src = `assets/audio/${note}.mp3`;

    highlightKey(element);
    playSound(src);
}

function onWindowKeyUp(e) {
    const element = document.querySelector(`.js-piano-key[data-letter="${e.key}"]`);
    if (!element) return;

    removeHighlight(element);
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
    element.classList.add('piano-key--active');
}

function removeHighlight(element) {
    element.classList.remove('piano-key--active');
}

function ensureHighlightState(e) {
    let currentElem = null;
    if (currentElem) return;

    let target = e.target.closest('.js-piano-key');

    if (!target) return;

    currentElem = target;
    
}

function onMouseOut(e) {
    let currentElem = null;
    if (currentElem) return;

    let target = e.target.closest('.js-piano-key');

    if (!target) return;

    currentElem = target;
    removeHighlight(target);
}
