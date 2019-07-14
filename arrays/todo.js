let todo = [{
    item: 'Wash car',
    completed: true
},
{
    item: 'Clean room',
    completed: false
},
{
    item: 'Do dishes',
    completed: false
},
{
    item: 'Walk dog',
    completed: true
}]

const sortToDo = function (todo) {
    todo.sort(function (a, b) {
        if(!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}


sortToDo(todo)
console.log(todo)

// console.log(getThingsToDo(todo))
// const item = deleteToDo(todo, 'walk dog')
// console.log(todo)


