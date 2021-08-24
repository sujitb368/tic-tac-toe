console.log("TIC TAC TOE GAME CODE");
var player = 1;
var clicked = 0;
var won = -1;
var btn = document.getElementById("restart_button");
var box_cordinate_matrix = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
]


function fill_x_or_o(box, row, col) {
    var msg =document.getElementById("msg");
    msg.style.display="none";
    if (box.innerHTML != "") return;
    box_cordinate_matrix[row][col] = player
    //if (won == -1) { // if game is won do not allow to clicked

    if (clicked < 9) {         // no. of clicked is less than and equal to 9 
        if (player == 1) {      // code for 1st player
            box.innerHTML = "X";
            clicked++;
            player = 2;
        }
        else if (player == 2) { // code for 2nd player
            box.innerHTML = "O";
            clicked++;
            player = 1;
        }

    }
    check_win_row(box_cordinate_matrix);
    check_win_col(box_cordinate_matrix);
    check_win_diagonal(box_cordinate_matrix);
    is_draw();
    btn.addEventListener("click", function(){
        window.location.reload()
    })
}

// winning condition check
function check_win_row(matrix) {
    console.log("inside check_win_row ");
    for(var i = 0; i<3; i++){
        var x = 0;
        var o =0;
        for(var j = 0; j<3; j++){
            if(box_cordinate_matrix[i][j]==1){
                x+=box_cordinate_matrix[i][j]
            }
            if(box_cordinate_matrix[i][j]==2){
                o+=box_cordinate_matrix[i][j]
            }
        }
        if(o == 6){
            won = o-4
        }
        if( x == 3 ){
            won = x-2
        }
    }
    return won
        

}
function check_win_col(matrix){    
    for(var col = 0; col<3; col++){
        var x = 0;
        var o =0;
        for(var row = 0; row<3; row++){
            if(box_cordinate_matrix[row][col]==1){
                x+=box_cordinate_matrix[row][col]
            }
            if(box_cordinate_matrix[row][col]==2){
                o+=box_cordinate_matrix[row][col]
            }
        }
        if(o == 6){
            won = o-4
        }
        if( x == 3 ){
            won = x-2
        }
    }
    return won
}

// diagonal
function check_win_diagonal(matrix){    
    if (box_cordinate_matrix[0][0] == box_cordinate_matrix[1][1] && box_cordinate_matrix[1][1] == box_cordinate_matrix[2][2]) {
        won = box_cordinate_matrix[1][1]
    }
    if (box_cordinate_matrix[0][2] == box_cordinate_matrix[1][1] && box_cordinate_matrix[1][1] == box_cordinate_matrix[2][0]) {
        won = box_cordinate_matrix[1][1]
    }
    return won
}


// check game is draw or not
function is_draw() {
    if (clicked == 9 && won == -1) {
        add_show()
        document.getElementById("win_msg").innerHTML = "Draw !"
    }
    if (won != -1) {     // if game is won excute this block
        add_show()
        document.getElementById("win_msg").innerHTML = "player " + won + " won "
    }

}

// add show class
function add_show(){
    win_msg_section.classList.add('show')
}


