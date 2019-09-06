// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let cardContainer = document.querySelector(".cards-container");

function createCard(card){
    let div = document.createElement("div");
    div.classList.add('card');

    const headlinediv = document.createElement("div");
    headlinediv.classList.add("headline");
    headlinediv.textContent = card.headline;

    const authordiv = document.createElement("div");
    authordiv.classList.add("author");

    const imgdiv = document.createElement("div");
    imgdiv.classList.add("img-container");

    let img = document.createElement("img");
    img.setAttribute("src", card.authorPhoto);

    imgdiv.appendChild(img);

    let span = document.createElement("span");
    span.textContent = `By: ${card.authorname}`;

    authordiv.appendChild(imgdiv);
    authordiv.appendChild(span);
    div.appendChild(headlinediv);
    div.appendChild(authordiv);

    return div;
}

//axios
axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    console.log(response.data); //{articles:{}}
    let articles = response.data.articles;
    for(article in articles){
        let articlesArray = articles[article];
        console.log(articlesArray);
        articlesArray.forEach(articleObject => {
            let card = createCard(articleObject);
            console.log(card);
            cardContainer.appendChild(card);
        });
    }
})
.catch (error =>{
    console.error(error)
});
