//最上面的圖片輪播
(function SlideShowSlider() {
    var slideIndex = 1;
    var prev = document.getElementsByClassName("prev")[0], 
        next = document.getElementsByClassName("next")[0];
        //
    showSlides(slideIndex);
    var interval = SetInterval();
    //
    if (document.addEventListener){
        prev.addEventListener("click", function() {
            clearInterval(interval);
            plusSlides(-1);
            interval = SetInterval();
        }, false);
        next.addEventListener("click", function() {
            clearInterval(interval);
            plusSlides(1);
            interval = SetInterval();
        }, false);
    } else {
        prev.attachEvent("onclick", function(){
            clearInterval(interval);
            plusSlides(-1);
            interval = SetInterval();
        });
        next.attachEvent("onclick", function(){
            clearInterval(interval);
            plusSlides(1);
            interval = SetInterval();
        });
    }
<<<<<<< HEAD

=======

    function SetInterval() {
        return setInterval(function() {
            plusSlides(1);
        }, 5000);
    }
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("slideshow");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }
})();
//宣導影片輪播
(function SlideVideoSlider() {
    var slideIndex = 1;
    var prev = document.getElementsByClassName("slidevideo-arrow-prev")[0], 
        next = document.getElementsByClassName("slidevideo-arrow-next")[0];
    //
    showVideos(slideIndex);
    var interval = SetInterval();
    //
    if (document.addEventListener){
        prev.addEventListener("click", function() {
            clearInterval(interval);
            plusSlides(-1);
            interval = SetInterval();
        }, false);
        next.addEventListener("click", function() {
            clearInterval(interval);
            plusSlides(1);
            interval = SetInterval();
        }, false);
    } else {
        prev.attachEvent("onclick", function(){
            clearInterval(interval);
            plusSlides(-1);
            interval = SetInterval();
        });
        next.attachEvent("onclick", function(){
            clearInterval(interval);
            plusSlides(1);
            interval = SetInterval();
        });
    }
>>>>>>> upstream/master
    function SetInterval() {
        return setInterval(function() {
            plusSlides(1);
        }, 5000);
    }
<<<<<<< HEAD
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("slideshow");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }
})();
//宣導影片輪播
//(function SlideVideoSlider() {
//    var slideIndex = 1;
//    var prev = document.getElementsByClassName("slidevideo-arrow-prev")[0], 
//        next = document.getElementsByClassName("slidevideo-arrow-next")[0];
//    //
//    showVideos(slideIndex);
//    var interval = SetInterval();
//    //
//    if (document.addEventListener){
//        prev.addEventListener("click", function() {
//            clearInterval(interval);
//            plusSlides(-1);
//            interval = SetInterval();
//        }, false);
//        next.addEventListener("click", function() {
//            clearInterval(interval);
//            plusSlides(1);
//            interval = SetInterval();
//        }, false);
//    } else {
//        prev.attachEvent("onclick", function(){
//            clearInterval(interval);
//            plusSlides(-1);
//            interval = SetInterval();
//        });
//        next.attachEvent("onclick", function(){
//            clearInterval(interval);
//            plusSlides(1);
//            interval = SetInterval();
//        });
//    }
//    function SetInterval() {
//        return setInterval(function() {
//            plusSlides(1);
//        }, 5000);
//    }
//    
//    function plusSlides(n) {
//        showVideos(slideIndex += n);
//    }
//
//    function currentSlide(n) {
//        showVideos(slideIndex = n);
//    }
//
//    function showVideos(n) {
//        var i;
//        var slides = document.getElementsByClassName("slidevideo");
//        if (n > slides.length) {slideIndex = 1;}
//        if (n < 1) {slideIndex = slides.length;}
//        if (n <= 4) {return true;}
//        if (slides.length > 0) {
//            if (slides[0] !== undefined) {
//                for (i = 0; i < slides.length; i++) {
//                    slides[i].style.display = "none";
//                }
//                slides[slideIndex-1].style.display = "block";
//            }
//        }
//    }
//})();
//活動花絮輪播
//(function ActivitySlider() {
//    var slideIndex = 1;
//    var prev = document.getElementsByClassName("activity-arrow-prev")[0], 
//        next = document.getElementsByClassName("activity-arrow-next")[0];
//    //
//    showActivity(slideIndex);
//    var interval = SetInterval();
//    //
//    if (document.addEventListener){
//        prev.addEventListener("click", function() {
//            clearInterval(interval);
//            plusSlides(-1);
//            interval = SetInterval();
//        }, false);
//        next.addEventListener("click", function() {
//            clearInterval(interval);
//            plusSlides(1);
//            interval = SetInterval();
//        }, false);
//    } else {
//        prev.attachEvent("onclick", function(){
//            clearInterval(interval);
//            plusSlides(-1);
//            interval = SetInterval();
//        });
//        next.attachEvent("onclick", function(){
//            clearInterval(interval);
//            plusSlides(1);
//            interval = SetInterval();
//        });
//    }
//    function SetInterval() {
//        return setInterval(function() {
//            plusSlides(1);
//        }, 5000);
//    }
//    
//    function plusSlides(n) {
//        showActivity(slideIndex += n);
//    }
//
//    function currentSlide(n) {
//        showActivity(slideIndex = n);
//    }
//
//    function showActivity(n) {
//        var i;
//        var slides = document.getElementsByClassName("activity");
//        if (n > slides.length) {slideIndex = 1;}
//        if (n < 1) {slideIndex = slides.length;}
//        if (n <= 4) {return true;}
//        if (slides.length > 0) {
//            if (slides[0] !== undefined) {
//                for (i = 0; i < slides.length; i++) {
//                    slides[i].style.display = "none";
//                }
//                slides[slideIndex-1].style.display = "block";
//            }
//        }
//    }
//})();
=======
    
    function plusSlides(n) {
        showVideos(slideIndex += n);
    }

    function currentSlide(n) {
        showVideos(slideIndex = n);
    }

    function showVideos(n) {
        var i;
        var slides = document.getElementsByClassName("slidevideo");
        if (n > slides.length) {slideIndex = 1;}
        if (n < 1) {slideIndex = slides.length;}
        if (n <= 4) {return true;}
        if (slides.length > 0) {
            if (slides[0] !== undefined) {
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slides[slideIndex-1].style.display = "block";
            }
        }
    }
})();
//活動花絮輪播
(function ActivitySlider() {
    var slideIndex = 1;
    var prev = document.getElementsByClassName("activity-arrow-prev")[0], 
        next = document.getElementsByClassName("activity-arrow-next")[0];
    //
    showActivity(slideIndex);
    var interval = SetInterval();
    //
    if (document.addEventListener){
        prev.addEventListener("click", function() {
            clearInterval(interval);
            plusSlides(-1);
            interval = SetInterval();
        }, false);
        next.addEventListener("click", function() {
            clearInterval(interval);
            plusSlides(1);
            interval = SetInterval();
        }, false);
    } else {
        prev.attachEvent("onclick", function(){
            clearInterval(interval);
            plusSlides(-1);
            interval = SetInterval();
        });
        next.attachEvent("onclick", function(){
            clearInterval(interval);
            plusSlides(1);
            interval = SetInterval();
        });
    }
    function SetInterval() {
        return setInterval(function() {
            plusSlides(1);
        }, 5000);
    }
    
    function plusSlides(n) {
        showActivity(slideIndex += n);
    }

    function currentSlide(n) {
        showActivity(slideIndex = n);
    }

    function showActivity(n) {
        var i;
        var slides = document.getElementsByClassName("activity");
        if (n > slides.length) {slideIndex = 1;}
        if (n < 1) {slideIndex = slides.length;}
        if (n <= 4) {return true;}
        if (slides.length > 0) {
            if (slides[0] !== undefined) {
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slides[slideIndex-1].style.display = "block";
            }
        }
    }
})();
>>>>>>> upstream/master
