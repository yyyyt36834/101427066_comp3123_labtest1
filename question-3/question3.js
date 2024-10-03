const fs = require('fs');
const path = require('path');
const current = __dirname+/question-3/;
console.log(current);

if(!fs.existsSync(current+'/logs')){
    fs.mkdirSync(current+'/logs');
}


for(let i=1;i<=10;i++){
    let fileName = 'log'+i+'.txt';
    let content = 'content for log'+i+1;
    fs.appendFileSync('/logs/'+fileName, content, (err) => {
        console.log(fileName);
    });
}