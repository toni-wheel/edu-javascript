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

console.log("Request data ..");

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Preparing data ..");
    const backendData = {
      server: "aws",
      port: 2000,
      status: "working",
    };
    resolve(backendData);
  }, 2000);
});

p.then((data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modifed = true;
      resolve(data);
    }, 2000);
  });
})
  .then((data) => {
    data.modifed = false; // меняем данные
    return data;
  })
  .then((data) => {
    console.log("Data received", data);
  })
  .catch((data) => {
    console.log("Error", data);
  });

// Мы построили цепочку из then, catch - обработка ошибок
// resolve - успешное выполнение
// reject - ошибка
