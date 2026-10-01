/* =========================
   ELEMENTOS
========================= */

const terminal = document.querySelector(".terminal-log");

const cpuChip = document.querySelector(".cpu-chip");
const ramChip = document.querySelector(".ram-chip");
const gpuChip = document.querySelector(".gpu-chip");
const ssdChip = document.querySelector(".ssd-chip");

const cpuBar = document.querySelector(".cpu");
const ramBar = document.querySelector(".ram");
const gpuBar = document.querySelector(".gpu");
const ssdBar = document.querySelector(".ssd");

const cpuValor = document.querySelector("#cpuValor");
const ramValor = document.querySelector("#ramValor");
const gpuValor = document.querySelector("#gpuValor");
const ssdValor = document.querySelector("#ssdValor");

const temperatura = document.querySelector("#temperatura");
const temperaturaGpu = document.querySelector("#temperaturaGpu");

const dataTransfer = document.querySelector("#dataTransfer");

/* =========================
   MENSAGENS
========================= */

const mensagens = [
  "INITIALIZING SYSTEM...",

  "CONNECTING TO HARDWARE...",

  "SCANNING MOTHERBOARD...",

  "CPU DETECTED",

  "MEMORY RAM DETECTED",

  "GPU DETECTED",

  "SSD DETECTED",

  "ANALYZING SYSTEM...",

  "HARDWARE SCAN COMPLETE",

  "ACCESS GRANTED",
];

let linha = 0;

/* =========================
   GERAR CÓDIGO NO FUNDO
========================= */

const codigoFundo = document.querySelector("#codigoFundo");

function criarCodigo() {
  const coluna = document.createElement("div");

  coluna.classList.add("codigo");

  coluna.textContent = Math.random().toString(2).substring(2, 14);

  coluna.style.left = Math.random() * 100 + "%";

  coluna.style.animationDuration = Math.random() * 5 + 4 + "s";

  coluna.style.animationDelay = Math.random() * 5 + "s";

  codigoFundo.appendChild(coluna);

  setTimeout(() => {
    coluna.remove();
  }, 10000);
}

setInterval(criarCodigo, 150);

/* =========================
   GERAR NÚMERO ALEATÓRIO
========================= */

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* =========================
   ATUALIZAR HARDWARE
========================= */

function atualizarHardware() {
  // CPU

  const cpu = numeroAleatorio(55, 95);

  cpuBar.style.width = cpu + "%";

  cpuValor.textContent = cpu + "%";

  // RAM

  const ram = numeroAleatorio(40, 85);

  ramBar.style.width = ram + "%";

  ramValor.textContent = ram + "%";

  // GPU

  const gpu = numeroAleatorio(50, 95);

  gpuBar.style.width = gpu + "%";

  gpuValor.textContent = gpu + "%";

  // SSD

  const ssd = numeroAleatorio(20, 60);

  ssdBar.style.width = ssd + "%";

  ssdValor.textContent = ssd + "%";

  // TEMPERATURA CPU

  const tempCpu = numeroAleatorio(45, 75);

  temperatura.textContent = tempCpu + "°C";

  // TEMPERATURA GPU

  const tempGpu = numeroAleatorio(50, 80);

  temperaturaGpu.textContent = tempGpu + "°C";

  // TRANSFERÊNCIA DE DADOS

  const dados = numeroAleatorio(300, 950);

  dataTransfer.textContent = dados + " MB/s";
}

setInterval(atualizarHardware, 1000);

/* =========================
   SISTEMA DE DETECÇÃO
========================= */

function detectarComponente(mensagem) {
  if (mensagem === "CPU DETECTED") {
    cpuChip.classList.add("detectado");
  }

  if (mensagem === "MEMORY RAM DETECTED") {
    ramChip.classList.add("detectado");
  }

  if (mensagem === "GPU DETECTED") {
    gpuChip.classList.add("detectado");
  }

  if (mensagem === "SSD DETECTED") {
    ssdChip.classList.add("detectado");
  }
}

/* =========================
   ESCREVER TERMINAL
========================= */

function escreverMensagem() {
  if (linha >= mensagens.length) {
    setTimeout(reiniciarSistema, 4000);

    return;
  }

  const mensagem = mensagens[linha];

  const novaMensagem = document.createElement("p");

  novaMensagem.textContent = "> " + mensagem;

  terminal.appendChild(novaMensagem);

  detectarComponente(mensagem);

  linha++;

  setTimeout(escreverMensagem, 1200);
}

/* =========================
   REINICIAR
========================= */

function reiniciarSistema() {
  terminal.innerHTML = "";

  cpuChip.classList.remove("detectado");

  ramChip.classList.remove("detectado");

  gpuChip.classList.remove("detectado");

  ssdChip.classList.remove("detectado");

  linha = 0;

  escreverMensagem();
}

/* =========================
   INICIAR
========================= */

escreverMensagem();

atualizarHardware();
