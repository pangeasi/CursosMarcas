let didScroll;
        let lastScrollTop = 0;
        let delta = 5;
        let navbarHeight = $('header').outerHeight();

        $(window).scroll(function(event){
            didScroll = true;
        });

        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);

        function hasScrolled() {
            let st = $(this).scrollTop();

            if(Math.abs(lastScrollTop - st) <= delta)
                return;
            

            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
                $('header').removeClass('nav-down').addClass('nav-up');
            } else {
                // Scroll Up
                if(st + $(window).height() < $(document).height()) {
                    $('header').removeClass('nav-up').addClass('nav-down');
                }
            }
            
            lastScrollTop = st;
}

document.addEventListener("scroll",()=>{
    document.getElementById("searchCursos").style.display = "none";
    $(':focus').blur()
})


function mostrarCursos(){
   document.getElementById("searchCursos").style.display = "block";
   
}

function ocultarCursos(){
document.getElementById("searchCursos").style.display = "none";
}

   $(document).ready(function() {

    $('input[type="search"]').keyup(function(){

    var filter = jQuery(this).val();
        jQuery("#searchCursos ul li").each(function () {
            if (jQuery(this).text().search(new RegExp(filter, "i")) < 0) {
                jQuery(this).hide();
            } else {
                jQuery(this).show();
                jQuery(this).children().show();
            }
        });    
    });
})