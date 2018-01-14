let rankList = {};

$(document).ready(function () {
    getRank();
});

function getRank() {
    let url = "/Ranking/GetRank";
    $.get(url, null, function (rank) {
        rankList = rank;
        showRank();
    });
}

function showRank() {
    let ret = `
    <thead>
        <th>#</th>
        <th>Nome</th>
        <th>Tempo</th>
    </thead>`;
    ret += `<tbody>`;
    ret += formatRank();
    ret += `<tbody>`;
    $('#ranking').html(ret);
}

function formatRank() {
    rankList = sortRank();
    let ret = `<tr>`;
    for (let i = 0; i < rankList.length; i++) {
        if (i == 0 || i == 1 || i == 2) {
            ret += `   
                <td><img src="../img/badge${i + 1}.png"></td>
                <td>${rankList[i].nome}</td>
                <td>
                    ${rankList[i].tempo.Minutes < 10 ? '0' + rankList[i].tempo.Minutes : rankList[i].tempo.Minutes}:
                    ${rankList[i].tempo.Seconds < 10 ? '0' + rankList[i].tempo.Seconds : rankList[i].tempo.Seconds}:
                    ${rankList[i].tempo.Milliseconds < 100 ? '0' + rankList[i].tempo.Milliseconds : rankList[i].tempo.Milliseconds}
                </td>
                
            </tr>`;
        } else {
            ret += `  
                <td>${i + 1}</td>
                <td>${rankList[i].nome}</td>
                <td>
                    ${rankList[i].tempo.Minutes < 10 ? '0' + rankList[i].tempo.Minutes : rankList[i].tempo.Minutes}:
                    ${rankList[i].tempo.Seconds < 10 ? '0' + rankList[i].tempo.Seconds : rankList[i].tempo.Seconds}:
                    ${rankList[i].tempo.Milliseconds < 10 ? '0' + rankList[i].tempo.Milliseconds : rankList[i].tempo.Milliseconds}
                </td>
            </tr>`;
        }
    }
    return ret;
}

function sortRank() {
    let temprank = rankList.sort(function (a, b) {
        if (a.tempo.Minutes > b.tempo.Minutes) {
            return 1;
        } else if (a.tempo.Minutes == b.tempo.Minutes && a.tempo.Seconds == b.tempo.Seconds) {
            return a.tempo.Milliseconds - b.tempo.Milliseconds;
        } else {
            return a.tempo.Seconds - b.tempo.Seconds;
        }
    });
    return temprank;
}