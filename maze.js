
//alert('Hello JavaScript!');



window.onload = function() {


hitboundary();

};



function hitboundary() {

//alert("load");

var wall = document.getElementById("boundary1");

var walls = document.getElementsByClassName("boundary");

wall.addEventListener("mouseover", function(){
wall.setAttribute("class" , "boundary youlose");
});


walls[1].addEventListener("mouseover", function(){
    
    walls[1].setAttribute("class", "boundary youlose");
    
});

walls[2].addEventListener("mouseover", function(){
    
    walls[2].setAttribute("class", "boundary youlose");
    
});walls[3].addEventListener("mouseover", function(){
    
    walls[3].setAttribute("class", "boundary youlose");
    
});

walls[4].addEventListener("mouseover", function(){
    
    walls[4].setAttribute("class", "boundary youlose");
    
});


}



