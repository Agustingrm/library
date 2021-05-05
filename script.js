let myLibrary = [];

function Book(name,author,pages,read) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }


function addBookToTheLibrary(name,author,pages,read) {
    let newBook = new Book(name,author,pages,read);
    myLibrary.push(newBook);
}

const storage = document.getElementById('storage');

function displayInWeb(){
    const deleteEverything = document.getElementsByClassName('shelf');

    while (deleteEverything[0]){
        deleteEverything[0].parentNode.removeChild(deleteEverything[0]);
    }

    for (let i=0; i<myLibrary.length;i++){

        const aBook = document.createElement('div');
        aBook.classList.add('shelf');

        storage.appendChild(aBook)

        const aName = document.createElement('p')
        aName.classList.add('name');
        aBook.appendChild(aName)
        //Display name inside book box
        var name = document.getElementsByClassName('name')[i];
        name.innerHTML = 'Name: '+myLibrary[i]['name'];
        //Display author inside book box
        const Author = document.createElement('p')
        Author.classList.add('author');
        aBook.appendChild(Author)
        var author = document.getElementsByClassName('author')[i];
        author.innerHTML = 'Author: '+myLibrary[i]['author'];
        //Display pages inside book box
        const Pages = document.createElement('p')
        Pages.classList.add('pages');
        aBook.appendChild(Pages)
        var pages = document.getElementsByClassName('pages')[i];
        pages.innerHTML = 'Pages: '+myLibrary[i]['pages'];
        //Display if read inside book box
        const Read = document.createElement('p')
        Read.classList.add('read');
        aBook.appendChild(Read)
        var read = document.getElementsByClassName('read')[i];
        read.innerHTML = 'Read: '+myLibrary[i]['read'];
    }
    storage.style.gridTemplateRows = ('repeat('+Math.ceil(myLibrary.length/3)+',200px)')
}

