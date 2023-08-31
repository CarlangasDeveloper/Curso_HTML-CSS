camara = document.getElementsByClassName('ft')[0];

camara.addEventListener('click', photo)

function photo() {
        alert('Quieres usar la busqueda por imagen?')
        alert('Lo Sentimos... Esta Función No Esta Disponible Por El Momento.')
}

micro = document.getElementsByClassName('mic')[0];

micro.addEventListener('click', microfono)

function microfono() {
        alert('Quieres usar la busqueda por voz?')
        alert('Lo Sentimos... Esta Función No Esta Disponible Por El Momento.')
}

lupa = document.getElementsByClassName('lp')[0];

lupa.addEventListener('click', cambiar)

function cambiar() {

    const inputValue = document.querySelector('.barra').value;
    
    if (inputValue === 'Blue Label' || inputValue === 'blue label' || inputValue === 'Blue label') {
        document.querySelector('p').innerHTML = 'ES UN ELIXIR 🥵🥵🥃';
    } else {
        document.querySelector('p').innerHTML = 'Disculpa, <strong>"' + inputValue + '"</strong> aún no está en mi vocabulario <br> INTENTA NUEVAMENTE';
    }
}

document.querySelector('.barra').addEventListener('input', vacio);

function vacio() {
    if (document.querySelector('.barra').value == ''){
        document.querySelector('p').innerHTML = 'Dale click en "Buscar", escribe y comienza a navegar'
    }
}

document.addEventListener("keydown", (e) => {

    if (e.key == "Enter"){

        const inputValue = document.querySelector('.barra').value;
    
        if (inputValue === 'Blue Label' || inputValue === 'blue label' || inputValue === 'Blue label') {
        document.querySelector('p').innerHTML = 'ES UN ELIXIR 🥵🥵🥃';
        } else {
        document.querySelector('p').innerHTML = 'Disculpa, <strong>"' + inputValue + '"</strong> aún no está en mi vocabulario <br> INTENTA NUEVAMENTE';
        }   
     }
});

