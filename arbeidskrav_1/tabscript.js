let resourceHTML = ""

resources.map(resource => resourceHTML += `
    <li>
        <p class="tab" onclick="updateContent">${resource.category}</p>
    </li>
`) 

document.getElementById("navtab").innerHTML = resourceHTML



function updateContent(categoryName) {
    const activeCategory = resources.filter(resource => resource.category === categoryName);
    const selectedCategory = activeCategory[0]

    const contentHTML = `
        <h2 id="headtext">${selectedCategory.category}</h2>
        <p id="text">${selectedCategory.text}</p>
        `

    document.getElementById("whiteContainer").innerHTML = contentHTML
}

updateContent("CSS")
