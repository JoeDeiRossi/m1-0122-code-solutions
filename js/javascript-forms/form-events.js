
function handleFocus(event) {
  console.log('focus event was fired');
  console.log('event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name:', event.target.name);
  console.log('event.target.value:', event.target.value);
}

const username = document.querySelector('#user-name');
const email = document.querySelector('#user-email');
const message = document.querySelector('#user-message');

const formControls = [username, email, message];

for (let i = 0; i < formControls.length; i++) {
  const control = formControls[i];
  control.addEventListener('focus', event => {
    handleFocus(event);
  });
  control.addEventListener('blur', event => {
    handleBlur(event);
  });
  control.addEventListener('input', event => {
    handleInput(event);
  });
}
