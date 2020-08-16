
import * as $ from 'jquery';
import './common';

$(document).ready(function () {
    $(document).on("click", ".book-now", function () {
        $(".basket-popup").addClass("open");
    });

    $(document).on("click", ".basket-popup .popup-close", function () {
        $(".basket-popup").removeClass("open");
    });
});