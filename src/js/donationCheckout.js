import * as $ from 'jquery'

$(document).ready(function () {
    $(document).on("click", ".donation-checkout .form #nextStep", function () {
        $(".step-1").addClass("d-none");
        $(".step-2").removeClass("d-none");
    });
});