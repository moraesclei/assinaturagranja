// function updateSignature() {
//     // Capturar os valores dos campos
//     const nome = document.getElementById('nome').value;
//     const funcao = document.getElementById('funcao').value;
//     const phone = document.getElementById('phone').value;
//     const email = document.getElementById('email').value;

//     // Atualizar o conteúdo das divs na assinatura
//     document.querySelector('.nome').innerText = nome;
//     document.querySelector('.funcao').innerText = funcao;
//     document.querySelector('.telefone').innerText = 'Fone: (92) ' + phone;
//     document.querySelector('.email').innerText = 'E-mail: ' + email;
// }

function updateSignature() {
    // Capturar os valores dos campos
    const nome = document.getElementById('nome').value;
    const funcao = document.getElementById('funcao').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Atualizar o conteúdo das divs na assinatura
    document.querySelector('.nome').innerText = nome;
    document.querySelector('.funcao').innerText = funcao;
    document.querySelector('.telefone').innerText = 'Fone: (92) ' + phone;
    document.querySelector('.email').innerText = 'E-mail: ' + email;
}

function limparCampos() {
    // Limpar os campos de entrada
    document.getElementById("nome").value = "";
    document.getElementById("funcao").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";

    // Limpar os dados na assinatura.jpg
    document.getElementById("assinaturaNome").innerText = "";
    document.getElementById("assinaturaFuncao").innerText = "";
    document.getElementById("assinaturaTelefone").innerText = "Fone: (92)";
    document.getElementById("assinaturaEmail").innerText = "E-mail:";

    // Atualizar a imagem da assinatura
    document.getElementById("signatureImage").src = "assinatura.jpg";
}