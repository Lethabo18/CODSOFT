let inputbox = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach(element => {
    element.addEventListener('click', (b) => {
        let buttonText = b.target.innerText;

        if (buttonText === '=') {
            // Evaluate the expression and show the result
            try {
                string = eval(string);
                inputbox.value = string;
            } catch (error) {
                inputbox.value = "Error";
                string = '';
            }
        } else if (buttonText === 'AC') {
            // Clear the input box
            string = '';
            inputbox.value = string;

        } else if (buttonText === 'DEL') {
            // Delete the character
            string = string.substring(0, string.length - 1);
            inputbox.value = string;

        } else if (buttonText === 'plusminus') {
        
            if (string) {
                string = String(-eval(string)); // Convert to negative or positive value
                inputbox.value = string;
            }
        } else {
            
            string += buttonText;
            inputbox.value = string;
        }
    });
});

