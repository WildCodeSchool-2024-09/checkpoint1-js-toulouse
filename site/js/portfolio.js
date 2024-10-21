const avatar = document.querySelector(".avatar");
const buttonName = document.querySelector(".button-name");

avatar.addEventListener("click", () => {
  avatar.src = "image/avatar.svg";
});

buttonName.addEventListener("click", () => {
  yourColor = prompt("Enter a color");
  yourName = prompt("What's your name?");
  const customColorElements = document.querySelectorAll(".pink-bg");
  const customTextElements = document.querySelectorAll(".pink-text");
  const firstName = document.querySelector("#firstname");

  firstName.textContent = yourName;
  firstName.style.color = "white";

  for (const element of customColorElements) {
    element.style.backgroundColor = yourColor;
  }

  for (const element of customTextElements) {
    element.style.color = yourColor;
  }
});
