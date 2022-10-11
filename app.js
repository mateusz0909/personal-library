let myLibrary = []
const form = document.querySelector('form');
const listOfBooks = document.getElementById('books')
const h3 = document.querySelector("h3")

function Book (author, title, pages, read) {
    this.author = author
    this.title = title
    this.pages=pages
    this.read=read   
}
const addBookToLibrary = (event) =>{
    event.preventDefault();
    const newBook = new Book (event.target[0].value, event.target[1].value, event.target[2].value, event.target[3].value)
    myLibrary.push(newBook)
    toggleHeader()
    displayBooks()
    clearForm()
}

const toggleHeader = () => {
   myLibrary.length!==0?h3.classList.add("hidden"):h3.classList.remove("hidden")
  
}

const clearForm = () => {
    form.reset()
}
const displayBooks = () =>{
    const existingCards = document.querySelectorAll('.card')
    existingCards.forEach(e=>e.remove())
    
   myLibrary.forEach((e,i)=>{
       const {author, title, pages, read} = e
       console.log(e)
    const card = document.createElement('div')
    card.classList.add('card')
    card.id = 'crd'
    const cardContent = 
    `<span data=${i} id="remove" >X</span>
    <p><b>Author: </b>${author}</p>
    <p><b>Title: </b>${title}</p>
    <div><p><b>Pages: </b>${pages}</p>
    <p><b>Read: </b><span><button data=${i} id='read-btn'>${read}</button>
    </span> </p>
    </div>`
    card.innerHTML=cardContent
    listOfBooks.appendChild(card)
   })
   
}
const toggleRead = (ev)=>{
    if (ev.target && ev.target.id =='read-btn') {
        let id = ev.target.attributes[0].value
        if(myLibrary[id].read === "Yes") {
            myLibrary[id].read ="No"
        }else myLibrary[id].read ="Yes"
        displayBooks()
        
    }
}

const removeCard = (ev)=>{
    if (ev.target && ev.target.id =='remove') {
        let id = ev.target.attributes[0].value
        console.log(id)
        myLibrary.splice(id,1)
        displayBooks()
        toggleHeader()
        
    }
}



listOfBooks.addEventListener('click', toggleRead)
listOfBooks.addEventListener('click', removeCard)
form.addEventListener('submit', addBookToLibrary);










