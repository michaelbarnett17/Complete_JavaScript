`use strict`
const btn = document.querySelector(`.btn-country`);
const countriesContainer = document.querySelector(`.countries`);




// const renderCountry = (data) => {

//     const html = `
//     <article class="country">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}}</h4>
//       <p class="country__row"><span>👫</span>${data.population} people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//     </article>
//     `
//     document.querySelector(`.countries`).insertAdjacentHTML(`afterbegin`, html);
//     document.querySelector(`.countries`).style.opacity = 1;
// };

// const getCountryDataAndNeighbors = function(countryName) {
//     const URL_NAME = `https://restcountries.com/v2/name/${countryName}?fullText=true`;
//     const REQUEST_NAME = new XMLHttpRequest();
    
//     REQUEST_NAME.open(`GET`, URL_NAME);
//     REQUEST_NAME.send();
    
//     REQUEST_NAME.addEventListener(`load`, function () {
//         const data = JSON.parse(this.responseText)[0];
//         console.log(data);
        
//         renderCountry(data);

//         const [neighbor] = data.borders;
//         if(!neighbor) return;
//         console.log(neighbor);

//         const URL_NAME_2 = `https://restcountries.com/v2/alpha/${neighbor}?fullText=true`;
//         const REQUEST_NAME_2 = new XMLHttpRequest();
        
//         REQUEST_NAME_2.open(`GET`, URL_NAME_2);
//         REQUEST_NAME_2.send();

//         REQUEST_NAME_2.addEventListener(`load`, function () {
//             const data = JSON.parse(this.responseText);
//             console.log(data);
//             renderCountry(data);
//         })
//     });
// }


// getCountryDataAndNeighbors(`usa`);

// const VAR_NAME = fetch(`https://restcountries.com/v2/name/usa?fullText=true`);
// console.log(VAR_NAME);

// const getCountryData = function (countryName) {
//     fetch(`https://restcountries.com/v2/name/${countryName}?fullText=true`)
//     .then(response => response.json())
//     .then(data => {
//         // Do something with the data
//         console.log(data[0]);
//     });
// };



