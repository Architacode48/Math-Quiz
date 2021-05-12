player1_name = localStorage.getItem("player_1_input");
player2_name = localStorage.getItem("player_2_input");
console.log(player1_name);
document.getElementById("player_name1").innerHTML = "Player1 : " + player1_name;
document.getElementById("player_name2").innerHTML = "Player2 : " + player2_name;

player1_score = 0;
player2_score = 0;

document.getElementById("player_score2").innerHTML = player2_score;
document.getElementById("player_score1").innerHTML = player1_score;

function Send(){
   
    no1=document.getElementById("no1").value;
    no2=document.getElementById("no2").value;
   main_no = parseInt(no1) * parseInt(no2);

    //add elements

    h4 = "<h4 id='word_display' style='color: white;'> Q. " + no1 + "x" + no2 + "</h4>";
    input = "<br> <label style='color: white;'> Answer : </label><input type='text' id='input_check_box'>" ;
    button = "<br><br> <button class = 'btn btn-info' onclick='check();'> Check </button> <br> <br>";
    
    join = h4 + input + button ;
    document.getElementById("output").innerHTML = join ;
    document.getElementById("no1").value = "" ;
    document.getElementById("no2").value= "";

}

question_turn = "player1";
answer_turn = "player2";

function check(){

    getAnswer = document.getElementById("input_check_box").value;
    Answer = getAnswer.toLowerCase();

    if(Answer == main_no){

        if(answer_turn == "player1"){

            player1_score = player1_score +1;
            document.getElementById("player_score1").innerHTML = player1_score;
        }

        else{

            player2_score = player2_score +1;
            document.getElementById("player_score2").innerHTML = player2_score;
        }
    }

    else{

        if(answer_turn == "player1"){

            player2_score = player2_score +1;
            document.getElementById("player_score2").innerHTML = player2_score;
        }

        else{

            player1_score = player1_score +1;
            document.getElementById("player_score1").innerHTML = player1_score;
        }
    }

    if(question_turn == "player1"){

        question_turn = "player2";
        document.getElementById("question").innerHTML = "Question Turn : " + question_turn;
        }

        else{

            question_turn = "player1";
            document.getElementById("question").innerHTML = "Question Turn : " + question_turn;
            }

 if(answer_turn == "player1"){

                answer_turn = "player2";
                document.getElementById("answer").innerHTML = "Answer Turn : " + answer_turn;
                }
        
else{
        
                    answer_turn = "player1";
                    document.getElementById("answer").innerHTML = "Answer Turn : " + answer_turn;
                    }
document.getElementById("output").innerHTML = "";
}
