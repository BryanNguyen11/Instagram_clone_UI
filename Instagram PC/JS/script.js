/* ============================================================Home============================================================ */

var check = true
function love(obj) {
        if (check == true) {
                obj.src = "../Hinh anh/Icon/liked.png"
                obj.style = "width: 30px; height: 30px; margin-top: 3px; cursor: pointer;"
                if (obj == document.getElementById("buttonLove2")) {
                        document.getElementById("numOfLove2").innerHTML = "318,059 lượt thích"
                }
                else if (obj == document.getElementById("buttonLove1")) {
                        document.getElementById("numOfLove1").innerHTML = "101 lượt thích"
                }
                else if (obj == document.getElementById("buttonLove3")) {
                        document.getElementById("numOfLove3").innerHTML = "5,856,936 lượt thích"
                }

                check = false
        }
        else {
                obj.src = "../Hinh anh/Icon/heart.png"
                obj.style = "margin-top: 3px; width: 30px; height: 30px; cursor: pointer;"
                if (obj == document.getElementById("buttonLove2")) {
                        document.getElementById("numOfLove2").innerHTML = "318,058 lượt thích"
                }
                else if (obj == document.getElementById("buttonLove1")) {
                        document.getElementById("numOfLove1").innerHTML = "100 lượt thích"
                }
                else if (obj == document.getElementById("buttonLove3")) {
                        document.getElementById("numOfLove3").innerHTML = "5,856,935 lượt thích"
                }
                check = true
        }
}

var checkLikeComment = true
function likeComment(obj) {
        if (checkLikeComment == true) {
                obj.src = "../Hinh anh/Icon/redHeart.png"
                checkLikeComment = false
        }
        else if (checkLikeComment == false) {
                obj.src = "../Hinh anh/Icon/heart.png"
                checkLikeComment = true
        }
}
/* ============================================================Reels============================================================ */
var i = 1
function heartActive() {
        document.getElementById("changeImage").src = "../Hinh anh/Icon/liked.png"
        document.getElementById("changeImage").style = "width: 35px; height: 35px;"
        document.getElementById("numOfLove").innerHTML = i++
}

