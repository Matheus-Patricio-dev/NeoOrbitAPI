import pkg from 'pg';
import { DatabaseError } from 'pg';
const { Client } = pkg;

// Configuração da conexão com o PostgreSQL
const client = new Client({
  host: process.env.DB_HOST,      // Endereço do servidor (pode ser localhost)
  port:  process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined,            // Porta padrão do PostgreSQL
  user: process.env.DB_USER,    // Seu usuário do PostgreSQL
  password: process.env.DB_PASSWORD,  // Sua senha do PostgreSQL
  database: process.env.DB_NAME  // Nome do banco de dados que você vai acessar
});

// Conectando ao PostgreSQL
client.connect()
    .then(() => console.log('Conectado ao banco de dados PostgreSQL com sucesso!'))
    .catch((err: DatabaseError) => console.error('Erro ao conectar ao banco de dados:', err.stack));

export default client