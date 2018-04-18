const express = require('express');
const router  = express.Router();

// Index page
router
        .get('/', (req, res) => {
            res.render('index');
        })

        .post('/', (req, res) => {
            if(!req.files) return res.status(400).send('No files upload');
    
            console.log(`req.length: \n ${req.files.myfiles.length}`);
            
            const verify = require('../controller/verify');
            const mysql = require('../db/db-connect');
                
                
            // Verify if the request has many elements to return them in a correct array
            if(req.files.myfiles.length > 1)
            {
                
                // verify.verifyAll();
                res.end(JSON.stringify(req.files));
            }
            else
            {
                let verify_results = verify.verifyAll(req.files.myfiles.data, req.files.myfiles.name);

                // console.log(`RES: ${JSON.stringify(verify_results.files, null, 1)}`);

                mysql.query('INSERT INTO verify SET ?', verify_results.files[0], (err, results, fileds) =>{
                    if (err) throw err;
        
                    // res.render('results', {title: "Resultados", file: results[0]});
                });  

                res.end(JSON.stringify({"myfiles":[req.files.myfiles]}));
            }
        });

module.exports = router;
