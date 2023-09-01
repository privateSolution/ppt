const produInput = document.getElementById("produInput");
const produCasos = document.getElementById("produCasos");
const clear = document.getElementById("clear");
let sequenceNumber = parseInt(localStorage.getItem("sequenceNumber")) || 1;
const casesData = JSON.parse(localStorage.getItem("casesData")) || [];

produInput.addEventListener("paste", (e) => {
  e.preventDefault();

  const tempo = new Date();
  const hora = tempo.getHours();
  const minuto = tempo.getMinutes();
  const horaFormatada = `${hora}:${minuto}`;

  const clipboardData = e.clipboardData || window.clipboardData;
  const pastedData = clipboardData.getData("text");

  // Verificar se os dados têm exatamente 9 caracteres numéricos
  const isValidInput = /^\d{9}$/.test(pastedData);

  if (isValidInput) {
    // Verificar se os dados já existem para evitar duplicatas
    const isDuplicate = casesData.some((caseItem) =>
      caseItem.content.includes(pastedData)
    );

    if (!isDuplicate) {
      const caseData = {
        id: sequenceNumber,
        content: `${pastedData} - Caso #${sequenceNumber} - ${horaFormatada}`,
      };

      casesData.push(caseData);
      sequenceNumber++;

      saveCasesToLocalStorage();
      renderCases();
    } else {
      alert("Os dados já foram colados antes e são duplicados.");
    }
  } else {
    alert("Por favor, cole um número exatamente com 9 caracteres.");
  }
});

function saveCasesToLocalStorage() {
  localStorage.setItem("casesData", JSON.stringify(casesData));
  localStorage.setItem("sequenceNumber", sequenceNumber);
}

function renderCases() {
  produCasos.innerHTML = "";

  casesData.forEach((caseData) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = caseData.content;
    produCasos.appendChild(paragraph);
  });
}

renderCases();

clear.addEventListener("click", () => {
  sequenceNumber = 1;
  casesData.length = 0;
  saveCasesToLocalStorage();
  renderCases();
});
