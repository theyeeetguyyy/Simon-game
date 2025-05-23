/*
-> Blink a random 4 
-> Add the value to game array
-> Let user click,
if user clicks on a value and it is okay, then okay continue generate next num, and let the clicker run

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

function classTonum(col){
    var current;
    switch(col){
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
    return current;

}


function numChoose(){
        var choice = Math.random();
        choice = choice * 4; 
        choice = Math.floor(choice) + 1;
        console.log("Choice = " + choice);
        return choice;
}
var i = 0;
var count = 0;
function resetr(){
    your_arr = [];
    game_arr = [];
    i = 0;
    count = 0;
    $("body").css("background-color", "red");
    $("h2").text(count);
    setTimeout(() => {
            $("body").css("background-color", "lavender");
        }, 300);
    var currMove = numChoose();
    game_arr.push(currMove);
    setTimeout(() => {
        blinkChoice(currMove);
    }, 500);
}

function checker(){
    if(your_arr[i] === game_arr[i]){
        i++;
        if( i === game_arr.length){
            var currMove = numChoose(); 
            game_arr.push(currMove);
            your_arr = [];
            i = 0;
            count++;
            $("h2").text(count);
            setTimeout(() => {
                blinkChoice(currMove);
            }, 500);

        }
    }
    else{
        console.log("reest");
        resetr();
    }
}

    var game_arr = [];
    var your_arr = [];
    
    var currMove = numChoose();  // this will give a random from 1 to 4
    blinkChoice(currMove);
    game_arr.push(currMove);
    console.log(game_arr);
    
    
    $(".box").click(function (e) { 
        var clickedNum = classTonum($(this).attr("class")[0]);
        blinkChoice(clickedNum);
        your_arr.push(clickedNum);
        console.log(your_arr);
        checker();
    });





