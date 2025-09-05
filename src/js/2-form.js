const LS_KEY = 'feedback-form-state';
const formData = { email: '', message: '' };

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('submit', handleFormSubmit);
formEl.addEventListener('input', handleFormInput);
populateForm();

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  console.log(formData);
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  localStorage.removeItem(LS_KEY);
  form.reset();
  formData.email = '';
  formData.message = '';
}

function handleFormInput(event) {
  const form = event.currentTarget;
  const formMeta = new FormData(form);

  for (const [key, value] of formMeta) {
    formData[key] = value.trim();
  }
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

function populateForm() {
  try {
    const dataFromLS = localStorage.getItem(LS_KEY);
    if (!dataFromLS) {
      return;
    }
    const data = JSON.parse(dataFromLS);
    const emailInput = formEl.querySelector('input[name="email"]');
    emailInput.value = data.email;
    const messageInput = formEl.querySelector('textarea[name="message"]');
    messageInput.value = data.message;
    formData.email = data.email;
    formData.message = data.message;
  } catch (error) {
    console.log('Error parsing localStorage data:', error);
  }
}
