document.getElementById("test2").addEventListener("click", function () {
    fetch("http://ergast.com/api/f1/2023/circuits.json").then((result) => {
        result.json().then((data => {
            //console.log(data)
            FillTable(data.MRData.CircuitTable.Circuits)
        }))
    })
})

var circuitDataFinal = [];

let FillTable = (data) => {

    data.forEach((element, index) => {
        fetch(`http://ergast.com/api/f1/circuits/${data[index].circuitId}/results.json`).then((result) => {
            result.json().then((circuitData => {
                console.log(circuitData)
                circuitDataFinal.push(circuitData.MRData.RaceTable.Races);
                console.log(circuitDataFinal);
            }))
        })
        let ShowBoxBody = document.getElementById("ShowBoxBody");
        const ShowBoxes = document.createElement("div");
        ShowBoxes.classList.add("ShowBoxes", `ShowBoxes${index}`);
        ShowBoxes.id = `ShowBoxes${index}`
        ShowBoxBody.appendChild(ShowBoxes)
        ShowBoxes.innerHTML = "Circuit Name:" + data[index].circuitName;
    });
    FillTable2(circuitDataFinal);
};

let FillTable2 = (circuitDataFinal) => {
    console.log("inside");

    circuitDataFinal.forEach((element, index) => {
        let ShowBoxInfos = document.getElementById(`ShowBoxes${index}`);
        const Infos = document.createElement("ul");
        Infos.classList.add("ShowBoxInfos", `ShowBoxInfos${index}`);
        Infos.id = `ShowBoxInfos${index}`;
        Infos.innerHTML = "Race Infos:" //+ circuitData.season;
        ShowBoxInfos.appendChild(Infos)
    });





}


