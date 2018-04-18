const express       = require('express');
const router        = express.Router();

// Resutls page
router
    .get('/:id', (req, res) => {
        const mysql = require('../db/db-connect');
        
        mysql.query('SELECT * FROM verify WHERE name = ?', [req.params.id], (err, results, fileds) =>{
            if (err) throw err;

            res.render('results', {title: "Resultados", file: results[0]});
        });    
    });

module.exports = router;



// THIS IMPLEMENTATIONS WAS NOT WORK FOR ME--------------------------------------------- 
        //     const verifyModel   = require('../db/mysql_connect')
    //     // console.log(`Entro url: ${req.params.id}`);

    //     verifyModel.find('all', { where: `name = Prueba`}, (err, rows, fields) => {
    //         if(err) 
    //         {
    //             console.log('Hubo un problema')
    //             throw err;
    //         }
    //         console.log(`rows: ${rows}`)
    //     res.render('results', {title: "Resultados", file: rows[0]});
    // });
    //     // next();
// --------------------------------------------------------------------------------------