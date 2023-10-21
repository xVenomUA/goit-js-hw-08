import throttle from 'lodash.throttle';

const KEY_UPDATE_FORM = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const parse_elemet = JSON.parse(localStorage.getItem(KEY_UPDATE_FORM));

if (parse_elemet) {
  form.querySelector('input').value = parse_elemet.email ?? '';
  form.querySelector('textarea').value = parse_elemet.message ?? '';
}

const onForm = () => { 
    const formData = form.elements;
    if (formData.email.value && formData.message.value) {
        const objofElement = {
            email: formData.email.value,
            message: formData.message.value,
        };
        localStorage.setItem(KEY_UPDATE_FORM, JSON.stringify(objofElement));
    }
} 

form.addEventListener('input', throttle(onForm, 500));

form.addEventListener('submit', evt => {
    evt.preventDefault();
    if (evt.target.elements.email.value === '' || evt.target.elements.message.value === '') {
        alert('Error! Please fill in all the fields.');
        return;
    } 
  console.log(JSON.parse(localStorage.getItem(KEY_UPDATE_FORM)));
  form.reset();
  localStorage.getItem(KEY_UPDATE_FORM)
  localStorage.removeItem(KEY_UPDATE_FORM);
  
});
