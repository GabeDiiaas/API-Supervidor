const express = require('express');
const router = express.Router();
const VendaDia = require('../models/vendaDia');

router.get('/vendas-dia', async (req, res) => {
  try {
    const vendas = await VendaDia.findAll({
      attributes: ['MVD_DIA', 'MVD_QTE_VENDAS', 'MVD_QTE_VENDIDA', 'MVD_VALOR_LIQUIDO']
    });
    res.json(vendas);
  } catch (error) {
    console.error('Erro ao buscar vendas:', error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
});

module.exports = router;
