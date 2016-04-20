/**
 * Created by Administrator on 2016/4/18.
 */

function homeCtrl($scope) {
    // 禁止自动轮播
    var slider = mui("#slider");
    slider.slider({
        interval: 0
    });

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
                $("#cityName").text(cityinfo);

                //地图显示当前城市
                // map.setBounds(citybounds);
            }
        } else {
            $("#cityName").text("未定位");
            // document.getElementById('tip').innerHTML = result.info;
        }
    });

}