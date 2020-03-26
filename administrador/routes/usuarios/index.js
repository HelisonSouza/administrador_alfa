const express = require('express');
const router = express.Router();

//GET pagina de usuários
router.get('/', (req, res) => {
  res.render('usuarios/index');
});

module.exports = router;
