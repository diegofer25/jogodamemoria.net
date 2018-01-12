

$(document).ready(function () {
    prepararGame();
    flipCard();
    $('.comecar').click(() => {
        var url = "/Game/HelloAjax";
        $.get(url, null, function (data) {
            alert(data);
        });     
    });
});

function flipCard() {
    $('.flip').click(function () {
        $(this).find('.card').toggleClass('flipped');
    });
}

let imagens = {
    1: "../img/android.png",
    2: "../img/chrome.png",
    3: "../img/facebook.png",
    4: "../img/firefox.png",
    5: "../img/googleplus.png",
    6: "../img/html5.png",
    7: "../img/twitter.png",
    8: "../img/windows.png"
};

class Card {
    constructor(imgFront, imgBack, paridade, controle) {
        this.imgFront = imgFront;
        this.imgBack = imgBack;
        this.paridade = paridade;
        this.controle = controle;
    }
    getImgFront() {
        return this.imgFront;
    }
    getParidade() {
        return this.paridade;
    }
}

let cards = new Array();

function gerarCards() {
    let aux = 0;
    for (let i = 0; i < 2; i++) {
        for (let j = 1; j <= 8; j++) {
            cards[aux] = new Card(imagens[j], '../img/cross.png', j, false);
            aux++;
        }
    }
}

function gerarHtml() {
    let retorno = ``;
    let aux = 0;
    for (let i = 0; i < 4; i++) {
        retorno += `<tr>`;
        for (let j = 0; j < 4; j++) {
            retorno += `<td>
                <div class="flip">
                    <div class="card">
                        <div class="face front">
                            <img class="${cards[aux].getParidade()}" src="${cards[aux].getImgFront()}">
                        </div>
                        <div class="face back">
                            <img src="../img/cross.png">
                        </div>
                    </div>
                </div>
            </td>`;
            aux++;
        }
        retorno += `</tr>`;
    }
    return retorno;
}

function prepararGame() {
    gerarCards();
    let retorno = gerarHtml();
    $('#tableGame').html(retorno);
}