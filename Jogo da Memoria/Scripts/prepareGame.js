let cards = new Array();

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
                <div id="${cards[aux].CardId}" onclick="play(this)" class="flip">
                    <div  class="card flipped">
                        <div class="face front">
                            <img src="${cards[aux].ImgFront}">
                        </div>
                        <div class="face back">
                            <img src="${cards[aux].ImgBack}">
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