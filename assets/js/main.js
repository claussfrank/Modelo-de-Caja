console.log("Conectada Correctamente");
var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var img=[];
var span=[];
for (var i = 0 ; i < 9; i++) {
   img[i]= document.getElementsByClassName("mostrar-img")[i];
   img[i].addEventListener('click',mostrar) ;
 }
function mostrar(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
for(var i=0 ; i<9 ;i++){
 span[i] = document.getElementsByClassName("close")[i];
 span[i].addEventListener("click",cerrar)
}
// When the user clicks on <span> (x), close the modal
function cerrar() {
    modal.style.display = "none";
}
