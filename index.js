// const form1v = document.getElementById('form');
// спосіб дістати форму без ідентифікатора
const [form] = document.forms; //HTMLCollection
const login = form.elements.login;
const password = form.elements.password;
const message = form.elements.message;
const fruits = form.elements.fruits; // Checkbox elements (fruit list)
const radioElements = form.elements.drink; // Radio button elements
const select = form.elements.town; // Select element for town
const selectDep = form.elements.department; // Select element for department
selectDep.disabled = true;
const submitBtn = document.querySelector('[type="submit"]');
submitBtn.disabled = true;
let amountInput = 0;

// Regular expressions for validation
const loginPattern = /^[a-z0-9_-]{5,15}$/;
const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[?!@#$%^&*-]).{8,32}$/;
// console.dir(form)
// gr3at@3wdsG
// textarea
// keydawn keyup keypress copy select paste cut

// Обробник подій для чекбоксів (fruits)
// message.addEventListener('copy', (event)=>{
//   console.log(event.target.value)
// })

const arrayFruits = [];
fruits.forEach((fruct) => {
  fruct.addEventListener('change', (event) => {
    // console.log(event.target.checked);
    // console.log(event.target.value);
    arrayFruits.push(event.target.value);
    console.log(arrayFruits);
  });
});

// Обробник подій для випадаючого списку (select - town)
select.addEventListener('change', () => {
  if (select.value != 'null') {
    console.log(select.value);
    selectDep.disabled = false;
    selectDep.focus();
  } else {
    selectDep.disabled = true;
  }
});

// Обробник подій для випадаючого списку (selectDep - department)
selectDep.addEventListener('change', () => {
  if (selectDep.value !== 'null') {
    console.log(selectDep.value);
  }
});

// Обробник подій для радіокнопок (drink)
radioElements.forEach((radio) => {
  radio.addEventListener('change', (event) => {
    console.dir(event.target.value);
    radioElements.forEach((elem) => {
      if (elem !== event.target) {
        elem.disabled = true; // Вимикає всі радіокнопки, крім обраної
      }
    });
  });
});

// Обробник подій для поля логіну (login)
login.addEventListener('change', () => {
  if (loginPattern.test(login.value.trim())) {
    amountInput++;
  }
  if (amountInput >= 2) {
    submitBtn.disabled = false; // Увімкнути кнопку Submit, якщо amountInput >= 2
  }
});

// Частково видимий обробник для поля password (логіка обрізана)
password.addEventListener('change', () => {
  if (passwordPattern.test(password.value.trim())) {
    // ...
  }
});

// Обробник подій для відправки форми (submit)
form.addEventListener('submit', (event) => {
  // відміняємо обробку події за замовчуванням
  event.preventDefault();
  const login = form.elements.login.value.trim();
  const password = form.elements.password.value.trim();
  if (loginPattern.test(login) && passwordPattern.test(password)) {
    form.submit();
    alert('data send, thanks!');
    return;
  }
  alert('enter right login or password');
});

/*
// Коментований код, що не використовується:

login.addEventListener('focus', () => {
  login.style.backgroundColor = '#00ff0029';
});

login.addEventListener('blur', () => {
  const loginValue = login.value.trim();
  if (loginValue === '') {
    login.style.backgroundColor = 'red';
  }
});

login.addEventListener('change', () => {
  login.style.backgroundColor = 'blue';
});

login.addEventListener('input', () => {
  const cirilic = /[А-Яа-я]+/;/
  const loginValue = login.value.trim();
  if (cirilic.test(loginValue)){
    alert('ви пишите кирилицею!!!')
    login.style.fontSize = '30px';
  } else {
    login.style.fontSize = '';
  }
  login.style.backgroundColor = 'yellow';
});
*/