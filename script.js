function loadPage() {
    document.getElementById("root").innerHTML = `
    <div class="textbox">
        <a class="contact" href="mailto:fg@francescagrassi.info" rel="mailto">Contact</a>
        <p>Francesca Grassi is a New York-based designer and educator working in visual design,
            storytelling, strategy, and editorial design.</p>
    </div>
    <div class="container">
        <div class="column" id="one">
        </div>
        <div class="column" id="two">
        </div>
    </div>
`
}
loadPage()

function generateContent(elemntId) {
    let containerElemnt = document.getElementById(`${elemntId}`)
    let sideHTML = ``
    if (elemntId === "one") {
        for (let index = 1; index < 17; index++) {
            if (index === 5 || index === 10) {
                sideHTML += `<img src="./img/img${index}.gif" />`
            } else {
                sideHTML += `<img src="./img/img${index}.jpg" />`
            }
        }
    } else {
        for (let index = 17; index < 33; index++) {
            if (index === 17 || index === 24) {
                sideHTML += `<img src="./img/img${index}.gif" />`
            } else {
                sideHTML += `<img src="./img/img${index}.jpg" />`
            }
        }
    }
    containerElemnt.innerHTML = sideHTML;
}

generateContent("one")
generateContent("two")