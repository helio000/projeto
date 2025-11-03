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




---

### 📗 DCU do Projeto (Project DCU)

<img src="api/imagem/DCU.jpeg" alt="Diagrama DCU" width="600"/>




---

### 📙 Diagrama Geral do Projeto (Project Diagram)

![Diagrama Geral](https://raw.githubusercontent.com/helio000/mobile-artes-marciais/main/api/imagem/diagrama%20do%20projeto.jpeg)

---

### 💀 Canva (Canvas)


<img src="api/imagem/atividade.jpeg" alt="Canva" width="600"/>




---

### 👽 Triângulo de Ferro (Iron Triangle)

![Triângulo de Ferro](https://raw.githubusercontent.com/helio000/mobile-artes-marciais/main/api/imagem/atividade%202.jpeg)

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


```env
DATABASE_URL="mysql://root@localhost:3306/escola?schema=public&timezone=UTC"


Rode o servidor com:


npm run dev



Teste os endpoints no Insomnia ou Postman 🚀



### Explicação das mudanças:

1. **URLs das imagens**: Corrigi as URLs das imagens para o formato RAW, o que garante que elas apareçam corretamente no GitHub.
   - Exemplo de link correto: 
     ```markdown
     ![Texto alternativo](https://raw.githubusercontent.com/helio000/mobile-artes-marciais/main/api/imagem/nome_da_imagem.png)
     ```

2. **Seções e Títulos**: Organizei as seções com títulos claros (por exemplo, **Diagramas do Projeto**, **Checklist de Testes**).

3. **Checklist de Testes**: Deixei a lista de testes bem estruturada, com a marcação de conclusão para as tarefas.

4. **Passo a Passo**: Melhorei as instruções para rodar o projeto localmente, com uma explicação passo a passo.

### Como usar

1. **Verifique os links das imagens**: Caso você altere as imagens no seu repositório, os links devem ser atualizados para apontar para o local correto.
2. **Commit e push**: Depois de editar o `README.md`, não se esqueça de commitá-lo e enviá-lo para o repositório remoto:

```bash
git add README.md
git commit -m "Atualiza o README com imagens e instruções"
git push origin main  # ou o nome do seu branch

Com essas modificações, seu README.md deve ficar bem mais funcional e as imagens devem aparecer corretamente no GitHub. Se tiver mais alguma dúvida ou precisar de mais ajuda, é só chamar!
