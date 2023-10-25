document.getElementById("test2").addEventListener("click", function () {
  fetch("http://ergast.com/api/f1/2023/circuits.json").then((result) => {
    result.json().then((data) => {
      //console.log(data)
      FillTable(data.MRData.CircuitTable.Circuits);
    });
  });
});

var circuitDataFinal = [];

var OnePressBoolean = true;

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

let FillTable = async (data) => {
 
  let res = await fillNameOfCurcuit(data);
 
  FillTable2(circuitDataFinal);
};

let FillTable2 = (circuitDataFinal) => {
  if(OnePressBoolean != false){
  console.log("inside");

  circuitDataFinal.forEach((element, index) => {
    let ShowBoxInfos = document.getElementById(`ShowBoxes${index}`);
    const Infos = document.createElement("ul");
    Infos.classList.add("ShowBoxInfos", `ShowBoxInfos${index}`);
    Infos.id = `ShowBoxInfos${index}`;
    Infos.innerHTML = "Race Infos:"; //+ circuitData.season;
    ShowBoxInfos.appendChild(Infos);
  });
}
OnePressBoolean = false;
};

