import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  createPromise(delay, state)
    .then(() => {
      iziToast.show({
        title: "Success",
        message: `Fulfilled promise in ${delay}ms`,
        color: "green",
        position: "topRight",
      });
      console.log(`Fulfilled promise in ${delay}ms`);
    })
    .catch(() => {
      iziToast.show({
        title: "Error",
        message: `Rejected promise in ${delay}ms`,
        color: "red",
        position: "topRight",
      });
      console.log(`Rejected promise in ${delay}ms`);
    });

  // Reset form
  form.reset();
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
