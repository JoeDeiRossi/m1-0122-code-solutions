
const modalContainer = document.querySelector('.modal-container');
const openButton = document.querySelector('.open-button');
openButton.addEventListener('click', handleClick);

function handleClick(event) {
  modalContainer.className += ' active';
}

const noButton = document.querySelector('.no-button');
noButton.addEventListener('click', function (event) {
  modalContainer.className = 'modal-container';
});
