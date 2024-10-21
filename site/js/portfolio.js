const avatarImg = document.querySelector(".avatar-img");
const modifyButton = document.querySelector(".modify-button");
const firstname = document.getElementById("firstname");
const description = document.querySelector(".description");
const pinkBg = document.querySelector(".pink-bg");
const pinkText = document.querySelector(".pink-text");

avatarImg.addEventListener("click", () => {
  avatarImg.src = "image/avatar.svg";
})

modifyButton.addEventListener("click", () => {
  const bcgColor = prompt("Enter a color");
  const name = prompt("Enter your name");
  description.style.backgroundColor = `${bcgColor}`;
  modifyButton.style.backgroundColor = `${bcgColor}`;
  firstname.textContent = `${name}`;
  firstname.style.color = "white";
});