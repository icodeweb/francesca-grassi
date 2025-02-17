function display(images, columns) {
    document.querySelector(".container").innerHTML = ``
    for (let index = 1; index <= columns; index++) {
        let column = document.createElement("div")
        column.classList.add("column")
        column.id = index
        document.querySelector(".container").appendChild(column)
    }

    for (let index = 1; index <= images; index++) {
        let image = document.createElement("img");
        image.src = `assets/img/img${index}.jpg`; // default format => jpg 

        image.onerror = function () {
            image.src = `assets/img/img${index}.png`; //try png

            image.onerror = function () {
                image.src = `assets/img/img${index}.gif`; //try gif
            };
        };

        let containerID = Math.ceil(index / (images / columns))
        document.getElementById(containerID).appendChild(image);
    }

}

let images = 32;
//number of images.
let columns = 2;
//number of columns.
const mediaQuery = window.matchMedia("(max-width: 600px)");
if (mediaQuery.matches) {
    columns = 1;
}
display(images, columns)

document.addEventListener("keydown", ({ key }) => {
    if (key === "ArrowRight" || (key === "ArrowLeft" && columns > 1)) {
        columns += key === "ArrowRight" ? 1 : -1;
        display(images, columns);
        document.querySelector(".instructions").style.display = "none";

    }
    else if (key === "h" || key === "H" || key === "v" || key === "V") {
        columns = key === "h" || key === "H" ? 1 : 2;
        display(images, columns);
        document.querySelector(".column").style.display = key === "h" || key === "H" ? "flex" : "block";
        document.querySelector(".instructions").style.display = "none";
    }
});