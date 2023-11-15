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