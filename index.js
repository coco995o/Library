let myLibrary=[];

const display=document.querySelector(".display");
const myTable=document.querySelector(".table");
const $myform=document.querySelector(".myform").addEventListener("submit", (e)=>{
    e.preventDefault();
    addBookToLibrary();
    showBooks();
    removeFirstBook()
    clearForm();
});
const $title=document.querySelector("#title");
const $author=document.querySelector("#author");
const $read=document.querySelector("#status");
const $booktitle=document.querySelector(".booktitle");
const $bookauthor=document.querySelector(".bookauthor");

function Book(title, author, read){
    this.title=title;
    this.author=author;
    this.read=read;
}

function addBookToLibrary(){
    const newBook=new Book($title.value, $author.value, $read.value);
    myLibrary.push(newBook);
}
function showBooks(){
    myLibrary.forEach((book) => {
        const newRow=myTable.insertRow();
        const newCell1=newRow.insertCell();
        const newCell2=newRow.insertCell();
        const newCell3=newRow.insertCell();
        const newCell4=newRow.insertCell();

        newCell1.textContent=book.title;
        newCell2.textContent=book.author;
        const button=document.createElement("button");
        button.textContent=book.read;
        button.addEventListener("click", () =>{
            if(button.innerHTML==="Read"){
                button.innerHTML="Not Read";
            }
            else if(button.innerHTML==="Not Read"){
                button.innerHTML="Read";
            }
        });
        newCell3.appendChild(button);

        const deleteButton=document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent="Delete"
        
        newCell4.appendChild(deleteButton);
        deleteButton.addEventListener("click", () =>{
            // text1.remove();
            // text2.remove();
            // button.remove();
            // deleteButton.remove();
            newRow.remove();
        });
        

        
        

    });

}

function clearForm(){
    $title.value="";
    $author.value="";
    
}
function removeFirstBook(){
    myLibrary.shift();
}

