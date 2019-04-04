document.querySelector('#myForm').addEventListener('submit', getBook)

let apikey = 'AIzaSyBNjOsxD5HWtZEHBpQtedb8esi21ZsFgpM';
let name = document.getElementById('title')
let writer = document.getElementById('authors')
let picture = document.getElementById('thumbnail')
let link = document.getElementById('previewLink')
let list = document.getElementById('list')
let myImage = new Image(100, 200)

function getBook(ev) {
  ev.preventDefault()
  let search = document.querySelector('#books').value
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}:keyes&key=${apikey}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      // console.log(response);
      var ul = document.getElementById('catalog')

      response.items.forEach(book => {
        console.log("books: ", book.volumeInfo);
        let title = book.volumeInfo.title
        let authors = book.volumeInfo.authors
        if('imageLinks' in book.volumeInfo && 'thumbnail' in book.volumeInfo.imageLinks) {
          let thumbnail = book.volumeInfo.imageLinks.thumbnail
        } else {
          thumbnail = ''
        }
        let previewLink = book.volumeInfo.previewLink
        let thumbnail = book.volumeInfo.imageLinks.thumbnail

        let li = document.createElement("li")

        let titleSpan = document.createElement("span")
        titleSpan.innerHTML = "Title: " + title

        let authorSpan = document.createElement("span")
        authorSpan.innerHTML = "Authors: " + authors

        let image = document.createElement("img")
        image.src = thumbnail


        li.appendChild(titleSpan)
        li.appendChild(authorSpan)
        li.appendChild(image)
        ul.appendChild(li)



      })
    })
    .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
    });
}
