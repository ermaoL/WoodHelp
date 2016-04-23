/**
 * Created by Administrator on 2016/4/18.
 */

function supplyCtrl($scope) {

    $('.select-menu').each(function () {
        var myDiv = $(this);
        $('#supply-type-name').click(function (event) {
            $(myDiv).parent().fadeIn(); //调用显示DIV方法
            $(document).one("click", function () { //对document绑定一个影藏Div方法
                $(myDiv).parent().hide();
            });
            event.stopPropagation(); //阻止事件向上冒泡
        });

        $(myDiv).click(function (event) {
            event.stopPropagation(); //阻止事件向上冒泡
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