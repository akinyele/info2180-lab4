
//alert('Hello JavaScript!');



window.onload = function() {


hitBoundary();

};



function hitBoundary() {

//alert("load");

var wall = document.getElementById("boundary1");

var walls = document.getElementsByClassName("boundary");

wall.addEventListener("mouseover", function(){
//walls.setAttribute("class" , "boundary youlose");
redBoundary();
});


walls[1].addEventListener("mouseover", function(){
        // walls[1].setAttribute("class", "boundary youlose");
         redBoundary();
   
});

walls[2].addEventListener("mouseover", function(){
       // walls[2].setAttribute("class", "boundary youlose");
        redBoundary();
});

walls[3].addEventListener("mouseover", function(){
    //    walls[3].setAttribute("class", "boundary youlose");
        redBoundary();
});

walls[4].addEventListener("mouseover", function(){
    //    walls[4].setAttribute("class", "boundary youlose");
    redBoundary();
});


}


function redBoundary() {
    
    //alert("load");
    var walls = document.getElementsByClassName("boundary");
    
    for (var i = 0; i < walls.length; i++) {
    walls[i].setAttribute("class", "boundary youlose");
        
    }
    
}


