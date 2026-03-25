function coletarDados() {
  let nome = document.getElementById("nome").value;
  let nome2 = document.getElementById("nome2").value;

  let idade = Number(document.getElementById("idade").value);
  let idade2 = Number(document.getElementById("idade2").value);

  // Validação
  if (!nome || !nome2 || isNaN(idade) || isNaN(idade2)) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  let list = [nome, nome2, idade, idade2];
  let conj = new Set(list);

  let dados = {
    lista: list,
    conjunto: Array.from(conj)
  };

  let resultado = document.getElementById("resultado");

  resultado.innerHTML = `
    <h3>Dados digitados:</h3>
    <p><strong>Lista:</strong> ${dados.lista.join(", ")}</p>
    <p><strong>Conjunto:</strong> ${dados.conjunto.join(", ")}</p>
  `;
}