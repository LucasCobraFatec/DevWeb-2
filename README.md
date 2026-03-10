# DevWeb-2 — Frontend

Versão frontend do projeto DevWeb-2 — uma aplicação construída com React, TypeScript e Vite.

**Status:** Pronto para desenvolvimento local. Código enviado para o repositório remoto.

## Visão geral

Este repositório contém a camada frontend do exercício 2 (React + TypeScript). A estrutura é minimalista, usando Vite para desenvolvimento rápido com HMR e suporte a TypeScript.

Principais tecnologias:
- React 18
- TypeScript
- Vite
- ESLint (configuração básica)

## Estrutura do projeto

- `public/` — ativos estáticos
- `src/` — código fonte da aplicação
  - `main.tsx` — ponto de entrada
  - `App.tsx` — componente raiz
  - `components/` — componentes React
  - `contexts/` — provedor(es) de contexto

## Pré-requisitos

- Node.js 18+ (ou versão estável LTS)
- npm ou yarn

## Instalação (local)

1. Instale dependências:

```bash
npm install
# ou
yarn
```

2. Rode em modo desenvolvimento (HMR):

```bash
npm run dev
# ou
yarn dev
```

3. Build de produção:

```bash
npm run build
# ou
yarn build
```

4. Servir artefatos de produção localmente:

```bash
npm run preview
# ou
yarn preview
```

## Scripts úteis (em `package.json`)

- `dev` — inicia o servidor de desenvolvimento
- `build` — cria os arquivos de produção
- `preview` — serve a build localmente
- `lint` — executa o ESLint (se configurado)

## Boas práticas e sugestões

- Adicione um arquivo `.gitignore` adequado (ex.: `node_modules`, `dist`, `.env`).
- Configure ESLint com regras de TypeScript mais estritas para produção.
- Documente componentes mais complexos e regras de estilo no repositório.

## Como contribuir

1. Faça um fork/clonar do repositório.
2. Crie uma branch com um nome descritivo: `feat/minha-funcionalidade`.
3. Abra um Pull Request explicando a mudança.

