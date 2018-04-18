function Verify(){}

Verify.prototype.htmlComments = function(files){
    const regex_comment = /<!--(?!\s*\[if[^]]+]>[^<]*<!\[endif\]).*?-->/g;

    let res = files.toString('utf8').match(regex_comment);
    
    if(res == undefined)
        return {htmlComments: 'Nothing', count: 0}
    else
        return {htmlComments: res.toString(), count: res.length}
}

Verify.prototype.appComments = function(files){
    const regex_comment = new RegExp("//.*|/\\*[\\s\\S]*?\\*/","g");

    let res = files.toString('utf8').match(regex_comment);


    if(res == undefined)
        return {appComments: 'Nothing', count: 0}
    else
        return {appComments: res.toString(), count: res.length}}

Verify.prototype.ipAddress = function(files){
    const regex_comment = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/g
    let res = files.toString('utf8').match(regex_comment);

    if(res == undefined)
        return {ipAddress: 'Nothing', count: 0}
    else
        return {ipAddress: res.toString(), count: res.length}
}

Verify.prototype.emailAddress = function(files){
    const regex_comment = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/g;
    let res = files.toString('utf8').match(regex_comment);


    if(res == undefined)
        return {emailAddress: 'Nothing', count: 0}
    else
        return {emailAddress: res.toString(), count: res.length}   
}

Verify.prototype.sqlQueries = function(files){
    const regex_comment = /((SELECT|DELETE|UPDATE|INSERT INTO) (\*|[A-Z0-9_]+) (FROM) ([A-Z0-9_]+))( (WHERE) ([A-Z0-9_]+) (=|<|>|>=|<=|==|!=) (\?|\$[A-Z]{1}[A-Z_]+)( (AND) ([A-Z0-9_]+) (=|<|>|>=|<=|==|!=) (\?))?)?/igm;
    let res = files.toString('utf8').match(regex_comment);


    if(res == undefined)
        return {sqlQueries: 'Nothing', count: 0}
    else
        return {sqlQueries: res.toString(), count: res.length}   
}

Verify.prototype.dbConnections = function(files){
    const regex_comment = /Server=([\w\.]+?);\s*?(?:Port=(\d+?);\s*?)?Database=(\w+?);\s*?(?:(?:User)|(?:Uid))=(\w+?);\s*?(?:(?:Password)|(?:Pwd))=(\w*?);/gim;
    let res = files.toString('utf8').match(regex_comment);


    if(res == undefined)
        return {dbConnections: 'Nothing', count: 0}
    else
        return {dbConnections: res.toString(), count: res.length}    
}

Verify.prototype.hiddenInputs = function(files){
    const regex_comment = /<(input type=("|')hidden('|")).*?>/gim;
    let res = files.toString('utf8').match(regex_comment);


    if(res == undefined)
        return {hiddenInputs: 'Nothing', count: 0}
    else
        return {hiddenInputs: res.toString(), count: res.length}   
}
Verify.prototype.verifyAll = function(files, filename){


    console.log(`VERIFY FILE:\n${files}`);
    let data     = files;
    const html    = this.htmlComments(files);
    const app     = this.appComments(files);
    const ip      = this.ipAddress(files);
    const email   = this.emailAddress(files);
    const queries = this.sqlQueries(files);
    const connect = this.dbConnections(files);
    const inputs  = this.hiddenInputs(files);

    // console.log(`htmlComments: ${html}\nappComments: ${app}\nipAddress: ${ip}\nemailAddress: ${email}\nemailQueries: ${queries}\ndbConnect: ${connect}\nhiddenInputs: ${inputs}`);

    return {files: 
                [{
                    name:           filename,
                    content:        '',
                    htmlComments:   html.htmlComments,
                    htmlCount:      html.count, 
                    appComments:    app.appComments,
                    appCount:       app.count,
                    ipAddress:      ip.ipAddress,
                    ipCount:        ip.count,
                    emailAddress:   email.emailAddress,
                    emailCount:     email.count, 
                    sqlQueries:     queries.sqlQueries,
                    queriesCount:   queries.count,
                    dbConnections:  connect.dbConnections,
                    connectCount:   connect.count,
                    hiddenInputs:   inputs.hiddenInputs,
                    inputsCount:    inputs.count
                }]
            };
}

const verify = new Verify();

module.exports = verify;

// TEST--------------------------------------------------------------
// const fs     = require('fs');
// let texto = fs.readFileSync(`${__dirname}/index.txt`, 'utf8');

// let res = verify.verifyAll(texto);

// console.log(`Results: ${JSON.stringify(res.files, null, 2)}`);
// --------------------------------------------------------------------

