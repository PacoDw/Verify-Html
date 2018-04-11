const express = require('express');
const router  = express.Router();

// Index page
router
      .get('/', function(req, res, next) {
          res.render('index', { title: 'Express' });
      });

module.exports = router;
