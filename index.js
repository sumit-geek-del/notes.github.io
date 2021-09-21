console.log("This is my notes app");
showNotes();


// If user adds a notes , add to local storage
let addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', function(e){
    let addTxt = document.getElementById('add-txt');
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = " ";
    console.log(notesObj);
    showNotes();



})
function showNotes(){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html ="";
    notesObj.forEach(function(elem, index) {
        html += `

        <div class="my-2 mx-2 card noteCard" style="width: 18rem;">
        
        <div class="card-body" id="card-note">
          <h5 class="card-title">Note 
          ${index+1}</h5>
          <p class="card-text">${elem}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-outline-dark">Delete Note</button>
        </div>
      </div>
        `
        
    });
    let savedNotes = document.getElementById('saved-notes');
    if(notesObj.length != 0){
        savedNotes.innerHTML = html;

    }
    else{
        savedNotes.innerHTML = `<div class="alert alert-primary" role="alert">
       No Saved Notes Found, Add Some note
      </div>`

    }

   

}
function deleteNote(index){
    console.log("I am deleting", index);
    let notes = localStorage.getItem('notes');
    

    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();

}
let searchTxt = document.getElementById('searchTxt');
searchTxt.addEventListener('input', function(){
    let inputVal = searchTxt.value;
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(elem){
        let cardTxt = elem.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputVal)){
            elem.style.display = "block";
        }
        else{
            elem.style.display = "none";

        }

    })
})