
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

let toggleFlag = false;
const desktopImgElement = document.querySelector(".image-banner-first");
if (desktopImgElement !== null) {
    desktopImgElement.addEventListener("click", (event) => {
        toggleFlag = !toggleFlag;
        if (toggleFlag) {
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
            const color = prompt("Enter a color:"); 
            const name = prompt("Enter your name:");
            if (name !== null && color !== null) {
                const rootElement = document.querySelector(':root');
                if (rootElement !== null) {
                    rootElement.style.setProperty("--lightWildColor", color);
                }
                firstNameElement.innerText = name;
                firstNameElement.style.color = "#FFFFFF";
            }
        }
    });
}

const linkElements = document.querySelectorAll("a");
for (const linkElement of linkElements) {
    linkElement.style.color = "#750ff7";
}