import { city } from "./city.js";




let localitiesContainerEl = document.querySelector(".localities-container")


let htmlLocalitiesList = city.map((el)=>{
    return `
    <div class="localities-list">
      <div class="localities-card">
        <h3>${el.name}</h3>
        <p>${el?.place}</p>
      </div>
      <i class="fas fa-angle-right"></i>
    </div>
  `
}).join("");

localitiesContainerEl.innerHTML = htmlLocalitiesList

