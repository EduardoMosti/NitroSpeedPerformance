document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formContato");
    const retorno = document.getElementById("formRetorno");
    const textoRetorno = document.getElementById("textoRetorno");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Previne o envio do formulário padrão

        // Coleta dos valores dos campos
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const preferencia = document.querySelector('input[name="preferencia"]:checked');
        const motivo = document.getElementById("motivo").value;
        const promocoes = document.getElementById("promocoes").checked;
        const mensagem = document.getElementById("mensagem").value.trim();

        // Validação dos campos obrigatórios
        let erros = [];

        if (!nome) erros.push("O campo Nome é obrigatório.");
        if (!email) erros.push("O campo Email é obrigatório.");
        if (!telefone) erros.push("O campo Telefone é obrigatório.");
        if (!preferencia) erros.push("Escolha uma preferência de contato.");
        if (!mensagem) erros.push("O campo Mensagem não pode estar vazio.");

        if (erros.length > 0) {
            mostrarMensagem(erros.join(" "), false);
            return;
        }

        // Simula o envio e exibe mensagem de sucesso
        mostrarMensagem("Mensagem enviada com sucesso! Em breve entraremos em contato.", true);

        // Oculta o formulário
        form.classList.add("form-oculto");
    });

    function mostrarMensagem(mensagem, sucesso = true) {
        textoRetorno.textContent = mensagem;
        retorno.classList.remove("mensagem-oculta", "mensagem-sucesso", "mensagem-erro");

        if (sucesso) {
            retorno.classList.add("mensagem-sucesso");
        } else {
            retorno.classList.add("mensagem-erro");
        }

        retorno.scrollIntoView({ behavior: "smooth" });
    }
});
