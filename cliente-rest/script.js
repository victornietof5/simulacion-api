const h1 = document.querySelector("h1");
const ul = document.querySelector("ul");


fetch(`http://localhost:3001`).then(result => result.json()).then(data =>{
    console.log(data)
    //h1.innerText=data.message

    data.mensaje.forEach(el => {
        let li = document.createElement("li")
        li.innerText = el;
        ul.appendChild(li)
    })
})