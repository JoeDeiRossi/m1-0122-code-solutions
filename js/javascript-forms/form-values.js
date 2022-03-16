
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const formObject = {};
  const formElements = contactForm.elements;

  const nameValue = formElements.name.value;
  const emailValue = formElements.email.value;
  const messageValue = formElements.message.value;

  formObject.name = nameValue;
  formObject.email = emailValue;
  formObject.message = messageValue;

  console.log('formObject:', formObject);
  contactForm.reset();
});
