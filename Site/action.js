const arrowBottom = document.querySelector("#arrowBottom")
arrowBottom.onclick = function () {
    window.scrollTo({
        top: 0,
        left: scrollX,
        behavior: "smooth"
    })

};

window.addEventListener('scroll', function () {
    arrowBottom.hidden = (scrollY < document.documentElement.clientHeight)
});

document.querySelector("#PriceUp").onclick = function () {
    let sortText = document.getElementById("PriceUp").textContent
    mySort("data-price", sortText)
}

document.querySelector("#PriceDown").onclick = function () {
    let sortText = document.getElementById("PriceDown").textContent
    mySortDesc("data-price", sortText)
}

document.querySelector("#Rating").onclick = function () {
    let sortText = document.getElementById("Rating").textContent
    mySortDesc("data-rating", sortText)
}
// Sort
const nav_menu = document.querySelector("#nav_menu p")
function mySort(sortType, sortText) {
    nav_menu.innerHTML = `<p>${sortText}<span class="menu_arrow arrow"></span><p>`
    let items = document.querySelector(".items")
    for (let i = 0; i < items.children.length; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (+items.children[i].getAttribute(sortType) > +items.children[j].getAttribute(sortType)) {
                replacedNode = items.replaceChild(items.children[j], items.children[i])
                insertAfter(replacedNode, items.children[i])
            }
        }
    }
}
// Sort
function mySortDesc(sortType, sortText) {
    nav_menu.innerHTML = `<p>${sortText}<span class="menu_arrow arrow"></span><p>`
    let items = document.querySelector(".items")
    for (let i = 0; i < items.children.length; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (+items.children[i].getAttribute(sortType) < +items.children[j].getAttribute(sortType)) {
                replacedNode = items.replaceChild(items.children[j], items.children[i])
                insertAfter(replacedNode, items.children[i])
            }
        }
    }
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling)
}

//input search
let filter = function () {
    let input = document.getElementById("filter-input")
    input.addEventListener("keyup", function () {
        let filter = input.value.toLowerCase(),
            filterElements = document.querySelectorAll(".item")

        filterElements.forEach(item => {

            for (let i = 0; i < item.textContent.length; i++) {
                if (item.textContent.toLowerCase().indexOf(filter) > -1) {
                    item.style.display = ""
                }
                else {
                    item.style.display = "none"
                }
            }

        })
    })
}

filter()
//visiable of colection search
const filterList = document.querySelector(".filter-option-box")
document.querySelector("#filter-collection").addEventListener("click", event => {
    if (filterList.style.display === "block")
        filterList.style.display = "none"
    else
        filterList.style.display = "block"

})
//search of collection
const filterBox = document.querySelectorAll(".item")
let filterCleaner = document.querySelector(".cleaner")

document.querySelector("#nav_filter_collection").addEventListener("click", event => {
    if (event.target.tagName !== "LI") return false

    let filterClass = event.target.dataset["collection"]


    filterBox.forEach(elem => {
        elem.classList.remove("hide")
        elem.querySelector("p").classList.remove("hide")
        if (!elem.classList.contains(filterClass)) {
            elem.classList.add("hide")
            elem.querySelector("p").classList.add("hide")
        }
    })

    filterCleaner.classList.remove("hide")

    document.querySelector(".cleaner").addEventListener("click", event => {
        filterCleaner.classList.add("hide")
    })
})


//Cleaner of search
document.querySelector(".cleaner").addEventListener("click", event => {

    if (event.target.tagName !== "LI") return false

    let filterClass1 = event.target.dataset["collection"]

    filterBox.forEach(elem => {
        if (filterClass1 === "all") {
            elem.classList.remove("hide")
            elem.querySelector("p").classList.remove("hide")
        }
    })
    filterCleaner.classList.add("hide")
})






