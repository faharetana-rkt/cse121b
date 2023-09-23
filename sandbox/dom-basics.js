const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);
const image = document.createElement("img");
image.setAttribute('src', 'https://picsum.photos/200');
image.setAttribute('alt', 'Unknown image to be fair');
document.body.appendChild(image);
const section = document.createElement("section");
const term = document.createElement("h2");
term.innerText ="CSE 121b";
document.section.appendChild(term);
const para = document.createElement("para");
para.innerText = "Welcome to Javascipt Language";
document.section.appendChild(para);
document.body.appendChild(section);

/* 
const newSection = document.createElement("section");
newSection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>";
document.body.appendChild(newSection);
*/