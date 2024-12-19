const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicatior");

// Eventos no input

multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiplicationNumber = +numberInput.value;

  const multiplicatiorNumber = +multiplicationInput.value;

  if (!multiplicationNumber || !multiplicatiorNumber) return;

  createTable(multiplicationNumber, multiplicatiorNumber);
});

// Mostrar os resultados do calculo

const multiplicationTitle = document.querySelector(
  "#multiplication-title span"
);

const multiplicationTable = document.querySelector(
  "#multiplication-operations"
);

const createTable = (number, multiplicatiorNumber) => {
  multiplicationTable.innerHTML = "";

  for (i = 1; i <= multiplicatiorNumber; i++) {
    const result = number * i;

    const template = `<div class="row">
        <div class="operation">${number} x ${i} =</div>
        <div class="result">${result}</div
        </div>`;

    const parser = new DOMParser();

    const htmlTemplate = parser.parseFromString(template, "text/html");

    const row = htmlTemplate.querySelector(".row");

    multiplicationTable.appendChild(row);
  }

  multiplicationTitle.innerText = number;
};
