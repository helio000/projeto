const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Criar professor
const create = async (req, res) => {
  try {
    const { nome, email, telefone, arteMarcial, datanasc, cpf } = req.body;

    // Verifica se todos os campos obrigatórios estão presentes
    if (!nome || !email || !telefone || !datanasc || !cpf) {
      return res.status(400).json({ error: "Todos os campos obrigatórios devem ser preenchidos." });
    }

    // Verifica se já existe um professor com o mesmo email ou cpf
    const existing = await prisma.professor.findUnique({
      where: { email: email.trim().toLowerCase() }
    });
    if (existing) return res.status(400).json({ error: 'Email já existe para outro professor!' });

    const cpfExists = await prisma.professor.findUnique({
      where: { cpf: cpf.trim() }
    });
    if (cpfExists) return res.status(400).json({ error: 'CPF já cadastrado!' });

    // Converte a data de nascimento corretamente
    const dataNascimento = new Date(datanasc);  // Garantir que a data está no formato correto

    // Criação do professor no banco de dados
    const professor = await prisma.professor.create({
      data: {
        nome: nome.trim(),
        email: email.trim().toLowerCase(),
        telefone: telefone.trim(),
        arteMarcial: arteMarcial?.trim(),
        datanasc: dataNascimento,
        cpf: cpf.trim()
      },
    });

    res.status(201).json(professor);
  } catch (error) {
    console.error("Erro ao criar professor:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Listar todos os professores
const read = async (req, res) => {
  try {
    const professores = await prisma.professor.findMany();
    res.status(200).json(professores);
  } catch (error) {
    console.error("Erro ao buscar professores:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Buscar professor por ID
const readOne = async (req, res) => {
  const idNum = parseInt(req.params.id);
  if (isNaN(idNum)) return res.status(400).json({ error: "ID inválido" });

  try {
    const professor = await prisma.professor.findUnique({ where: { id: idNum } });
    if (!professor) return res.status(404).json({ error: 'Professor não encontrado' });
    res.status(200).json(professor);
  } catch (error) {
    console.error("Erro ao buscar professor:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Atualizar professor
const update = async (req, res) => {
  const idNum = parseInt(req.params.id);
  if (isNaN(idNum)) return res.status(400).json({ error: "ID inválido" });

  try {
    const { email, cpf, ...rest } = req.body;

    if (email) {
      const existing = await prisma.professor.findUnique({ where: { email: email.trim().toLowerCase() } });
      if (existing && existing.id !== idNum) return res.status(400).json({ error: 'Email já existe para outro professor!' });
    }

    if (cpf) {
      const cpfExists = await prisma.professor.findUnique({ where: { cpf: cpf.trim() } });
      if (cpfExists && cpfExists.id !== idNum) return res.status(400).json({ error: 'CPF já cadastrado!' });
    }

    // Atualiza professor no banco de dados
    const professor = await prisma.professor.update({
      where: { id: idNum },
      data: {
        email: email?.trim().toLowerCase(),
        cpf: cpf?.trim(),
        ...rest
      },
    });

    res.status(200).json(professor);
  } catch (error) {
    console.error("Erro ao atualizar professor:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Remover professor
const remove = async (req, res) => {
  const idNum = parseInt(req.params.id);
  if (isNaN(idNum)) return res.status(400).json({ error: "ID inválido" });

  try {
    await prisma.professor.delete({ where: { id: idNum } });
    res.status(200).json({ message: 'Professor removido com sucesso' });
  } catch (error) {
    console.error("Erro ao remover professor:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Login do professor
const loginProfessor = async (req, res) => {
  const { nome, email } = req.body;

  if (!nome || !email) return res.status(400).json({ error: "Nome e e-mail são obrigatórios" });

  try {
    const professor = await prisma.professor.findFirst({
      where: { nome: nome.trim(), email: email.trim().toLowerCase() }
    });

    if (!professor) return res.status(401).json({ error: "Nome ou e-mail incorretos" });

    res.status(200).json({ message: "Login realizado com sucesso!", professor });
  } catch (error) {
    console.error("Erro no login do professor:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

module.exports = { create, read, readOne, update, remove, loginProfessor };
