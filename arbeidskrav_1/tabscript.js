let resourceHTML = ""

resources.map(resource => resourceHTML += `
    <ul>
        <li>
            <p class="tab">${resource.category}</p>
        </li>
    </ul>
`) 

document.getElementById("navtab").innerHTML = resourceHTML

function updateContent() {
    let content = ""

    resources.map((resource, index) => content += `
        <h2 id="headtext">${resource.category}</h2>
        <p id="text">${resource.text}</p>
        <nav id="links">
            <ul>
                <li><a href="https://www.w3schools.com/">W3Schools</a></li>
                <li><a href="https://html.spec.whatwg.org/">HTML living standard</a></li>
                <li><a href="https://html.com/">HTML.com tutorials</a></li>
            </ul>
        </nav>
    `)
    document.getElementById("content").innerHTML = content
}

updateContent()

