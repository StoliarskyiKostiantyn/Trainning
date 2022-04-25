const promise2 = new Promise((resolve, reject) => {
  const cafill = Math.random() > 0.5;
  setTimeout(() => {
    if (cafill) {
      resolve("first");
    } else {
      reject("second");
    }
  }, 300);
});

promise2.then(onFullFilled2, onRejected2);

function onFullFilled2(result) {
  console.log("This onFullFilled2:", result);
}
function onRejected2(result) {
  console.log("This onRejected2:", result);
}

const promise = new Promise((resolve, reject) => {
  const cafill = Math.random() > 0.5;
  setTimeout(() => {
    if (cafill) {
      resolve("first");
    } else {
      reject("second");
    }
  }, 300);
});

promise.then(onFullFilled, onRejected);

function onFullFilled(result) {
  console.log("This onFullFilled:", result);
}
function onRejected(result) {
  console.log("This onRejected:", result);
}

console.log(5 === "5");
console.log("this var ole:", ole);
var ole = 5;
