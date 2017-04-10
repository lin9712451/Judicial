(function ChangeWordSize(){
    var largeWord = document.getElementsByClassName("largeword-inside")[0],
        mediumWord = document.getElementsByClassName("mediumword-inside")[0],
        smallWord = document.getElementsByClassName("smallword-inside")[0];
    //
    if (document.addEventListener){
        largeWord.addEventListener("click", Change, false);
        mediumWord.addEventListener("click", Change, false);
        smallWord.addEventListener("click", Change, false);
    } else {
        largeWord.attachEvent("onclick", Change);
        mediumWord.attachEvent("onclick", Change);
        smallWord.attachEvent("onclick", Change);
    }

    function Change(event) {
        var target = event.target || event.srcElement,
            word = target.classList[0],
            contentContainer = document.getElementsByClassName("content-container")[0];
        //
        switch (word) {
            case "largeword-inside":
                contentContainer.style.fontSize = "18px";
                break;
            case "mediumword-inside":
                contentContainer.style.fontSize = "inherit";
                break;
            case "smallword-inside":
                contentContainer.style.fontSize = "14px";
                break;
            default:
                break;
        }
    }
})();

(function ChangeContentParagraph() {
    var contentParagraph = document.getElementsByClassName("content-paragraph")[0];
    var insideUl = contentParagraph.children[0];
    //
    if (document.addEventListener) {
        insideUl.addEventListener("click", ChangeActive, false);
    } else {
        insideUl.attachEvent("onclick", ChangeActive);
    }
    
    function ChangeActive(event) {
        var target = event.target || event.srcElement;
        var tagName = target.tagName;
        //
        if (tagName === "A") {
            for (var i0 = 0; i0 < target.parentNode.parentNode.children.length; i0++) {
                var element = target.parentNode.parentNode.children[i0];
                element.classList.remove("active");
            }
            target.parentNode.classList.add("active");
        } else {
            event.preventDefault();
            return false;
        }
    }
})();