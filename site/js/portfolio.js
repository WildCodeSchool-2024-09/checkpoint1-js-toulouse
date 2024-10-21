const avatarImg = document.querySelector(".avatar-img");
const modifyPageButton = document.querySelector(".modify-page-button");
const firstname = document.getElementById("firstname");
const description = document.querySelector(".description");
const pinkBg = document.querySelectorAll(".pink-bg");
const pinkText = document.querySelectorAll(".pink-text");
const links = document.querySelectorAll(".links");
const modifyListButton = document.querySelector(".modify-list-button");
const LiFrontDevTools = document.querySelectorAll(".li-front-dev-tools");
const modifyAddButton = document.querySelector(".modify-add-button");
const inputBack = document.getElementById("input-back-dev-tools");
const ulBackTools = document.getElementById("back-dev-tools-list");

avatarImg.addEventListener("click", () => {
  avatarImg.src = "image/avatar.svg";
})

modifyPageButton.addEventListener("click", () => {
  const bgColor = prompt("Enter a color");
  const name = prompt("Enter your name");
  description.style.backgroundColor = `${bgColor}`;
  modifyPageButton.style.backgroundColor = `${bgColor}`;
  modifyListButton.style.backgroundColor = `${bgColor}`;
  firstname.textContent = `${name}`;
  firstname.style.color = "white";
  pinkText.forEach((element) => {
    element.style.color = `${bgColor}`;
  });
  pinkBg.forEach((element) => {
    element.style.backgroundColor = `${bgColor}`;
  });
  links.forEach((element) => {
    element.style.color = `${bgColor}`;
  });
});

modifyListButton.addEventListener("click", () => {
  LiFrontDevTools[0].textContent = "VSCode";
  LiFrontDevTools[1].textContent = "Github";
  LiFrontDevTools[2].textContent = "Terminal";
});

modifyAddButton.addEventListener("click", () => {
  let newLi = document.createElement("li");
  newLi.textContent = `${inputBack.value}`;
  ulBackTools.appendChild(newLi);
})