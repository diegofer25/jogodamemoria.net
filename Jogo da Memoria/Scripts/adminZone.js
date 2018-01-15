let isAdm = false;

function callLogin() {
    $('#login-adm').submit(function (event) {
        $.post('/Admin/LoginAdmin',
            {
                name: $('#username').val(),
                password: $('#password').val()
            }
            , function (wasAuthenticated) {
                if (wasAuthenticated) {
                    isAdm = wasAuthenticated;
                    $('#close').trigger('click');
                    getRank();
                }
            });
        event.preventDefault();
    });
}

function deletePlayer(player) {
    if (confirm(`Tem certeza que quer excluir`)) {
        $.post('/Ranking/DeletePlayer',
            {
                id: player,
            }
            , function (wasDeleted) {
                if (wasDeleted) {
                    $('#ranking').html(`<tr>
                        <td></td>
                        <td><img src="../img/loading.gif" /></td>
                        <td></td>
                    </tr>`);
                    getRank();
                }
            });
    }
}