// container
let myLibrary = [];
// constructor
function Book(title, author, pages, isread) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isread = isread
}
// create a function that displays the myLibrary object array in a table
const table = document.getElementById("books")
function displayBooks(){
    table.innerHTML = '';
    let thead = document.createElement('thead')
    let thContentArray = ['Title', 'Author', 'Pages', 'Read or Not']
    for (i=0; i<4; i++){
        let th = document.createElement('th')
        th.textContent = thContentArray[i];
        thead.appendChild(th);
    }
    table.appendChild(thead);
    for (a=0; a<myLibrary.length; a++) {
        let currentBookNumber = myLibrary[a]
        let tablerow = document.createElement('tr')
        tablerow.classList.add('tablerow');
        for (i=0; i<4; i++) {
            let currentBook = [currentBookNumber.title, currentBookNumber.author, currentBookNumber.pages, currentBookNumber.isread]
            let tabledata = document.createElement('td')
            console.log(currentBook[i]);
            tabledata.textContent = currentBook[i];
            tablerow.appendChild(tabledata);
        }
        table.appendChild(tablerow)
    }
}
// construct an object and push it to a container
function addBookToLibrary(title,author,pages,isread){
    myLibrary.push(new Book(title,author,pages,isread))
    displayBooks();
}
// create event listener for new book button to provide an input form
const newBook = document.getElementById('newBook')
// create input form that appears when button is clicked
