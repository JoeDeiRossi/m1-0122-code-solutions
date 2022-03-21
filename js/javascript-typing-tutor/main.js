
document.addEventListener('keydown', function (event) {
  const keyPressed = event.key;
  const targetCharacter = document.querySelector('.target');

  if (targetCharacter && keyPressed === targetCharacter.textContent) {
    handleCorrectCharacter(targetCharacter);
  } else if (targetCharacter && keyPressed === ' ' && targetCharacter.innerHTML === '&nbsp;') {
    handleCorrectCharacter(targetCharacter);
  } else if (targetCharacter && keyPressed.length === 1 && !targetCharacter.classList.contains('typo')) {
    targetCharacter.className += ' typo';
  }
});

function handleCorrectCharacter(target) {
  const nextCharacter = document.querySelector('.target + span');
  target.className = 'typed';
  if (nextCharacter) {
    nextCharacter.className = 'untyped target';
  }
}
