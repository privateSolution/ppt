//pré e pós promessa
const link1 =
  "https://docs.google.com/presentation/d/1UmnhRuhbkqM2NirqDNGTM-gLAHqZaVmvHIi3PFPNK3Q/edit#slide=id.g13420461203_20_0";
const link11 =
  "https://docs.google.com/spreadsheets/d/1dEEPrRR89lJcgtOOypDYZs5kCl-G90a0ywwt6nEl1PA/edit#gid=1659494052";
//reclamação durante a entrega
const link2 =
  "https://docs.google.com/presentation/d/1BE1zC_Y9kjqf8vT465Dkr2sNK3bxsiHO8DNEzsZyUD8/edit?pli=1#slide=id.g133c22d4a9d_0_0";
//reclamação pós entrega
const link3 =
  "https://docs.google.com/presentation/d/1NKTnSp6zs5pqHEhWR-6b86geSYDK4_dLAJRmJqPkdNs/edit#slide=id.g133c22d4a9d_0_0";
//post compra funcionalidades vendedor
const link4 =
  "https://docs.google.com/presentation/d/1v4feoFH7cJHis5elol5IbnrwPR1WYMM0-x3a1nh-ZE8/edit#slide=id.g13ebedf89ed_341_0";
//fsr
const link5 =
  "https://docs.google.com/presentation/d/1WfNpp3rs8pTXPV0V4kMZ3wBXetA14exz1pZ26ssyWMc/edit#slide=id.p1";
//bug
const link6 =
  "https://docs.google.com/presentation/d/1YdGGQFKiVCKZh1gKpVyIbCW_C42CWS0DvHgvEtcQihw/edit#slide=id.g22d184d4d76_495_3597";
//consultar placa do veiculo
const link7 = "https://buscaplacas.com.br/resultado.php?ref=cpcnew";
//outgoing
const link8 =
  "https://docs.google.com/forms/d/e/1FAIpQLSfWz5Kd7r5ADnc_z6z9VwEd1raCPA1IBp6CTcKnZUteehVWAg/viewform";
//árvore de transferências
const link9 =
  "https://docs.google.com/spreadsheets/d/1gZUzmgcIbUvftx42l_Ws_6zxzxbv1LA1ZN19fwPaEtY/edit#gid=1208426721";
//sauron
const link10 =
  "https://envios.mercadolivre.com.br/logistics/monitoring-distribution/detail/";

const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const nav3 = document.getElementById("nav3");
const nav4 = document.getElementById("nav4");
const nav5 = document.getElementById("nav5");
const nav6 = document.getElementById("nav6");
const nav7 = document.getElementById("nav7");
const nav8 = document.getElementById("nav8");
const nav9 = document.getElementById("nav9");
const nav11 = document.getElementById("nav11");

const frame1 = document.getElementById("frame1");
const frame2 = document.getElementById("frame2");
const frame3 = document.getElementById("frame3");
const frame4 = document.getElementById("frame4");
const frame5 = document.getElementById("frame5");
const frame6 = document.getElementById("frame6");
const frame7 = document.getElementById("frame7");
const frame8 = document.getElementById("frame8");
const frame9 = document.getElementById("frame9");
const frame11 = document.getElementById("frame11");

function hideAllFrames() {
  frame1.style.display = "none";
  frame11.style.display = "none";
  frame2.style.display = "none";
  frame3.style.display = "none";
  frame4.style.display = "none";
  frame5.style.display = "none";
  frame6.style.display = "none";
  frame7.style.display = "none";
  frame8.style.display = "none";
  // testes
  frame9div.style.display = "none";
  frame9.style.display = "none";
  //testes
  frame10.style.display = "none";
  // testes
  frame15div.style.display = "none";
  frame15.style.display = "none";
  // testes fim
}

nav1.addEventListener("click", () => {
  hideAllFrames();
  frame1.style.display = "flex";
  frame1.src = link1;
});

nav2.addEventListener("click", () => {
  hideAllFrames();
  frame2.style.display = "flex";
  frame2.src = link2;
});

nav3.addEventListener("click", () => {
  hideAllFrames();
  frame3.style.display = "flex";
  frame3.src = link3;
});

nav4.addEventListener("click", () => {
  hideAllFrames();
  frame4.style.display = "flex";
  frame4.src = link4;
});

nav5.addEventListener("click", () => {
  hideAllFrames();
  frame5.style.display = "flex";
  frame5.src = link5;
});

nav6.addEventListener("click", () => {
  hideAllFrames();
  frame6.style.display = "flex";
  frame6.src = link6;
});

nav7.addEventListener("click", () => {
  hideAllFrames();
  frame7.style.display = "flex";
  frame7.src = link7;
});

const frame8frame = document.getElementById("frame8frame");
const frame8extra = document.getElementById("frame8extra");
const link8extra =
  "https://docs.google.com/forms/d/e/1FAIpQLSf0jPCT14v6-5p6S2ERjfIa6o-guk98fe3AdJyIDzpkJdhlsQ/viewform";

nav8.addEventListener("click", () => {
  hideAllFrames();
  frame8.style.display = "flex";
  frame8frame.src = link8;
  frame8extra.src = link8extra;
});

nav9.addEventListener("click", () => {
  hideAllFrames();
  frame9.style.display = "flex";
  frame9.src = link9;
});

nav9.addEventListener("click", () => {
  hideAllFrames();
  frame9div.style.display = "flex";
  frame9.style.display = "flex";

  frame9.src = link9;

  setTimeout(() => {
    frame9.style.position = "absolute";
    frame9.style.top = "-6vh";
    frame9.style.left = "-0vw";
  }, 3000);
});

// Sauron

const nav10 = document.getElementById("nav10");
const frame10 = document.getElementById("frame10");

nav10.addEventListener("click", () => {
  hideAllFrames();
  frame10.style.display = "flex";
});

const inputField = document.getElementById("inputField");
const frame10frame = document.getElementById("frame10frame");

inputField.addEventListener("paste", (event) => {
  event.preventDefault();
  const pastedText = event.clipboardData.getData("text/plain");
  const numericValue = pastedText.replace(/[^\d]/g, ""); // Remove non-numeric characters
  inputField.value = numericValue;

  // Atualiza o placeholder
  inputField.placeholder = "Número colado: " + numericValue;

  // Atualiza o link do frame10frame
  frame10frame.src = link10 + numericValue;
  alert(link10 + numericValue);
});

inputField.addEventListener("input", () => {
  const numericValue = inputField.value.replace(/[^\d]/g, "");
  inputField.value = numericValue;

  numericValue = "";
});

nav11.addEventListener("click", () => {
  hideAllFrames();
  frame11.style.display = "flex";
  frame11.src = link11;
  setTimeout(() => {
    frame11.style.position = "absolute";
    frame11.style.top = "-20vh";
  }, 5000);
});

const nav15 = document.getElementById("nav15");
const frame15div = document.getElementById("frame15div");
const frame15 = document.getElementById("frame15");
