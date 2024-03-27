let pageOne = document.getElementById('page1');
let pageTwo = document.getElementById('page2');
let email = document.getElementById('email')
let gender = document.getElementById("gender")
let marital = document.getElementById('marital')
let username = document.getElementById("username")
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
let visible = document.getElementById('visible')
let novisible = document.getElementById('novisible')
let pageTwoPartOne = document.getElementById('page2Part1')
let pageTwoPartTwo = document.getElementById('page2Part2')
let inputone = document.getElementById("inputone")
let inputtwo = document.getElementById("inputtwo")
let inputthree = document.getElementById("inputthree")
let inputfour = document.getElementById("inputfour")
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
    pageTwoPartOne.style.left = "100%"
    pageTwoPartTwo.style.left = "200%"
}
function nextPageone() {
    pageOne.style.left = "-210%";
    pageTwo.style.left = "-110%"
    pageTwoPartOne.style.left = "0"
    pageTwoPartTwo.style.left = "100%"
}
function nextPagetwo() {
    pageOne.style.left = "-310%";
    pageTwo.style.left = "-210%"
    pageTwoPartOne.style.left = "-110%"
    pageTwoPartTwo.style.left = "0"
}
function prevPage() {
    pageOne.style.left = "-210%";
    pageTwo.style.left = "-110%"
    pageTwoPartOne.style.left = "0"
    pageTwoPartTwo.style.left = "100%"
}
function prevPageone() {
    pageOne.style.left = "0";
    pageTwo.style.left = "100%"
    pageTwoPartOne.style.left = "200%"
    pageTwoPartTwo.style.left = "300%"
}
function prevPagetwo() {
    pageOne.style.left = "-110%";
    pageTwo.style.left = "0"
    pageTwoPartOne.style.left = "100%"
    pageTwoPartTwo.style.left = "200%"
}
function movetonext() {
    if (inputone.value.length == 1) {
        inputtwo.focus()
    }
    if (inputtwo.value.length == 1) {
        inputthree.focus()
    }
    if (inputthree.value.length == 1) {
        inputfour.focus()
    }
}
let inputTwoOne = document.getElementById("input2one")
let inputTwoTwo = document.getElementById("input2two")
let inputTwoThree = document.getElementById("input2three")
let inputTwoFour = document.getElementById("input2four")

function movetonextone() {
    if (inputTwoOne.value.length == 1) {
        inputTwoTwo.focus()
    }
    if (inputTwoTwo.value.length == 1) {
        inputTwoThree.focus()
    }
    if (inputTwoThree.value.length == 1) {
        inputTwoFour.focus()
    }
}

function checkingConditions() {
    if (email.value == '' || password.value == '' || confirmPassword.value == '' || firstName.value == '' || lastName.value == '' || country.value == '' || phoneNumber.value == '' || birthDate.value == '') {
        alert("Fill the informations provided")
    } else if(confirmPassword.value != password.value){
        alert("Invaild password")
    } else if(password.value.length < 6) {
        alert("Your password must be at least 6 characters long.")
    } else if(!email.value.includes("@") || !email.value.includes('.com')){
        alert( "Please enter a valid e-mail address")
    }else if (inputone.value != inputTwoOne.value || inputtwo.value != inputTwoTwo.value || inputthree.value != inputTwoThree.value || inputfour.value != inputTwoFour.value) {
        alert("The pins are does match")
    }
    else{
        let mySignUpData = {
            Firstname: firstName.value ,
            Lastname: lastName.value,
            Phone: phoneNumber.value,
            Birthdate: birthDate.value,
            Email: email.value,
            Password: password.value,
            Marital: marital.value,
            Username: username.value,
            Gender: gender.value,
            PIN: inputone.value + inputtwo.value + inputthree.value + inputfour.value,
            Amount: 500,
            ProfilePicture : ""
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
    }
}
function nothing() {
    email.value = ""
    password.value = ""
    confirmPassword.value = ""
    firstName.value = ""
    lastName.value = ""
    country.value = ""
    phoneNumber.value = ""
    birthDate.value = ""
    inputTwoOne.value = ""
    inputtwo.value = ""
    inputthree.value = ""
    inputfour.value = ""
    inputTwoOne.value = ""
    inputTwoTwo.value = ""
    inputTwoThree.value = ""
    inputTwoFour.value = ""
}
function submit() {
    let isThePersonThere = false
    fetch("http://localhost:1234/signUp").then((res)=> res.json()).then((data)=>{
        for (let index = 0; index < data.length; index++) {
            if (email.value == data[index].Email) {
                isThePersonThere = true
                break
            }
        }
        if (isThePersonThere) {
            alert("User already exist")
        } else{
            checkingConditions()
            nothing()
        }
    })
}
submit()