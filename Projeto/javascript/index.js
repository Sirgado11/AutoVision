document.getElementById('trocaMenu').addEventListener('click', function() {
    var trocar = document.getElementById('troca');
    
    // Verifica a classe atual e alterna entre menutele e show
    if (trocar.classList.contains('menutele')) {
        trocar.classList.remove('menutele');
        trocar.classList.add('show');
    } else {
        trocar.classList.remove('show');
        trocar.classList.add('menutele');
    }
});

// Evento para o botão que desfaz a alteração
document.getElementById('removetroca').addEventListener('click', function() {
    var trocar = document.getElementById('troca');
    
    // Redefine a classe para menutele
    trocar.classList.remove('show');
    trocar.classList.add('menutele');
});
