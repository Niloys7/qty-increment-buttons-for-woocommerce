(function ($) {
    'use strict';

    // Make the code work after page load.
    $(document).ready(function () {
        QtyChng();
    });

    // Make the code work after executing AJAX.
    $(document).ajaxComplete(function () {
        QtyChng();
    });
    function QtyChng() {
        $(document).off("click", ".qib-button").on("click", ".qib-button", function () {

            // Find quantity input field corresponding to increment button clicked.
            var qty = $(this).siblings(".quantity").find(".qty");
            // Read value and attributes min, max, step.
            var val = parseFloat(qty.val());
            var max = parseFloat(qty.attr("max"));
            var min = parseFloat(qty.attr("min"));
            var step = parseFloat(qty.attr("step"));

            // Change input field value if result is in min and max range.
            // If the result is above max then change to max and alert user about exceeding max stock.
            // If the field is empty, fill with min for "-" (0 possible) and step for "+".
            if ($(this).is(".plus")) {
                if (val === max) return false;
                if (isNaN(val)) {
                    qty.val(step);
                } else if (val + step > max) {
                    qty.val(max);
                } else {
                    qty.val(val + step);
                }
            } else {
                if (val === min) return false;
                if (isNaN(val)) {
                    qty.val(min);
                } else if (val - step < min) {
                    qty.val(min);
                } else {
                    qty.val(val - step);
                }
            }

            qty.val(Math.round(qty.val() * 100) / 100);
            qty.trigger("change");
            $("body").removeClass("sf-input-focused");
        });
    }

    jQuery(document).on("click", ".quantity input", function () {
        return false;
    });

    jQuery(document).on("change input", ".quantity .qty", function () {

        var add_to_cart_button = jQuery(this).closest(".product").find(".add_to_cart_button");

        // For AJAX add-to-cart actions				
        add_to_cart_button.attr("data-quantity", jQuery(this).val());

        // For non-AJAX add-to-cart actions
        add_to_cart_button.attr("href", "?add-to-cart=" + add_to_cart_button.attr("data-product_id") + "&quantity=" + jQuery(this).val());
    });


})(jQuery);