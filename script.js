const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
//empty box fill up + cross button + edit button
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        let edit = document.createElement("edit");
        edit.innerHTML = "\u270e"
        li.appendChild(edit);
    }
    inputBox.value = '';
    saveData();
}
// delete all function
function deleteAllTasks(){
    listcontainer.innerHTML = '';
    saveData();
}

//check uncheck + delete function + edit function
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.tagName === "EDIT"){
        let listItem = e.target.parentElement;
        let newValue = prompt("Edit your item:", listItem.childNodes[0].nodeValue.trim());
        if (newValue) {
            listItem.childNodes[0].nodeValue = newValue + " ";
            saveData();
        }

    }
},false);
//save data function
function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
//display the store data
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();