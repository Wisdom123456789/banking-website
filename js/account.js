const profilePage = document.getElementById("profile-page")
const profilePlace = document.getElementById("profile-place")
const Username = document.getElementById("Username@")
const accountName = document.getElementById("accountName")
const dateOfBirth = document.getElementById("dateOfBirth")
const emailAddress = document.getElementById("emailAddress")
const phoneNumber = document.getElementById("phoneNumber")
const gender = document.getElementById("gender")
const countryFrom = document.getElementById("countryFrom")
const userId = document.getElementById("userId")
const usernameid = document.getElementById("usernameid")
const copyAccountNumber = document.getElementById("copyAccountNumber")
const maritalStatus = document.getElementById("maritalStatus")
const myModalone = document.getElementById("myModalone")
let showuserUsername = document.getElementById("showuserUsername")
let userUsername = document.getElementById("userUsername")
let showuserUsernameTwo = document.getElementById("showuserUsernameTwo")
let showuserUsernameFive = document.getElementById("showuserUsernameFive")
let myModalThree = document.getElementById("myModalThree")
let myModalFive = document.getElementById("myModalFive")
let myModalSix = document.getElementById("myModalSix")
let myModalSeven = document.getElementById("myModalSeven")
let myModalEight = document.getElementById("myModalEight")
let showuserUsernameThree = document.getElementById("showuserUsernameThree")
let showuserUsernameSix = document.getElementById("showuserUsernameSix")
let showuserUsernameSeven = document.getElementById("showuserUsernameSeven")
let showuserUsernameEight = document.getElementById("showuserUsernameEight")
let showuserUsernameFour = document.getElementById("showuserUsernameFour")
let myModalTwo = document.getElementById("myModalTwo")
let myModalFour = document.getElementById("myModalFour")
let userUsernamethree = document.getElementById("userUsernamethree")
let userUsernameFour = document.getElementById("userUsernameFour")
let userUsernameFive = document.getElementById("userUsernameFive")
let userUsernameSix = document.getElementById("userUsernameSix")
let userUsernameSeven = document.getElementById("userUsernameSeven")
let userUsernameEight = document.getElementById("userUsernameEight")
let userUsernametwo = document.getElementById("userUsernametwo")
function changeit() {
    let element = document.body
    element.classList.toggle("dark-mode")
}

