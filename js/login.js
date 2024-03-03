let email = document.getElementById('email')
let password = document.getElementById('password')
let visible = document.getElementById('visible')
let novisible = document.getElementById('novisible')
// fetch("http://localhost:1234/signUp").then((res)=> res.json()).then((data)=>{
//     if (data.length == 0) {
//         window.location.href = '../html/signUp.html'
//     } else{
//         alert("Welcome To Your Login")
//     }
// })
function showPassword() {
    if (password.type == 'password') {
        password.type = 'text'
        visible.style.display = 'none'
        novisible.style.display='block'
    } else{
        password.type = 'password'
        visible.style.display = 'block'
        novisible.style.display = 'none'
    }
}
function loginpage() {
    fetch("http://localhost:1234/signUp")
        .then((res) => res.json())
        .then((data) => {
            let isUserThere = false;
            for (let index = 0; index < data.length; index++) {
                if (email.value === data[index].Email && password.value === data[index].Password) {
                    let myLoginData = {
                        Username: data[index].Firstname + " " + data[index].Lastname,
                        Email: data[index].Email,
                        Password: data[index].Password
                    };
                    fetch("http://localhost:1234/logIn", {
                        method: 'POST',
                        body: JSON.stringify(myLoginData),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then((res) => res.json())
                    .then((data) => {
                        window.location.href = "../html/dashboard.html";
                    });
                    isUserThere = true;
                    break;
                }
            }
            if (!isUserThere) {
                alert('User not found! Please Sign Up first');
            }
        })
        .catch((error) => {
            console.error('Error during login:', error);
        });
}
