
const background = document.querySelector('.bulb-container');
const lightBulb = document.querySelector('.light-bulb');
lightBulb.addEventListener('click', handleClick);

function handleClick(event) {
  if (lightBulb.className === 'light-bulb') {
    lightBulb.className += ' light-bulb-dark';
    background.className += ' bulb-container-dark';
  } else {
    lightBulb.className = 'light-bulb';
    background.className = 'bulb-container';
  }
}