Promise.all([
    fetch("http://localhost:1234/signUp").then((res)=>res.json()),
    fetch("http://localhost:1234/logIn").then((res)=>res.json())
]).then(([data, loginInfo])=>{
    for (let index = 0; index < data.length; index++) {
        if (data[index].id == loginInfo[0].UserId) {
            maritalStatus.innerHTML = data[index].Marital
            phoneNumber.innerHTML = data[index].Phone
            emailAddress.innerHTML = data[index].Email
            gender.innerHTML = data[index].Gender
            Username.innerHTML = data[index].Username
            accountName.innerHTML = data[index].Firstname
            countryFrom.innerHTML = data[index].Lastname
            dateOfBirth.innerHTML = data[index].Birthdate
        }
    }
})
function showProfile() {
    profilePlace.style.display = "block"
    profilePage.style.display = "none"
}
function goBackAccount() {
    profilePlace.style.display = "none"
    profilePage.style.display = "block"
}
function signOut() {
    fetch("http://localhost:1234/logIn").then((res)=> res.json()).then((data)=>{
        for (let index = 0; index < data.length; index++) {
            fetch(`http://localhost:1234/logIn/${data[index].id}`,{
                method : "DELETE",
                headers : {
                    "content-type" : "application/json"
                }
            }).then((res)=>res.json()).then((data)=>{
                window.location.href = "../html/login.html"
            })
        }
    })
}
function DeleteAccount() {
    fetch("http://localhost:1234/signUp").then((res)=> res.json()).then((data)=>{
        for (let index = 0; index < data.length; index++) {
            fetch(`http://localhost:1234/signUp/${data[index].id}`,{
                method : "DELETE",
                headers : {
                    "content-type" : "application/json"
                }
            }).then((res)=>res.json()).then((data)=>{
                signOut()
            })
        }
    })
}
function editInfo() {
    Promise.all([
        fetch("http://localhost:1234/signUp").then((res)=>res.json()),
        fetch("http://localhost:1234/logIn").then((res)=>res.json())
    ]).then(([data, loginInfo])=>{
        for (let index = 0; index < data.length; index++) {
            if (data[index].id == loginInfo[0].UserId) {
                myModalone.style.display = "block"
                showuserUsername.innerHTML = data[index].Username
            }
        }
    })
}
function editInfoTwo() {
    Promise.all([
        fetch("http://localhost:1234/signUp").then((res)=>res.json()),
        fetch("http://localhost:1234/logIn").then((res)=>res.json())
    ]).then(([data, loginInfo])=>{
        for (let index = 0; index < data.length; index++) {
            if (data[index].id == loginInfo[0].UserId) {
                myModalTwo.style.display = "block"
                showuserUsernameTwo.innerHTML = data[index].Firstname
            }
        }
    })
}
function editInfoThree() {
    Promise.all([
        fetch("http://localhost:1234/signUp").then((res)=>res.json()),
        fetch("http://localhost:1234/logIn").then((res)=>res.json())
    ]).then(([data, loginInfo])=>{
        for (let index = 0; index < data.length; index++) {
            if (data[index].id == loginInfo[0].UserId) {
                myModalThree.style.display = "block"
                showuserUsernameThree.innerHTML = data[index].Lastname
            }
        }
    })
}
function editInfoFour(){
    Promise.all([
        fetch("http://localhost:1234/signUp").then((res)=>res.json()),
        fetch("http://localhost:1234/logIn").then((res)=>res.json())
    ]).then(([data, loginInfo])=>{
        for (let index = 0; index < data.length; index++) {
            if (data[index].id == loginInfo[0].UserId) {
                myModalFour.style.display = "block"
                showuserUsernameFour.innerHTML = data[index].Email
            }
        }
    })
}
function editInfoFive(){
    Promise.all([
        fetch("http://localhost:1234/signUp").then((res)=>res.json()),
        fetch("http://localhost:1234/logIn").then((res)=>res.json())
    ]).then(([data, loginInfo])=>{
        for (let index = 0; index < data.length; index++) {
            if (data[index].id == loginInfo[0].UserId) {
                myModalFive.style.display = "block"
                showuserUsernameFive.innerHTML = data[index].Phone
            }
        }
    })
}
function editInfoSix(){
    Promise.all([
        fetch("http://localhost:1234/signUp").then((res)=>res.json()),
        fetch("http://localhost:1234/logIn").then((res)=>res.json())
    ]).then(([data, loginInfo])=>{
        for (let index = 0; index < data.length; index++) {
            if (data[index].id == loginInfo[0].UserId) {
                myModalSix.style.display = "block"
                showuserUsernameSix.innerHTML = data[index].Gender
            }
        }
    })
}
function editInfoSeven(){
    Promise.all([
        fetch("http://localhost:1234/signUp").then((res)=>res.json()),
        fetch("http://localhost:1234/logIn").then((res)=>res.json())
    ]).then(([data, loginInfo])=>{
        for (let index = 0; index < data.length; index++) {
            if (data[index].id == loginInfo[0].UserId) {
                myModalSeven.style.display = "block"
                showuserUsernameSeven.innerHTML = data[index].Birthdate
            }
        }
    })
}
function editInfoEight(){
    Promise.all([
        fetch("http://localhost:1234/signUp").then((res)=>res.json()),
        fetch("http://localhost:1234/logIn").then((res)=>res.json())
    ]).then(([data, loginInfo])=>{
        for (let index = 0; index < data.length; index++) {
            if (data[index].id == loginInfo[0].UserId) {
                myModalEight.style.display = "block"
                showuserUsernameEight.innerHTML = data[index].Marital
            }
        }
    })
}
function cancelModalForAccountTwo() {
    myModalTwo.style.display = "none"
}
function cancelModalForAccountThree() {
    myModalThree.style.display = "none"
}
function cancelModalForAccountFour() {
    myModalFour.style.display = "none"
}
function cancelModalForAccount() {
    myModalone.style.display = "none"
}
function cancelModalForAccountFive() {
    myModalFive.style.display = "none"
}
function cancelModalForAccountSix() {
    myModalSix.style.display = "none"
}
function cancelModalForAccountSeven() {
    myModalSeven.style.display = "none"
}
function cancelModalForAccountEight() {
    myModalEight.style.display = "none"
}
function confirmEditing() {
    Promise.all([
        fetch("http://localhost:1234/signUp").then((res)=>res.json()),
        fetch("http://localhost:1234/logIn").then((res)=>res.json())
    ]).then(([data, loginInfo])=>{
        for (let index = 0; index < data.length; index++) {
            if (data[index].id == loginInfo[0].UserId) {
                fetch(`http://localhost:1234/signUp/${data[index].id}`,{
                    method : "PATCH",
                    headers : {
                        "content-type" : "application/json"
                    },
                    body : JSON.stringify({
                        Username : userUsername.value
                    })
                }).then((res)=>res.json()).then((editing)=>{
                    location.reload()
                })
            }
        }
    })
}
function confirmEditingTwo() {
    Promise.all([
        fetch("http://localhost:1234/signUp").then((res)=>res.json()),
        fetch("http://localhost:1234/logIn").then((res)=>res.json())
    ]).then(([data, loginInfo])=>{
        for (let index = 0; index < data.length; index++) {
            if (data[index].id == loginInfo[0].UserId) {
                fetch(`http://localhost:1234/signUp/${data[index].id}`,{
                    method : "PATCH",
                    headers : {
                        "content-type" : "application/json"
                    },
                    body : JSON.stringify({
                        Firstname : userUsernametwo.value,
                    })
                }).then((res)=>res.json()).then((editing)=>{
                    location.reload()
                })
            }
        }
    })
}
function confirmEditingThree() {
    Promise.all([
        fetch("http://localhost:1234/signUp").then((res)=>res.json()),
        fetch("http://localhost:1234/logIn").then((res)=>res.json())
    ]).then(([data, loginInfo])=>{
        for (let index = 0; index < data.length; index++) {
            if (data[index].id == loginInfo[0].UserId) {
                fetch(`http://localhost:1234/signUp/${data[index].id}`,{
                    method : "PATCH",
                    headers : {
                        "content-type" : "application/json"
                    },
                    body : JSON.stringify({
                        Lastname : userUsernamethree.value,
                    })
                }).then((res)=>res.json()).then((editing)=>{
                    location.reload()
                })
            }
        }
    })
}
function confirmEditingFour() {
    Promise.all([
        fetch("http://localhost:1234/signUp").then((res)=>res.json()),
        fetch("http://localhost:1234/logIn").then((res)=>res.json())
    ]).then(([data, loginInfo])=>{
        for (let index = 0; index < data.length; index++) {
            if (data[index].id == loginInfo[0].UserId) {
                fetch(`http://localhost:1234/signUp/${data[index].id}`,{
                    method : "PATCH",
                    headers : {
                        "content-type" : "application/json"
                    },
                    body : JSON.stringify({
                        Email : userUsernameFour.value,
                    })
                }).then((res)=>res.json()).then((editing)=>{
                    location.reload()
                })
            }
        }
    })
}
function confirmEditingFive() {
    Promise.all([
        fetch("http://localhost:1234/signUp").then((res)=>res.json()),
        fetch("http://localhost:1234/logIn").then((res)=>res.json())
    ]).then(([data, loginInfo])=>{
        for (let index = 0; index < data.length; index++) {
            if (data[index].id == loginInfo[0].UserId) {
                fetch(`http://localhost:1234/signUp/${data[index].id}`,{
                    method : "PATCH",
                    headers : {
                        "content-type" : "application/json"
                    },
                    body : JSON.stringify({
                        Phone : userUsernameFive.value
                    })
                }).then((res)=>res.json()).then((editing)=>{
                    location.reload()
                })
            }
        }
    })
}
function confirmEditingSix() {
    Promise.all([
        fetch("http://localhost:1234/signUp").then((res)=>res.json()),
        fetch("http://localhost:1234/logIn").then((res)=>res.json())
    ]).then(([data, loginInfo])=>{
        for (let index = 0; index < data.length; index++) {
            if (data[index].id == loginInfo[0].UserId) {
                fetch(`http://localhost:1234/signUp/${data[index].id}`,{
                    method : "PATCH",
                    headers : {
                        "content-type" : "application/json"
                    },
                    body : JSON.stringify({
                        Gender : userUsernameSix.value
                    })
                }).then((res)=>res.json()).then((editing)=>{
                    location.reload()
                })
            }
        }
    })
}
function confirmEditingSeven() {
    Promise.all([
        fetch("http://localhost:1234/signUp").then((res)=>res.json()),
        fetch("http://localhost:1234/logIn").then((res)=>res.json())
    ]).then(([data, loginInfo])=>{
        for (let index = 0; index < data.length; index++) {
            if (data[index].id == loginInfo[0].UserId) {
                fetch(`http://localhost:1234/signUp/${data[index].id}`,{
                    method : "PATCH",
                    headers : {
                        "content-type" : "application/json"
                    },
                    body : JSON.stringify({
                        Birthdate : userUsernameSeven.value
                    })
                }).then((res)=>res.json()).then((editing)=>{
                    location.reload()
                })
            }
        }
    })
}
function confirmEditingEight() {
    Promise.all([
        fetch("http://localhost:1234/signUp").then((res)=>res.json()),
        fetch("http://localhost:1234/logIn").then((res)=>res.json())
    ]).then(([data, loginInfo])=>{
        for (let index = 0; index < data.length; index++) {
            if (data[index].id == loginInfo[0].UserId) {
                fetch(`http://localhost:1234/signUp/${data[index].id}`,{
                    method : "PATCH",
                    headers : {
                        "content-type" : "application/json"
                    },
                    body : JSON.stringify({
                        Marital : userUsernameEight.value
                    })
                }).then((res)=>res.json()).then((editing)=>{
                    location.reload()
                })
            }
        }
    })
}