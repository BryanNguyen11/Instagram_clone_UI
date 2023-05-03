/* ============================================================Home============================================================ */

var check = true
function love() {
        var checked = document.getElementById("buttonLove")
        if (check == true) {
                checked.src = "../Hinh anh/Icon/redHeart.png"
                checked.style = "width: 50px; height: 45px; margin-left: -10px"
                document.getElementById("numOfLove").innerHTML = "101" + " lượt thích"
                check = false
        }
        else {
                checked.src = "../Hinh anh/Icon/heart.png"
                checked.style = "margin-top: -8px; margin-left: -14px; width: 73px; height: 53px"
                document.getElementById("numOfLove").innerHTML = "100" + " lượt thích"
                check = true
        }
}

/* ============================================================Reels============================================================ */
var i = 1
function heartActive() {
        document.getElementById("changeImage").src = "../Hinh anh/Icon/redHeart.png"
        document.getElementById("changeImage").style = "width: 55px; height: 45px; margin-top: 10px; margin-left: -3px"
        document.getElementById("numOfLove").innerHTML = i++
}