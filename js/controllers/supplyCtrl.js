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
            url:'tabs/supply-list.html',
            id:'supply-list.html',
            styles:{
                top: '45px',
                bottom: '0px',
            }
        }]
    });

    var contentWebview = null;
    document.querySelector('header').addEventListener('doubletap',function () {
        if(contentWebview==null){
            contentWebview = plus.webview.currentWebview().children()[0];
        }
        contentWebview.evalJS("mui('#pullrefresh').pullRefresh().scrollTo(0,0,100)");
    });
    var list = {"supply": [{"pic":"../images/shuijiao.jpg", "title":"全新进口瑞典云杉木材", "price":"5640", "seller":"福建龙岩某某某钢材厂", "time":"2016.04.22"},
        {"pic":"../images/muwu.jpg", "title":"全新进口瑞典云杉木材全新进口瑞典云杉木材全新进口瑞典云杉木材全新进口瑞典云杉木材", "price":"5640", "seller":"福建龙岩某某某钢材厂", "time":"2016.04.22"},
        {"pic":"../images/cbd.jpg", "title":"全新进口瑞典云杉木材", "price":"5640", "seller":"福建龙岩某某某钢材厂", "time":"2016.04.22"},
        {"pic":"../images/yuantiao.jpg", "title":"全新进口瑞典云杉木材", "price":"5640", "seller":"福建龙岩某某某钢材厂", "time":"2016.04.22"},
        {"pic":"../images/yuantiao.jpg", "title":"全新进口瑞典云杉木材", "price":"5640", "seller":"福建龙岩某某某钢材厂", "time":"2016.04.22"}]};

    $scope.supplyList = list.supply;

}