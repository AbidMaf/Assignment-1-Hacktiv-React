const operator = ['+', '-', '*', '/'];

// Add numbers to panel
const clickNum = (clicked_data) => {
    let output_panel = document.getElementById('output').textContent;
    if (operator.includes(output_panel.slice(-1)) && operator.includes(clicked_data)) {
        document.getElementById('output').innerHTML = output_panel.slice(0, -1) + clicked_data;
    } else{
        document.getElementById('output').innerHTML = output_panel + clicked_data;
    }
}

// To clear panel
const allClear = () => {
    document.getElementById('output').innerHTML = "";
}

// Remove last character from panel 
const entryClear = () => {
    let output_panel = document.getElementById('output').textContent;
    document.getElementById('output').innerHTML = output_panel.slice(0, -1);
}

// Count the number of times a character appears in a string
const calculate = () => {
    let output_panel = document.getElementById('output').textContent;
    document.getElementById('output').innerHTML = eval(output_panel);
}

// keyboard binding
document.addEventListener('keydown', (event) => {
    let keyName = event.key;
    if (keyName === 'Enter') {
        calculate();
    } else if (keyName === 'Backspace') {
        entryClear();
    } else if (keyName === 'Escape') {
        allClear();
    } else if (keyName === '0' || keyName === '1' || keyName === '2' || keyName === '3' || keyName === '4' || keyName === '5' || keyName === '6' || keyName === '7' || keyName === '8' || keyName === '9' || keyName === '+' || keyName === '-' || keyName === '*' || keyName === '/') {
        clickNum(keyName);
    }
})