
//alert('Hello JavaScript!');

var check;  // Keeps the trace to see if the user hits the boundary

window.onload = function() {


 
    
    begin();        //Doesn't start game until mouseover S        


    var start = document.getElementById("start");                    // allow the maze to reset when the 
    start.addEventListener("click" , function(){                     // start "S" is pressed
        var status = document.getElementById("status");                 
        status.innerHTML="Move your mouse over the \"S\" to begin.";

        check = "";
        var walls = document.getElementsByClassName("boundary");
        for (var i = 0; i < walls.length; i++) {
        walls[i].setAttribute("class", "boundary");
        
    }
    });  
    
    gameOver();  // checks to see if the game was won   


};


function begin(){
    var start = document.getElementById("start")
    start.addEventListener("mouseover", function (){
        
        cheat();        // loads the cheat function 
        
        hitBoundary();  // loads the hitBoundary funtion
        
        
        
    });
}



function hitBoundary() { // Check to see if the any booundaris where hit

//alert("load");

var wall = document.getElementById("boundary1");            //gets the first boundary Element
var walls = document.getElementsByClassName("boundary");    //gets and array of all the boundaries

wall.addEventListener("mouseover", function(){              //Check to see if the boundary was crossed
//walls.setAttribute("class" , "boundary youlose");
redBoundary();                                              //Call the redBoundary Function 
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


function redBoundary() { //Sets all the boundaries red      
    
    //alert("load");
    check = "1";        // sets that the user hit the boundary
    var walls = document.getElementsByClassName("boundary");
    var status = document.getElementById("status");

    //Loops and sets the boundaries colours to red
    for (var i = 0; i < walls.length; i++) {
    walls[i].setAttribute("class", "boundary youlose");
        
    }
    
    status.innerHTML="Sorry, You Lose !";
    
    
}

function gameOver(){  // check to see if the user completed withoud hitting any boundary
    
    var status = document.getElementById("status");

    var end = document.getElementById("end");
    end.addEventListener("mouseover" , function(){
        if (check != "1"){  //Checks and see if the user didnt hit any boundary if true then then they won 
        
        status.innerHTML="You Won !";
            
        }
    });
    
    
    
}   



function cheat(){ // checks to see if the user went through the maze
    
    
    var maze =  document.getElementsByTagName("body")[0]; // selects the body of the html
    maze.addEventListener("mousemove", function(){
        
        //variable for the mouse position
        var x = event.clientX;   
        var y = event.clientY;
        
        //Checks to see if the position of the mouse went outside the body of the maze
        
        if(y>425|| y<125 ) {
            check = "1";
            document.getElementById("status").innerHTML = "Don't Cheat";
            
        }else if ( x >634 || x <135 ){
            check = "1";
            document.getElementById("status").innerHTML = "Don't Cheat";
        }  
        
        
        
        
        
        
        });
    
}


    
    



