const Order = require('../models/orderModel');
const { generateId } = require('../utils/idGenerator');

let orders = [];

exports.create = (data) => {

  const order = new Order({
    id: generateId(),
    cliente: data.cliente,
    produto: data.produto,
    valor: data.valor
  });

  orders.push(order);

  return order;
};

exports.list = () => {
  return orders;
};

exports.getById = (id) => {
  return orders.find(o => o.id == id);
};

exports.update = (id, data) => {

  const order = orders.find(o => o.id == id);

  if (!order) return null;

  order.cliente = data.cliente ?? order.cliente;
  order.produto = data.produto ?? order.produto;
  order.valor = data.valor ?? order.valor;

  return order;
};

exports.remove = (id) => {

  const index = orders.findIndex(o => o.id == id);

  if (index === -1) return false;

  orders.splice(index, 1);

  return true;
};