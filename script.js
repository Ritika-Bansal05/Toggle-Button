var statusFriend = document.querySelector("h5")
var btn = document.querySelector("#add")
var check = 0;
btn.addEventListener("click",function(){
    if(check == 0){
        statusFriend.innerHTML = "Friends"
        statusFriend.style.color = "green"
        check = 1
        btn.innerHTML = "Remove Friend"
    }else{
        statusFriend.innerHTML = "Removed Friend"
        statusFriend.style.color = "red"
        check = 0
        btn.innerHTML = "Add Friend"
    }
})
