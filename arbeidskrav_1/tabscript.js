let resourceHTML = ""

resources.map(resource => resourceHTML += `
    <li>
        <p class="tab" onclick="updateContent('${resource.category}')">${resource.category}</p>
    </li>
`) 

document.getElementById("navtab").innerHTML = resourceHTML



function updateContent(categoryName) {
    const filtered = resources.filter(resource => resource.category === categoryName);
    const selectedCategory = filtered[0]
    const contentHTML = `
        <article>
            <h2 id="headtext">${selectedCategory.category}</h2>
            <p id="text">${selectedCategory.text}</p>
            <ul>
                <li>
                    
                </li>
            </ul>
        </article>`

    document.getElementById("whiteContainer").innerHTML = contentHTML 
    
   
}

updateContent("CSS")
