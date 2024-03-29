const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise.  Eating better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if(a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if(b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

const findNote = function(notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function(notes, query) {
    return notes.filter(function(notes, index) {
        const isTitleMatch = notes.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = notes.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}


// console.log(findNotes(notes, 'eating'))

// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

// const note = findNote(notes, 'Office Modification')
// console.log(note)

sortNotes(notes)
console.log(notes)