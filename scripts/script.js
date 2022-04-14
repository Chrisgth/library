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
function addBookToLibrary(title,author,pages,isread){
    myLibrary.push(new Book(title,author,pages,isread))
}