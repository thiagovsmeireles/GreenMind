# 💚 GreenMindSys — Landing Page Institucional

![Status](https://img.shields.io/badge/Status-Estático_Pronto-green)
![Tecnologias](https://img.shields.io/badge/Tecnologias-HTML%2C%20CSS%2C%20React%20%26%20Tailwind-blue)
![Licença](https://img.shields.io/badge/Licen%C3%A7a-Propriet%C3%A1ria-red)

Landing page institucional da **GreenMindSys**, uma Software House focada em desenvolvimento de sites, apps, sistemas e automações.

Este projeto é totalmente estático (`HTML`, `CSS`, `JS`) e não exige build, com destaque para a integração a WhatsApp e a utilização de componentes React (UMD) na seção principal.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído com as seguintes ferramentas e bibliotecas:

* **HTML5**
* **CSS3** (custom, variáveis e responsividade pura)
* **TailwindCSS CDN** (Apoio ao grid e utilitários)
* **JavaScript Vanilla**
* **React 18** (UMD)
* **ReactDOM 18** (UMD)
* **Chart.js**
* **Unsplash** / Imagens CDN
* **Google Fonts** (`Poppins` & `Inter`)

---

## 🧩 Funcionalidades

### Estrutura & Navegação

* **Navbar fixa:** Navegação fluida por âncoras (`#hero`, `#servicos`, etc.).
* **Botão “Orçamento”:** Link direto configurável para WhatsApp.
* **Sessões completas:** Hero, Serviços, Processo, Portfólio, Depoimentos & Parceiros, Preços, Sobre, FAQ, Formulário de contato e Footer completo.

### Componentes Dinâmicos

* **Hero com componente React:** O root `#react-hero-root` renderiza uma arte animada ou componente visual via React.
* **Modal de Cases:**
    * Abertura controlada pelo atributo `data-open-case`.
    * Conteúdo dinâmico preenchido via JavaScript.

### UX/UI & Acessibilidade

* **Formulário de Contato:** Validação nativa do HTML + feedback visual (`mock` de envio).
* **Animações e UI:** Hover effects, Neon highlights (cor principal: `#28FF9C`), e Dark mode fixo.

---

## 📂 Estrutura de Arquivos


.├── index.html
 ├── styles.css
 ├── script.js
 └── assets/
    └── logo.png

---

## ⚙️ Como Rodar o Projeto

Este projeto é puramente estático e não exige nenhuma instalação ou processo de `build`.

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/seu-usuario/seu-repo.git](https://github.com/seu-usuario/seu-repo.git)
    ```
2.  Acesse a pasta do projeto:
    ```bash
    cd seu-repo
    ```
3.  Abra o arquivo no seu navegador:
    ```bash
    index.html
    ```

> ⛔ **Não exige build.**
> ⛔ **Não precisa instalar dependências.**
> ⛔ **Tudo funciona diretamente no navegador.**

---

## 🛠️ Customização

### 1. Editar Serviços
Altere os conteúdos na seção `#servicos` modificando os elementos `<article class="card-item">`.

### 2. Editar Cases do Portfólio
Modifique os atributos de dados (data attributes) na seção de Portfólio para atualizar os modais dinâmicos:

* `data-case-title=""`
* `data-case-tech=""`
* `data-case-desc=""`

### 3. Alterar WhatsApp Geral
O número de WhatsApp está definido em três locais principais para facilidade de atualização:

* `Navbar`
* `Hero`
* `Footer`

---

## 📱 Responsividade & SEO

* Todo o layout foi projetado com a abordagem **mobile-first**.
* O grid foi estruturado com CSS puro e otimizado com classes de apoio do Tailwind.
* Inclui **SEO e Metadados** essenciais: `<meta description>`, `<meta keywords>`, **Open Graph** (para redes sociais) e **Favicon**.

---

## 📜 Licença

Este projeto é **proprietário** da GreenMindSys. Seu uso é estritamente restrito e não é permitido o uso comercial ou redistribuição sem autorização.
