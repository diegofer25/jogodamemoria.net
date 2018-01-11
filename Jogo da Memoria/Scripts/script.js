$(document).ready(function () {
    botaoNovoJogo();
    voltar();
    flipCard();
});

function botaoNovoJogo() {
    $("#novoJogo").click(function () {
        window.location.href = "./game.html";
    })
}

function voltar() {
    $('.voltar').click(function () {
        window.history.back();
    })
}

function flipCard() {
    $('.flip').click(function () {
        $(this).find('.card').toggleClass('flipped');
    });
}