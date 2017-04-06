(function menu (){
    var menu1, menu2, menuBar, menuClose;
    var content_menu, content_title_container;
    menu1 = document.getElementsByClassName("menu1")[0];
    menu2 = document.getElementsByClassName("menu2")[0];
    menuBar = document.getElementsByClassName("menu-bar")[0];
    menuClose = document.getElementsByClassName("menu-close")[0];
    //
    if (document.addEventListener){
        menu1.addEventListener("click", MenuToggle, false);
        menu2.addEventListener("click", MenuToggle, false);
        menuBar.addEventListener("click", OpenAndCloseMenu, false);
        menuClose.addEventListener("click", function(){
            OpenAndCloseMenu("close");
        } , false);
    } else if (document.attachEvent) {
        menu1.attachEvent("onclick", MenuToggle);
        menu2.attachEvent("onclick", MenuToggle);
        menuBar.attachEvent("onclick", OpenAndCloseMenu);
        menuClose.addEventListener("onclick", function(){
            OpenAndCloseMenu("close");
        });
    }
    //
    function MenuToggle(event) {
        var target = event.target || event.srcElement;
        var subMenuNumber, subMenuObject;
        //
        if (target.tagName !== "A") {
            target = target.parentNode;
        }
        subMenuNumber = target.getAttribute("data-menu");
        subMenuObject = document.getElementsByClassName("submenu-" + subMenuNumber)[0];
        if (subMenuObject !== undefined) {
            ChangeActiveState();
            if (subMenuObject.classList.contains("hidden")) {
                //指定點選的做動態效果
                target.classList.add("active");
                target.children[0].classList.remove("triangle-close");
                target.children[0].classList.add("triangle-open");
                subMenuObject.classList.remove("hidden");
                //RemoveHidden(parseInt(subMenuNumber));
                RemoveHidden(subMenuObject);
            } else {
                subMenuObject.classList.add("hidden");
            }
        }
    }

    //function RemoveHidden(keepMenuNumber) {
    //    var subMenu = document.getElementsByClassName("submenu");
    //    //
    //    for (var i0 = 0; i0 < subMenu.length; i0++) {
    //        var element = subMenu[i0];
    //        if (keepMenuNumber !== (i0 + 1)) {
    //            if (!element.classList.contains("hidden")) {
    //                element.classList.add("hidden");
    //            }
    //        }
    //    }
    //}

    function RemoveHidden(keepMenuObject) {
        var subMenu = document.getElementsByClassName("submenu");
        //
        for (var i0 = 0; i0 < subMenu.length; i0++) {
            var element = subMenu[i0];
            if (keepMenuObject !== element) {
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
                    if (iTag.classList.contains("triangle-open")) {
                        iTag.classList.remove("triangle-open");
                        iTag.classList.add("triangle-close");
                    }
                }
            }
        }
    }

    function OpenAndCloseMenu(action) {
        var titlebarLeft = document.getElementsByClassName("titlebar-left")[0];
        var menuCollection = document.getElementsByClassName("menu-collection")[0];
        //
        if (action === "close") {
            titlebarLeft.style.display = "none";
            menuCollection.style.display = "none";
        } else {
            if (window.getComputedStyle(titlebarLeft).display === "none") {
                titlebarLeft.style.display = "block";
                menuCollection.style.display = "block";
                menuCollection.style.height = GetmenuCollectionHeight();
            } else {
                titlebarLeft.style.display = "none";
                menuCollection.style.display = "none";
                menuCollection.style.height = "0";
            }
        }
    }

    function GetmenuCollectionHeight() {
        var clientHeight = document.documentElement.clientHeight;
        var height;
        //
        switch (true) {
            case (clientHeight <= 320):
                height = "150px";
                break;
            case (clientHeight > 320 && clientHeight <= 375):
                height = "170px";
                break;
            case (clientHeight > 375 && clientHeight <= 480):
                height = "280px";
                break;
            case (clientHeight > 481 && clientHeight <= 667):
                height = "380px";
                break;
            case (clientHeight > 667 && clientHeight <= 800):
                height = "580px";
                break;
            default:
            height = "280px";
                break;
        }
        //
        return height;
    }
})();

