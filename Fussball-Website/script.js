const load = () => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((result) => {
        result.json().then((data) => {
            tableData.push(data)
            insertTable(data);
        });
    });

    fetch("https://api.openligadb.de/getmatchdata/bl1/2023").then((result) => {
        result.json().then((data) => {
            matchData.push(data);
        });
    });
};

const tableData = [];
const matchData = [];

function insertTable(data) {
    const element = document.getElementById("table");

    let outputForTable = '<div class="table-row table-header">';
    outputForTable += '<div>Team</div>';
    outputForTable += '<div>Matches</div>';
    outputForTable += '<div>S</div>';
    outputForTable += '<div>U</div>';
    outputForTable += '<div>N</div>';
    outputForTable += '<div>Goals</div>';
    outputForTable += '<div>Diff.</div>';
    outputForTable += '<div>Points</div>';
    outputForTable += '</div>';

    data.forEach((team) => {
        outputForTable += '<div class="table-row">';
        outputForTable += '<div class="team-info">';
        outputForTable += '<img width="20px" src="' + team.teamIconUrl + '"/>';
        outputForTable += '<div class="team-name">' + team.teamName + '</div>';
        outputForTable += '</div>';
        outputForTable += '<div class="team-match">' + team.matches + '</div>';
        outputForTable += '<div>' + team.won + '</div>';
        outputForTable += '<div>' + team.draw + '</div>';
        outputForTable += '<div>' + team.lost + '</div>';
        outputForTable += '<div>' + team.goals + '</div>';
        outputForTable += '<div>' + team.goalDiff + '</div>';
        outputForTable += '<div>' + team.points + '</div>';
        outputForTable += '</div>';
    });


    element.innerHTML = outputForTable;
}

function showTable() {
    const element = document.getElementById("table");
    element.style.display = '';
}

function hideTable() {
    const element = document.getElementById("table");
    element.style.display = 'none';
}

function changeIndexAndLoad(index, func) { //Calback Funktion
    // Ändere den Index in der URL
    const newUrl = 'http://127.0.0.1:5500/Fussball-Website/index.html?id=' + index;
    history.pushState({}, '', newUrl);

    // Rufe die zugehörige Funktion auf
    func();
}

document.getElementById("1").addEventListener("click", function () {
    changeIndexAndLoad('table', function () {
        load();
        showTable();
    });
});

document.getElementById("2").addEventListener("click", function () {
    changeIndexAndLoad('second', function () {
        
        console.log("Button 2 wurde geklickt");
        hideTable();
    });
});

document.getElementById("3").addEventListener("click", function () {
    changeIndexAndLoad('third', function () {
        hideTable();
    });
});

document.getElementById("4").addEventListener("click", function () {
    changeIndexAndLoad('fourth', function () {
        hideTable(); //Hier wird nicht das tabellen format verwendet, deshalb muss später einmal hier was anderes stehen (andere Funktion)
    });
});



