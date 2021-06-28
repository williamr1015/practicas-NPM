const messages =[
    "William",
    "Camila",
    "Samuel",
    "Andres",
    "Gabriela",
    "Daniel",
    "Felipe",
]

const randomMsg = ()=> {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message);
}

module.exports = {
    randomMsg
}