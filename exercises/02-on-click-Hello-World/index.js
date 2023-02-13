//Declare your function here
const onclickFunction = () => {
    alert("Hello world")
}

const sayHelloFunction = () => {
    let hello = document.querySelector("#hello")
    hello.addEventListener("click", onclickFunction)
}