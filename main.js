var checkList = document.querySelector("#checklist");
var items = checkList.querySelectorAll("li");

function lia(){
  var span=this.querySelector("span");
  var inp=this.querySelector("input");

  if(this.className === "")
    this.classList.add("edit");
  else{
    this.classList.remove("edit");
    span.innerText=inp.value;
  }
}

for(var i=0; i<items.length ;i++){
  items[i].addEventListener("click", lia);
}
