let button = document.getElementById('read-button')

button.addEventListener('click', function(){
    let card = document.querySelector('.card')
    card.classList.toggle('active')
    
    if(card.classList.contains('active')) {
        return button.innerHTML = 'Read less'
    }

    button.innerHTML = 'Read more'
})