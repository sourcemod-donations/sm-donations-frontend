var hasLoaded = function () {
    $('.navbar').show();
    $('.spinner-wrapper').hide();
};

var isLoading = function () {
    $('.spinner-wrapper').show();
    $('.navbar').hide();
};