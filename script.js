
document.getElementById("patientForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let condition = document.getElementById("condition").value;

  let resultBox = document.getElementById("result");
  resultBox.style.display = "block";
  resultBox.innerHTML = `
    <strong>Patient Details:</strong><br>
    Name: ${name} <br>
    Age: ${age} <br>
    Condition: ${condition}
  `;
});
