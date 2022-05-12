

if(document.getElementById('backdownDiv')){
    const TimeOutBackDownDiv = setTimeout(displayNone, 2000);
}

function displayNone(){
    let backdownDiv = document.getElementById('backdownDiv')
    backdownDiv.classList.add("hidden");
}