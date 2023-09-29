const amountOfBoxes = 4;
const amountOfStores = 4;
const amountOfMenueSelections = 4;
const amountOfSearchBars = 1;
let nameOfNavBar = ["Startseite", "Kategorien", "Einkaufsliste", "Kontakt"]
let nameOfStores = ["Hofer", "Spar", "Lidl", "Adeg"];



function insertMenueSelection(){
    let menueLeiste = document.getElementById("naviBar")
    for (let i = 0; i < amountOfMenueSelections; i++) {
        const menueSelection = document.createElement("li");
        menueSelection.classList.add("menueSelection", `menueSelection${i}`);
        menueSelection.id = `menueSelection${i}`;
        menueLeiste.appendChild(menueSelection);
        if (i + 1 == amountOfMenueSelections){
            insertMenueLink();
        }
    }
}

function insertMenueLink() {
    for (let i = 0; i < amountOfMenueSelections; i++) {
        let menueSelection = document.getElementById(`menueSelection${i}`);
        const menueLink = document.createElement("a");
        menueLink.classList.add("menueLink", `menueLink${i}`);
        menueLink.id = `menueLink${i}`;
        menueLink.innerHTML = nameOfNavBar[i];
        menueSelection.appendChild(menueLink);
    }
    
};

function insertSearch(){
    let searchSelection = document.getElementById("searchSection");
    for (let i = 0; i < amountOfSearchBars; i++) {
        const search = document.createElement("section");
        const suggestions = document.createElement("ul");
        search.classList.add("search", `search${i}`);
        suggestions.classList.add("suggestions", `suggestions${i}`);
        search.id = "search";
        suggestions.id = "suggestions";
        searchSelection.appendChild(search);
        searchSelection.appendChild(suggestions);
        if ( i + 1 == amountOfSearchBars){
            insertSearchTools();
        }
    }
};

function insertSearchTools(){
    for (let i = 0; i < amountOfSearchBars; i++) {
        let search = document.getElementById("search");
        const searchInput = document.createElement("input");
        const searchButton = document.createElement("button");
        searchInput.classList.add("input", `input${i}`);
        searchButton.classList.add("search", `search${i}`);
        searchInput.id = "inputBar";
        searchInput.placeholder = "Suche nach Produkten...";
        searchButton.innerHTML = "Suchen";
        searchButton.id = "suchen"
        search.appendChild(searchInput);
        search.appendChild(searchButton);
    }
};

function insertProductCard (){
    let Productboxes = document.getElementById("product-list")
    for (i = 0; i < amountOfBoxes; i++) {
        const div = document.createElement("div");
        div.classList.add("product-card", `product-card${i}`)
        div.id = `product-card${i}`;
        //console.log(div.id) Kontrolle ob die Divs richtig generiert werden mit der richtigen ID
        Productboxes.appendChild(div);
        if (i + 1 == amountOfBoxes){
            insertStore();
            insertIcon();
            insertProductName();
            insertProductPrice();
            insertAddToCartButton();
    }
};
};

function insertStore() {
    for (i = 0; i < amountOfBoxes; i++) {
        let MotherDiv = document.getElementById(`product-card${i}`)
        const store = document.createElement("p"); 
        store.classList.add("store", `store${i}`);
        store.id = `store${i}`;
        store.innerHTML = "Hofer"; //Hier wird der Name des Ladens von dem Array automatisch eingefügt
        MotherDiv.appendChild(store);
        
    }
};

function insertIcon(){
    for (let i = 0; i < amountOfBoxes; i++) {
        let MotherList = document.getElementById(`product-card${i}`)
        const icon = document.createElement("i");
        icon.classList.add("icon", `icon${i}`)
        icon.id = `icon${i}`
        icon.innerHTML = "Picture"; //Hier wird das Bild des Produktes dann von dem Array automatisch eingefügt
        MotherList.appendChild(icon);
        
    }
};

function insertProductName(){
    for (let i = 0; i < amountOfBoxes; i++) {
        let ProductNameBox = document.getElementById(`product-card${i}`);
        const productName = document.createElement("h2");
        productName.classList.add("productName", `productName${i}`);
        productName.id = `productName${i}`;
        productName.innerHTML = "Egs"; //Hier wird der Name des Jeweiligen Produktes dann von dem Array automatisch eingefügt
        ProductNameBox.appendChild(productName);
    }
};

function insertProductPrice(){
    for (let i = 0; i < amountOfBoxes; i++) {
        let PriceBox = document.getElementById(`product-card${i}`);
        const price = document.createElement("p");
        price.classList.add("price", `price${i}`);
        price.id = `price${i}`;
        price.innerHTML = i; //Hier wird der Preis des jeweiligen Produktes dann von dem Array automatisch eingefügt  
        PriceBox.appendChild(price)   
    }
};

