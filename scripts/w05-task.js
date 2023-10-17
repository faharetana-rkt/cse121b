/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const newArticle = document.createElement("article");
        const newHeader = document.createElement("h3");
        newHeader.innerHTML = `${temple.templeName}`;
        const newImg = document.createElement("img");
        newImg.src = temple.imageUrl;
        newImg.alt = temple.location;
        newArticle.appendChild(newHeader);
        newArticle.appendChild(newImg);
        templesElement.appendChild(newArticle);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const data = await response.json();
    templeList.push(...data);
    displayTemples(templeList);
};

/* reset Function */
const reset = function () {
    templesElement.innerHTML="";
};

/* sortBy Function */
const sortBy = function (temples) {
    reset();
    const filter = document.querySelector("#sortBy").value;
    switch (filter) {
        case "utah":{
            const utahTemples = temples.filter(temple => temple.location.toLowerCase().includes("utah"));
            displayTemples(utahTemples);
            break;
        }
        
        case "notutah":{
            const nonUtahTemples = temples.filter(temple => !temple.location.toLowerCase().includes("utah"));
            displayTemples(nonUtahTemples);
            break;
        }
        case "older":{
            const olderTemples = temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            displayTemples(olderTemples);
            break;
        }
        
        case "all":{
            displayTemples(temples);
            break;
        }
        default:
            console.error("Invalid filter option");
    }

};

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => sortBy(templeList));

getTemples();
console.log(templeList);
