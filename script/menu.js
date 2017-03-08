
(function menu (){
    var menu1, menu2;
    menu1 = document.getElementsByClassName("menu1")[0];
    menu2 = document.getElementsByClassName("menu2")[0];
    //
    if (document.addEventListener ){
        menu1.addEventListener("click", MenuToggle, false);
        menu2.addEventListener("click", MenuToggle, false);
    } else if (document.attachEvent) {
        menu1.attachEvent("onclick", MenuToggle)
    }
    
    function MenuToggle(event) {
        var target = event.target || event.srcElement;
        var subMenuNumber = target.getAttribute("data-menu");
        var subMenuObject = document.getElementsByClassName("submenu-" + subMenuNumber)[0];
        //
        if (subMenuObject.classList.contains("hidden")) {
            subMenuObject.classList.remove("hidden");
            RemoveHidden(parseInt(subMenuNumber));
        } else {
            subMenuObject.classList.add("hidden");
        }
    }

    function RemoveHidden(keepMenuNumber) {
        var subMenu = document.getElementsByClassName("submenu");
        //
        for (var i0 = 0; i0 < subMenu.length; i0++) {
            var element = subMenu[i0];
            if (keepMenuNumber !== (i0 + 1)) {
                if (!element.classList.contains("hidden")) {
                    element.classList.add("hidden");
                }
            }
        }
    }
})();