function insertAddToCartButton(){
    for (let i = 0; i < amountOfBoxes; i++) {
        let buttonBox = document.getElementById(`product-card${i}`);
        const addToCartButton = document.createElement("button");
        addToCartButton.classList.add("add-to-cart-button", `add-to-cart-button${i}`);
        addToCartButton.id = `add-to-cart-button${i}`;
        addToCartButton.innerHTML = "Zur Eeinkaufliste hinzufügen";
        buttonBox.appendChild(addToCartButton);   
    }
};

/*
function insertCircle(){
    for (let i = 0; i < amountOfBoxes; i++) {
        let rightCircle = document.getElementById(`div${i}`);
        let leftCircle = document.getElementById(`div${i}`);
        let divCircleRight = document.createElement("div");
        let dicCircleLeft = document.createElement("div");
        divCircleRight.classList.add("circleright", `circleright${i}`)
        //let leftCircle = document.getElementById(`div${i}`);
        dicCircleLeft.classList.add("circleleft", `circleleft${i}`)
        rightCircle.appendChild(divCircleRight);
        leftCircle.appendChild(dicCircleLeft);
    }
}
*/

function storeBoxAdd(){
    let StoreChage = document.getElementById("StoreChage");
    for (let i = 0; i < amountOfStores; i++) {
        let store = document.createElement("li");
        store.classList.add("storeID", `storeID${i}`);
        store.id = `storeID${i}`;
        StoreChage.appendChild(store);
        if (i + 1 == amountOfStores) {
            storeLinkAdd();
        }
    }
    
};

function storeLinkAdd(){
    for (let i = 0; i < amountOfStores; i++) {
        let linkBox = document.getElementById(`storeID${i}`);
        const link = document.createElement("a");
        link.classList.add("linkStyle", `linkStyle${i}`);
        link.id = `linkStyle${i}`;
        linkBox.appendChild(link);
        if (i + 1 == amountOfStores){
            storeNameAdd();
        }
    }
};

function storeNameAdd(){
    for (let i = 0; i < amountOfStores; i++) {
    let logoBox = document.getElementById(`linkStyle${i}`);
    const logoName = document.createElement("div");
    logoName.classList.add("market", `market${i}`);
    logoName.id = `market${i}`;
    logoName.innerHTML = nameOfStores[i];
    logoBox.appendChild(logoName);
    
} 
};

insertProductCard();
storeBoxAdd();
insertMenueSelection();
insertSearch();

let dataLoaded;

 

 

const loadData = () => {

 

    fetch("products.json").then((result)=>{

        result.json().then((data)=>{

            console.log(data);

            dataLoaded = data;

        })

    })

}

 

loadData();

 

let html = "";

const fillTable = (data, searchInput) => {

    data.forEach(element => {

        if (element.title.toUpperCase() === searchInput.toUpperCase()){

            html += "<div>" + element.title + "</div>";  

        }    

    });

    document.getElementById("product-list").innerHTML = html;

}

 

 

document.getElementById("suchen").addEventListener("click", function(){

    const searchInput = document.getElementById("inputBar").value;

    fillTable(dataLoaded, searchInput);

})

 

 

 

 

 

function filterSuggestions(inputText) {

 

    const suggestions = dataLoaded;

    console.log(suggestions);

    return suggestions.filter(suggestion =>

      suggestion.title.toLowerCase().includes(inputText.toLowerCase())

    );

  }

 

 

  const inputElement = document.getElementById("inputBar");

const suggestionsList = document.getElementById("suggestions");

 

inputElement.addEventListener("input", function () {

  const inputText = document.getElementById("inputBar").value;

  const filteredSuggestions = filterSuggestions(inputText);

  console.log(filterSuggestions(inputText));

 

  // Leere die Vorschlagsliste

  suggestionsList.innerHTML = "";

 

  // Füge die gefilterten Vorschläge zur Liste hinzu

  filteredSuggestions.forEach(suggestion => {

    const listItem = document.createElement("li");

    listItem.textContent = suggestion.title;

    suggestionsList.appendChild(listItem);

  });

});

 

suggestionsList.addEventListener("click", function(e) {

    if (e.target.tagName === "LI") {

      inputElement.value = e.target.textContent;

      suggestionsList.innerHTML = "";

    }

  });

 

 

  document.addEventListener("click", function (event) {

    const clickedElement = event.target;

 

    // Überprüfe, ob der Klick nicht auf das input-Element oder die Vorschlagsliste erfolgt ist

    if (clickedElement !== inputElement && clickedElement !== suggestionsList) {

      // Wenn der Benutzer anderswo klickt, leere die Vorschlagsliste

      suggestionsList.innerHTML = "";

    }

  });

