const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  idItem: {
    type: String,
    required: true
  },
  quantidadeItem: {
    type: Number,
    required: true
  },
  valorItem: {
    type: Number,
    required: true
  }
});

const orderSchema = new mongoose.Schema({

  numeroPedido: {
    type: String,
    required: true,
    unique: true
  },

  valorTotal: {
    type: Number,
    required: true
  },

  dataCriacao: {
    type: Date,
    required: true
  },

  items: [itemSchema]

});

module.exports = mongoose.model('Order', orderSchema);