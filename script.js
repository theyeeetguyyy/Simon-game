function blink(col){
    $("."+ col).addClass("blink");
        console.log("blink");
        setTimeout(function(){
            $("." + col).removeClass("blink");
        }, 300);
}

var choice = Math.random();
choice = choice * 4; 
choice = Math.floor(choice) + 1;
console.log(choice);

// function blinkChoice(choice){
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
// }


$(".boxes").click(function (e) { 
    console.log("clicked button");
    blink();

});