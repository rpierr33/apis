// grab our button element from html
const btn = document.querySelector('#btn');
// add event listener to btn
btn.addEventListener("click", getUsers);
// create get user function
function getUsers(event){
// console.log("I am getting clicked")
    // prevent default button behavior
    event.preventDefault();
    // // create an instance of XHR method
    // const xhr = new XMLHttpRequest();
    // // use open method to make our call
    // xhr.open('GET', 'users.json', true)

    // xhr.onload = function(){
    //     if(this.status === 200){
    //         console.log(this.responseText)
    //     }
    // }
    // xhr.send();

    fetch("./users.json")
    
    .then((response) => response.json())
    .then((data) => {
            console.log(data)
    })

   


}
