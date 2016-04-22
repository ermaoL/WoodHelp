/**
 * Created by cookie on 2016/4/22.
 */
$(function () {
    var publish_height = $(window).height() - 45;
    $("#publish-supply-content").css("height", publish_height);
    $("#publish-supply-content").css("overflow-y", "auto");
    $("#publish-supply-content").css("overflow-x", "hidden");
    $("#publish-buy-content").css("height", publish_height);
    $("#publish-buy-content").css("overflow-y", "auto");
    $("#publish-buy-content").css("overflow-x", "hidden");

    // 城市定位
    //实例化城市查询类
    var citysearch = new AMap.CitySearch();
    //自动获取用户IP，返回当前城市
    citysearch.getLocalCity(function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
            if (result && result.city && result.bounds) {
                var cityinfo = result.city;
                cityinfo = cityinfo.substring(0, cityinfo.length - 1);
                // var citybounds = result.bounds;
                // alert(cityinfo);
                if (cityinfo.length > 2) {
                    cityinfo = cityinfo.substring(0, 2) + "…";
                }
                document.getElementById('nearbyCityName').innerHTML = cityinfo;

                //地图显示当前城市
                // map.setBounds(citybounds);
            }
        } else {
            document.getElementById('nearbyCityName').innerHTML = "未定位";
            // document.getElementById('tip').innerHTML = result.info;
        }
    });

   
}());