/**
 * Created by Administrator on 2016/4/18.
 */

function supplyCtrl($scope) {

    $('.select-type-menu').each(function () {
        var myDiv = $(this);
        $('#supply-type-name').click(function (event) {
            $("#supply-type-name").addClass("sel-active").siblings().removeClass("sel-active");
            $(myDiv).parent().fadeIn(); //调用显示DIV方法
            $(myDiv).parent().siblings(".menu-all").hide();
            $(document).one("click", function () { //对document绑定一个影藏Div方法
                $(myDiv).parent().hide();
                $("#supply-type-name").removeClass("sel-active");
            });
            $(this).one("click", function () {
                $(myDiv).parent().hide();
                $("#supply-type-name").removeClass("sel-active");
            });
            event.stopPropagation(); //阻止事件向上冒泡
        });

        $(myDiv).click(function (event) {
            event.stopPropagation(); //阻止事件向上冒泡
        });
    });
    $('.select-city-menu').each(function () {
        var myDiv = $(this);
        var status = 1;
        $('#supply-city-name').click(function (event) {
            $("#supply-city-name").addClass("sel-active").siblings().removeClass("sel-active");
            $(myDiv).parent().fadeIn(); //调用显示DIV方法
            ++status;
            $(myDiv).parent().siblings(".menu-all").hide();
            upOrDown();
            $(document).one("click", function () { //对document绑定一个影藏Div方法
                $(myDiv).parent().hide();
                $("#supply-city-name").removeClass("sel-active");
                upOrDown();
                status = 1;
            });
            if (status == 3) {
                $(myDiv).parent().hide();
                $("#supply-city-name").removeClass("sel-active");
                upOrDown();
                status = 1;
            }

            event.stopPropagation(); //阻止事件向上冒泡
        });

        $(myDiv).click(function (event) {
            event.stopPropagation(); //阻止事件向上冒泡
        });
    });
    $('.select-sort-menu').each(function () {
        var myDiv = $(this);
        $('#supply-sort').click(function (event) {
            $("#supply-sort").addClass("sel-active").siblings().removeClass("sel-active");
            $(myDiv).parent().fadeIn(); //调用显示DIV方法
            $(myDiv).parent().siblings(".menu-all").hide();
            $(document).one("click", function () { //对document绑定一个影藏Div方法
                $(myDiv).parent().hide();
                $("#supply-sort").removeClass("sel-active");
            });
            $(this).one("click", function () {
                $(myDiv).parent().hide();
                $("#supply-sort").removeClass("sel-active");
            });
            event.stopPropagation(); //阻止事件向上冒泡
        });

        $(myDiv).click(function (event) {
            event.stopPropagation(); //阻止事件向上冒泡
        });

    });

    function upOrDown() {
        if($("#supply-city-name").hasClass("sel-active")) {
            $("#supply-city-name span").css("color", "#e98c06");
            $("#supply-city-name img").attr("src", "images/upper@2x.png");
        } else {
            $("#supply-city-name span").css("color", "#313131");
            $("#supply-city-name img").attr("src", "images/lower@2x.png");
        }
    }

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

    var height = $(window).height() - 140;
    $("#supply-list").css("height", height);
    $("#supply-list").css("overflow-y", "auto");
    var list = {"supply": [{"pic":"images/shuijiao.jpg", "title":"全新进口瑞典云杉木材", "price":"5640", "seller":"福建龙岩某某某钢材厂", "time":"2016.04.22"},
        {"pic":"images/muwu.jpg", "title":"全新进口瑞典云杉木材全新进口瑞典云杉木材全新进口瑞典云杉木材全新进口瑞典云杉木材", "price":"5640", "seller":"福建龙岩某某某钢材厂", "time":"2016.04.22"},
        {"pic":"images/cbd.jpg", "title":"全新进口瑞典云杉木材", "price":"5640", "seller":"福建龙岩某某某钢材厂", "time":"2016.04.22"},
        {"pic":"images/yuantiao.jpg", "title":"全新进口瑞典云杉木材", "price":"5640", "seller":"福建龙岩某某某钢材厂", "time":"2016.04.22"},
        {"pic":"images/yuantiao.jpg", "title":"全新进口瑞典云杉木材", "price":"5640", "seller":"福建龙岩某某某钢材厂", "time":"2016.04.22"}]};
    $scope.lastestSupplyList = list.supply;
}