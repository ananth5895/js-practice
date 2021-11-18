let buttons = document.querySelectorAll('.question-btn');
console.log(buttons);


function printme(button) {
    button.addEventListener('click', function () {
        let currentElement = this, 
        questionWrapperElement = currentElement.parentNode.parentNode,
        questionText = questionWrapperElement.querySelector('.question-text')
        console.log(questionText);
        questionText.style.display = 'block';
    });
}
buttons.forEach(printme);
