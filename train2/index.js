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
