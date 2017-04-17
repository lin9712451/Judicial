(function AlertFunction() {
    window.alert = function(text) {
        createCustomAlert("警告", text);
    }

    function createCustomAlert(title, text) {
        var alertContainer,
            alertObject,
            titleDiv,
            titleH4,
            closeIco,
            message,
            closeBtn;
        //
        if (document.getElementById("alertContainer")) {
            return;
        }
        alertContainer = document.getElementsByTagName("body")[0].appendChild(document.createElement("div"));
        alertContainer.id = "alertContainer";
        alertContainer.classList.add("alert-container");
        alertContainer.style.height = document.documentElement.scrollHeight + "px";
        //
        alertObject = alertContainer.appendChild(document.createElement("div"));
        alertObject.id = "alertBox";
        alertObject.classList.add("alert-box");
        if(document.all && !window.opera) alertObject.style.top = document.documentElement.scrollTop + "px";
        alertObject.style.left = (document.documentElement.scrollWidth - alertObject.offsetWidth)/2 + "px";
        alertObject.style.visiblity="visible";
        //
        titleDiv = alertObject.appendChild(document.createElement("div"));
        titleDiv.classList.add("title-bar")
        titleH4 = titleDiv.appendChild(document.createElement("h4"));
        titleH4.appendChild(document.createTextNode(title));
        closeIco = titleDiv.appendChild(document.createElement("i"));
        closeIco.classList.add("icon-remove");
        closeIco.classList.add("icon-large");
        //
        message = alertObject.appendChild(document.createElement("p"));
        message.innerHTML = text;
        //
        closeBtn = alertObject.appendChild(document.createElement("a"));
        closeBtn.id = "closeBtn";
        closeBtn.classList.add("btn-info");
        closeBtn.appendChild(document.createTextNode("確定"));
        closeBtn.href = "#";
        closeBtn.focus();
        closeBtn.onclick = function() { 
            removeCustomAlert();
            return false; 
        }
        closeIco.onclick = function() {
            removeCustomAlert();
            return false; 
        }
        //
        alertObject.style.display = "block";
    }

    function removeCustomAlert() {
        document.getElementsByTagName("body")[0].removeChild(document.getElementById("alertContainer"));
    }
})();