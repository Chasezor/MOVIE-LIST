//console.log('hello world')

//const movie = document.createElement('li')
const message = document.querySelector('#message')


const addMovie = (event) =>
{
    event.preventDefault()

    const inputField = document.querySelector('input')
    //console.log(inputField)

    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value

    addEventListener('click', crossOffMovie)

    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "X"

    deleteBtn.addEventListener('click',deleteMovie)
    movie.appendChild(deleteBtn)

    let list = document.querySelector('ul')
    list.appendChild(movie)
    
    //console.log(movie)
    inputField.value = "";
}

const deleteMovie = (event) =>
{
    event.target.parentNode.remove()
    message.textContent = 'Movie deleted!'
}

const crossOffMovie = (event) =>
{
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked'))
    {
        message.textContent = 'Movie watched!'
    }
    else
    {
        message.textContent = 'Movie added back!'
    }
}

const clickMovie = document.querySelector('form')
clickMovie.addEventListener('submit',addMovie)


