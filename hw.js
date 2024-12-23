document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault(); // Запобігаємо стандартній поведінці форми

  // Отримуємо саму форму через event.target
  const form = event.target;

  // Отримуємо значення полів форми
  const name = form.name.value.trim();
  const message = form.message.value.trim();
  const phone = form.phone.value.trim();
  const email = form.email.value.trim();

  // Очищаємо попередні помилки
  form.querySelectorAll('.error').forEach((errorElement) => {
    errorElement.textContent = '';
  });

  let isValid = true;

  // Валідація Name
  if (name === '') {
    form.querySelector('#nameError').textContent = 'Name є обов\'язковим полем.';
    isValid = false;
  }

  // Валідація Message
  if (message.length < 5) {
    form.querySelector('#messageError').textContent = 'Повідомлення має бути не менше 5 символів.';
    isValid = false;
  }

  // Валідація Phone
  const phoneRegex = /^\+380\d{9}$/;
  if (!phoneRegex.test(phone)) {
    form.querySelector('#phoneError').textContent = 'Невірний формат номера. Номер повинен починатися з +380 і містити 12 цифр.';
    isValid = false;
  }

  // Валідація Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    form.querySelector('#emailError').textContent = 'Введіть коректну email адресу.';
    isValid = false;
  }

  // Якщо всі поля валідні, виводимо дані у консоль
  if (isValid) {
    console.log({
      Name: name,
      Message: message,
      Phone: phone,
      Email: email
    });
    alert('Повідомлення надіслано успішно!');
    form.reset(); // Очищаємо форму
  }
});
