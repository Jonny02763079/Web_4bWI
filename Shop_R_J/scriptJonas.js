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