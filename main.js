const form = document.getElementById('form-contato');
const nomes = [];
const numero = [];
const mail = [];
const observation = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('telefone');
    const inputEmail = document.getElementById('email');
    const inputOBS = document.getElementById('observacao');

    if (nomes.includes(inputNomeContato.value)) {
        alert(`O nome ${inputNomeContato.value} já foi inserido`);
    } else {
        nomes.push(inputNomeContato.value);
        numero.push(inputTelefone.value);
        mail.push(inputEmail.value);
        observation.push(inputOBS.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += `<td>${inputEmail.value}</td>`;
        linha += `<td>${inputOBS.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelefone.value = '';
    inputEmail.value = '';
    inputOBS.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

