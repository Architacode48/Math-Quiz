function addUser(){

    player1_name = document.getElementById("player_1_input").value;
    player2_name = document.getElementById("player_2_input").value;

    localStorage.setItem("player_1_input" , player1_name);
    localStorage.setItem("player_2_input" , player2_name);

    window.location = "game.html";
}