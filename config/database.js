const mongoose = require('mongoose');

const connectDatabase = async () => {

  try {

    await mongoose.connect(
      "mongodb+srv://admin:M705713%40@cluster0.4bwy7ym.mongodb.net/api-pedidos?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("Banco conectado no MongoDB Atlas");

  } catch (error) {

    console.error("Erro ao conectar no banco:", error);

  }

};

module.exports = connectDatabase;