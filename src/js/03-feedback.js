// 1.Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// 2. Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// 3. Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// 4. Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const dataForm = {};

function onFormData(event) {
    dataForm[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
};

function onSubmitForm(event) {
    event.preventDefault();
    
    const email = event.currentTarget.elements.email;
    const message = event.currentTarget.elements.message;

    if (email.value === '' || message.value === '') {
        alert('Please fill in all the fields!');
    }else {
        dataForm.email = email.value;
        dataForm.message = message.value;

        console.log(dataForm);
    }
    event.currentTarget.reset();

};

