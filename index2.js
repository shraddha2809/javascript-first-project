function addItem(){
    var ul=document.getElementById("dynamic-list")
    var candidate=document.getElementById(candidate)
    var li=document.createElement("li");
    li.setAttribute('#candidate',candidate.value);
    li.appendChild(document.createTextNode(candidate))
    
}