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
fetch("projetos.json")
  .then(response => response.json())
  .then(data => {
    const lista = document.getElementById("lista-projetos");
    data.forEach(projeto => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${projeto.nome}</strong><br><small>${projeto.linguagens} – ${projeto.descricao}</small>`;
      lista.appendChild(li);
    });
  })
  .catch(err => console.error("Erro ao carregar projetos:", err));
