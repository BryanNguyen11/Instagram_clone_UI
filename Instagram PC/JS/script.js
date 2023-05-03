/* ============================================================Home============================================================ */

var check = true
function love() {
        var checked = document.getElementById("buttonLove")
        if (check == true) {
                checked.src = "../Hinh anh/Icon/liked.png"
                checked.style = "width: 30px; height: 30px; margin-left: -8px; margin-top: 3px"
                document.getElementById("numOfLove").innerHTML = "101" + " lượt thích"
                check = false
        }
        else {
                checked.src = "../Hinh anh/Icon/heart.png"
                checked.style = " margin-left: -8px; margin-top: 3px; width: 30px; height: 30px"
                document.getElementById("numOfLove").innerHTML = "100" + " lượt thích"
                check = true
        }
}

/* ============================================================Reels============================================================ */
var i = 1
function heartActive() {
        document.getElementById("changeImage").src = "../Hinh anh/Icon/liked.png"
        document.getElementById("changeImage").style = "width: 35px; height: 35px;"
        document.getElementById("numOfLove").innerHTML = i++
}