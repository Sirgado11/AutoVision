document.getElementById('botao').addEventListener('click', function() {
    const emailbox = document.getElementById('emailbox');
    const telebox = document.getElementById('telebox');
    const botao = document.getElementById('botao');

    if (emailbox.style.display === 'none') {
        emailbox.style.display = 'block';
        telebox.style.display = 'none';
        botao.textContent = 'Usar Nº Telemóvel';
    } else {
        emailbox.style.display = 'none';
        telebox.style.display = 'block';
        botao.textContent = 'Usar E-mail';
    }
});

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('emailbox').style.display = 'block';
    document.getElementById('telebox').style.display = 'none';
    document.getElementById('botao').textContent = 'Usar NºTelemóvel';
});

