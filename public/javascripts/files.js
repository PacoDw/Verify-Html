'use strict';
(function(){    
    // Get the form with query selector
    let form = document.querySelector('#form');

    // This is a event that occurs when you make click
    form.onsubmit = function(e) {
        e.preventDefault();

        //First we create an object formdata and we then put in the html form
        const formData = new FormData(form);

        // Get the file input 
        let myfiles = document.querySelector("#myfiles") 
        // Get all the files 
        let files = myfiles.files;

        // Then put in all the files inside the form
        formData.append('myfiles' , files);
        
        // Clean the file input 
        myfiles.value = '';

        // Finally we create the ajax request for the server
        let xhr = new XMLHttpRequest();

            xhr.onload = () => {
    
                if(xhr.status !== 200)
                {
                    console.log(xhr.response);
                    alert('Algo salio mal');
                }
                else
                {
                    // Selec the ul element from the html
                    let _ul = document.querySelector('#ul_files');
                    
                    // convert the response to a json object
                    let r = JSON.parse(xhr.response)
                    
                    // If the response has many element we need to iterate over it
                    r.myfiles.forEach(file => {
                        let _li = document.createElement('li');
                        
                        let _a  = document.createElement('a');
                        _a.setAttribute('href', `/results/${file.name}`);
                        _a.innerHTML = file.name;

                        _li.appendChild(_a);
                        _ul.insertBefore(_li, _ul.length);
                    });

                }
            }
            xhr.open('POST', form.getAttribute('action'));
            xhr.send(formData);
    }
})();   