"use strict";

var buttons = document.getElementsByClassName("btn-google");
var buttons2 = document.getElementsByClassName("btn-appStore");

for(let btn of buttons) {
    btn.addEventListener("click", function() {
        window.open("https://apple.com", '_blank').focus();
    })
}

for(let btn of buttons2) {
    btn.addEventListener("click", function() {
        window.open("https://apple.com", '_blank').focus();
    })
}