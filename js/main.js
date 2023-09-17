let share = document.querySelector(".share");
let share_btns = document.querySelector(".share-btns");
let avatar = document.querySelector(".avatar");
let profile = document.querySelector(".profile");

share.addEventListener("click" , ()=>{
    if (window.innerWidth > 731){
        share_btns.classList.toggle("visiblity");
    }
    else{
        share_btns.classList.toggle("share-btns-vis");
        // let abt = share_btns.innerHTML;
        // avatar.innerHTML = abt;
        // console.log(share_btns.innerHTML);

        avatar.classList.toggle("d_none");
        profile.classList.toggle("bg-tog");
        share.classList.toggle("share-tog");

    }
});

