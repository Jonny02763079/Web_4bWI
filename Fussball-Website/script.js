const fetches = () => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((result) => {
        result.json().then((data) => {
            tableData.push(data)
            console.log(tableData)
        });
    });

    fetch("https://api.openligadb.de/getmatchdata/bl1/2023").then((result) => {
        result.json().then((data) => {
            matchData.push(data)
            console.log(matchData)
        });
    });
}

const loadUpcomingGames = () => {
    const element = document.getElementById("Matches");

    let outputForTable = '<div class="UpcomingGames-row UpcomingGames-header">';
    outputForTable += '<div>Liga</div>';
    outputForTable += '<div>Gruppe</div>';
    outputForTable += '<div>Team 1</div>';
    outputForTable += '<div>vs</div>';
    outputForTable += '<div>Team 2</div>';
    outputForTable += '<div class="date">Datum</div>';
    outputForTable += '</div>';

    matchData.forEach((element) => {
        element.forEach(match => {
            if (match.leagueShortcut === "bl1" && match.matchIsFinished === false) {
                console.log(match)
                outputForTable += '<div class="UpcomingGames-row">';
                outputForTable += '<div>' + match.leagueName + '</div>';
                outputForTable += '<div>' + match.group.groupName + '</div>';
                outputForTable += '<div class="UpcomingGames-info">';
                outputForTable += '<img width="20px" src="' + match.team1.teamIconUrl + '"/>';
                outputForTable += '<div class="UpcomingGames-name">' + match.team1.teamName + '</div>';
                outputForTable += '</div>';
                outputForTable += '<div>vs</div>';
                outputForTable += '<div class="UpcomingGames-info">';
                outputForTable += '<img width="20px" src="' + match.team2.teamIconUrl + '"/>';
                outputForTable += '<div class="UpcomingGames-name">' + match.team2.teamName + '</div>';
                outputForTable += '</div>';
                outputForTable += '<div>' + match.matchDateTime + '</div>'
                outputForTable += '</div>';
            }

        });
    });

    element.innerHTML = outputForTable;
}

const tableData = [];
const matchData = [];
const idOfTeams = []

