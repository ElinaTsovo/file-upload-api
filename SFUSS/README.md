# File Upload API

Este projeto é uma API Node.js com Express para o upload e recuperação de ficheiros. Utiliza MongoDB para armazenar metadados e permite que os utilizadores carreguem ficheiros de diferentes tipos.

## 🔗 Descrição do Desafio

- **Submeta a URL do repositório e o link de demonstração.**
- **Como utilizador:**
  - Quero carregar ficheiros de vários tipos para o serviço.
  - Quero recuperar os meus ficheiros carregados usando um identificador único.
  - Quero receber mensagens de erro informativas se o carregamento falhar.
- **Como programador:**
  - O serviço deve lidar com vários tipos de ficheiros de forma eficiente.
  - O serviço deve limitar o tamanho do ficheiro para evitar abusos.
  - Metadados como nome do ficheiro, tamanho e hora de carregamento devem ser armazenados e facilmente acessíveis.
  - Identificadores únicos devem ser atribuídos para evitar colisões de nomes.

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Multer
- TypeScript

## 📁 Estrutura de Pastas

```
├── controllers
│   └── file.controller.ts
├── middleware
│   └── upload.ts
├── routes
│   └── file.routes.ts
├── models
│   └── file.model.ts
├── app.ts
├── server.ts
└── README.md
```

## 📦 Instalação

```bash
npm install
```

## ▶️ Como Executar

```bash
npm run dev
```

## 🔄 Rotas da API

```ts

fileRouter.post('/post', uploding.single('file'), uploadfile.createFileUpload.bind(uploadfile));
fileRouter.get('/get', uploadfile.getAllFiles.bind(uploadfile));
fileRouter.get('/get-by-id/:_id', uploadfile.getFileByID.bind(uploadfile));
```

## 🧪 Teste

Utilize o [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/) para testar as rotas:

- **POST /post**: Enviar ficheiro com form-data (chave `file`)
- **GET /get**: Listar todos os ficheiros
- **GET /get-by-id/:\_id**: Recuperar ficheiro por ID

## 📤 Demonstração

- **Repositório:** [https://github.com/ElinaTsovo/file-upload-api/tree/master/SFUSS](#)
- **Demo:** [Não estou a conseguir fazer deploy😭😭💔💔](#)

---

Feito com ❤️ por Elina Tsovo

