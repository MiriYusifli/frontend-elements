function scroolEffect(classname, effect) {

    $(window).scroll(function () {
        $(classname).not(effect).each(function () {
            
            if (isScrolledIntoView($(this))) {
                
                $(this).addClass(effect.substring(1));
            }
        });
    });

}

function scroolFunction(classname,func,delay) {

        $(classname).not(".seen").each(function () {   
            if (isScrolledIntoView($(this))) {
                console.log("1")
                setTimeout(function() {
                    func()
                }, delay);
                $(this).addClass("seen");

            }
        });

}





function isScrolledIntoView(elem) {
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();
    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


function isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
   }