const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDedault();
  const form = event.target;

  form.reset();
}
