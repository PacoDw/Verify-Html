var express = require('express');
var router  = express.Router();

// Resutls page
router
      .get('/:id', function(req, res, next) {
          res.render('results', {title: "Resultados", id:req.params.id});
      })

      .post('/', (req, res) => {
        if(!req.files) return res.status(400).send('No files upload');

        // Verify if the request has many elements to return them in a correct array
        if(req.files.myfiles.length > 1)
            res.end(JSON.stringify(req.files));
        else
            res.end(JSON.stringify({"myfiles":[req.files.myfiles]}));
      });

module.exports = router;
