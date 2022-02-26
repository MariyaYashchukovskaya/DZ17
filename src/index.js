import './scss/app.scss'

//  /* 1. Пусть дан следующий код: */

//  const elem1 = document.querySelector('#elem1');
//  console.log(elem1)

//  function func1() {
//      alert(this.value);
//  }

//  func1.call(elem1);
//  // тут должно вывести value инпута
//  /* Добавьте в последнюю строчку метод call() так, чтобы на экран вывелось value инпута, лежащего в переменной elem. */



//  /* 2. Пусть дан следующий код: */

//  const elem2 = document.querySelector('#elem2');

//  function func2(surname, name) {
//      alert(this.value + ', ' + surname + ' ' + name);
//  }

//  func2.call(elem2,'Иванов','Иван');
//  // тут должно вывести 'добрый день, Иванов Иван'
//  /* Добавьте в последнюю строчку метод call() так, чтобы на экран вывелось 'добрый день, Иванов Иван'. Слово 'добрый день' должно взяться из value инпута, а 'Иванов' и 'Иван' должны быть параметрами функциями. */



// //  /* 3. Переделайте решение предыдущей задачи так, чтобы место метода call() был метод apply(). */

// const elem2 = document.querySelector('#elem2');

// function func2(surname, name) {
//     alert(this.value + ', ' + surname + ' ' + name);
// }

// func2.apply(elem2, ['Иванов', 'Иван']);



/* 4. Пусть дан следующий код: */

const elem1 = document.querySelector('#elem1');

function func3(surname, name) {
  alert(this.value + ', ' + surname + ' ' + name);
}

// Тут напишите конструкцию с bind()
// const funcUser = func3.bind(elem1)
// funcUser('Иванов', 'Иван'); // тут должно вывести 'привет, Иванов Иван'
// funcUser('Петров', 'Петр'); // тут должно вывести 'привет, Петров Петр'

func3.bind(elem1)('Иванов', 'Иван')
func3.bind(elem1)('Петров', 'Петр')
