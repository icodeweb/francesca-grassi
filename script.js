let imagesCount = 32;

// set this to the number of images.
for (let index = 1; index <= imagesCount; index++) {
    let image = document.createElement("img");
    image.src = `/img/img${index}.jpg`; // default format => jpg 

    image.onerror = function () {
        image.src = `/img/img${index}.png`; //if not jpg try png

        image.onerror = function () {
            image.src = `/img/img${index}.gif`; //if not jpg or png try gif
        };
    };

    if (index <= imagesCount / columnsCount) {
        document.getElementById("one").appendChild(image);
    } else {
        document.getElementById("two").appendChild(image);
    }
}

