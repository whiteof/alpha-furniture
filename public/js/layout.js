jQuery(function($){
    $(document).ready(function(){

        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > $('.af-navbar-full').height() || document.documentElement.scrollTop > $('.af-navbar-full').height()) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-60px";
            }
        }
    });
});

