const Order = require('../models/orderModel');

exports.createOrder = async (req, res) => {

  try {

    const order = await Order.create(req.body);

    res.status(201).json(order);

  } catch (error) {

    res.status(500).json({
      message: "Erro ao criar pedido",
      error: error.message
    });

  }

};


exports.listOrders = async (req, res) => {

  try {

    const orders = await Order.find();

    res.json(orders);

  } catch (error) {

    res.status(500).json({
      message: "Erro ao listar pedidos"
    });

  }

};


exports.getOrder = async (req, res) => {

  try {

    const order = await Order.findOne({
      numeroPedido: req.params.numeroPedido
    });

    if (!order) {

      return res.status(404).json({
        message: "Pedido não encontrado"
      });

    }

    res.json(order);

  } catch (error) {

    res.status(500).json({
      message: "Erro ao buscar pedido"
    });

  }

};



exports.updateOrder = async (req, res) => {

  try {

    const order = await Order.findOneAndUpdate(
      { numeroPedido: req.params.numeroPedido },
      req.body,
      { new: true }
    );

    if (!order) {

      return res.status(404).json({
        message: "Pedido não encontrado"
      });

    }

    res.json(order);

  } catch (error) {

    res.status(500).json({
      message: "Erro ao atualizar pedido"
    });

  }

};


exports.deleteOrder = async (req, res) => {

  try {

    const order = await Order.findOneAndDelete({
      numeroPedido: req.params.numeroPedido
    });

    if (!order) {

      return res.status(404).json({
        message: "Pedido não encontrado"
      });

    }

    res.json({
      message: "Pedido deletado com sucesso"
    });

  } catch (error) {

    res.status(500).json({
      message: "Erro ao deletar pedido"
    });

  }

};