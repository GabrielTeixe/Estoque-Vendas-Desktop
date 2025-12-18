# 🏷️ Estoque Vendas Desktop

Sistema completo para gerenciamento de produtos, vendas e estoque, desenvolvido com **FastAPI** no backend e **React + TypeScript** no frontend.

---

## 🔹 Funcionalidades

- Dashboard com visão geral do estoque e vendas
- Cadastro, edição e exclusão de produtos
- Exibição de produtos em tabela editável
- Reset de valores do carrinho
- Interface amigável e responsiva
- API documentada via Swagger

---

## 📁 Estrutura do Projeto

estoque-vendas-desktop/
│
├── backend/ # FastAPI
│ ├── app/ # Código da API
│ ├── requirements.txt
│ └── venv/
│
├── frontend/ # React + TypeScript
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── ...
│
├── .gitignore
└── README.md



---

## ⚡ Tecnologias

- **Backend:** Python, FastAPI, Uvicorn  
- **Frontend:** React, TypeScript, CSS  
- **Banco de Dados:** Pode ser SQLite ou outro à sua escolha  
- **Controle de versão:** Git / GitHub  

---

## 🚀 Como rodar o projeto

### 1️⃣ Backend (FastAPI)
```bash
# Entrar na pasta do backend
cd backend

# Criar e ativar virtualenv
python -m venv venv
# Windows
venv\Scripts\activate
# Linux / Mac
source venv/bin/activate

# Instalar dependências
pip install -r requirements.txt

# Rodar a API
uvicorn app.main:app --reload

Acesse a API no navegador: http://127.0.0.1:8000

Swagger (documentação da API): http://127.0.0.1:8000/docs

# Entrar na pasta do frontend
cd frontend

# Instalar dependências
npm install

# Rodar o frontend
npm start
Acesse a aplicação no navegador: http://localhost:3000
