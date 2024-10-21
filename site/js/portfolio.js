const avatarImage = document.getElementById("avatar");
avatarImage.addEventListener("click", (event) => {
    avatarImage.src = "./image/avatar.svg";
});

const firstName = document.getElementById("firstname");
const background = document.querySelector(".pink-bg");
const buttonTheme = document.querySelector(".theme");
const root = document.querySelector(':root');
const links = document.querySelectorAll('a');

const frontEndSkills = document.querySelectorAll('#front-dev-tools li')
const buttonSkill = document.querySelector(".skills-button");

buttonTheme.addEventListener ("click", (event) => {
    const colorTheme = prompt("choose your color")
    root.style.setProperty('--lightWildColor', colorTheme);
    firstName.innerHTML = prompt("What's your name?");
    firstName.style.color = "white";
    links.forEach((link) => {
        link.style.color = colorTheme;
    })
});

buttonSkill.addEventListener ("click", (event) => {
    let i = 1
    frontEndSkills.forEach((frontEndSkill) => {
        frontEndSkill.innerHTML = prompt(`your skill ${i++}`);
    })
});