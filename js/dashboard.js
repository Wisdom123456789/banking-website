let username = document.getElementById('username')
let divTwo = document.getElementById("div_two")
let divOne = document.getElementById("div_one")
let saveDiv = document.getElementById("save_div")
let borrow_div = document.getElementById("borrow_div")
let investDiv = document.getElementById("invest_div")
let sendPage = document.getElementById("send_page")
let homePage = document.getElementById("home_page")
let budgetPage = document.getElementById("budget_page")
let cardPage = document.getElementById("card_page")
let updatetime = document.getElementById("updateTime")
let payPage = document.getElementById('pay_page')
let airtelPage = document.getElementById("airtel_page")
let dataPage = document.getElementById("data_page")
let inside_pay_page = document.getElementById("inside-pay-page")
let accountPage = document.getElementById("account-page")

// Functions for navigating Throught
function accountpage(){
    homePage.style.display = "none"
    cardPage.style.display = "none"
    budgetPage.style.display = "none"
    sendPage.style.display = "none"
    payPage.style.display = "none"
    accountPage.style.display = "block"
}
function goback() {
    airtelPage.style.display = "none"
    inside_pay_page.style.display = "block"
    dataPage.style.display = "none"
}
function airtel() {
    airtelPage.style.display = "block"
    inside_pay_page.style.display = "none"
    dataPage.style.display = "none"
}
function internet() {
    airtelPage.style.display = "none"
    inside_pay_page.style.display = "none"
    dataPage.style.display = "block"
}
function paypage() {
    cardPage.style.display = "none"
    homePage.style.display = "none"
    budgetPage.style.display = "none"
    payPage.style.display = "block"
    accountPage.style.display = "none"
    sendPage.style.display = "none"
}
function cardpage() {
    cardPage.style.display = "block"
    homePage.style.display = "none"
    budgetPage.style.display = "none"
    payPage.style.display = "none"
    accountPage.style.display = "none"
    sendPage.style.display = "none"
}
function homepage() {
    cardPage.style.display = "none"
    homePage.style.display = "block"
    budgetPage.style.display = "none"
    payPage.style.display = "none"
    sendPage.style.display = "none"
    accountPage.style.display = "none"
}
function budgetpage() {
    cardPage.style.display = "none"
    homePage.style.display = "none"
    payPage.style.display = "none"
    budgetPage.style.display = "block"
    sendPage.style.display = "none"
    accountPage.style.display = "none"
}
function sendpage() {
    homePage.style.display = "none"
    cardPage.style.display = "none"
    budgetPage.style.display = "none"
    accountPage.style.display = "none"
    sendPage.style.display = "block"
    payPage.style.display = "none"
}
function spend() {
    divTwo.style.display = 'block'
    borrow_div.style.display = "none"
    divOne.style.display = "block"
    investDiv.style.display = "none"
    saveDiv.style.display = "none"
}
function borrow() {
    borrow_div.style.display = "block"
    divTwo.style.display = 'none'
    divOne.style.display = "none"
    saveDiv.style.display = "none"
    investDiv.style.display = 'none'
}
function saveinfo() {
    divTwo.style.display = 'none'
    borrow_div.style.display = "none"
    divOne.style.display = "none"
    investDiv.style.display = "none"
    saveDiv.style.display = "block"
}
function invest() {
    divTwo.style.display = 'none'
    borrow_div.style.display = "none"
    divOne.style.display = "none"
    investDiv.style.display = "block"
    saveDiv.style.display = "none"
}
// This is for displaying

let money = document.getElementById("money")
fetch("http://localhost:1234/logIn").then((res)=> res.json()).then((data)=>{
    for (let index = 0; index < data.length; index++) {
        username.innerHTML = data[index].Username
        money.innerHTML = data[index].Amount
    }
})
updatetime.innerHTML = new Date().toLocaleDateString()
let currency = document.getElementById("currency")
function itdisappears() {
    if (currency.style.filter == "blur(8px)") {
        currency.style.filter = "none"
    } else{
        currency.style.filter = "blur(8px)"
    }
}
// This is for Pay Page

let moneyForAirtime = document.getElementById("money-for-airtime")
let phoneForAirtime = document.getElementById("phone-for-airtime")
let networkForAirtime = document.getElementById("network-for-airtime")
function payMoney() {
    
    fetch("http://localhost:1234/logIn").then((res)=> res.json()).then((data)=>{
        let isAmountEnought = false
        for (let index = 0; index < data.length; index++) {
            if (moneyForAirtime.value > Number(data[index].Amount)) {
                isAmountEnought = true
                break
            }
        }
        if (isAmountEnought) {
            alert("Not Enought Money for Airtime!")
        }
    })
}
// Functions for moving the pin
let pin1 = document.getElementById('pin1');
let pin2 = document.getElementById('pin2');
let pin3 = document.getElementById('pin3');
let pin4 = document.getElementById('pin4');

function moveToNext() {
    if (pin1.value.length === 1) {
        pin2.focus();
    }
    if (pin2.value.length === 1) {
        pin3.focus();
    }
    if (pin3.value.length === 1) {
        pin4.focus();
    }
}
  
function moveToPrev() {
    if (pin4.value.length == 0) {
        pin3.focus();
    } else if (pin3.value.length == 0) {
        pin2.focus();
    } else if (pin2.value.length == 0) {
        pin1.focus();
    }
}