const getACard = document.getElementById('getACard')
const insideCardPage = document.getElementById('insideCardPage')
const modalForCardPage = document.getElementById("modalForCardPage")
const cardContainer = document.getElementById("cardContainer")
const pinOne = document.getElementById("pinOne")
const pinTwo = document.getElementById("pinTwo")
const showCard = document.getElementById("showCard")
const inputPinOne = document.getElementById('inputPinOne')
const inputPinTwo = document.getElementById('inputPinTwo')
const inputPinThree = document.getElementById('inputPinThree')
const inputPinFour = document.getElementById('inputPinFour')
const first = document.getElementById("first")
const cardNumber = document.getElementById("cardNumber")
const cvvNumber = document.getElementById("cvvNumber")
const cardUsername = document.getElementById("cardUsername")
function sageCard() {
    insideCardPage.style.display = "none"
    getACard.style.display = "block"
}
function goBackToCardPage() {
    insideCardPage.style.display = "block"
    getACard.style.display ="none"
}
function getVirtualCard() {
    cardContainer.style.display = 'block'
    getACard.style.display = "none"
}
function goBackToGetACard() {
    cardContainer.style.display = "none"
    getACard.style.display = "block"
}
function paymentForCard() {
    if (pinOne.value == pinTwo.value) {
        modalForCardPage.style.display = "block"
    } else {
        alert("Please, Your pin have to be thesame")
    }
}
function cancelModal() {
    modalForCardPage.style.display = "none"
}
function confirmModal() {
    fetch("http://localhost:1234/signUp").then((res)=>res.json()).then((data)=>{
        let isPinMatch = false
        for (let index = 0; index < data.length; index++) {
            let pin = data[index].PIN
            let splitPin = pin.split('')
            if (inputPinOne.value == splitPin[0] && inputPinTwo.value == splitPin[1] && inputPinThree.value == splitPin[2] && inputPinFour.value == splitPin[3]) {
                isPinMatch = true
                break
            }
        }
        if (isPinMatch) {
            alert("Payment for The virtual Card has been successful")
            modalForCardPage.style.display = "none"
            first.style.display = "none"
            cardContainer.style.display = "none"
            showCard.style.display = "block"
        }
    })
}