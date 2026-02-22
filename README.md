(Português Abaixo)

English

# 🏷️ Desktop Inventory & Sales System

A complete system for **product management, sales, and inventory control**, developed with **FastAPI** for the backend and **React + TypeScript** for the frontend.

The project provides a full-stack architecture with a user-friendly interface, editable tables, and a dashboard for monitoring stock and sales data, simulating a practical business management environment.

---

## 🔹 Features

- Dashboard with stock and sales overview
- Create, update, and delete products
- Editable product table
- Cart value reset functionality
- Responsive and user-friendly interface
- API fully documented with Swagger/OpenAPI

---

## 📁 Project Structure


estoque-vendas-desktop/
│
├── backend/ # FastAPI backend
│ ├── app/ # API source code
│ ├── requirements.txt
│ └── venv/
│
├── frontend/ # React + TypeScript frontend
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── ...
│
├── .gitignore
└── README.md


---

## ⚡ Technologies

### Backend
- Python
- FastAPI
- Uvicorn

### Frontend
- React
- TypeScript
- CSS

### Database
- SQLite (or any database of your choice)

### Version Control
- Git / GitHub

---

## 🚀 Running the Project

### 1️⃣ Backend (FastAPI)

```bash
# Navigate to backend folder
cd backend

# Create and activate virtual environment
python -m venv venv

# Windows
venv\Scripts\activate

# Linux / macOS
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run API
uvicorn app.main:app --reload

Access the API in your browser:
http://127.0.0.1:8000

Swagger documentation:
http://127.0.0.1:8000/docs

2️⃣ Frontend (React)
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Run application
npm start

Access the application in your browser:
http://localhost:3000

🎯 Purpose

This project was created to demonstrate full-stack development skills, including API design, frontend integration, state management, and building practical business solutions with a clean and organized architecture.

👨‍💻 Author

Gabriel Teixeira
Full Stack Developer

Português BR

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
