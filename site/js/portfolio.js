window.addEventListener("load", () => {
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

    const modifymodifyFrontTevToolsElement = document.getElementById("modify-front-dev-tools");
    if (modifymodifyFrontTevToolsElement !== null) {
        modifymodifyFrontTevToolsElement.addEventListener("click", (event) => {
            const parentElement = event.target.parentElement;
            if (parentElement !== null) {
                const liElements = parentElement.querySelectorAll("ul li");
                const liArray = ["VSCode", "Github", "Terminal"];
                let indexArray = 0;
                for (const liElement of liElements) {
                    liElement.innerText = liArray[indexArray];
                    indexArray = (indexArray + 1) % liArray.length;
                }
            }
        });
    }

    const addToolElement = document.getElementById("add-tool");
    if (addToolElement !== null) {
        addToolElement.addEventListener("click", (event) => {
            const parentElement = event.target.parentElement;
            if (parentElement !== null) {
                const input = parentElement.querySelector("input");
                const liElement = document.createElement("li");
                liElement.innerText = input.value;
                const ulElement = parentElement.parentElement.querySelector("ul");
                ulElement.appendChild(liElement);
            }
        });
    }

});
