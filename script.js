let textarea = document.getElementById("textarea");

let speech = new window.SpeechSynthesisUtterance();

function convert(){   
    if (textarea.value == "") {
        alert("Please enter some text to convert")
    } else {
        speech.text = textarea.value;
        window.speechSynthesis.speak(speech)
}
}
