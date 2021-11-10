"use strict";

var buttons = document.getElementsByClassName("btn-google");
var buttons2 = document.getElementsByClassName("btn-appStore");

let link = "https://bit.ly/3mZWzLw";

for(let btn of buttons) {
    btn.addEventListener("click", function() {
        window.open(link, '_blank').focus();
    })
}

for(let btn of buttons2) {
    btn.addEventListener("click", function() {
        window.open(link, '_blank').focus();
    })
}