const button = document.querySelector("button");
const body = document.querySelector("body");
const p = document.querySelector("p");

button.addEventListener("click", () => {
  let a = Math.round(Math.random() * 255);
  console.log(a);
  let b = Math.round(Math.random() * 255);
  console.log(b);
  let c = Math.round(Math.random() * 255);
  console.log(c);
  let rgb = `rgb(${a},${b},${c})`;
  body.style.backgroundColor = rgb;
  p.innerHTML = rgb;
});
