var inputBox=document.getElementById("input_box");
var listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        var li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);//to dispaly

        var span=document.createElement("span");//span is like div
        span.innerHTML="\u00d7";//cross symbol
        li.appendChild(span); //display cross symbol
    }
    inputBox.value= "";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
       e.target.classList.toggle("checked"); //for marking checked und uncheked
       saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();//this will remove task on clicking on span item (cross)
        saveData() 
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showData(){//whenever u will open browser it will show the data stored in localStorage
    listContainer.innerHTML=localStorage.getItem("data");
}
showData();