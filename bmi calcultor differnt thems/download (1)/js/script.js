function calculateBMI() {
    // Get the input values
    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    // Check if the inputs are valid
    if (isNaN(age) || age <= 0 || isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0) {
        alert("Please enter valid age, height, and weight values.");
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);

    // Determine BMI category
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // Open new window with BMI details
    const bmiResult = `
        <html>
        <head>
            <title>BMI Result</title>
            <style>
                body { font-family: Arial, sans-serif; background-color: #f4a261; text-align: center; padding: 20px; }
                h2 { color: #264653; }
                p { font-size: 1.2rem; color: #2a9d8f; }
                .bmi-box { 
                    background-color: #ffffff; 
                    border: 2px solid #264653; 
                    padding: 20px; 
                    border-radius: 10px;
                    margin: 20px auto;
                    width: 60%;
                    max-width: 400px;
                }
            </style>
        </head>
        <body>
            <h2>Your BMI Result</h2>
            <div class="bmi-box">
                <p><strong>Age:</strong> ${age} years</p>
                <p><strong>Weight:</strong> ${weight} kg</p>
                <p><strong>Height:</strong> ${height} meters</p>
                <p><strong>BMI:</strong> ${bmi.toFixed(2)}</p>
                <p><strong>Category:</strong> ${category}</p>
            </div>
        </body>
        </html>
    `;

    // Create a new window and write the result into it
    const resultWindow = window.open("", "_blank", "width=600,height=400");
    resultWindow.document.write(bmiResult);
    resultWindow.document.close();
}
