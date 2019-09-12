document.addEventListener('DOMContentLoaded', function(){
    var showMenu = document.getElementById('showmenu')
    var hideMenu = document.getElementById('hidemenu')
    var myMenu = document.querySelector('.my-mobile-menu')

    showMenu.addEventListener('click', function(){
        myMenu.style.transform = 'translateX(0)'
    })

    hideMenu.addEventListener('click', function(){
        myMenu.style.transform = 'translateX(-850px)'
    })
})