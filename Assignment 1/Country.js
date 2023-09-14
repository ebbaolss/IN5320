
function addCountry() {
    const list = document.querySelector("ul")
    const country = document.getElementById("countryInput")
    const newLi = document.createElement("li")
    newLi.textContent = country.value

    var removeBtn = document.createElement("button")
    removeBtn.textContent = "X"
    removeBtn.onclick = function() {
        list.removeChild(newLi)
    }
    newLi.appendChild(removeBtn)
    list.appendChild(newLi)
    country.value = ""

    console.log("list", list);
}

function searchCountry(element, searchWord) {
    return element.startsWith(searchWord)
}

function filterSearch(list, searchWord) {
    const countries = list.filter(country => searchCountry(country, searchWord))
    console.log("Søkeresultat:", countries);
    return countries
}

function update() {
    const list = document.getElementById("countryList").children
    const countryNames = []

    console.log(list);
    for (let i = 0; i < list.length; i++){
        countryNames.push(list[i].innerText)
    }
    
    const searchWord = document.getElementById("search").value
    const filtered = filterSearch(countryNames, searchWord)

    console.log(filtered);

    for(let i = 0; i < list.length; i++){
        if(filtered.includes(list[i].innerText)){
            console.log("med",list[i]);
            list[i].style.display = "list-item"
        } else{
            console.log("ikke-med",list[i]);
            list[i].style.display = "none"
        }
    }
}

document.getElementById("search").addEventListener("input", update)
update()
