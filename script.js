/*
-> Blink a random 4 
-> Add the value to array
-> Let user click
-> If user clicked that same rand value
    -> gg
    -> break
-> loop


*/


function blink(col){
    $("."+ col).addClass("blink");
        // console.log("blink");
        setTimeout(function(){
            $("." + col).removeClass("blink");
        }, 300);
}


function blinkChoice(choice){
    // console.log("did blink");
    switch (choice) {
    case 1:
        blink("red");
        break;
    case 2:
        blink("green");
        break;
    case 3:
        blink("yellow");
        break;
    case 4:
        blink("blue");
        break;
    default:
        break;
    }
}

function doClick(){

    $(".box").click(function (e) { 
        var clicked = $(this).attr("class")[0];
        var current;
        switch(clicked){
            case 'r':
                current = 1;
                break;
            case 'g':
                current = 2;
                break;
            case 'y':
                current = 3;
                break;
            case 'b':
                current = 4;
                break;
        }
        blinkChoice(current);
        console.log(current);
    });
    
            
}

function numChoose(){
        var choice = Math.random();
        choice = choice * 4; 
        choice = Math.floor(choice) + 1;
        console.log("Choice = " + choice);
        return choice;
}


function gamePlay(game, game_arr){
    
    if(game === true){
        // choose rand num
        var choice = numChoose();
        game_arr.push(choice);
        
        // blink according to random
        blinkChoice(choice);        
        

        // do click
        // var clicked = doClick();

        var your_arr = [];
        
        
        for(var i=0; i<game_arr.length; i++){

            var current = choice;
            $(".box").click(function () { 
                var clicked = $(this).attr("class")[0];
                switch(clicked){
                    case 'r':
                        current = 1;
                        break;
                    case 'g':
                        current = 2;
                        break;
                    case 'y':
                        current = 3;
                        break;
                    case 'b':
                        current = 4;
                        break;
                }
                blinkChoice(current);
                console.log("Clicked = " + current);
                your_arr.push(current); 
                console.log(your_arr);
                
            });

        }
        
        if(your_arr === game_arr){
            console.log("gg");
            
        }
    
    
    }

    else if (game === false){
        console.log("game over");
        
        // $(document).keypress(function (e) { 
        //     game = true;
        // });

        
    }
}


var game = true;
var gamee_arr = [];

gamePlay(game,gamee_arr);


// fix the whole code 

