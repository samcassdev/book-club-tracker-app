document.querySelector('#myForm').addEventListener('submit', getBook)

let apikey = 'AIzaSyBNjOsxD5HWtZEHBpQtedb8esi21ZsFgpM';
let resultSection = document.querySelector('#result')

function getBook(ev) {
  ev.preventDefault()
  let search = document.querySelector('#books').value
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}:keyes&key=${apikey}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      response.items.forEach(book => {
        resultSection.innerHTML = `<p>${book.volumeInfo.title}</p>`
        console.log(book.volumeInfo.authors)
        console.log(book.volumeInfo.imageLinks.thumbnail)
        console.log(book.volumeInfo.title)
        console.log(book.volumeInfo.previewLink)
      })
    })
    .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
    });
}
