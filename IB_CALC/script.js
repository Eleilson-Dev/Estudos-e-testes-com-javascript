const form = document.querySelector("form");
const cliente = document.querySelector("#cliente");
const altura = document.querySelector("#altura");
const ladoA = document.querySelector("#ladoA");
const ladoB = document.querySelector("#ladoB");
const sobra = document.querySelector("#sobra");

const clientes = [];

const submitForm = (e) => {
  e.preventDefault();

  const altura_V = altura.value;
  let ladoA_V = ladoA.value;
  let ladoB_V = ladoB.value;
  let total = ladoA_V * ladoB_V;
  let initial = 1;
  console.log(
    `Nivel ${initial}: ${ladoA_V} X ${ladoB_V} = ${ladoA_V * ladoB_V}`
  );

  for (let i = 1; i < altura_V; i++) {
    ladoA_V--;
    ladoB_V--;
    total += ladoA_V * ladoB_V;
    console.log(
      `Nivel ${(initial += 1)}: ${ladoA_V} X ${ladoB_V} = ${ladoA_V * ladoB_V}`
    );
  }

  console.log(total);
};

form.addEventListener("submit", submitForm);
