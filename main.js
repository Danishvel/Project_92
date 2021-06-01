function adduser() {
    player1 = document.getElementById("player1_name").value;
    player2 = document.getElementById("player2_name").value;
    
    localStorage.setItem("Player_1", player1);
    localStorage.setItem("Player_2", player2);

    window.location = "Game_page.html";
}