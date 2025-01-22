let resourceHTML = ""

resources.map(resource => resourceHTML += `
    <li>
        <button id="tab" onclick="updateContent('${resource.category}')">${resource.category}</button>
    </li>
`) 

document.getElementById("navtab").innerHTML = resourceHTML



function updateContent(categoryName) {
    const filtered = resources.filter(resource => resource.category === categoryName);
    const selected = filtered[0]
    const contentHTML = `
        <article>
            <h2 id="headtext">${selected.category}</h2>
            <p id="text">${selected.text}</p>
            <ul>
                ${selected.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join("")}
            </ul>
        </article>`

    document.getElementById("whiteContainer").innerHTML = contentHTML 

   
}

updateContent("HTML")
