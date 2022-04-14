//container
let myLibrary = [];
//constructor
function Book(title, author, pages, isread){
    this.title = title
    this.author = author
    this.pages = pages
    this.isread = isread
}
//construct an object and push it to a container
const table = document.getElementById("books")
function addBookToLibrary(title,author,pages,isread){
    myLibrary.push(new Book(title,author,pages,isread))
    let currentBook = [title, author, pages, isread];
    let tablerow = document.createElement('tr')
    for(i=0; i<4; i++){
        let tabledata = document.createElement('td')
        tabledata.textContent = currentBook[i];
        tablerow.appendChild(tabledata);
    }
    table.appendChild(tablerow)
}
