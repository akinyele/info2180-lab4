
//alert('Hello JavaScript!');

var status;

window.onload = function() {


hitBoundary();

    var start = document.getElementById("start");
    
    start.addEventListener("click" , function(){
        
        status = "";
        var walls = document.getElementsByClassName("boundary");
        for (var i = 0; i < walls.length; i++) {
        walls[i].setAttribute("class", "boundary");
        
    }
    }); 
    
gameOver();


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
    status = "1";
    var walls = document.getElementsByClassName("boundary");
    
    for (var i = 0; i < walls.length; i++) {
    walls[i].setAttribute("class", "boundary youlose");
        
    }
    
}

function gameOver(){
    
    
    
    var end = document.getElementById("end");
    end.addEventListener("mouseover" , function(){
        if (status != "1"){
            
        alert("You Won");
        }
    });
    
    
    
}   


    
    



