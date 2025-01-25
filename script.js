let myForm = document.querySelector("#myForm");
let sendButton = document.querySelector("#sendButton");

sendButton.addEventListener('click', (event) => {
    let formElement = myForm.elements;
    console.log(formElement.gender.value)
    console.log(formElement.lastName.value);
    console.log(formElement.name.value);
    if (formElement.auto.checked == true) {
        console.log('yes');
    } else {
        console.log('net')
    }
    if (formElement.gender.value == 'm') {
        console.log('м')
    } else {
        console.log('ж')
    }
})