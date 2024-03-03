let pageOne = document.getElementById('page1');
let pageTwo = document.getElementById('page2');
let email = document.getElementById('email')
let firstName = document.getElementById('firstname')
let lastName = document.getElementById('lastname')
let country = document.getElementById('Country')
let phoneNumber = document.getElementById('phoneNumber')
let birthDate = document.getElementById("birthDate")
let password =  document.getElementById('password')
let confirmPassword = document.getElementById('confirmPassword')
let paragraphOne = document.getElementById('para1')
let paragraphTwo = document.getElementById('para2')
let paragraphThree = document.getElementById('para3')
let paragraphFour = document.getElementById('para4')
let specialcharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "|", "'", '"']
let visible = document.getElementById('visible')
let novisible = document.getElementById('novisible')
function confirmPass() {
    if (confirmPassword.type == "password") {
        confirmPassword.type = "text"
        visible.style.display = "none"
        novisible.style.display = "block"
    } else{
        confirmPassword.type = 'password'
        novisible.style.display = 'none'
        visible.style.display = 'block'
    }
}
function showPassword() {
    if (password.type == "password") {
        password.type = "text"
        visibleone.style.display = "none"
        novisibleone.style.display = "block"
    } else{
        password.type = 'password'
        novisibleone.style.display = 'none'
        visibleone.style.display = 'block'
    }
}
function nextPage() {
    pageOne.style.left = "-110%";
    pageTwo.style.left = "0"
}
function prevPage() {
    pageOne.style.left = "0"
    pageTwo.style.left = "100%"
}
function submit() {
    for (let index = 0; index < specialcharacters.length; index++) {
        if (email.value == '' || password.value == '' || confirmPassword.value == '' || firstName.value == '' || lastName.value == '' || country.value == '' || phoneNumber.value == '' || birthDate.value == '') {
            alert("Fill the informations provided")
            break
        } else if(confirmPassword.value != password.value){
            alert("Invaild password")
            break
        } else if(password.value.length < 6) {
            alert("Your password must be at least 6 characters long.")
            break
        } else if(!email.value.includes("@") || !email.value.includes('.com')){
            alert( "Please enter a valid e-mail address")
            break
        } else if (!password.value.includes(specialcharacters[index])) {
            alert('must contain at least a special character')
            break
        }
        else{
            let mySignUpData = {
                Firstname: firstName.value ,
                Lastname: lastName.value,
                Country: country.value,
                Phone: phoneNumber.value,
                Birthdate: birthDate.value,
                Email: email.value,
                Password: password.value
            }
            fetch("http://localhost:1234/signUp",{
                headers : {
                    "content-type" : "applications/json"
                },
                method : "POST",
                body : JSON.stringify(mySignUpData)
            }).then((res)=> res.json()).then((data)=>{
                window.location.href = '../html/login.html'
            })
            break
        }
    }
}
