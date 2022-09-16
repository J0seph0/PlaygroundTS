const fs = require('fs');
var file = "test";



fs.readFile("example.txt",(error,data) => {
    file = data.toString('utf-8');
    console.log(data.toString('utf-8'));
});


fs.writeFile("testText.txt",file,(err) => {
    if(err) throw err;
    console.log('saved');
});

