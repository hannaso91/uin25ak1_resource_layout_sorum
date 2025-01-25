let resourceHTML = ""
//Her skriver jeg ut listen over knappene i toppen med .map, .map iterer gjennom hele arrayen og skriver ut deretter
//jeg har her spesifikt bedt om å skrive ut det som ligger i kategori. 
resources.map(resource => resourceHTML += `
        <button class="tab" onclick="updateContent('${resource.category}', this)">${resource.category}</button>
`) 

document.getElementById("navtab").innerHTML = resourceHTML



function updateContent(categoryName, clickedTab) {
    if (!clickedTab || !clickedTab.classList) {
        console.error('Invalid tab element:', clickedTab);
        return;
    }
    //filtrerer innholde passert på hva som blir trykket på. FUnksjonen blir kalt ved onclick i .map lenger opp
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
     //jeg skjønte raskt at jeg måtte itere gjennom alle tabs og finne den som var aktiv, laget derfor en 
     //tradisjonell for løkke for å gå igjennom og dermed skrive ut farger etter det
     for (let i = 0; i < tabs.length; i++) {
         tabs[i].style.backgroundColor = "#2A324B";
         tabs[i].style.color = "#ffffff";
     }
     
     //etter å ha testet veldig mye frem og tilbake la jeg inn hele koden min i github copilot.
     //Jeg fikk det ikke til å fungere og ønsket å lære hvordan jeg skulle få dette til
     //Trykket derfor på ctrl+a og kopierte deretter alt og fikk da koden fra linje 48 og ned som svar. 

     clickedTab.style.backgroundColor = "#ffffff";
     clickedTab.style.color = "#2A324B";
 }
    //denne koden gjør det slik at når siden lastes første gang så er HTML tab aktiv. 
    const firstTab = document.querySelector(".tab");
    if (firstTab) {
        updateContent("HTML", firstTab);
        firstTab.classList.add("active-tab");
    }
