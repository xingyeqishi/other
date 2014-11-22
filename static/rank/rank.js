define(function(require, exports, module) {
    var $ = require('jquery');
    $('.J-previous').click(function(e) {
        console.log($('.J-page-no').val());
    });
    $('.J-next').click(function(e) {
        console.log($('.J-page-no').val());
    });
});
