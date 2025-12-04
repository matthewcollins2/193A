function makeBigger(){
alert("Hello, world!");
document.getElementById("myTextBox").style.fontSize = "2em";
}

function adjustStyle(){
    let textBox = document.getElementById("myTextBox");
    let fancyFont = document.getElementById("FancyShmancy");

    if(fancyFont.checked){
        textBox.style.fontWeight = "bold";
        textBox.style.color = "blue";
        textBox.style.textDecoration = "underline";

        
    } else {
        textBox.style.fontWeight = "normal";
        textBox.style.color = "black";
        textBox.style.textDecoration = "none";
    }

}

function mooIt(){
    let textBox = document.getElementById("myTextBox");

    let textUpper = textBox.value.toUpperCase();

    let inputs = textUpper.split(".");
    for (let i = 0; i < inputs.length -1; i++){
        inputs[i] = inputs[i].trim() +"-MOO"
    }

    textBox.value = inputs.join(". ")
}