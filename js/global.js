if(document.getElementById('backdownDiv')){
    const TimeOutBackDownDiv = setTimeout(displayNone, 2000);
}

function displayNone(){
    let backdownDiv = document.getElementById('backdownDiv')
    backdownDiv.classList.add("hidden");
}
function copyToClipboard() {
    /* Get the text field */
    var copyText = document.getElementById("copyText");
    var btnTooltipCopy = document.getElementById("btnTooltipCopy");
    
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
}
