
window.addEventListener("resize", () => {
    const desktopElement = document.querySelector("figure.desktop");
    if (desktopElement === null)
        return;

    if (window.innerWidth <= 700) {
        desktopElement.classList.add("desktop-hidden");
    } else {
        desktopElement.classList.remove("desktop-hidden");
    }
});

let toggle = false;
const desktopImgElement = document.querySelector(".image-banner-first");
if (desktopImgElement !== null) {
    desktopImgElement.addEventListener("click", (event) => {
        toggle = !toggle;
        if (toggle) {
            event.target.src = "image/avatar.svg";
        } else {
            event.target.src = "image/avatar-bis.png";
        }
    });
}

const modifyTextAndColorElement = document.getElementById("modify-text-and-color");
if (modifyTextAndColorElement !== null) {
    modifyTextAndColorElement.addEventListener("click", () => {
        const firstNameElement = document.getElementById("firstname");
        if (firstNameElement !== null) {
            const name = prompt("Enter your name:");
            if (name !== null) {
                firstNameElement.innerText = name;
                firstNameElement.style.color = "#FFFFFF";
            }
        }
    });
}