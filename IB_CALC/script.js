const form = document.querySelector("form");
const altura = document.querySelector("#altura");
const ladoA = document.querySelector("#ladoA");
const ladoB = document.querySelector("#ladoB");
const sobra = document.querySelector("#sobra");
const quebrados = document.querySelector("#quebrados");
const resultado = document.querySelector("#resultado");
const out_total = document.querySelector("#total");

let total_V = 0;

let clientes = [];

const calcFun = () => {
  let sobra_V = Number(sobra.value);
  let quebrados_V = Number(quebrados.value);

  let isSobra = sobra_V === "" ? 0 : sobra_V;
  let isQuebrados = quebrados_V === "" ? 0 : quebrados_V;

  const altura_V = Number(altura.value);
  let ladoA_V = Number(ladoA.value);
  let ladoB_V = Number(ladoB.value);
  let total = ladoA_V * ladoB_V;
  let initial = 1;

  clientes.push({
    nivel: `Nivel ${initial < 10 ? "0" + initial : initial}`,
    ladoA: ladoA_V < 10 ? "0" + ladoA_V : ladoA_V,
    ladoB: ladoB_V < 10 ? "0" + ladoA_V : ladoB_V,
    total: ladoA_V * ladoB_V,
  });

  for (let i = 1; i < altura_V; i++) {
    ladoA_V--;
    ladoB_V--;
    total_V += ladoA_V * ladoB_V;

    clientes.push({
      nivel: `Nivel ${(initial += 1) < 10 ? "0" + initial : initial}`,
      ladoA: ladoA_V < 10 ? "0" + ladoA_V : ladoA_V,
      ladoB: ladoB_V < 10 ? "0" + ladoB_V : ladoB_V,
      total: ladoA_V * ladoB_V,
    });
  }

  console.log(total_V);
};

const showResult = (clients) => {
  resultado.innerHTML = "";
  clients.forEach(({ nivel, ladoA, ladoB, total }) => {
    resultado.innerHTML += `
    <li>
      <div class="left">${nivel} : ${ladoA} X ${ladoB} = </div>  
      <div class="right"> ${total}</div>
    </li>`;
  });
};

const submitForm = (e) => {
  e.preventDefault();
  clientes = [];

  calcFun();
  showResult(clientes);
  out_total.innerHTML += total_V;
};

form.addEventListener("submit", submitForm);
