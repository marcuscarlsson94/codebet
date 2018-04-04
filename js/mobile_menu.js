function myFunction(x) {
    x.classList.toggle("change");
}

$(function () {
    $(".hamburger").click(function () {
        $(".mobile_menu").toggleClass('mobile_menu--active');

        // $(".bg--animation").toggleClass('bg--animation-in');
        
        // $(".bg--animation-1").toggleClass('bg--animation-1-in');

        $(".mobile_hamburger").toggleClass('bounce');
        // if ($(this).hasClass("change"))
        //     $('.swap').text('STÄNG');
        // else
        //     $('.swap').text('MENY');
    });
});