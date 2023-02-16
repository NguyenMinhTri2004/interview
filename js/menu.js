const menuMobile = document.getElementById('menu-moile');

const menuContent = document.getElementById('mobile');

const modal = document.getElementById('modal');

const close = document.getElementById('close');

menuMobile.onclick = function() {
      menuContent.style.transform =  "translate(0px,0px)"
      modal.style.display = "block"
}

close.onclick = function() {
    menuContent.style.transform =  "translate(-100%,0)"
    modal.style.display = "none"
    
}