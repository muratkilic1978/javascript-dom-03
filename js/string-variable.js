let userName, message;
let nameElem = document.querySelector("#name");
let messageElem = document.querySelector("#note");
userName = "Ali Baba";
message = "See our upcoming range";

nameElem.textContent = userName;

messageElem.textContent = message;

messageElem.style.fontWeight = "bolder";
messageElem.style.color = "#ffe29d";
