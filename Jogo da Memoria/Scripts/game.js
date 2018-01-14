let cardElement1;
let cardObject1;
let cardElement2;
let cardObject2;
let aux = 0;



function play(IdCard) {
    let firstPlay = ((gameStart) && (aux === 0) && !(cards[$(IdCard).attr('id')].WasFound));
    let secondPlay = (aux === 1) && ($(IdCard).attr('id') !== cardElement1.attr('id')) && !(cards[$(IdCard).attr('id')].WasFound);
    if (firstPlay) {
        cardElement1 = $(IdCard);
        cardObject1 = cards[cardElement1.attr('id')];
        flipCard(cardElement1);
        aux = 1;

    } else if (secondPlay) {
        cardElement2 = $(IdCard);
        cardObject2 = cards[cardElement2.attr('id')];
        aux = 2;
        flipCard(cardElement2);
        PairVerify(cardObject1.Pair, cardObject2.Pair);
    }
}

function PairVerify(item1, item2) {
    if (item1 === item2) {
        cards[cardElement1.attr('id')].WasFound = true;
        cards[cardElement2.attr('id')].WasFound = true;
        reset();
        winGame();
    } else {
        wrongCards();
    }
}

function reset() {
    cardElement1 = null;
    cardObject1 = null;
    cardElement2 = null;
    cardObject2 = null;
    aux = 0;
}

function flipCard(card) {
    card.find('.card').toggleClass('flipped');
}

function wrongCards() {
    let wait = setTimeout(function () {
        flipCard(cardElement1);
        flipCard(cardElement2);
        reset();
        clearTimeout(wait);
    }, 1000);
}

function winGame() {
    let aux = 0;
    for (card of cards) {
        if (card.WasFound) {
            aux += 1;
        }
    }
    if (aux === 16) {
        let wait = setInterval(function () {
            stopGame();
            clearInterval(wait);
        }, 500);
    }
}

function stopGame() {
    clearInterval(time);
    if (confirm(`Concluiu em ${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}:${mil < 10 ? '0' + mil : mil}. Deseja salvar no Ranking?`)) {
        let player = prompt("Informe seu nome: ");
        if (player != null && player != "") {
            saveRanking(player);
        } else {
            alert("Não é possível salvar pontuação sem nome!");
        }
    } else {
        beginGame();
    }
}

function saveRanking(player) {
    let url = "/Ranking/SavePlayerRank";
    $.post(url, { Name: player, Time: `00:${min}:${sec}.${mil}` }, function (data) {
        alert(data);
    });
    let wait = setInterval(function () {
        location.href = "/Home/Ranking";
        clearInterval(wait);
    }, 1000);
}

