const inputBox =document.getElementById("input-box");
const listContainer =document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("No Thought!!😒😣🤨");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML =inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
//for check and uncheck
listContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
        alert("Good Job✌️✌️");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
//to save data into browser
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

}
showTask();