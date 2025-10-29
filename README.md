# 🥋 Artes Marciais (Martial Arts)

* **Metodologia:** Kanban
* **Tema inicial:** Hangetsu Uzumaki – Artes Marciais (Hangetsu Uzumaki – Martial Arts)

---

## 👥 Equipe (Team)

| Recursos        | Papéis e Responsabilidades        |
| --------------- | --------------------------------- |
| **Hélio**       | Back-End / Teste / Banco de Dados |
| **João Santos** | Front-End / Banco de Dados        |
| **Rhayssa**     | Front-End / Banco de Dados        |

| Resources       | Roles and Responsibilities |
| --------------- | -------------------------- |
| **Hélio**       | Back-End / Test / Database |
| **João Santos** | Front-End / Database       |
| **Rhayssa**     | Front-End / Database       |

---

## 📂 Repositórios do Projeto (Project Repositories)


* 🌐 [Front-End (Web)](https://github.com/helio000/web-projeto2)
* ⚙️ [Back-End (API)](https://github.com/helio000/back-projeto-2025)
* 📱 [Mobile (App)](https://github.com/helio000/mobile-artes-marciais)

---

## 🧩 Diagramas do Projeto (Project Diagrams)

### 📘 Diagrama de Classes (Back-End)


<img src="api/imagem/UML DC (Diagrama de Classes) Back-End.png" alt="UML DC Backend" width="350"/>
=======
<img src="api/fotos/UML DC (Diagrama de Classes) Back-End.png" alt="UML DC Backend" width="350"/>


---

### 📗 DCU do Projeto (Project DCU)

<img src="api/imagem/DCU.jpeg" alt="Diagrama DCU" width="600"/>




---

### 📙 Diagrama Geral do Projeto (Project Diagram)

<img src="api/fotos/diagrama do projeto.jpeg" alt="Diagrama geral" width="600"/>

---

### 💀 Canva (Canvas)


<img src="api/imagem/atividade.jpeg" alt="Canva" width="600"/>




---

### 👽 Triângulo de Ferro (Iron Triangle)

<img src="api/imagem/atividade 2.jpeg" alt="Triângulo de Ferro" width="600"/>

---

### 🫡 SWOT (SWOT)

<img src="api/imagem/atividade 3.jpeg" alt="SWOT" width="600"/>

---

## ✅ Checklist de Testes – Projeto (Test Checklist – Project)

### ⚙️ Testes Gerais (General Tests)

* [x] Verificar se o endpoint `/` retorna **200** e informações da API.
  (Check if `/` endpoint returns 200 and API info)

---

### 🧑‍🎓 Testes de Alunos (Student Tests)

* [x] Criar aluno (POST /alunos) → verificar campos obrigatórios e email único.
* [x] Listar todos alunos (GET /alunos) → deve retornar lista completa.
* [x] Obter aluno por ID (GET /alunos/:id) → 200 se existir, 404 se não existir.
* [ ] Atualizar aluno (PUT/PATCH /alunos/:id) → alterar campos opcionais, mantendo email único.
* [x] Remover aluno (DELETE /alunos/:id) → 200 ou 204.
* [x] Login do aluno (POST /alunos/login) → credenciais válidas retornam token.
* [x] Validar token (GET /alunos/login) → 200 com token válido, 401 com inválido/expirado.

---

### 🥋 Testes de Professores (Teacher Tests)

* [x] Criar professor (POST /professores) → verificar campos obrigatórios e email único.
* [x] Listar todos professores (GET /professores).
* [x] Obter professor por ID (GET /professores/:id).
* [x] Atualizar professor (PUT/PATCH /professores/:id).
* [x] Remover professor (DELETE /professores/:id).

---

### 🏫 Testes de Turmas (Class Tests)

* [x] Criar turma (POST /turmas).
* [x] Listar todas turmas (GET /turmas).
* [x] Obter turma por ID (GET /turmas/:id).
* [x] Atualizar turma (PUT/PATCH /turmas/:id).
* [x] Remover turma (DELETE /turmas/:id).

---

### 🧾 Testes de Matrículas (Enrollment Tests)

* [x] Criar matrícula (POST /matriculas).
* [x] Listar todas matrículas (GET /matriculas).
* [x] Obter matrícula por ID (GET /matriculas/:id).
* [x] Atualizar matrícula (PUT/PATCH /matriculas/:id).
* [x] Remover matrícula (DELETE /matriculas/:id).

---

## 🧭 Passo a Passo para Testar (How to Test)

1. Clone este repositório
2. Abra o projeto no **VS Code**
3. Inicie o **MySQL** pelo **XAMPP** (ou outro método de sua preferência)
4. Crie o arquivo `.env` dentro da pasta `api/` com o conteúdo:



* 🌐 [Front-End (Web)](https://github.com/helio000/web-projeto2)
* ⚙️ [Back-End (API)](https://github.com/helio000/back-projeto-2025)
* 📱 [Mobile (App)](https://github.com/helio000/mobile-artes-marciais)

---

## 🧩 Diagramas do Projeto (Project Diagrams)

### 📘 Diagrama de Classes (Back-End)

<img src="api/imagem/UML DC (Diagrama de Classes) Back-End.png" alt="UML DC Backend" width="350"/>

---

### 📗 DCU do Projeto (Project DCU)

<img src="api/imagem/DCU do projeto.jpeg" alt="Diagrama DCU" width="600"/>

---

### 📙 Diagrama Geral do Projeto (Project Diagram)

<img src="api/imagem/diagrama do projeto.jpeg" alt="Diagrama geral" width="600"/>

---

### 💀 Canva (Canvas)

<img src="api/imagem/atividade.jpeg" alt="Canva" width="600"/>

---

### 👽 Triângulo de Ferro (Iron Triangle)

<img src="api/imagem/atividade 2.jpeg" alt="Triângulo de Ferro" width="600"/>

---

### 🫡 SWOT (SWOT)

<img src="api/imagem/atividade 3.jpeg" alt="SWOT" width="600"/>

---

## ✅ Checklist de Testes – Projeto (Test Checklist – Project)

### ⚙️ Testes Gerais (General Tests)

* [x] Verificar se o endpoint `/` retorna **200** e informações da API.
  (Check if `/` endpoint returns 200 and API info)

---

### 🧑‍🎓 Testes de Alunos (Student Tests)

* [x] Criar aluno (POST /alunos) → verificar campos obrigatórios e email único.
* [x] Listar todos alunos (GET /alunos) → deve retornar lista completa.
* [x] Obter aluno por ID (GET /alunos/:id) → 200 se existir, 404 se não existir.
* [ ] Atualizar aluno (PUT/PATCH /alunos/:id) → alterar campos opcionais, mantendo email único.
* [x] Remover aluno (DELETE /alunos/:id) → 200 ou 204.
* [x] Login do aluno (POST /alunos/login) → credenciais válidas retornam token.
* [x] Validar token (GET /alunos/login) → 200 com token válido, 401 com inválido/expirado.

---

### 🥋 Testes de Professores (Teacher Tests)

* [x] Criar professor (POST /professores) → verificar campos obrigatórios e email único.
* [x] Listar todos professores (GET /professores).
* [x] Obter professor por ID (GET /professores/:id).
* [x] Atualizar professor (PUT/PATCH /professores/:id).
* [x] Remover professor (DELETE /professores/:id).

---

### 🏫 Testes de Turmas (Class Tests)

* [x] Criar turma (POST /turmas).
* [x] Listar todas turmas (GET /turmas).
* [x] Obter turma por ID (GET /turmas/:id).
* [x] Atualizar turma (PUT/PATCH /turmas/:id).
* [x] Remover turma (DELETE /turmas/:id).

---

### 🧾 Testes de Matrículas (Enrollment Tests)

* [x] Criar matrícula (POST /matriculas).
* [x] Listar todas matrículas (GET /matriculas).
* [x] Obter matrícula por ID (GET /matriculas/:id).
* [x] Atualizar matrícula (PUT/PATCH /matriculas/:id).
* [x] Remover matrícula (DELETE /matriculas/:id).

---

## 🧭 Passo a Passo para Testar (How to Test)

1. Clone este repositório
2. Abra o projeto no **VS Code**
3. Inicie o **MySQL** pelo **XAMPP** (ou outro método de sua preferência)
4. Crie o arquivo `.env` dentro da pasta `api/` com o conteúdo:

>>>>>>> 05658bd894f7d18639d97e5d949c22aa31b26c3f
```env
DATABASE_URL="mysql://root@localhost:3306/escola?schema=public&timezone=UTC"
```

5. Rode o servidor com:

```bash
npm run dev
```

6. Teste os endpoints no **Insomnia** ou **Postman** 🚀
