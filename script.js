console.log("Bem-vindo ao portfólio de Fabrizzio!");
function digitarTexto(texto, elementoId, velocidade = 100) {
  const el = document.getElementById(elementoId);
  let i = 0;

  function escrever() {
    if (i < texto.length) {
      el.innerHTML += texto.charAt(i);
      i++;
      setTimeout(escrever, velocidade);
    }
  }

  escrever();
}
digitarTexto("Fabrizzio Conrado", "nome-digitando", 100);
digitarTexto("Estudante de Engenharia de Software | Futuro Dev Back-End", "estudo-digitando", 70);
function revelarAoScroll() {
  const elementos = document.querySelectorAll('.reveal');
  elementos.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const alturaJanela = window.innerHeight;

    if (top < alturaJanela - 100) {
      el.classList.add('mostrar');
    }
  });
}

window.addEventListener('scroll', revelarAoScroll);
window.addEventListener('load', revelarAoScroll);

const lista = document.getElementById("lista-projetos");
projetos.forEach(projeto => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${projeto.nome}</strong><br><small>${projeto.linguagens} – ${projeto.descricao}</small>`;
  lista.appendChild(li);
});

// Dados embutidos localmente, sem fetch
const projetos = [
  {
    nome: "App de Mover Cursor",
    descricao: "Automação com Python",
    linguagens: "Python"
  },
  {
    nome: "Calculadora de Juros Selic",
    descricao: "Cálculo de rendimentos com HTML e JS",
    linguagens: "HTML, JavaScript"
  }
];

// local para salvar a foto em localStorage
reader.onload = function (e) {
  uploadContainer.style.backgroundImage = `url('${e.target.result}')`;
  placeholderText.style.display = "none";
};
