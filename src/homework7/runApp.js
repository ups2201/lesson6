export function runApp(el) {
  el.innerHTML = `
        <input></input>
        <button>Click</button>
        <p>111</p>
        <p>222</p>
        <p>333</p>
  `;

  let button = el.querySelector("button");
  button.hidden = true;
  let input = el.querySelector("input");

  function onInputChange() {
    if (input.value.length > 0) {
      button.hidden = false;
    } else {
      button.hidden = true;
    }
  }

  function onButtonClick() {
    let paragraph = document.createElement("p");
    paragraph.innerHTML = input.value;
    el.appendChild(paragraph);
    let items = el.querySelectorAll("p");
    if (items.length > 5) {
      el.removeChild(items[0]);
    }
    input.value = "";
    button.hidden = true;
  }

  input.addEventListener("input", onInputChange);
  button.addEventListener("click", onButtonClick);
}
