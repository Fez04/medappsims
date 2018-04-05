//Let's the user add times
var addTimeForm = document.forms.addTimeForm;

addTimeForm.addEventListener("submit", function(e) {
    addTime(e);
});

// var timeArrays = [];

function addTime(e) {
    e.preventDefault();
    var timeUl = document.querySelector("#time-list");
    // var timeInput = document.querySelector("#medTime").value;
    // var medInput = document.querySelector("#addMed").value;
    // var timeMeds = document.querySelector("#joint").value = medTime + addMed;
    // var clearTime = document.querySelectorAll("#medTime").value = "";
    var timeMeds = {
        timeInput: document.getElementById('medTime').value,
        medInput: document.getElementById('addMed').value
    };
    var test= document.getElementById('medTime').value +" "+ document.getElementById('addMed').value
    console.log(timeMeds);

    var timeLi = document.createElement("li");
    var timeForm = document.createElement("form");
    var timeBtn = document.createElement("button");
    timeBtn.classList.add("btn", "btn-block", "med-list-button");
    timeBtn.setAttribute("type", "submit",);
    timeBtn.setAttribute("value", test);
    timeBtn.setAttribute("id", "timeBtn");
    timeForm.setAttribute("action", "/testtwilio");
    timeForm.setAttribute("method", "post");

    // if (timeInput === "") {
    //     alert("Oops, please type in a time.")
    // } else {
    //     timeUl.appendChild(timeLi);
    // }

    // timeArrays.push(timeMeds);

    timeUl.appendChild(timeLi);
    timeLi.appendChild(timeForm);
    timeForm.appendChild(timeBtn);
    timeBtn.innerHTML = test;
}