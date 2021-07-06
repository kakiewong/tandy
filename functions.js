// menu shrink and expand
$(document).ready(function () {
    $(".menu-btn").click(function () {
        if ($(".nav-menu").hasClass("expand")) {
            $(".nav-menu").removeClass("expand")
        } else {
            $(".nav-menu").addClass("expand")
        }
    })
})

