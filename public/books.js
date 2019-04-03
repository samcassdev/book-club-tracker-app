document.querySelector('#myForm').addEventListener('submit', getBook)

let apikey = 'AIzaSyBNjOsxD5HWtZEHBpQtedb8esi21ZsFgpM';
let name = document.getElementById('title')
let writer = document.getElementById('authors')
let picture = document.getElementById('thumbnail')
let link = document.getElementById('previewLink')
let myImage = new Image(100, 200)

function getBook(ev) {
  ev.preventDefault()
  let search = document.querySelector('#books').value
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}:keyes&key=${apikey}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      response.items.forEach(book => {
        let title = `${book.volumeInfo.title}`
        let authors = `${book.volumeInfo.authors}`
        let thumbnail = `${book.volumeInfo.imageLinks.thumbnail}`
        let previewLink = `${book.volumeInfo.previewLink}`

        // console.log("books length: ", typeof book, book.volumeInfo, Object.keys(book.volumeInfo).length, thumbnail);

        // for(let i = 0; i < 6 /*Object.keys(book.volumeInfo).length*/; i++){

        console.log("pic: ", picture, thumbnail);

          name.innerHTML = title
          writer.innerHTML =  authors
          myImage.src = thumbnail;
          picture.appendChild(myImage);
          link.setAttribute("href", previewLink + "") 



      })
    })
    .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
    });
}
