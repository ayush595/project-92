document.getElementById("plasco1").innerHTML= name1;
document.getElementById("score1").innerHTML= sccore1;


document.getElementById("plasco2").innerHTML= name2;
document.getElementById("score2").innerHTML= sccore2;
function send() {
    number1= document.getElementById("word").value ;
    number2=document.getElementById("word2").value ;

    actual_answer= parseInt(number1) * parseInt(number2);


    question_no= "<h4>" + number1 + " X " + number2 + "</h4>";
    inputbox= "<br>Answer : <input type='text' id='inputbox'>";
    check_button= "<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row= question_no + inputbox + check_button;


    document.getElementById("container-que").innerHTML= row;

    document.getElementById("no.1").value= "";
    document.getElementById("no.2").value= "";
    
}
questurn= "player1";
ansturn= "player2";

function check() {
    get_answer= document.getElementById("imputbox").value ;
    if (get_answer == actual_answer) {
        if (ansturn == "player2") {
            sccore1 = sccore1 + 1;
            document.getElementById("score1").innerHTML= sccore1;
        } else {
            sccore2 = sccore2 + 1;
            document.getElementById("score2").innerHTML= sccore2;
        }

    }
    if (questurn == "player1") {
        questurn = "player2";
        document.getElementById("quetu").innerHTML= "Question turn: " + name2;
    } else {
        questurn = "player1";
        document.getElementById("quetu").innerHTML= "Question turn: " + name1;
    }
}
