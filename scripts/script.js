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
    for (i=0; i<4; i++) {
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
            if (i===3) {
                let image = document.createElement('img')
                if(currentBookNumber.isread === true){
                    image.src = "images/checkbox-marked.png"
                    image.alt = "read"
                } else {
                    image.src = "images/close-box.png"
                    image.alt = "unread"
                }
                image.addEventListener('click', () => {
                    if(image.alt === "read"){
                        image.src = "images/close-box.png"
                        image.alt = "unread"
                    } else {
                        image.src = "images/checkbox-marked.png"
                        image.alt = "read"
                    }
                })
                tabledata.appendChild(image)
                tablerow.appendChild(tabledata)
            } else {
                tabledata.textContent = currentBook[i];
                tablerow.appendChild(tabledata);
            }

        }
        let removeButton = document.createElement('button')
        removeButton.textContent = 'Remove'
        removeButton.addEventListener('click', () => {
            let index = myLibrary.indexOf(currentBookNumber)
            myLibrary.splice(index, 1)
            displayBooks();
        })
        tablerow.appendChild(removeButton)
        table.appendChild(tablerow)
    }
}
// construct an object and push it to a container
function addBookToLibrary(title,author,pages,isread){
    myLibrary.push(new Book(title,author,pages,isread))
    displayBooks();
}
// create event listeners
const newBook = document.getElementById('newBook')
const closePopup = document.querySelector('.closeButton')
const overlay = document.querySelector('.overlay')
const submit = document.getElementById('submit')
const popupForm = document.querySelector('.popupForm')
// create responsiveness using event listeners on buttons

newBook.addEventListener('click', () => {
    popupForm.classList.add('active')
    overlay.classList.add('active')
})

closePopup.addEventListener('click', () => {
    popupForm.classList.remove('active')
    overlay.classList.remove('active')
})
submit.addEventListener('click', () => {
    let formData = document.getElementById('newBookForm')
    let requiredFields = document.getElementById('required')
    for ( i = 0; i<formData.length-2; i++ ) {
        if (formData[i].value == '') {
            requiredFields.textContent = '*Please fill out the required fields'
            return
        } 
    }
    let checkboxValue = false;
    if (formData[3].checked) {
        checkboxValue = true;
    }
    addBookToLibrary(formData[0].value, formData[1].value, formData[2].value, checkboxValue)
    popupForm.classList.remove('active')
    overlay.classList.remove('active')
    requiredFields.textContent = ''
    for ( i=0; i<formData.length-2; i++ ) {
        formData[i].value = ''
    }
    formData[3].checked = false;
})
