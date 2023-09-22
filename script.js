document.getElementById("load").addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/todos").then((result)=>{
        console.log(result)
    })
})