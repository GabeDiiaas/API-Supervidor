const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const VendaDia = sequelize.define('TBMOVTO_VENDA_DIA', {
  MVD_DIA: {
    type: DataTypes.DATE,
    allowNull: false
  },
  MVD_QTE_VENDAS: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  MVD_QTE_VENDIDA: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  MVD_VALOR_LIQUIDO: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  tableName: 'TBMOVTO_VENDA_DIA',
  timestamps: false
});

module.exports = VendaDia;
