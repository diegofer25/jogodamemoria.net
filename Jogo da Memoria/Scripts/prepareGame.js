let cards = {};
let min = 0;
let sec = 0;
let mil = 0;

$(document).ready(function () {
    prepareCards();
});

function prepareCards() {
    let ret = ``;
    let aux = 0;
    var url = "/Card/PrepareGame";
    $.get(url, null, function (arrayCards) {
        cards = arrayCards;
        for (let i = 0; i < 4; i++) {
            ret += `<tr>`;
            for (let j = 0; j < 4; j++) {
                ret += `<td>
                <div id="${aux}" onclick="play(this)" class="flip">
                    <div  class="card flipped">
                        <div class="face front">
                            <img src="../img/${cards[aux].ImgFront}.png">
                        </div>
                        <div class="face back">
                            <img src="../img/${cards[aux].ImgBack}.png">
                        </div>
                    </div>
                </div>
            </td>`;
                aux++;
            }
            ret += `</tr>`;
        }
        $('#tableGame').html(ret);
    });
}

function chronometer() {
    mil += 10;
    if (mil >= 999) {
        sec += 1;
        mil = 0;
    }
    if (sec >= 60) {
        min = + 1;
        sec = 0;
    }
    $('.chronometer').html(`${min < 10 ? '0'+min : min}:${sec < 10 ? '0'+sec : sec}:${mil < 100 ? '0' + mil : mil}`);
}