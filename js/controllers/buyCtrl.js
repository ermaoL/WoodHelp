/**
 * Created by Administrator on 2016/4/21.
 */
function buyCtrl($scope) {

    //启用双击监听
    mui.init({
        gestureConfig:{
            doubletap:true
        },
        subpages:[{
            url:'views/tabs/buy-list.html',
            id:'buy-list.html',
            styles:{
                top: '100px',
                bottom: '50px',
            }
        }]
    });
    mui('.mui-scroll-wrapper').scroll();
    mui('body').on('shown', '.mui-popover', function(e) {
        //console.log('shown', e.detail.id);//detail为当前popover元素
    });
    mui('body').on('hidden', '.mui-popover', function(e) {
        //console.log('hidden', e.detail.id);//detail为当前popover元素
    });

    var contentWebview = null;
    document.querySelector('header').addEventListener('doubletap',function () {
        if(contentWebview==null){
            contentWebview = plus.webview.currentWebview().children()[0];
        }
        contentWebview.evalJS("mui('#pullrefresh').pullRefresh().scrollTo(0,0,100)");
    });
}