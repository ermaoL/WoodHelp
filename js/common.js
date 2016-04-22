/**
 * Created by cookie on 2016/4/22.
 */
$(function () {
    var publish_height = $(window).height() - 45;
    $("#publish-supply-content").css("height", publish_height);
    $("#publish-supply-content").css("overflow-y", "auto");
    $("#publish-supply-content").css("overflow-x", "hidden");
}());