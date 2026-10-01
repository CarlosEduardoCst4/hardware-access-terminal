# 🖥️ Hardware Access Terminal

> Interface interativa e futurista desenvolvida para uma apresentação acadêmica sobre **Hardware e componentes de computadores**.

## 📌 Sobre o projeto

O **Hardware Access Terminal** é uma interface web com estética inspirada em terminais de sistemas e interfaces hacker/cyberpunk.

O projeto foi desenvolvido para ser utilizado em uma **feira acadêmica**, funcionando como um recurso visual para apresentar de forma mais dinâmica os principais componentes de um computador.

Enquanto o sistema é executado, a interface simula uma análise do hardware, apresentando informações como utilização da CPU, memória RAM, GPU, armazenamento, temperatura e transferência de dados.

## 🎯 Objetivos

- Apresentar conceitos de hardware de maneira visual e interativa;
- Demonstrar a função dos principais componentes de um computador;
- Utilizar programação web como ferramenta de apoio para uma apresentação acadêmica;
- Criar uma interface visualmente atrativa para um monitor externo;
- Demonstrar na prática a integração entre **HTML, CSS e JavaScript**.

## ⚙️ Tecnologias utilizadas

- **HTML5** — estrutura da aplicação;
- **CSS3** — estilização, efeitos visuais e animações;
- **JavaScript** — lógica, atualização dos dados e funcionamento do sistema.

## 🧩 Componentes representados

A interface apresenta uma simulação de monitoramento dos seguintes componentes:

- 🧠 CPU — Processador
- 💾 RAM — Memória RAM
- 🎮 GPU — Placa de vídeo
- 💿 SSD — Armazenamento
- 🌡️ Temperatura da CPU
- 🌡️ Temperatura da GPU
- 📡 Transferência de dados
- 🔌 Fluxo de comunicação entre componentes

## 🖥️ Funcionamento

O sistema executa uma sequência automática de análise:

```text
INITIALIZING SYSTEM...
        ↓
CONNECTING TO HARDWARE...
        ↓
SCANNING MOTHERBOARD...
        ↓
CPU DETECTED
        ↓
MEMORY RAM DETECTED
        ↓
GPU DETECTED
        ↓
SSD DETECTED
        ↓
HARDWARE SCAN COMPLETE
        ↓
ACCESS GRANTED
```

Após a conclusão da análise, o sistema reinicia automaticamente, permitindo que a interface fique funcionando continuamente durante a apresentação.

## ✨ Recursos

### 📊 Monitoramento visual

As barras de CPU, RAM, GPU e SSD possuem valores que são atualizados automaticamente, criando a aparência de um monitoramento em tempo real.

### 🌡️ Temperatura

A interface apresenta valores simulados de temperatura da CPU e GPU.

### 📡 Transferência de dados

O sistema também apresenta uma taxa de transferência de dados que é atualizada dinamicamente.

### 🧩 Detecção dos componentes

Durante a sequência de inicialização, cada componente é destacado visualmente quando é "detectado".

### 💻 Interface Hacker

O projeto utiliza:

- fundo escuro;
- brilho neon;
- efeitos de terminal;
- código digital;
- scanner animado;
- elementos futuristas;
- animações CSS.

## 📁 Estrutura do projeto

```text
FeiraHardware/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Responsável pela estrutura da interface e pelos elementos exibidos na tela.

### `style.css`

Responsável pelo visual do projeto, incluindo cores, layout, efeitos neon, animações e responsividade.

### `script.js`

Responsável pela lógica da aplicação, incluindo atualização dos valores, detecção dos componentes, geração do código de fundo e funcionamento do loop automático.

## ▶️ Como executar

Não é necessário instalar dependências ou configurar um servidor.

### 1. Clone o repositório

```bash
git clone URL_DO_SEU_REPOSITORIO
```

### 2. Entre na pasta

```bash
cd FeiraHardware
```

### 3. Abra o projeto

Abra o arquivo:

```text
index.html
```

em um navegador como Google Chrome ou Microsoft Edge.

### 4. Tela cheia

Para utilizar durante a apresentação, pressione:

```text
F11
```

Também é possível conectar o notebook a um monitor externo utilizando HDMI e configurar o Windows para duplicar ou estender a tela.

## 🎓 Contexto acadêmico

Este projeto foi desenvolvido como recurso visual para uma apresentação acadêmica relacionada à área de **Tecnologia da Informação**, com foco em **Hardware e componentes de computadores**.

A proposta é utilizar programação para transformar conceitos técnicos em uma experiência visual mais interativa para o público.

## 🚀 Possíveis melhorias futuras

- [ ] Adicionar representação visual mais detalhada da placa-mãe;
- [ ] Criar animação de fluxo de dados entre os componentes;
- [ ] Adicionar informações detalhadas sobre cada componente;
- [ ] Adicionar efeitos sonoros opcionais;
- [ ] Criar modo de apresentação;
- [ ] Adicionar gráficos de monitoramento;
- [ ] Criar uma versão responsiva para diferentes resoluções;
- [ ] Adicionar suporte a temas diferentes.

## 👨‍💻 Autor

**Carlos Eduardo Costa**

Projeto desenvolvido para fins acadêmicos e de demonstração de conhecimentos em desenvolvimento web e hardware.
