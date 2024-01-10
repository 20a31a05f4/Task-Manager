const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask() {
    if(inputBox.value === '' || inputBox.value.trim() === '')
    {
        /*
        let str = "   Hello, World!   ";
        let trimmedStr = str.trim();
        console.log(trimmedStr); // Output: "Hello, World!"
         */
        alert("You must write something to add a task!");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    save_data();
}

listContainer.addEventListener("click", function(event) {
    if(event.target.tagName === "LI")
    {
        event.target.classList.toggle("checked");
        save_data();
    }
    else if(event.target.tagName === "SPAN")
    {
        event.target.parentElement.remove();
        save_data();
    }
}, false);
/*
Capturing Phase: Events are captured from the root to the target element.
Bubbling Phase: Events are then bubbled up from the target element to the root.
The false parameter is used to indicate that the event should be handled during the bubbling phase. 
*/
function save_data() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function show_data() {
    listContainer.innerHTML = localStorage.getItem("data");
}
show_data();