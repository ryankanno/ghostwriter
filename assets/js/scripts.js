;jQuery(function($) {

    /* ============================================================ */
    /* Responsive Videos */
    /* ============================================================ */

    $(".post-content").fitVids();

    /* ============================================================ */
    /* Scroll To Top */
    /* ============================================================ */

    $('.js-jump-top').on('click', function(e) {
        e.preventDefault();
        document.querySelector('body').scrollIntoView({behavior: 'smooth'});
    });
});

hljs.initHighlightingOnLoad();
