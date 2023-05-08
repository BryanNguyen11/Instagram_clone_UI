const notificationButton=document.querySelector("#header_right_item_notificationButton");

notificationButton.addEventListener("click",()=>{
    print ("hi"); 
})

function flike(){
    const like = document.querySelector(".btnLike");
    if(like.src.match("../icons/like.png")){
        like.src = "../icons/liked.png";
        document.querySelector(".likes").innerHTML = "1 likes";
    }else{
        like.src="../icons/like.png";
        document.querySelector(".likes").innerHTML ="0 likes";
    }
}

function fsave(){
    const save = document.querySelector(".btnSave");
    if(save.src.match("../icons/save-instagram.png")){
        save.src = "../icons/saved-instagram.png";
    }else{
        save.src="../icons/save-instagram.png";
        
    }
}

function fcomment(){
    document.getElementById("add-comment").focus();
}