const shoppingCard = document.getElementsByClassName("card");
for (const card of shoppingCard) {

    card.addEventListener("click", function (event) {
        card.style.backgroundColor = "green";
        event.stopPropagation();
    })
}
const shoppingCardBtn = document.getElementsByClassName("btn");
for (const btn of shoppingCardBtn) {
    btn.addEventListener("click", function (event) {
        btn.style.display = "none";
        event.stopPropagation();
    })
}
const emailInput = document.getElementById("email-input");
emailInput.addEventListener("keyup", function (event) {
    if (event.target.value == "Email") {
        document.getElementById("delete-btn").removeAttribute("disabled")
    } else {
        document.getElementById("delete-btn").setAttribute("disabled", true)
    }
})