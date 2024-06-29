document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    
    let displayValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === '=') {
                try {
                    displayValue = eval(displayValue);
                } catch {
                    displayValue = 'Error';
                }
            } else if (value === 'C') {
                displayValue = '';
            } else {
                displayValue += value;
            }

            display.textContent = displayValue;
        });
    });
});