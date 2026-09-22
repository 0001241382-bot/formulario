function calcularResultado() {
    let acertos = 0;
    const totalPerguntas = 5;

    // Verifica se todas as perguntas foram respondidas
    for (let i = 1; i <= totalPerguntas; i++) {
        const selecionado = document.querySelector(`input[name="p${i}"]:checked`);
        
        if (!selecionado) {
            const divResultado = document.getElementById('resultado');
            divResultado.innerHTML = "⚠️ Por favor, responda todas as perguntas de A até D antes de enviar!";
            divResultado.style.color = "#856404";
            divResultado.style.backgroundColor = "#fff3cd";
            return; // Interrompe a execução caso falte resposta
        }

        if (selecionado.value === "correto") {
            acertos++;
        }
    }

    // Mostra o resultado final customizado pela quantidade de acertos
    const divResultado = document.getElementById('resultado');
    divResultado.innerHTML = `🎉 Você acertou ${acertos} de ${totalPerguntas} perguntas!`;
    
    // Altera a cor de fundo do resultado baseado nos acertos
    if (acertos === totalPerguntas) {
        divResultado.style.color = "green";
        divResultado.style.backgroundColor = "#d4edda";
    } else if (acertos >= 3) {
        divResultado.style.color = "#856404";
        divResultado.style.backgroundColor = "#fff3cd";
    } else {
        divResultado.style.color = "red";
        divResultado.style.backgroundColor = "#f8d7da";
    }
}