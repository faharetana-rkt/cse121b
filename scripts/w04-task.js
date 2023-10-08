/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: "Rakotomamonjy Faharetana Andriatsiva",
  photo: "images/me.jpg",
  favoriteFoods: [
    "pizza",
    "pasta",
    "french fries",
    "mashed potatoes",
    "fried rice",
    "fried chicken",
  ],
  hobbies: ["video games", "spending time with family", "coding", "cycling"],
  placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
  place: "Madagascar, Antsirabe",
  length: "19 years",
});

myProfile.placesLived.push({
  place: "Mauritius, Triolet",
  length: "4 years",
});

myProfile.placesLived.push({
  place: "Madagascar, Toamasina",
  length: "4 years",
});

console.log(myProfile.placesLived);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("img").src = myProfile.photo;
document.querySelector("img").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
  let li = document.createElement("li");
  li.textContent = food;
  document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
  let li = document.createElement("li");
  li.textContent = hobby;
  document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach((placeLived) => {
  let dt = document.createElement("dt");
  let dd = document.createElement("dd");
  dt.textContent = placeLived.place;
  dd.textContent = placeLived.length;
  document.querySelector("#places-lived").appendChild(dt);
  document.querySelector("#places-lived").appendChild(dd);
});
