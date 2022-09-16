document.getElementById('inputfile')
.addEventListener("change", function() {
  
var fr=new FileReader();
fr.onload=function(){
    document.getElementById('output')
            .textContent=fr.result;
}
  
fr.readAsText(this.document.files[0])

num = new Number();

num = 16;

console.log(num);

})