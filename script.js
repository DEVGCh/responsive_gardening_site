
// Agendar Chamada Gratuita - Muda texto e cor do botão ao clicar


function agendarChamada() {
    var botao = document.getElementById('btnAgendar');
    
    // Verifica o texto atual do botão
    if (botao.textContent === 'Agendar Chamada Gratuita') {
        // Muda o texto e o estilo
        botao.textContent = 'Chamada Agendada!';
        botao.style.backgroundColor = '#28a745';
        alert('A sua chamada foi agendada! Entraremos em contacto em breve.');
    } else {
        // Volta ao estado original
        botao.textContent = 'Agendar Chamada Gratuita';
        botao.style.backgroundColor = '#e8a600';
    }
}



// Enviar Formulário de Orçamento - Valida os campos e mostra mensagem de sucesso


function enviarOrcamento() {
    // Recebe valores do formulário
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var servico = document.getElementById('tipo-servico').value;
    
    // Verifica se os campos estão preenchidos
    if (nome === "" || email === "" || servico === "") {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    // Mostra mensagem de sucesso
    var mensagem = document.getElementById('mensagemForm');
    mensagem.textContent = 'Obrigado, ' + nome + '! O seu orçamento foi pedido com sucesso.';
    mensagem.style.color = 'white';
    
    // Limpa o formulário 5 segundos depois
    setTimeout(function() {
        document.getElementById('formOrcamento').reset();
        mensagem.textContent = '';
    }, 5000);
}