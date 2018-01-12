let cards = new Array();

$(document).ready(function () {
    prepareCards();
    flipCard();
});

function prepareCards() {
    let ret = ``;
    let aux = 0;
    var url = "/Game/PrepareGame";
    $.get(url, null, function (arrCard) {
        cards = arrCard;
        for (let i = 0; i < 4; i++) {
            ret += `<tr>`;
            for (let j = 0; j < 4; j++) {
                ret += `<td>
                <div class="flip">
                    <div id="${arrCard[aux].IdCard}" class="card">
                        <div class="face front">
                            <img class="${arrCard[aux].Paridade}" src="${arrCard[aux].ImgFront}">
                        </div>
                        <div class="face back">
                            <img src="${arrCard[aux].ImgBack}">
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

function flipCard() {
    $('.flip').click(function () {
        $(this).find('.card').toggleClass('flipped');
    });
}