// Асинхронность. Event loop

// console.log("Start");
// console.log("Start 2");

// window.setTimeout(function () {
//   console.log("Start 3");
// }, 0);

// console.log("End"); // Скрипт не ждет, пока выполнется setTimeout

// // Промисы

// console.log("Request data");

// setTimeout(() => {
//   console.log("Preparing data");
//   const bakendData = {
//     server: "aws",
//     port: 2000,
//     status: "working",
//   };
//   setTimeout(() => {
//     bakendData.modifed = true;
//     console.log("Data received", bakendData);
//   }, 2000);
// }, 2000);

// минусы - большая вложенность

// console.log("Request data ..");

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Preparing data ..");
//     const backendData = {
//       server: "aws",
//       port: 2000,
//       status: "working",
//     };
//     resolve(backendData);
//   }, 2000);
// });

// p.then((data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modifed = true;
//       resolve(data);
//     }, 2000);
//   });
// })
//   .then((data) => {
//     data.modifed = false; // меняем данные
//     return data;
//   })
//   .then((data) => {
//     console.log("Data received", data);
//   })
//   .catch((data) => {
//     console.log("Error", data);
//   });

// Мы построили цепочку из then, catch - обработка ошибок
// resolve - успешное выполнение
// reject - ошибка

// Геттеры и сеттеры

// const person = Object.create(
//   {},
//   {
//     name: {
//       value: "Anton",
//       enumerable: true, // свойство видно через перечисление?
//       writable: true, // можно менять поле?
//       configurable: true, // можем удалять ключ?
//     },
//     birthYear: {
//       value: 1994,
//       enumerable: false,
//       writable: false,
//       configurable: false,
//     },
//     age: {
//       get() {
//         return new Date().getFullYear() - this.birthYear; // геттер возвращяет
//       },
//       set(value) {
//         console.log("Set age", value); // сеттер устанавливает свойство
//       },
//     },
//   }
// );

// person.name = "Vasya";

// for (let key in person) {
//   console.log("Key", key, person[key]);
// }

// Классы ES6

// const cat = {
//   name: "Sofa",
//   age: 2,
//   hasTail: true,
// };

// class Animal {
//   static type = "ANIMAL"; // хранится внутри класса

//   constructor(option) {
//     this.name = option.name;
//     this.age = option.age;
//     this.hasTail = option.hasTail;
//   }
//   voice() {
//     console.log("Hello");
//   }
// }

// class Cat extends Animal {
//   // наследум от Animal
//   static type = "CAT";
//   constructor(option) {
//     super(option);
//     this.color = option.color;
//   }
//   voice() {
//     console.log("Meow!");
//   }
//   get ageInfo() {
//     // вернуть значение
//     return this.age;
//   }
//   set ageInfo(newAge) {
//     // задать значение
//     this.age = newAge;
//   }
// }

// const sofa = new Cat({
//   name: "Sofa",
//   age: 2,
//   hasTail: true,
//   color: "black",
// });

// class Component {
//   constructor(selector) {
//     this.$el = document.querySelector(selector);
//   }
//   hide() {
//     this.$el.style.display = "none";
//   }
//   show() {
//     this.$el.style.display = "block";
//   }
// }

// class Box extends Component {
//   constructor(options) {
//     super(options.selector);
//     this.$el.style.width = this.$el.style.height = options.size + "px";
//     this.$el.style.background = options.color;
//   }
// }

// const box1 = new Box({
//   selector: "#box1",
//   size: 100,
//   color: "red",
// });

// const box2 = new Box({
//   selector: "#box2",
//   size: 75,
//   color: "blue",
// });

// class Circle extends Box {
//   constructor(options) {
//     super(options);
//     this.$el.style.borderRadius = "50%";
//   }
// }

// const circle = new Circle({
//   selector: "#circle",
//   size: 90,
//   color: "green",
// });

// Как работает Async/Await. Работа с сервером fetch

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
};

// delay(2000).then(() => console.log("2 sec"));

const url = "https://jsonplaceholder.typicode.com/todos/1'";

function fetchTodos() {
  delay(2000)
    .then(() => {
      return fetch(url);
    })
    .then((response) => response.json());
}
