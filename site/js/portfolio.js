
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