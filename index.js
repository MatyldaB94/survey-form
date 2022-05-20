const element = document.querySelector("#myName") // zmienna, do ktorej on przypisze elemnt html ktory znajdzie 
element.innerHTML = "mati" // odpowiada co jest wewnątrz 
const formElement = document.querySelector("#survey-form")
console.log(formElement)
formElement.addEventListener("submit", function (event) {
    console.log(event)
    event.preventDefault() // nie odświeża nam strony (zatrzymaj to co sie dzieje na stronie )

}) // dodaliśmy eventLister, metoda ktora na dany event odpala funcke tora podalismy jako drugi argument. ta funkcja przemuje jede argument, czyli event kroy sie wydarzył = klikniecie sabmit albo jakis eement"
