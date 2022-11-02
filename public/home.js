const button = document.querySelector('button')
const hideMe = document.querySelector('#hideMe')

console.log(hideMe)

button.addEventListener('click', () => {hideMe.classList.toggle('hide')})

// The resource from “https://deployment7882.herokuapp.com/js” was blocked due to MIME type (“text/html”) mismatch (X-Content-Type-Options: nosniff).