function loadTable(tableData) {
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

    tableData.forEach((element) => {
        element.forEach(team => {
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
    });


    element.innerHTML = outputForTable;

}

const loadTeams = (tableData) => {
    const element = document.getElementById("teams");

    let outputForTable = '';

    tableData.forEach((element) => {
        element.forEach(team => {
            outputForTable += '<div class="team-row">';
            outputForTable += '<div class="team-icon">';
            outputForTable += '<img width="20px" src="' + team.teamIconUrl + '"/>';
            outputForTable += '</div>';
            outputForTable += '<div class="team">' + team.teamName + '</div>';
            outputForTable += '<div class="points">' + "Points: " + team.points + '</div>';
            outputForTable += '</div>';
        });
    });


    element.innerHTML = outputForTable;
}

const loadMatches = (matchData) => {
    const element = document.getElementById("Matches");

    let outputForTable = '<div class="matches-row matches-header">';
    outputForTable += '<div>Liga</div>';
    outputForTable += '<div>Gruppe</div>';
    outputForTable += '<div>Team 1</div>';
    outputForTable += '<div>vs</div>';
    outputForTable += '<div>Team 2</div>';
    outputForTable += '<div class="status">Status</div>';
    outputForTable += '<div>Endergebniss</div>';
    outputForTable += '</div>';

    matchData.forEach((element) => {
        element.forEach(match => {
            if (match.leagueShortcut === "bl1" && match.matchIsFinished === false) {
                let statusOpend = "Anstehend"
                let info = "noch offen"
                //console.log(match)
                outputForTable += '<div class="matches-row">';
                outputForTable += '<div>' + match.leagueName + '</div>';
                outputForTable += '<div>' + match.group.groupName + '</div>';
                outputForTable += '<div class="matches-info">';
                outputForTable += '<img width="20px" src="' + match.team1.teamIconUrl + '"/>';
                outputForTable += '<div class="matches-name">' + match.team1.teamName + '</div>';
                outputForTable += '</div>';
                outputForTable += '<div>vs</div>';
                outputForTable += '<div class="matches-info">';
                outputForTable += '<img width="20px" src="' + match.team2.teamIconUrl + '"/>';
                outputForTable += '<div class="matches-name">' + match.team2.teamName + '</div>';
                outputForTable += '</div>';
                outputForTable += '<div>' + statusOpend + '</div>'
                outputForTable += '<div>' + info + '</div>'
                outputForTable += '</div>';
            } else if (match.leagueShortcut === "bl1" && match.matchIsFinished === true){
                let statusClosed = "Beendet"
                //console.log(match)
                outputForTable += '<div class="matches-row">';
                outputForTable += '<div>' + match.leagueName + '</div>';
                outputForTable += '<div>' + match.group.groupName + '</div>';
                outputForTable += '<div class="matches-info">';
                outputForTable += '<img width="20px" src="' + match.team1.teamIconUrl + '"/>';
                outputForTable += '<div class="team-name">' + match.team1.teamName + '</div>';
                outputForTable += '</div>';
                outputForTable += '<div>vs</div>';
                outputForTable += '<div class="matches-info">';
                outputForTable += '<img width="20px" src="' + match.team2.teamIconUrl + '"/>';
                outputForTable += '<div class="team-name">' + match.team2.teamName + '</div>';
                outputForTable += '</div>';
                outputForTable += '<div>' + statusClosed + '</div>'
                outputForTable += '<div class="resultsOfMatches">';
                outputForTable += '<div>' + match.matchResults[1].pointsTeam1 + '</div>';
                outputForTable += '<div>zu</div>';
                outputForTable += '<div>' + match.matchResults[1].pointsTeam2 + '</div>';
                outputForTable += '</div>';
                outputForTable += '</div>';
            }

        });
    });

    element.innerHTML = outputForTable;
}

const loadResults = (matchData) => {
    const element = document.getElementById("Matches");

    let outputForTable = '<div class="results-row results-header">';
    outputForTable += '<div>Liga</div>';
    outputForTable += '<div>Gruppe</div>';
    outputForTable += '<div>Team 1</div>';
    outputForTable += '<div>vs</div>';
    outputForTable += '<div>Team 2</div>';
    outputForTable += '<div class="finishPoints">Endergebniss</div>';
    outputForTable += '</div>';

    matchData.forEach((element) => {
        element.forEach(match => {
            if (match.leagueShortcut === "bl1" && match.matchIsFinished === true && match.matchResults[1].resultName === "Endergebnis") {
                console.log(match)
                outputForTable += '<div class="results-row">';
                outputForTable += '<div>' + match.leagueName + '</div>';
                outputForTable += '<div>' + match.group.groupName + '</div>';
                outputForTable += '<div class="results-info">';
                outputForTable += '<img width="20px" src="' + match.team1.teamIconUrl + '"/>';
                outputForTable += '<div class="results-name">' + match.team1.teamName + '</div>';
                outputForTable += '</div>';
                outputForTable += '<div>vs</div>';
                outputForTable += '<div class="results-info">';
                outputForTable += '<img width="20px" src="' + match.team2.teamIconUrl + '"/>';
                outputForTable += '<div class="results-name">' + match.team2.teamName + '</div>';
                outputForTable += '</div>';
                outputForTable += '<div class="results">';
                outputForTable += '<div>' + match.matchResults[1].pointsTeam1 + '</div>';
                outputForTable += '<div>zu</div>';
                outputForTable += '<div>' + match.matchResults[1].pointsTeam2 + '</div>';
                outputForTable += '</div>';
                outputForTable += '</div>';
            }


        });
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

function showTeams() {
    const element = document.getElementById("teams");
    element.style.display = '';
}

function hideTeams() {
    const element = document.getElementById("teams");
    element.style.display = 'none';
}

function showMatches() {
    const element = document.getElementById("Matches");
    element.style.display = '';
}

function hideMatchs() {
    const element = document.getElementById("Matches");
    element.style.display = 'none';
}

function changeIndexAndLoad(index, func) { //Callback-Funktion
    // Ändere den Index in der URL
    const newUrl = 'http://127.0.0.1:5500/Fussball-Website/index.html?id=' + index;
    history.pushState({}, '', newUrl);

    // Rufe die zugehörige Funktion auf
    func();
}

document.getElementById("1").addEventListener("click", function () {
    id = "table";
    changeIndexAndLoad('table', function () {
        loadTable(tableData);
        showTable();
        hideTeams();
        hideMatchs();
    });
});

document.getElementById("2").addEventListener("click", function () {
    changeIndexAndLoad('second', function () {
        console.log("Button 2 wurde geklickt");
        loadMatches(matchData);
        hideTable();
        hideTeams();
        showMatches();
    });
});

document.getElementById("3").addEventListener("click", function () {
    changeIndexAndLoad('third', function () {
        loadUpcomingGames();
        hideTable();
        hideTeams();
        showMatches();
    });
});

document.getElementById("4").addEventListener("click", function () {
    changeIndexAndLoad('fourth', function () {
        loadResults(matchData);
        hideTable();
        hideTeams();
        showMatches();
    });
});

document.getElementById("5").addEventListener("click", function () {
    changeIndexAndLoad('fifth', function () {
        loadTeams(tableData);
        showTeams();
        hideTable();
        hideMatchs();
    });
});

fetches();



