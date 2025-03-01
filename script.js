function predictColor() {
    let period = document.getElementById("period").value;
    let result = document.getElementById("result");

    // Dummy logic for prediction (you can customize this)
    let colors = ["Red", "Green", "Blue"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    result.innerHTML = "Predicted Color: " + randomColor;
}
