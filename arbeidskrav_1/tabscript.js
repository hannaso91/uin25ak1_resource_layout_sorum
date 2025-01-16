let resourceHTML = ""

resources.map(resource => resourceHTML += `
    <ul>
        <li>
            <p class="tab">${resource.category}</p>
        </li>
    </ul>
`) 

document.getElementById("navtab").innerHTML = resourceHTML

let activeCategory = "HTML" //legger inne en default her

/*function updateContent(index) {
    let content = ""
|   let filterResource = resources.filter(res => res.category === activeCategory)

    document.getElementById("content").innerHTML = `
        <h2 id="headtext">${resource.category}</h2>
        <p id="text">${resource.text}</p>
        <ul>
            ${resource.sources.map(source => `
                <li><a href="${source.url}" targer ="_blank">${source.title}</a></li>` 
            )}
        </ul>`
}

updateContent()*/
