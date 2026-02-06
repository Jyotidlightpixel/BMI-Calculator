const button = document.getElementById("btn");
const bmiInput = document.getElementById("bmiResult");
const healthCondition = document.getElementById("healthCondition");

function calculateBmi(){
    const weightValue = document.getElementById("weight").value;
    const heightValue = document.getElementById("height").value / 100;

    const bmiValue = (weightValue / (heightValue * heightValue)).toFixed(3);

    bmiInput.value = bmiValue;

    if(bmiValue < 18.5){
        healthCondition.innerText = "Under Weight";
    } else if (bmiValue >= 18.5 &&  bmiValue < 24.9){
        healthCondition.innerText = "Normal";
    } else if ( bmiValue >= 25 && bmiValue < 29.9){
        healthCondition.innerText = "Over Weight";
    } else if ( bmiValue >= 30 && bmiValue < 34.9){
        healthCondition.innerText = "Obesity (Class - 1)";
    } else if (bmiValue >= 35.5 && bmiValue < 39.9){
        healthCondition.innerText = "Obesity (Class - 2)";
    } else {
        healthCondition.innerText = "Extreme Obesity"
    }



}
    

    



    button.addEventListener('click',calculateBmi);
