document.getElementById('new-note-btn').addEventListener("click", addNote);

function addNote()
{
    var noteTitle = 'TITLE';
    var noteBody = 'lorem ipsum';
    var noteId = chance.guid();

    var note = {
        title: noteTitle,
        body: noteBody,
        ID: noteId
    };

    if (localStorage.getItem('notes') == null) {
        var notes = [];
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
    } else {
        var notes = JSON.parse(localStorage.getItem('notes'));
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    fetchNotes();

    // e.preventDefault();
}

function deleteNote(id) {

    console.log('deleting node');

    var notes = JSON.parse(localStorage.getItem('notes'));

    for (var i = 0; i < notes.length; i++) {
        if (notes[i].ID == id) {
            notes.splice(i, 1);
        }
    }

    localStorage.setItem('notes', JSON.stringify(notes));

    fetchNotes();
}

function deleteNote(id) {
    var notes = JSON.parse(localStorage.getItem('notes'));

    for (var i = 0; i < notes.length; i++) {
        if (notes[i].ID == id) {
            notes.splice(i, 1);
        }
    }

    localStorage.setItem('notes', JSON.stringify(notes));

    fetchNotes();
}

function saveChanges(id)
{
    var notes = JSON.parse(localStorage.getItem('notes'));

    for (var i = 0; i < notes.length; i++) {
        if (notes[i].ID == id) {
            notes[i].title = document.getElementById(id).children[0].innerHTML;
            notes[i].body = document.getElementById(id).children[1].innerHTML;
        }
    }

    localStorage.setItem('notes', JSON.stringify(notes));

    fetchNotes();
}
function fetchNotes() {
    var notes = JSON.parse(localStorage.getItem('notes'));
    var notesList = document.getElementById('notesList');

    notesList.innerHTML = '';

    for(var i=0; i<notes.length; i++)
    {
        var title = notes[i].title;
        var body = notes[i].body;
        var id = notes[i].ID;

        notesList.innerHTML += 
            '<div id="notes-body-od" class="col-lg-3 col-md-4 col-12">' + 
            '<div id="' + id + '" class="notes-body" contenteditable="">' + 
            '<h4 id="note-title">' + title + '</h4>' + 
            '<p>' + body + '</p>' +
            '<div class="row">'+
            '<div class="save-btn">'+
            '<button id="save-btn" type="button" onclick="saveChanges(\''+id+'\')" class="btn">Save</button>'+
            '<button id="del-btn" type="button" onclick="deleteNote(\''+id+'\')" class="btn">Delete</button>' +
            '</div>'+
            '</div>'+
            '</div>' +
            '</div>';
    }
}