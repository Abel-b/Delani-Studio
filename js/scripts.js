$(document).ready(function () {
    $(".clickable").click(function () {
        $(".design").toggle();
        $(".img-class").toggle();
    });
});

$(document).ready(function () {
    $(".clickable2").click(function () {
        $(".development").toggle();
        $(".img2-class").toggle();
    });
});
$(document).ready(function () {
    $(".clickable3").click(function () {
        $(".product").toggle();
        $(".img3-class").toggle();
    });
});
$(document).ready(function() {
    $("form.inputs").submit(function(event) {
    event.preventDefault();
    var name = $(".name").val();
    var email = $(".email").val();
    alert(name + " we have received your message. Thank you for reaching out to us." );
    });
    });