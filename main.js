function submit() {

var name1 = document.getElementById("name1").value;
var name2 = document.getElementById("name2").value;

localStorage.setItem("name1" , name1);
localStorage.setItem("name2" , name2);

window.location = "Page.html";

}