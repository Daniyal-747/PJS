// DOM          (Document, Object, Model)

let elem = document.getElementById('select');
console.log(elem);

// elem.innerHTML = "This is Dom class"

elem.textContent = 'AN APPLE A DAY'         //Text content is updating the text written in html file
elem.style.background = "aqua";
elem.style.textAlign = "center";
elem.classList.add('world');                // This adds the class to the html tag
elem.className = "Hello"                    // This adds a name to the given class
elem.classList.remove('Hello')              // This removes the class from html tag

let obj = document.getElementsByClassName('container');

obj[0].textContent = "Hello Wolrd 2"
obj[0].style.background = "orange"
obj[0].style.textAlign = "center"
obj[0].style.fontSize = "30px"
obj[0].classList.add = "Wow"


let newElem = document.createElement('p')       //this creates a new element in the div
obj[0].appendChild(newElem);                    //appendChild means we want to add one more element in the new tag we created

newElem.innerHTML = "hello"                     //This adds an element in the p tag which was defined in (New Elem)

let para = document.createElement('h2');        //This adds a new element in the p tag.
newElem.appendChild(para)                       // We do not use [0] here because we are targeting 'p' which is a single element

let btn = document.createElement('button');
obj[0].appendChild(btn);
btn.innerHTML = "Submit"
btn.style.padding = "20px 24px"
btn.className = "btn btn-dark"
btn.style.fontSize = "24px"

//EVENTS (Event Listener)
btn.addEventListener('click', toggleBtn);
function toggleBtn(){
    console.log("You clicked on me!");
    btn.innerHTML = "Wow"
}

