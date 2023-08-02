const company = [3, 4, 5, 6, 7, 8, 9];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    let num2 = '';
    
    // Get the input value as a string
    const inputText = document.getElementById("floatingInput").value;

    // Convert the input value to an integer
    const n = parseInt(inputText);

    for (let i = 0; i < n; i++) {
        const companynum = company[getRandomNumber(0, 6)];
        num1 = '+8801';
        num1 += companynum;
        num1 += getRandomNumber(10, 99);
        num1 += '-';
        num1 += getRandomNumber(100, 999);
        num1 += getRandomNumber(100, 999);
        num1 += '<br>';

        num2 += num1;
    }

    document.getElementById("numbs").innerHTML = num2.toString();
}
