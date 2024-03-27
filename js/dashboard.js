// This dashboard is for navigating from one page to the other
const home_page = document.getElementById("home_page")
const send_page = document.getElementById("send_page")
const pay_page = document.getElementById("pay_page")
const card_page = document.getElementById("card_page")
const account_page = document.getElementById("account-page")
const home = document.getElementById("home")
const send = document.getElementById("send")
const receipt = document.getElementById("receipt")
const budget = document.getElementById("budget")
const card = document.getElementById("card")
const budget_page = document.getElementById("budget_page")
function sendpage() {
    home_page.style.display = "none"
    send_page.style.display = "block"
    card_page.style.display = "none"
    account_page.style.display = 'none'
    pay_page.style.display = "none"
    budget_page.style.display = "none"
    send.style.color = "rgb(0,25,102)"
    send.style.borderBottom="3px solid rgb(0, 25, 102)";
    home.style.color = "rgb(192, 175, 175)"
    home.style.borderBottom= "none"
    card.style.color = "rgb(192, 175, 175)"
    card.style.borderBottom="none";
    budget.style.color = "rgb(192, 175, 175)"
    budget.style.borderBottom="none";
    receipt.style.color = "rgb(192, 175, 175)"
    receipt.style.borderBottom="none";
}
function cardpage() {
    home_page.style.display = "none"
    send_page.style.display = "none"
    card_page.style.display = "block"
    pay_page.style.display = "none"
    budget_page.style.display = "none"
    account_page.style.display = 'none'
    send.style.color = "rgb(192, 175, 175)"
    send.style.borderBottom="none";
    home.style.color = "rgb(192, 175, 175)"
    home.style.borderBottom= "none"
    budget.style.color = "rgb(192, 175, 175)"
    budget.style.borderBottom="none";
    receipt.style.color = "rgb(192, 175, 175)"
    receipt.style.borderBottom="none";
    card.style.color = "rgb(0,25,102)"
    card.style.borderBottom="3px solid rgb(0, 25, 102)";
}
function homepage() {
    home_page.style.display = "block"
    send_page.style.display = "none"
    card_page.style.display = "none"
    pay_page.style.display = "none"
    budget_page.style.display = "none"
    account_page.style.display = 'none'
    send.style.color = "rgb(192, 175, 175)"
    send.style.borderBottom="none";
    budget.style.color = "rgb(192, 175, 175)"
    budget.style.borderBottom="none";
    receipt.style.color = "rgb(192, 175, 175)"
    receipt.style.borderBottom="none";
    home.style.color = "rgb(0, 25, 102)"
    home.style.borderBottom= "3px solid rgb(0, 25, 102)"
    card.style.color = "rgb(192, 175, 175)"
    card.style.borderBottom="none";
}
function accountpage() {
    home_page.style.display = "none"
    send_page.style.display = "none"
    pay_page.style.display = "none"
    card_page.style.display = "none"
    budget_page.style.display = "none"
    account_page.style.display = 'block'
}
function paypage() {
    home_page.style.display = "none"
    send_page.style.display = "none"
    pay_page.style.display = "block"
    card_page.style.display = "none"
    budget_page.style.display = "none"
    account_page.style.display = 'none'
    send.style.color = "rgb(192, 175, 175)"
    send.style.borderBottom="none";
    budget.style.color = "rgb(192, 175, 175)"
    budget.style.borderBottom="none";
    receipt.style.color = "rgb(0, 25, 102)"
    receipt.style.borderBottom="3px solid rgb(0, 25, 102)";
    home.style.color = "rgb(192, 175, 175)"
    home.style.borderBottom= "none"
    card.style.color = "rgb(192, 175, 175)"
    card.style.borderBottom="none";
}
function budgetpage() {
    home_page.style.display = "none"
    send_page.style.display = "none"
    pay_page.style.display = "none"
    card_page.style.display = "none"
    budget_page.style.display = "block"
    account_page.style.display = 'none'
    send.style.color = "rgb(192, 175, 175)"
    send.style.borderBottom="none";
    budget.style.color = "rgb(0, 25, 102)"
    budget.style.borderBottom="3px solid rgb(0, 25, 102)";
    receipt.style.color = "rgb(192, 175, 175)"
    receipt.style.borderBottom="none";
    home.style.color = "rgb(192, 175, 175)"
    home.style.borderBottom= "none"
    card.style.color = "rgb(192, 175, 175)"
    card.style.borderBottom="none";
}
fetch("http://localhost:1234/logIn").then((res)=>res.json()).then((userinformations)=>{
    if (userinformations.length == 0) {
        window.location.href = "../html/login.html"
    }
})
fetch("http://localhost:1234/signUp").then((res)=>res.json()).then((data)=>{
    if(data.length == 0) {
        window.location.href = "../html/signUp.html"
    }
})