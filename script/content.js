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