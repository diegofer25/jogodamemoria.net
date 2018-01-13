let cards = {};

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
                <div id="${aux}" onclick="play(this)" class="flip ${cards[aux].Pair}">
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