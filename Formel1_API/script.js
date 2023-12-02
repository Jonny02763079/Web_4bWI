

const MenueLinks = ["Rennkalender", "Rennstrecken", "WM-Stand", "Fahrer"]

let FillMenue = () => {
  MenueLinks.forEach((element, index) => {
    let Menue = document.getElementById("Menue");
    const MenueLi = document.createElement("li");
    MenueLi.classList.add("MenueLi", `MenueLi${index}`);
    MenueLi.id = `MenueLi${index}`;
    MenueLi.innerHTML = MenueLinks[index];
    Menue.appendChild(MenueLi);


  });
}

let FillHeaderLayout = () =>{
  let HeaderLayout = document.getElementById("ShowBoxBody");
    const HeaderLayoutDiv = document.createElement("div");
    HeaderLayoutDiv.classList.add("HeaderLayout");
    HeaderLayoutDiv.id = "Header";
    HeaderLayout.appendChild(HeaderLayoutDiv);
}

let FillHeaderName = (HeaderName) => {
  console.log(HeaderName)
  let FillPlace = document.getElementById("HeaderName");
  const SpaceFiller = document.createElement("h1")
  SpaceFiller.classList.add("HeaderName");
  SpaceFiller.innerHTML = HeaderName;
  FillPlace.appendChild(SpaceFiller);
}

FillMenue();

let indexForClicks = true

let Rennstrecken = async () => {
  console.log(indexForClicks)
  document.getElementById("MenueLi1").addEventListener("click", function () {
    if (indexForClicks === true) {

      fetch("http://ergast.com/api/f1/2023/circuits.json").then((result) => {
        result.json().then((data) => {
          //console.log(data)
          loadFunction();
          FillHeaderLayout();
          FillHeader();
          FillTable(data.MRData.CircuitTable.Circuits);
          const HeaderName = document.getElementById("MenueLi1").innerHTML;
          console.log(HeaderName) //Überprüfen des Headernames
          FillHeaderName(HeaderName)
        });
      });
    }});
};
//const data = {circuits:[], calendar:[]}

Rennstrecken();

const pictures = ["./track1.jpeg", "./track1.jpg", "./track2.jpeg"]

var circuitDataFinal = [];

var OnePressBoolean = true;

const countOfHeaderTitles = 4;

var HeaderTitle = ["Streckenname", "Ort", "Land", "Veranstaltung", "Streckenlayout"]

let fillNameOfCurcuit = async (data) => {
  let index = 0;
  for (const element of data) {
    let result = await fetch(
      `http://ergast.com/api/f1/circuits/${data[index].circuitId}/results.json`
    );
    let resultAsJson = await result.json();
    circuitDataFinal.push(resultAsJson);
    console.log("index:" + index, resultAsJson);

    let ShowBoxBody = document.getElementById("ShowBoxBody");
    const ShowBoxes = document.createElement("div");
    ShowBoxes.classList.add("ShowBoxes", `ShowBoxes${index}`);
    ShowBoxes.id = `ShowBoxes${index}`;
    ShowBoxBody.appendChild(ShowBoxes);
    ShowBoxes.innerHTML = "Circuit Name:" + data[index].circuitName;
    index++;
  }
};

let loadFunction = async () => {
  // Überprüfen, ob die Seite durch einen Reload ausgelöst wurde
  const isReload = window.location.search.includes("reload=true");

  if (isReload) {
    // Führen Sie den Code nach dem Neuladen aus
    let res = await Rennstrecken();
    indexForClicks = false;
  } else {
    // Wenn nicht, dann Seite neu laden
    window.location.replace("http://127.0.0.1:5500/Formel1_API/index.html?reload=true");
  }
}


let FillHeader = () => {
  console.log("coder" + countOfHeaderTitles)
  for (i = 0; i <= countOfHeaderTitles; i++) {
    let ShowBoxHeader = document.getElementById("Header");
    const HeaderTitles = document.createElement("div");
    HeaderTitles.classList.add("HeaderTitles", `HeaderTitles${i}`);
    HeaderTitles.id = `HeaderTitles${i}`;
    HeaderTitles.innerHTML = HeaderTitle[i];
    ShowBoxHeader.appendChild(HeaderTitles);
  }
}

let FillTable = async (data) => {

  let res = await fillNameOfCurcuit(data);

  FillTable2(circuitDataFinal);
  FillOrt(circuitDataFinal);
  FillLand();
  FillVeranstaltung();
};

let FillTable2 = (circuitDataFinal) => {
  if (OnePressBoolean != false) {
    console.log("inside");

    circuitDataFinal.forEach((element, index) => {
      let ShowBoxInfos = document.getElementById(`ShowBoxes${index}`);
      const Infos = document.createElement("div");
      Infos.classList.add("ShowBoxInfos", `ShowBoxInfos${index}`);
      Infos.id = `ShowBoxInfos${index}`;
      //Infos.innerHTML = "Race Infos:"; //+ circuitData.season;
      ShowBoxInfos.appendChild(Infos);
    });
  }
  OnePressBoolean = false;
  
};

let FillStreckenLayout = (circuitDataFinal) => {
  circuitDataFinal.forEach((element, index) => {
    let ShowBoxImg = document.getElementById(`ShowBoxes${index}`);
    const img = document.createElement("img");
    img.classList.add("ShowBoxImg", `ShowBoxImg${index}`);
    img.id = `ShowBoxImg${index}`;
    img.src = pictures[index];
    ShowBoxImg.appendChild(img);
  });
}

const Ort = ["Hier", "Dort"];

let FillOrt = (circuitDataFinal) =>{
  circuitDataFinal.forEach((element, index) => {
    let OrtBox = document.getElementById(`ShowBoxes${index}`);
    const OrtName = document.createElement("div");
    OrtName.classList.add("OrtDiv", `OrtDiv${index}`);
    OrtName.id = `OrtDiv${index}`;
    OrtName.innerHTML = Ort[index];
    OrtBox.appendChild(OrtName);
  });
  FillStreckenLayout(circuitDataFinal);
};




