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
function paypage(params) {
    cardPage.style.display = "none"
    homePage.style.display = "none"
    budgetPage.style.display = "none"
    payPage.style.display = "block"
    sendPage.style.display = "none"
}
function cardpage() {
    cardPage.style.display = "block"
    homePage.style.display = "none"
    budgetPage.style.display = "none"
    payPage.style.display = "none"
    sendPage.style.display = "none"
}
function homepage() {
    cardPage.style.display = "none"
    homePage.style.display = "block"
    budgetPage.style.display = "none"
    payPage.style.display = "none"
    sendPage.style.display = "none"
}
function budgetpage() {
    cardPage.style.display = "none"
    homePage.style.display = "none"
    payPage.style.display = "none"
    budgetPage.style.display = "block"
    sendPage.style.display = "none"
}
function sendpage() {
    homePage.style.display = "none"
    cardPage.style.display = "none"
    budgetPage.style.display = "none"
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
fetch("http://localhost:1234/logIn").then((res)=> res.json()).then((data)=>{
    for (let index = 0; index < data.length; index++) {
        username.innerHTML = data[index].Username
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