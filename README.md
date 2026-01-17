# 🍎 Nutritional Info - Angular Project

Este é um projeto simples desenvolvido com o objetivo de colocar em prática os fundamentos do **Angular** e a integração com **APIs externas**. O foco principal foi aprender a consumir dados, gerenciar estados básicos e entender o fluxo de dados entre componentes.

---

LINK DO DEPLOY: https://angular-project-nutrition.vercel.app

## 🎯 Objetivo do Projeto

O projeto foi criado com o intuito pedagógico de aprender:

- **Componentes Standalone**: Estruturação de componentes modernos no Angular.
- **Data Binding**: Uso de `[(ngModel)]` para capturar entradas e interpolação `{{ }}` para exibir dados.
- **Integração com API**: Consumo da API nutricional do **USDA (U.S. Department of Agriculture)**.
- **Backend como Proxy**: Criação de um servidor Node.js simples para gerenciar chaves de API e tratar dados antes de enviá-los ao frontend.
- **Controle de Fluxo**: Aplicação das novas diretivas `@if` do Angular para renderização condicional.

---

## 🛠️ Tecnologias Utilizadas

### Frontend

- **Angular 17/18+**: Framework principal.
- **Tailwind CSS**: Para estilização rápida e responsiva.
- **TypeScript**: Linguagem base do projeto.

### Backend (Proxy)

- **Node.js**: Ambiente de execução.
- **Express**: Para criação das rotas de busca.
- **Dotenv**: Para proteção das chaves de API.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js instalado.
- Uma chave de API do [USDA FoodData Central](https://fdc.nal.usda.gov/api-key-signup.html).

### 1. Configurando o Backend

1.  Navegue até a pasta `/backend`.
2.  Crie um arquivo `.env` e adicione sua chave:
    ```env
    API_KEY=sua_chave_aqui
    ```
3.  Instale as dependências e inicie o servidor:
    ```bash
    npm install
    npm start
    ```
    _O servidor rodará em http://localhost:4444_

### 2. Configurando o Frontend

1.  Navegue até a pasta raiz do projeto Angular.
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```bash
    ng serve
    ```
4.  Acesse `http://localhost:4200` no seu navegador.

---

## 💡 Aprendizados Adquiridos

Durante o desenvolvimento, enfrentei desafios como:

1.  **Tratamento de Dados**: Aprender a filtrar nutrientes específicos (Calorias, Proteínas, etc.) dentro de arrays complexos de APIs governamentais.
2.  **Sintaxe Angular**: Transição do uso de `*ngIf` para a sintaxe moderna `@if`.
3.  **Depuração**: Resolução de erros de comunicação entre frontend e backend (CORS e parâmetros de busca).

---

Feito com foco no aprendizado por Breno!
