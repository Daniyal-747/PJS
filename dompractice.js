let elem = document.getElementsByClassName('container');
elem[0].innerHTML = "HELLO WORLD"
elem[0].style.backgroundColor = "orange"
elem[0].style.height = "400px"

let newBtn = document.createElement('button')

elem[0].appendChild(newBtn)
newBtn.innerHTML = "CLICK HERE"
newBtn.className = "btn btn-dark mt-5"
newBtn.style.display = "block"              
newBtn.style.fontSize = "24px"
newBtn.style.letterSpacing = "14px"
newBtn.style.margin = "0px auto"

//Block takes the entire place. e.g. (if we will create another button, it will be created in new line)

// EVENT LISTENER

newBtn.addEventListener('click', toggleBtn);
function toggleBtn(){
    console.log("You Clicked on Button");
    newBtn.innerHTML = "Button Clicked"
}
