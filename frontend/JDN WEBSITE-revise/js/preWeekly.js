if(screen.width>=1200){
document.write(`<script src='../js/weekly.js'></script>`);
}else{
window.onload = function () {
    $('.target')
        .append('<div class="photo"></div>')
        .children('.photo').css({
            'background-image': 'url(' + $('.target').attr('data-image') + ')'
        })
    };
}
