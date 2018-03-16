//Let's the user add patients
var addPatientForm = document.forms.addPatientForm;

addPatientForm.addEventListener("submit", function(e) {
    addPatient(e);
});

var patientArrays = [];

function addPatient(e) {
    e.preventDefault();
    var patientUl = document.querySelector("#patient-list");
    var addInput = document.querySelector("#patientName").value;
    var clearInput = document.querySelector("#patientName").value = "";


    var patientLi = document.createElement("li");
    var patientBtn = document.createElement("button");
    patientBtn.classList.add("btn", "btn-block", "made-patient-btn");
    patientBtn.setAttribute("type", "submit");
    patientBtn.setAttribute("value", addInput);

    if (addInput === "") {
        alert("Oops, please type in a name.")
    } else {
        patientUl.appendChild(patientLi);
    }
   

    patientArrays.push(addInput);
    console.log(patientArrays);

    patientLi.appendChild(patientBtn);
    patientBtn.innerHTML = addInput;
}

