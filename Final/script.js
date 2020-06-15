
var catImage = document.getElementById("catImg");
var catButton= document.getElementById("catImgChange");


var swapcatImage = function(){
    console.log(catImage.alt);

    if(catImage.alt == "First image of a cat"){ //the first image is showing
        catImage.src = "acat2.jpg";
        catImage.alt = "Second image of a cat";
        catButton.innerText = "Show the first one!";
    } 
    else { // otherwise
        catImage.src = "acat2.jpg";
        catImage.alt = "First image of a cat";
        catButton.innerText = "Show the second one!";
    }

    
}
