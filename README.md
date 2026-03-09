# API de Pedidos

![Node.js](https://img.shields.io/badge/Node.js-18-green)
![Express](https://img.shields.io/badge/Express.js-Framework-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![License](https://img.shields.io/badge/license-MIT-blue)

API REST para gerenciamento de pedidos desenvolvida com Node.js, Express e MongoDB.


# API de Pedidos

API REST para gerenciamento de pedidos desenvolvida com Node.js, Express e MongoDB.

## Tecnologias utilizadas

- Node.js
- Express
- MongoDB
- Mongoose

## Funcionalidades

A API permite realizar operações de CRUD em pedidos:

- Criar um pedido
- Listar todos os pedidos
- Buscar um pedido pelo número
- Atualizar um pedido
- Deletar um pedido

## Estrutura do Pedido

Exemplo de objeto de pedido:

```json
{
  "numeroPedido": "pedido-001",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}

## Instalação

Clone o repositório:

git clone https://github.com/seuusuario/api-pedidos.git

Entre na pasta do projeto:

cd api-pedidos

Instale as dependências:

npm install

## Executando o projeto

Execute o servidor:

node server.js

## Endpoints

Criar pedido

POST /orders

Listar pedidos

GET /orders

Buscar pedido

GET /orders/:numeroPedido

Atualizar pedido

PUT /orders/:numeroPedido

Deletar pedido

DELETE /orders/:numeroPedido

## Autor 

Meirian Barbosa dos Santos

Desenvolvedor Backend em formação