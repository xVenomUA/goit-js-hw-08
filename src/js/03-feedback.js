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
    const objofElement = {};
    // for (let i = 0; i < formData.length; i++) {
    //     if (formData[i].name === 'email') {
    //         objofElement.email = formData[i].value;
    //     }
    //     if (formData[i].name === 'message') {
    //         objofElement.message = formData[i].value;
    //     }
    // }
    objofElement.email = formData.email.value;
    objofElement.message = formData.message.value;
        localStorage.setItem(KEY_UPDATE_FORM, JSON.stringify(objofElement));
};
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
