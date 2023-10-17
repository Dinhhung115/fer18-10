import showMessage, {message, data} from './lib.js'


// Dinh nghia 1 element de nhung vao DOM (document)
let ul = document.createElement("ul")

data.forEach(({id, name})=>{
    let li = document.createElement("li")
    li.textContent = id + "; " + name
    ul.appendChild(li)
})

document.body.appendChild(ul)