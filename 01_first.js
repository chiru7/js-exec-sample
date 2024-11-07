console.log("01_first");

function first() {
    console.log("first");
}

function firstAndSecond() {
    first();
    second();
}


function firstAddEventListener() {
    let temp = document.getElementById("btn");
    temp.addEventListener("click", function() {
        first();
    });
}

firstAddEventListener();

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded first");
    firstAndSecond();
});


window.addEventListener("load", function() {
    console.log("load first");
    firstAndSecond();
});
