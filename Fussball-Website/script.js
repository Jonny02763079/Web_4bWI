const load = () => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((result) => {
        result.json().then((data) => {
            insertTable(data);
        });
    });

    fetch("https://api.openligadb.de/getmatchdata/bl1/2023").then((result) => {
        result.json().then((data) => {

        });
    });

};

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


document.getElementById("1").addEventListener("click", function () {
    load();
})


