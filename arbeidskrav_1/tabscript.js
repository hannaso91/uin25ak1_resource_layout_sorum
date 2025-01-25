let resourceHTML = ""
//Her skriver jeg ut listen over knappene i toppen med .map, .map iterer gjennom hele arrayen og skriver ut deretter
//jeg har her spesifikt bedt om å skrive ut det som ligger i kategori. 
resources.map(resource => resourceHTML += `
    <li>
        <button class="tab" onclick="updateContent('${resource.category}', this)">${resource.category}</button>
    </li>
`) 

document.getElementById("navtab").innerHTML = resourceHTML



function updateContent(categoryName, clickedTab) {
    if (!clickedTab || !clickedTab.classList) {
        console.error('Invalid tab element:', clickedTab);
        return;
    }

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

    
     const tabs = document.querySelectorAll(".tab, .active-tab");
     for (let i = 0; i < tabs.length; i++) {
         tabs[i].classList.remove("active-tab");
         tabs[i].classList.add("tab");
         tabs[i].style.backgroundColor = "#2A324B";
         tabs[i].style.color = 'white';
     }
 
     clickedTab.classList.remove("tab");
     clickedTab.classList.add("active-tab");
     clickedTab.style.backgroundColor = 'white';
     clickedTab.style.color = "#2A324B";
 }
 
    const firstTab = document.querySelector(".tab");
    if (firstTab) {
        updateContent("HTML", firstTab);
        firstTab.classList.add("active-tab");
    }
