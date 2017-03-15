
(function menu (){
    var menu1, menu2;
    var content_menu, content_title_container;
    menu1 = document.getElementsByClassName("menu1")[0];
    menu2 = document.getElementsByClassName("menu2")[0];
    // content_menu = document.getElementsByClassName("content-menu");
    // content_title_container = 
    //     document.getElementsByClassName("content-title-container");
    //
    if (document.addEventListener){
        menu1.addEventListener("click", MenuToggle, false);
        menu2.addEventListener("click", MenuToggle, false);
        // if (content_menu !== undefined) {
        //     window.addEventListener("scroll", StickSubMenuAndSubTitle, false);
        // }
    } else if (document.attachEvent) {
        menu1.attachEvent("onclick", MenuToggle);
        // window.attachEvent("onscroll", StickSubMenuAndSubTitle);
    }
    //
    function MenuToggle(event) {
        var target = event.target || event.srcElement;
        var subMenuNumber = target.getAttribute("data-menu");
        var subMenuObject = document.getElementsByClassName("submenu-" + subMenuNumber)[0];
        //
        if (subMenuObject !== undefined) {
            ChangeActiveState();
            if (subMenuObject.classList.contains("hidden")) {
                //指定點選的做動態效果
                target.classList.add("active");
                target.children[0].classList.remove("triangle-down");
                target.children[0].classList.add("triangle-up");
                subMenuObject.classList.remove("hidden");
                RemoveHidden(parseInt(subMenuNumber));
            } else {
                subMenuObject.classList.add("hidden");
            }
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

    function ChangeActiveState() {
        var menu = [];
        var menu1 = document.getElementsByClassName("menu1");
        var menu2 = document.getElementsByClassName("menu2");
        menu = menu.concat(menu1);
        menu = menu.concat(menu2);
        //清除所有的動態效果
        for (var i0 = 0; i0 < menu.length; i0++) {
            var ulTag = menu[i0][0].children[0].children;
            for (var q0 = 0; q0 < ulTag.length; q0++) {
                var aTag = ulTag[q0].children[0];
                var iTag = aTag.children[0];
                if (aTag.classList.contains("active")) {
                    aTag.classList.remove("active");
                }
                if (iTag !== undefined) {
                    if (iTag.classList.contains("triangle-up")) {
                        iTag.classList.remove("triangle-up");
                        iTag.classList.add("triangle-down");
                    }
                }
            }
        }
    }

    // function StickSubMenuAndSubTitle() {

    // }
})();

