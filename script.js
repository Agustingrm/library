let myLibrary = [];

getLocalStorage();

function saveInLocalStorage(){
    localStorage.setItem('Library',JSON.stringify(myLibrary));
}

function getLocalStorage(){
    if(localStorage.getItem('Library') == false){
        return
    }
    else {
        myLibrary = JSON.parse(localStorage.getItem('Library'));
    }
}

function orderArrayAlphabetically(){
    function compare( a, b ) {
        if ( a.name < b.name){
            return -1;
        }
        if ( a.name > b.name ){
            return 1;
        }
        return 0;
    }
return myLibrary = myLibrary.sort(compare);
}

function Book(name,author,pages,read) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

const storage = document.getElementById('storage');

function displayInWeb(){
    const deleteEverything = document.getElementsByClassName('shelf');

    while (deleteEverything[0]){
        deleteEverything[0].parentNode.removeChild(deleteEverything[0]);
    }
    orderArrayAlphabetically();

    for (let i=0; i<myLibrary.length;i++){

        const aBook = document.createElement('div');
        aBook.classList.add('shelf');

        storage.appendChild(aBook)

        const aName = document.createElement('p')
        aName.classList.add('name');
        aBook.appendChild(aName)
        //Display name inside book box
        let name = document.getElementsByClassName('name')[i];
        name.innerHTML = '<b>Name:</b> '+myLibrary[i]['name'];
        //Display author inside book box
        const Author = document.createElement('p')
        Author.classList.add('author');
        aBook.appendChild(Author)
        let author = document.getElementsByClassName('author')[i];
        author.innerHTML = '<b>Author:</b> '+myLibrary[i]['author'];
        //Display pages inside book box
        const Pages = document.createElement('p')
        Pages.classList.add('pages');
        aBook.appendChild(Pages)
        let pages = document.getElementsByClassName('pages')[i];
        pages.innerHTML = '<b>Pages:</b> '+myLibrary[i]['pages'];
        //Display if read inside book box
        const Read = document.createElement('p')
        Read.classList.add('read');
        aBook.appendChild(Read)

        let read = document.getElementsByClassName('read')[i];
        read.innerHTML = '<b>Read: </b>'
        //Display a checkbox if read is 'yes'
        const checkbox = document.createElement('input')
        checkbox.setAttribute("type","checkbox")
        if (myLibrary[i]['read'].toLowerCase() == 'yes'){
            checkbox.checked = true;
        }
        Read.appendChild(checkbox)
        //Make a delete button
        const deleteBook = document.createElement('button')
        deleteBook.classList.add('deleteButton');
        aBook.appendChild(deleteBook)

        let deleteButton = document.getElementsByClassName('deleteButton')[i];
        deleteButton.innerHTML = '<b>DELETE BOOK</b>'
        deleteButton.addEventListener('click',function(){
            console.log(i);
            if (window.confirm('Your data will be lost, do you want to proceed?')){
                myLibrary.splice(i,1);}
            displayInWeb();
        });
        
        

    }
    saveInLocalStorage()
    
}

const deleteEntireBook = document.getElementsByClassName('deleteButton');

for (let i=0;i<deleteEntireBook.length;i++){
    deleteEntireBook[i].addEventListener('click',function(){
        console.log('a');
    });
}


const visibilityOfTheModalBox = document.getElementById('modalBox')

const newBook = document.getElementById('addNewBook')

newBook.addEventListener('click',() =>{
    visibilityOfTheModalBox.style.display = 'inline'
})

const addBook = document.getElementById('addButton')
addBook.addEventListener('click',()=> addBookToTheLibrary())

function addBookToTheLibrary() {
    let name = document.getElementById('nameOfTheBook').value
    let author = document.getElementById('authorOfTheBook').value
    let pages = document.getElementById('pagesOfTheBook').value
    let read = '';
    if (document.getElementById('theBookIsRead').checked){
        read = 'yes'
    }
    else {
        read = 'no'
    }
    let newBook = new Book(name,author,pages,read);
    if (document.getElementById('nameOfTheBook').value == ''){
        document.getElementById('missingName').innerHTML = 'You can not leave the Name empty'
        return
    }
    if (document.getElementById('authorOfTheBook').value == ''){
        document.getElementById('missingAuthor').innerHTML = 'You can not leave the Author empty'
        return
    }
    myLibrary.push(newBook);
    displayInWeb();
    visibilityOfTheModalBox.style.display = 'none'
    document.getElementById('nameOfTheBook').value = '';
    document.getElementById('authorOfTheBook').value = '';
    document.getElementById('pagesOfTheBook').value = '';
    document.getElementById('theBookIsNotRead').checked = true;
    document.getElementById('missingName').innerHTML = '&nbsp'
    document.getElementById('missingAuthor').innerHTML = '&nbsp'
}
//Close the pop up box
const closeModalBox = document.getElementById('closeModalBox')

closeModalBox.addEventListener('click', () => visibilityOfTheModalBox.style.display = 'none');

//If there is anything on Local Storage, it will display it on start
displayInWeb()

