// Create a new list item when clicking on the "Add" button
function newElement() {                                     //li create
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {                            
      alert("You must write something!");
    } else {
      document.getElementById("my-list").appendChild(li);
    }
    document.getElementById("myInput").value = "";

  // create close button
    var span = document.createElement("SPAN");
     var txt = document.createTextNode("\u00D7");   // source code for multiplication    \u00D7
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
///update button
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("&#10149");   // source code for edit    \u00D7
   span.className = "edit";
   span.appendChild(txt);
   li.appendChild(span);
 
   for (i = 0; i < close.length; i++) {
     edit[i].onclick = function() {
       var div = this.parentElement;
       div.style.display = "new";
     }
   }
}


// work close button
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


//edit

// var edit = document.getElementsByClassName("edit");
// var i;
// for (i = 0; i < edit.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }
//update list

// var textnode=document.createTextNode("red(3)");
// var item=document.getElementById("myDiv").childNode[0];
// item.replaced(textnode,item.childeNode[0]);
