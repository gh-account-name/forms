const formInputs = document.querySelectorAll('.form input:not([type = "checkbox"])');
const submitButton = document.querySelector('.form__button');
const allFormInputs = document.querySelectorAll('.form input');

window.onload = ()=>{
    formInputs.forEach((input)=>{
        if(input.value === ''){
            input.classList.add('input_empty');
        } else {
            input.classList.remove('input_empty');
        }
    })
};

formInputs.forEach((input)=>{
    input.addEventListener('input', ()=>{
        if(input.value === ''){
            input.classList.add('input_empty');
        } else {
            input.classList.remove('input_empty');
        }
    })
})

if (Boolean(document.querySelector('.form__confirm-password'))){
    submitButton.onclick = (event)=>{
        if (document.querySelector('.form__confirm-password').value !== document.querySelector(".form__password").value){
            event.preventDefault();
            alert("Пароли не совпадают");
        }
    }
}