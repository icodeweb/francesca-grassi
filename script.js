let imagesCount = 32;
//number of images.
let columnsCount = 3;
//number of columns.

for (let index = 1; index <= columnsCount; index++) {
    let column = document.createElement("div")
    column.classList.add("column")
    column.id = index
    document.querySelector(".container").appendChild(column)
}

for (let index = 1; index <= imagesCount; index++) {
    let image = document.createElement("img");
    image.src = `/img/img${index}.jpg`; // default format => jpg 

    image.onerror = function () {
        image.src = `/img/img${index}.png`; //try png

        image.onerror = function () {
            image.src = `/img/img${index}.gif`; //try gif
        };
    };

    let containerID = Math.ceil(index / (imagesCount / columnsCount))

    document.getElementById(containerID).appendChild(image);
}
