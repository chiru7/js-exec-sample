console.log("02_second");

function second() {
    console.log("second");
}

function secondAddEventListener() {
    let temp = document.getElementById("btn");
    temp.addEventListener("click", function() {
        second();
    });
}

secondAddEventListener();