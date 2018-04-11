var express = require('express');
var router  = express.Router();

// Resutls page
router
      .get('/:id', function(req, res, next) {
          res.render('results', {title: "Resultados", id:req.params.id})
      });

module.exports = router;
