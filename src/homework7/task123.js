const button = document.querySelector("button");
const input = document.querySelector("input");
const div = document.querySelector(".paragraph");

input.addEventListener("input", hideButton);
button.addEventListener("click", setTextInPage);

function hideButton() {
  if (input.value === "") {
    button.hidden = true;
  } else {
    button.hidden = false;
  }
}

function setTextInPage() {
  const paragraph = document.createElement("p");
  paragraph.innerText = input.value;
  div.append(paragraph);
  const items = div.querySelectorAll("p");
  if (items.length > 5) {
    items.item(0).remove();
  }
}
