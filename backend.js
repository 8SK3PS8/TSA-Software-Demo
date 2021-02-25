// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
// @ts-ignore

const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");

var draw = function(){
    drawSearch()
    
  };
const clear = document.querySelector(".clear");
const dataElement = document.getElementById("date");
const input = document.getElementById("input");
const element = document.getElementById("element");
const list = document.getElementById("list");

const CHECK = "fa-check-circle";
const UNCHECXK = "fa-circle thin";
const LINE_THROUGH = "lineThrough";
let LIST;
 
let id;

let data = localStorage.getItem("TODO");

if(data){
  LIST = JSON.parse(data);
  id = LIST.length;
  loadlist(LIST);
}else{

  LIST + [];
  id =  0;

}

function loadlist(array){
  array.array.forEach(function(item) {
    addToDo(item.name, item.id, tem.done, item.trash);
  });
}

clear.addEventListener("click", function(){
  localStorage.clear(); 
  location.reload();


});

const options = {weekday: "long", month: "short",  day:"numeric"}
const today = new Date();
dataElement.innerHTML = today.toLocaleDateString("en-US", options);

function addToDo(toDo, id, done, trash){
  if(trash) {return;}

  const DONE = done ? CHECK : UNCHECXK;
  const LINE = done ? LINE_THROUGH : "";


  const item = '<li class = "item">  <i class = "fa ${DONE} co" job = "complete" id = "${id}"> </i> <p class = "text ${LINE}">${toDo}</p> </li>';
  const position = "beforeend"   
  
  const position = "beforeend";
  list.insertAdjacentHTML(position,item);           
            
}
document.addEventListener("keyup", function(event){
  if(event.keyCode ==13){
    const toDo = input.value;
    if(toDo){
      addToDo(toDo);

      LIST.push({
        name : toDo,
        id : id,
        done: false,
        trash: false

      });

      localStorage.setItem("TODO", JSON.stringify(LIST));
      id++;

    }
    input.value = "";
  }


  
});

function completeToDO(element){
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECXK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

  LIST[element.id].done = LIST[element.id].done ? false : true;

}
 
function removeToDO(element){
  element.parentNode.parentNode.removeChild(element.parentNode);

  LIST[element.id].trash = true;
}

list.addEventListener("click", function(event){
  const element = even.target;
  const elementJob = element.attributes.job.value;

  if(elementJob = ("complete"){
      completeToDo(element);
  }else if(elementJob == "delete"){
      removeToDo(element);
  }
  localStorage.setItem("TODO", JSON.stringify(LIST));

});

