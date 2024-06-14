
var hideandshow = document.querySelector('.hideandshow');
function showSideNav(){
    hideandshow.style.transition = 'all 0.5s ease';
    hideandshow.style.left = '0%'
}

function hideSideNav(){
    hideandshow.style.transition = 'all 1s ease';
    hideandshow.style.left = '-100%'
}