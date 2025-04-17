var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
    $("add").onclick = addScore;
   
};

function displayResults() {
    if (scores.length === 0) return;

    var total = 0;
    var highest = scores[0];

    for (var i = 0; i < scores.length; i++) {
        total += scores[i];
        if (scores[i] > highest) {
            highest = scores[i];
        }
    }

    var average = total / scores.length;

    var resultsDiv = $("results");
    resultsDiv.innerHTML = `
        <h2>Results</h2>
        <p>Average score = ${average.toFixed(2)}</p>
        <p>High score = ${highest}</p>
    `;
}

function displayScores() {
    var table = document.getElementById("scores_table");
    table.innerHTML = `
        <tr>
            <th style="text-align: left;">Name</th>
            <th style="text-align: left;">Score</th>
        </tr>
    `;

    for (var i = 0; i < names.length; i++) {
        table.innerHTML += `
            <tr>
                <td>${names[i]}</td>
                <td>${scores[i]}</td>
            </tr>
        `;
    }
}

function addScore() {
    var nameInput = document.getElementById("name").value.trim();
    var scoreInput = document.getElementById("score").value.trim();
    var score = parseInt(scoreInput);

    if (nameInput === "" || isNaN(score) || score < 0 || score > 100) {
        alert("You must enter a name and a valid score");
        return;
    }

    names.push(nameInput);
    scores.push(score);

    document.getElementById("name").value = "";
    document.getElementById("score").value = "";
}
