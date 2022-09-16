const fs = require('fs');

var inputText = document.getElementById("inputtext");
console.log(inputText);

//           Get the element in html      add a event listener     this is the function
document.getElementById('inputfile').addEventListener('change', function() {    

    var fr = new FileReader();

     fr.onload = function(){
            document.getElementById('ipText').textContent = fr.result;
    }
              
    fr.readAsText(this.files[0]);
    

    })

document.getElementById("submitButton").addEventListener("click",() => {
    fs.writeFile("testText.txt",file,(err) => {
        if(err) throw err;
        console.log('saved');
    });    
})