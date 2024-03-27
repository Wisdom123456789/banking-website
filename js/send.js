const generalSendPage = document.getElementById("general-send-page")
const sendToSagePage = document.getElementById("send-to-sage-page")
const foundUser = document.getElementById("foundUser")
const searchForUsername = document.getElementById("searchForUsername")
const searchForUserOne = document.getElementById("search-for-user-1")
const searchForUserInput = document.getElementById("searchForUserInput")
const downSendToSage = document.getElementById("down-send-to-sage")
const sendToSagePageTwo = document.getElementById("send-to-sage-page-two")
const userAccountToSend = document.getElementById("userAccountToSend")
const showBalance = document.getElementById("showBalance")
const amountToSend = document.getElementById("amounttosend")
const modalForTransaction = document.getElementById("modalForTransaction")
const toDisplayTransactionAmountTwo = document.getElementById("toDisplayTransactionAmountTwo")
const toDisplayTransactionAmount = document.getElementById("toDisplayTransactionAmount")
const sendPinOne = document.getElementById("sendpin1")
const sendPinTwo = document.getElementById("sendpin2")
const sendPinThree = document.getElementById("sendpin3")
const sendPinFour = document.getElementById("sendpin4")
const message = document.getElementById("message")
const displayAllTransactionsForSend = document.getElementById("displayAllTransactionsForSend")
const divThreeForSend = document.getElementById("div-three-for-send")
const NothingDiv = document.getElementById("NothingDiv")
function sendToSage() {
    generalSendPage.style.display = "none"
    sendToSagePage.style.display = "block"
}
function backToGeneralSendPage() {
    generalSendPage.style.display = "block"
    sendToSagePage.style.display = "none"
}
function vanish() {
    fetch("http://localhost:1234/signUp").then((res)=>res.json()).then((data)=>{
        fetch("http://localhost:1234/logIn").then((res)=>res.json()).then((logindetails)=>{
            for (let index = 0; index < data.length; index++) {
                if (searchForUserInput.value == data[index].Username) {
                    if (data[index].id != logindetails[0].UserId) {
                        searchForUserOne.style.display = "block"
                        foundUser.innerHTML = data[index].Firstname + " " + data[index].Lastname
                        foundUser.style.color = "green"
                        searchForUsername.style.display = "block"
                        downSendToSage.style.display = "none"
                        userAccountToSend.innerHTML = data[index].Firstname + " " + data[index].Lastname
                    }
                } 
            }
        })
    })
}
function searchforit() {
    Promise.all([
        fetch("http://localhost:1234/signUp").then(response => response.json()),
        fetch("http://localhost:1234/logIn").then(response => response.json())
    ]).then(([data, loginInfo])=>{
        for (let index = 0; index < data.length; index++) {
            if (data[index].id == loginInfo[0].UserId) {
                sendToSagePage.style.display = "none"
                sendToSagePageTwo.style.display = "block"
                showBalance.innerHTML = data[index].Amount
                
            }
        }
    })
}
function sendMoney() {
    Promise.all([
        fetch("http://localhost:1234/signUp").then(response => response.json()),
        fetch("http://localhost:1234/logIn").then(response => response.json())
    ]).then(([data, loginInfo])=>{
        for (let index = 0; index < data.length; index++) {
            if (data[index].id == loginInfo[0].UserId) {
                if (amountToSend.value > data[index].Amount) {
                    alert("Insufficient Balance")
                } else if (amountToSend.value == "" && message.value == "") {
                    alert("Fill in the details below")
                } else{
                    modalForTransaction.style.display = "block"
                    toDisplayTransactionAmount.innerHTML = amountToSend.value
                    toDisplayTransactionAmountTwo.innerHTML = amountToSend.value
                }
            }
        }
    })
}
function cancelModalForSend() {
    modalForTransaction.style.display = "none"
}
function confirmPaymentForSend() {
    Promise.all([
        fetch("http://localhost:1234/signUp").then(response => response.json()),
        fetch("http://localhost:1234/logIn").then(response => response.json())
    ]).then(([data, loginInfo])=>{
        for (let i = 0; i < data.length; i++) {
            let splitUserPin = data[i].PIN.split("")
            // amountToSend.value = ""
            // message.va
            if (data[i].id == loginInfo[0].UserId && sendPinOne.value == splitUserPin[0] && sendPinTwo.value == splitUserPin[1] && sendPinThree.value == splitUserPin[2] && sendPinFour.value == splitUserPin[3]) {
                for (let index = 0; index < data.length; index++) {
                    if (searchForUserInput.value == data[index].Username) {
                        let newAmount = Number(data[index].Amount) + Number(amountToSend.value)
                        fetch(`http://localhost:1234/signUp/${data[index].id}`,{
                            method : "PATCH",
                            headers : {
                                "content-type" : "application/json"
                            },
                            body  : JSON.stringify({
                                Amount : newAmount
                            })
                        })
                    }
                    if (data[index].id == loginInfo[0].UserId) {
                        let substractingAmount = data[index].Amount - amountToSend.value
                        fetch(`http://localhost:1234/signUp/${data[index].id}`,{
                            method : "PATCH",
                            headers : {
                                "content-type" : "application/json"
                            },
                            body : JSON.stringify({
                                Amount : substractingAmount
                            })
                        }).then((res)=>res.json()).then((update)=>{
                            alert(`You have successfully send money to  ${searchForUserInput.value}`)
                            transactionsForSend()
                            updatingit()
                            modalForTransaction.style.display = "none"
                        })
                    }
                }
                break
            }
        }
    })
}
function nothingForPin() {
    sendPinOne.value = ""
    sendPinTwo.value = ""
    sendPinThree.value = ""
    sendPinFour.value = ""
}
function moveToNextSend() {
    if (sendPinOne.value.length == 1) {
        sendPinTwo.focus()
    }
    if (sendPinTwo.value.length == 1) {
        sendPinThree.focus()
    }
    if (sendPinThree.value.length == 1) {
        sendPinFour.focus()
    }
}
function moveToPrevSend() {
    if (sendPinFour.value.length == 0) {
        sendPinThree.focus()
    }
}
function fetchingDataForTransaction(){
    fetch("http://localhost:1234/signUp").then((res)=>res.json()).then((data)=>{
        fetch("http://localhost:1234/transactions").then((res)=>res.json()).then((userhistory)=>{
            fetch("http://localhost:1234/logIn").then((res)=>res.json()).then((userLogin)=>{
                for (let index = 0; index < data.length; index++) {
                    for (let i = 0; i < userhistory.length; i++) {
                        if (data[index].id == userhistory[i].UserTransactionId) {
                            if (userhistory[i].UserTransactionId == userLogin[0].UserId){
                                NothingDiv.style.display = "none"
                                divThreeForSend.style.display = "block"
                                break
                            } else {
                                NothingDiv.style.display = "block"
                                divThreeForSend.style.display = "none"
                                break
                            }  
                        }
                    }
                }
            })
        })
    })
}
// fetchingDataForTransaction()
function transactionsForSend(){
    fetch("http://localhost:1234/signUp").then((res)=>res.json()).then((data)=>{
        fetch("http://localhost:1234/logIn").then((res)=>res.json()).then((login)=>{
            for (let index = 0; index < data.length; index++) {
                if (data[index].id == login[0].UserId) {
                    let transactionHistory = {
                        Name : data[index].Firstname,
                        Method : "Send",
                        Dateof : new Date().toLocaleDateString(),
                        Time : new Date().toLocaleTimeString(),
                        Description : message.value,
                        Amount : amountToSend.value,
                        UserTransactionId : data[index].id
                    }
                    fetch("http://localhost:1234/transactions",{
                            headers : {
                                "content-type" : "application/json"
                            },
                            method : "POST",
                            body : JSON.stringify(transactionHistory)
                    })
                    break
                }
            }
        })
    })
}
function fetchingFromSendTransaction() {
    displayAllTransactions.innerHTML = ""
    fetch("http://localhost:1234/logIn").then((res)=>res.json()).then((data)=>{
        fetch("http://localhost:1234/transactions").then((res)=>res.json()).then((userhistory)=>{
            for (let i = 0; i < userhistory.length; i++) {
                if (data[0].UserId == userhistory[i].UserTransactionId) {
                    displayAllTransactionsForSend.innerHTML += ` 
                        <tr>
                            <td>${userhistory[i].Name}</td>
                            <td>${userhistory[i].Method}</td>
                            <td>${userhistory[i].Dateof}</td>
                            <td>${userhistory[i].Time}</td>
                            <td>${userhistory[i].Description}</td>
                            <td>${userhistory[i].Amount}</td>
                        </tr>
                    `
                }
            }
        })
    })
    
}