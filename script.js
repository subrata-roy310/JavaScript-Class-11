// function getForValue() {
//     //
//     const nameInput = document.getElementById("full-name");
//     const nameValue = nameInput.value;
//     const errorText = document.getElementById("error-text");
//     //
//     if (nameValue) {
//         console.log(nameValue);
//         errorText.innerHTML = "";
//         nameInput.value = "";
//     } else {
//         errorText.innerHTML = '<p class="text-danger">Please write your name</p>'

//     }
// }

// // addEventListener
// const submitButton = document.getElementById("submit-button");
// submitButton.addEventListener("click", getForValue);

// const submitButton = document.getElementById("submit-button");
// submitButton.addEventListener("click", function () {
//     //
//     const nameInput = document.getElementById("full-name");
//     const emailInput = document.getElementById("email-address");
//     const addressInput = document.getElementById("full-address");
//     const nameValue = nameInput.value;
//     const emailValue = emailInput.value;
//     const addressValue = addressInput.value;
//     const errorText = document.getElementById("error-text");
//     const fromdata = document.getElementById("from-data");
//     //
//     if (nameValue && emailValue && addressValue) {
//         fromdata.innerHTML = `<p>From Submited By: ${nameValue}, Email Address: ${emailValue}, Address:${addressValue}</p>`;
//         errorText.innerHTML = "";
//         nameInput.value = "";
//         emailInput.value = "";
//         addressInput.value = "";
//     } else {
//         errorText.innerHTML = '<p class="text-danger">Please fill all input box!</p>'
//         fromdata.innerHTML = "";
//     }
// })


const calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", function () {
    const income = document.getElementById("income").innerText;
    const rentInput = document.getElementById("rent");
    const foodInput = document.getElementById("food");
    const utilitisInput = document.getElementById("utilitis");
    const insuranceInput = document.getElementById("insurance");
    const expansesDiv = document.getElementById("expanses");
    const balanceDiv = document.getElementById("balance");

    const incomeValue = parseFloat(income);
    const rentValue = parseFloat(rentInput.value);
    const foodValue = parseFloat(foodInput.value);
    const utilitisValue = parseFloat(utilitisInput.value);
    const insuranceValue = parseFloat(insuranceInput.value);


    if (rentValue >= 0 && foodValue >= 0 && utilitisValue >= 0 && insuranceValue >= 0) {
        const cost = rentValue + foodValue + utilitisValue + insuranceValue;
        const balance = incomeValue - cost;
        expansesDiv.innerText = cost;
        balanceDiv.innerText = balance;
    }

});