# Trilha do Saber — Site de apresentação

Site em React que apresenta o **Trilha do Saber**, plataforma de estudos adaptativa para preparação ao ENADE, desenvolvida como TCC do curso de Sistemas de Informação da UMC.

## Páginas

| Rota | Página |
|---|---|
| `/` | Início |
| `/sobre` | Sobre o projeto (problema e solução) |
| `/funcionalidades` | Funcionalidades e perfis de acesso |
| `/tecnologias` | Tecnologias utilizadas |
| `/equipe` | Integrantes e orientador |
| `/contato` | Formulário de contato |

## Tecnologias

- React + Vite
- React Router (navegação entre páginas)
- CSS puro (responsivo)

## Estrutura

```
src/
├── components/   # Header, Footer, Card, PageHeader...
├── pages/        # Uma página por arquivo
├── data.js       # Textos e listas do site
├── App.jsx       # Rotas
└── index.css     # Estilos
```

## Como rodar

```bash
npm install
npm run dev
```

## Deploy

Publicado na Vercel. O arquivo `vercel.json` redireciona todas as rotas para o `index.html`, para que as páginas do React Router funcionem ao recarregar.

## Integrantes

- Derick Alves Maschio
- Isabella Nicoliche Silva
- Thaíssa Victoria Bianchini de Oliveira

**Orientador:** Prof. Leonardo Cavalcante Alvino
