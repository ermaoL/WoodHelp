/**
 * Created by Administrator on 2016/4/18.
 */

function supplyCtrl($scope) {

    //启用双击监听
    mui.init({
        gestureConfig:{
            doubletap:true
        },
        subpages:[{
            url:'views/tabs/supply-list.html',
            id:'supply-list.html',
            styles:{
                top: '100px',
                bottom: '50px',
            }
        }]
    });

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
}