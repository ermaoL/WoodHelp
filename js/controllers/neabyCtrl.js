/**
 * Created by Administrator on 2016/4/23.
 */
function nearbyCtrl($scope) {
    $('.select-type-menu').each(function () {
        var myDiv = $(this);
        $('#supply-type-name').click(function (event) {
            $("#supply-type-name span").css("color", "#e98c06");
            $("#supply-type-name img").attr("src", "images/upper@2x.png");
            $(myDiv).parent().fadeIn(); //调用显示DIV方法
            $(myDiv).parent().siblings(".menu-all").hide();
            $(document).one("click", function () { //对document绑定一个影藏Div方法
                $(myDiv).parent().hide();
                $("#supply-type-name span").css("color", "#313131");
                $("#supply-type-name img").attr("src", "images/lower@2x.png");
            });
            $(this).one("click", function () {
                $(myDiv).parent().hide();
                $("#supply-type-name span").css("color", "#313131");
                $("#supply-type-name img").attr("src", "images/lower@2x.png");
            });
            event.stopPropagation(); //阻止事件向上冒泡
        });

        $(myDiv).click(function (event) {
            event.stopPropagation(); //阻止事件向上冒泡
        });
    });
    $('.select-city-menu').each(function () {
        var myDiv = $(this);
        $('#supply-city-name').click(function (event) {
            $(myDiv).parent().fadeIn(); //调用显示DIV方法
            $(myDiv).parent().siblings(".menu-all").hide();
            $(document).one("click", function () { //对document绑定一个影藏Div方法
                $(myDiv).parent().hide();
            });
            $(this).one("click", function () {
                $(myDiv).parent().hide();
            });
            event.stopPropagation(); //阻止事件向上冒泡
        });

        $(myDiv).click(function (event) {
            event.stopPropagation(); //阻止事件向上冒泡
        });
    });
    $('.select-sort-menu').each(function () {
        var myDiv = $(this);
        $('#supply-sort').click(function (event) {
            $(myDiv).parent().fadeIn(); //调用显示DIV方法
            $(myDiv).parent().siblings(".menu-all").hide();
            $(document).one("click", function () { //对document绑定一个影藏Div方法
                $(myDiv).parent().hide();
            });
            $(this).one("click", function () {
                $(myDiv).parent().hide();
            });
            event.stopPropagation(); //阻止事件向上冒泡
        });

        $(myDiv).click(function (event) {
            event.stopPropagation(); //阻止事件向上冒泡
        });
    });

    $(function(){
        $("ul#type-menu li").click(function(){
            $(this).addClass("menu-first-select").siblings().removeClass("menu-first-select");
        });
        $("ul#type-menu-detail li").click(function(){
            $(this).addClass("menu-second-select").siblings().removeClass("menu-second-select");
        });
        $("ul#province-menu li").click(function(){
            $(this).addClass("menu-first-select").siblings().removeClass("menu-first-select");
        });
        $("ul#city-menu li").click(function(){
            $(this).addClass("menu-second-select").siblings().removeClass("menu-second-select");
        });
        $("ul#sort-menu li").click(function(){
            $(this).addClass("menu-first-select").siblings().removeClass("menu-first-select");
        });
    });
    var list = {"supply": [{"pic":"../../images/shuijiao.jpg", "title":"全新进口瑞典云杉木材", "price":"5640", "seller":"福建龙岩某某某钢材厂", "time":"2016.04.22"},
        {"pic":"../../images/muwu.jpg", "title":"全新进口瑞典云杉木材全新进口瑞典云杉木材全新进口瑞典云杉木材全新进口瑞典云杉木材", "price":"5640", "seller":"福建龙岩某某某钢材厂", "time":"2016.04.22"},
        {"pic":"../../images/cbd.jpg", "title":"全新进口瑞典云杉木材", "price":"5640", "seller":"福建龙岩某某某钢材厂", "time":"2016.04.22"},
        {"pic":"../../images/yuantiao.jpg", "title":"全新进口瑞典云杉木材", "price":"5640", "seller":"福建龙岩某某某钢材厂", "time":"2016.04.22"},
        {"pic":"../../images/yuantiao.jpg", "title":"全新进口瑞典云杉木材", "price":"5640", "seller":"福建龙岩某某某钢材厂", "time":"2016.04.22"}]};
    $scope.nearbySupplyList = list.supply;
}