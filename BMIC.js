const submitBtn = document.getElementById('submit');
const resultDiv = document.getElementById('result');

function calculateBMI(){
    const weight = parseFloat(document.getElementById('input-weight').value);
    const height = parseFloat(document.getElementById('input-height').value);

    const bmi = weight/(height/100)**2;

    let message;

    if(bmi < 18.5){
        message = "Underweight";
    } else if(bmi >= 18.5 && bmi <24.9){
        message = "Normal Weight";
    } else if(bmi >= 25 && bmi <29.9){
        message = "Overweight";
    } else if(bmi >= 30){
        message = "Obesity";
    } else{
        message = "Undefined";
    }

    resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(1)} which means You are ${message}`;

}

submitBtn.addEventListener('click', calculateBMI);