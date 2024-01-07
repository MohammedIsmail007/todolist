const input = document.getElementById('input');
const listCon = document.getElementById('listcon');

function addLine(){
    if(input.value === ''){
        alert("You must write something!");
        }
        else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listCon.appendChild (li);
        let span=document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        }
        input.value="";

}
listCon.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    }
    }, false);
