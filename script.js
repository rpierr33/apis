// grab our button element from html
const btn = document.querySelector('#btn');
// add event listener to btn
btn.addEventListener("click", getUsers);
// create get user function
function getUsers(event){
// console.log("I am getting clicked")
    // prevent default button behavior
    event.preventDefault();
    // create an instance of XHR method
    // const xhr = new XMLHttpRequest();
    // use open method to make our call
    // xhr.open('GET', 'users.json', true)

    // xhr.onload = function(){
    //     if(this.status === 200){
    //         const users = JSON.parse(this.responseText)
    //         // console.log(users)
    //         let output = "";
    //         users.forEach((user) => {
    //          output += `
    //                 <hr>
    //                 <ul>
    //                     <li>${user.id}</li>
    //                     <li>${user.name}</li>
    //                     <li>${user.age}</li>
    //                     <li>${user.email}</li>
    //                 </ul>
    //          `
    //         })
    //         document.querySelector("#users").innerHTML = output;
    //     }
    // }
    // xhr.send();

    fetch("./users.json")
      .then((response) => response.json())
      .then((data) => {
                let output = "";
        data.forEach((user) => {
          output += `
                    <hr>
                    <ul>
                        <li>ID: ${user.id}</li>
                        <li>Name: ${user.name}</li>
                        <li>Age: ${user.age}</li>
                        <li>Email: ${user.email}</li>
                    </ul>
                `;
        });
        document.getElementById("users").innerHTML = output;
      });
}
