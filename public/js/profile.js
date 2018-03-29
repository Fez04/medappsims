//Let's the user add times
console.log("it works");
var addTimeForm = document.forms.addTimeForm;

addTimeForm.addEventListener("submit", function(e) {
    addTime(e);
});

var timeArrays = [];

function addTime(e) {
    e.preventDefault();
    var timeUl = document.querySelector("#time-list");
    var timeInput = document.querySelector("#medTime").value;
    var clearTime = document.querySelector("#medTime").value = "";

    var timeLi = document.createElement("li");
    var timeForm = document.createElement("form");
    var timeBtn = document.createElement("button");
    timeBtn.classList.add("btn", "btn-block", "med-list-button");
    timeBtn.setAttribute("type", "submit",);
    timeBtn.setAttribute("value", timeInput);
    timeForm.setAttribute("action", "users/submit");
    timeForm.setAttribute("method", "post");

    if (timeInput === "") {
        alert("Oops, please type in a time.")
    } else {
        timeUl.appendChild(timeLi);
    }

    timeArrays.push(timeInput);

    timeLi.appendChild(timeForm);
    timeForm.appendChild(timeBtn);
    timeBtn.innerHTML = timeInput;

}
