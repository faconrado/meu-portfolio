console.log("Bem-vindo ao portfólio de Fabrizzio!");

function digitarTexto(texto, elementoId, velocidade = 90) {
  const el = document.getElementById(elementoId);
  if (!el) return;

  el.textContent = "";
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

const projetos = [
  {
    nome: "App de Mover Cursor",
    descricao: "Automação com Python",
    linguagens: "Python",
    link: "https://github.com/faconrado/MoverMouse_Pro_v4.0.git",
  },
  {
    nome: "Site Portfólio (este)",
    descricao: "Portfólio em HTML/CSS/JS",
    linguagens: "HTML • CSS • JavaScript",
    link: "https://faconrado.github.io/meu-portfolio/",
  },
  {
    nome: "Calculadora de Combustível",
    descricao: "Comparação de combustível e autonomia",
    linguagens: "HTML • JavaScript • CSS",
    link: "https://faconrado.github.io/site-calculadora-combustivel/",
  },
  {
    nome: "Site Tattoo Portfólio",
    descricao: "Portfólio para tatuador em HTML/CSS",
    linguagens: "HTML • JavaScript • CSS",
    link: "https://github.com/faconrado/siteTattoo---Portifolio.git",
  },
];

function renderizarProjetos() {
  const lista = document.getElementById("lista-projetos");
  if (!lista) return;

  lista.innerHTML = projetos
    .map(
      (p) => `
      <li>
        <strong>
          <a href="${p.link}" target="_blank" rel="noopener noreferrer">${p.nome}</a>
        </strong><br>
        <small>${p.linguagens} • ${p.descricao}</small>
      </li>
    `
    )
    .join("");
}

function ativarReveal() {
  const elementos = document.querySelectorAll(".reveal");
  if (!elementos.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("mostrar");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elementos.forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  digitarTexto("Fabrizzio Conrado", "nome-digitando", 100);
  digitarTexto("Estudante de Engenharia de Software | Futuro Dev Back-End", "estudo-digitando", 50);

  renderizarProjetos();
  ativarReveal();
});