let userFullName = document.getElementById("username")
let moneyToDisplay = document.getElementById("money")
let showAccountNumber = document.getElementById("showAccountNumber")
let timeToDisplay = document.getElementById("updateTime")
let toDisplayProfileImage = document.getElementById("toDisplayProfileImage")
let profilepic = document.getElementById("profilepic")
let profilePicTwo = document.getElementById("profilePicTwo")
let profilePicThree = document.getElementById("profilepicThree")
let iconForProfilePicture = document.getElementById("icon-for-profile-picture")
let iconForProfilePictureOne = document.getElementById("icon-for-profile-picture-one")
let iconForProfilePictureTwo = document.getElementById("icon-for-profile-picture-two")
let iconForProfilePictureThree = document.getElementById("icon-for-profile-picture-three")
function updatingit() {
    fetch("http://localhost:1234/signUp").then((res)=> res.json()).then((data)=>{
        fetch("http://localhost:1234/logIn").then((res)=>res.json()).then((userinformations)=>{
            for (let index = 0; index < data.length; index++) {
                if (data[index].id == userinformations[0].UserId) {
                    userFullName.innerHTML = data[index].Firstname + " " + data[index].Lastname
                    moneyToDisplay.innerHTML = data[index].Amount
                    timeToDisplay.innerHTML = new Date().toLocaleDateString()
                    showAccountNumber.innerHTML = data[index].Phone
                    if (data[index].ProfilePicture == "") {
                        profilepic.style.display = "none"
                        profilePicTwo.style.display = "none"
                        profilePicThree.style.display = "none"
                        iconForProfilePicture.style.display = "block"
                        toDisplayProfileImage.style.display = "none"
                        iconForProfilePictureOne.style.display = "block"
                        iconForProfilePictureTwo.style.display = "block"
                        iconForProfilePictureThree.style.display = "block"
                    } else{
                        profilepic.style.display = "block"
                        toDisplayProfileImage.style.display = "block"
                        toDisplayProfileImage.src = data[index].ProfilePicture
                        profilepic.src = data[index].ProfilePicture
                        profilePicTwo.src = data[index].ProfilePicture
                        profilePicThree.src = data[index].ProfilePicture
                        iconForProfilePictureOne.style.display = "none"
                        iconForProfilePictureTwo.style.display = "none"
                        iconForProfilePictureThree.style.display = "none"
                        iconForProfilePicture.style.display = "none"
                    }
                    fetchingData()
                    fetchingFromTransactionHistory()
                    fetchingDataForTransaction()
                    fetchingFromSendTransaction()
                    break
                }
            }
        })
    })
}
updatingit()
const save_div = document.getElementById("save_div")
const invest_div = document.getElementById("invest_div")
const borrow_div = document.getElementById("borrow_div")
const div_one = document.getElementById("div_one")
let div_two = document.getElementById("div_two")
let div_three = document.getElementById("div_three")
function spend() {
    save_div.style.display = "none"
    invest_div.style.display = "none"
    div_one.style.display = "block"
    div_two.style.display = "block"
    borrow_div.style.display = "none"
}
function saveinfo() {
    save_div.style.display = "block"
    invest_div.style.display = "none"
    div_one.style.display = "none"
    div_two.style.display = "none"
    div_three.style.display = "none"
    borrow_div.style.display = "none"
}
function borrow() {
    save_div.style.display = "none"
    invest_div.style.display = "none"
    borrow_div.style.display = "block"
    div_one.style.display = "none"
    div_two.style.display = "none"
    div_three.style.display = "none"
}
function invest() {
    save_div.style.display = "none"
    invest_div.style.display = "block"
    borrow_div.style.display = "none"
    div_one.style.display = "none"
    div_two.style.display = "none"
    div_three.style.display = "none"
}
function itdisappears() {
    if (moneyToDisplay.style.filter == "blur(0px)") {
        moneyToDisplay.style.filter =  "blur(6px)";
    } else {
        moneyToDisplay.style.filter = "blur(0px)"
    }
}