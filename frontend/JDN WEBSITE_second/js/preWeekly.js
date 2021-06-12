const list = document.getElementsByClassName("first-list");


for(i=0; i<list.length;i++){
list[i].addEventListener("click",function(event){
if(event.target.parentNode.classList.contains('clicked')){
event.target.parentNode.classList.remove("clicked");
}
    else{
    for(i=0; i<list.length;i++){
list[i].classList.remove("clicked");
}
event.target.parentNode.classList.toggle("clicked");
};

})
}

window.onload = function () {
    $('.target')
        .append('<div class="photo"></div>')
        .children('.photo').css({
            'background-image': 'url(' + $('.target').attr('data-image') + ')'
        })
    };
