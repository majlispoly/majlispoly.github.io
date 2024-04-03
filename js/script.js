let card = document.querySelectorAll(".card");
let cardOverlay = document.querySelectorAll(".card-overlay");
cardOverlay.forEach(elem=>{
    elem.addEventListener('mouseover',()=>{
        elem.style.opacity="1";
    })
});
cardOverlay.forEach(elem=>{
    elem.addEventListener('mouseleave',()=>{
        elem.style.opacity="0";
    })
})
// card.addEventListener('mouseover',()=>{
//     cardOverlay.style.opacity="1";
// })
// card.addEventListener('mouseleave',()=>{
//     cardOverlay.style.opacity="0";
// })
