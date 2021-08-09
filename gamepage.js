var score1=0;
var score2=0;

var name1 = localStorage.getItem("name1");
var name2 = localStorage.getItem("name2");

document.getElementById("player1name").innerHTML = name1;
document.getElementById("player2name").innerHTML = name2;

















function send() {

number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value;

real_answer = parseInt(number1) * parseInt(number2);
console.log("the answer is ", real_answer);

question_number = "<h4>" + number1 + "x" + number2 + "</h4>";
input_box = "<br> Answer : <input type='text' id='input_check_box'> ";
check_button = "<br><br><button class='btn btn-info' onclick = 'check()'>Check</button>";
row = question_number + input_box + check_button ;

document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";

player_answer = document.getElementById("input_check_box").value;

}

function check() {

if( player_answer == real_answer ){

score = score + 1;

document.getElementById("score").innerHTML = score;

}

}