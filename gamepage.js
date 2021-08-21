var score1=0;
var score2=0;

var name1 = localStorage.getItem("name1");
var name2 = localStorage.getItem("name2");

document.getElementById("player1name").innerHTML = name1 + " : ";
document.getElementById("player2name").innerHTML = name2 + " : ";

document.getElementById("player1").innerHTML = name1 + " - ";
document.getElementById("player2").innerHTML = name2 + " - ";













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


}

question_turn = "player 1";
answer_turn = "player 2";

function check() {

    player_answer = document.getElementById("input_check_box").value;

if( player_answer == real_answer ){
 
    if( answer_turn == "player 1"){

  updatescore1 = score1 +1;

document.getElementById("score1").innerHTML = updatescore1;

    }
    else{

updatescore2 = score2 + 1;
document.getElementById("score2").innerHTML = updatescore2;

    }

}

if(question_turn == "player 1"){

question_turn = "player 2";
document.getElementById("question_turn").innerHTML = "Question Turn - " + question_turn;

}
else{

    question_turn = "player 1";
    document.getElementById("question_turn").innerHTML = "Question Turn - " + question_turn;

}

if(answer_turn == "player 1"){

answer_turn = "player 2";
document.getElementById("answer_turn").innerHTML = "Answer Turn - " + answer_turn;

}
else{

    answer_turn = "player 1";
    document.getElementById("answer_turn").innerHTML = "Answer Turn - " + answer_turn;

}


document.getElementById("number1").innerHTML = "";
document.getElementById("number2").innerHTML = "";
}