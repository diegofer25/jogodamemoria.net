let cardElement1;
let cardObject1;
let cardElement2;
let cardObject2;
let aux = 0;

function play(card) {
    let firstPlay = ((gameStart) && (aux === 0) && !(cards[card.id].WasFound));
    let secondPlay = (aux === 1) && (card.id !== cardObject1.id) && !(cards[card.id].WasFound);
    if (firstPlay) {
        cardElement1 = $(`#${card.id}`);
        cardObject1 = cards[card.id];
        flipCard(cardElement1);
        aux = 1;

    } else if (secondPlay) {
        cardElement2 = $(`#${card.id}`);
        cardObject2 = cards[card.id];
        aux = 2;
        flipCard(cardElement2);
        PairVerify(cardObject1.Pair, cardObject2.Pair);
    }
}

function PairVerify(item1, item2) {
    if (item1 === item2) {
        cardElement1.css('background-color', 'green');
        cardElement2.css('background-color', 'green');
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
    cardElement1.css('background-color', 'red');
    cardElement2.css('background-color', 'red');
    let wait = setTimeout(function () {        
        flipCard(cardElement1);
        flipCard(cardElement2);
        cardElement1.css('background-color', 'rgba(0, 0, 0, 0.0)');
        cardElement2.css('background-color', 'rgba(0, 0, 0, 0.0)');
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
    showPopUp('.overlay');
    $('div.content').html(`Concluiu em ${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}:${mil < 10 ? '0' + mil : mil}. Deseja salvar seu tempo no Ranking? </br> <button class="button pop" onclick="answer(true)">Sim</button> <button class="button pop" onclick="answer(false)">Não</button>`);
}

function answer(decision) {
    if (decision) {
        $('div.content').html(`Nome: <input id="nome" type="text" required placeholder="Digite seu nome..." /> </br> <button class="button pop" onclick="saveRanking()">Salvar</button> <button class="button pop" onclick="answer(false)">Cancelar</button>`);
    } else {        
        hidePopUp('.overlay');
        beginGame();
    }
}

function saveRanking() {
    let player = $('#nome').val();
    if (player != null && player != "") {
        let url = "/Ranking/SavePlayerRank";
        $.post(url, { Name: player, Time: `00:${min}:${sec}.${mil}` }, function (data) {
        });
        let wait = setInterval(function () {
            location.href = "/Home/Ranking";
            clearInterval(wait);
        }, 1000);
    } else {
        alert("Não é possível salvar pontuação sem nome!");
    }
}

function showPopUp(elem) {
    $(elem).css('visibility', 'visible');
    $(elem).css('opacity', '1');
}

function hidePopUp(elem) {
    $(elem).css('visibility', 'hidden');
    $(elem).css('opacity', '0');
}