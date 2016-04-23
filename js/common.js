/**
 * Created by cookie on 2016/4/22.
 */
(function () {
    var publish_height = $(window).height() - 45;
    $("#publish-supply-content").css("height", publish_height);
    $("#publish-supply-content").css("overflow-y", "auto");
    $("#publish-supply-content").css("overflow-x", "hidden");
    $("#publish-buy-content").css("height", publish_height);
    $("#publish-buy-content").css("overflow-y", "auto");
    $("#publish-buy-content").css("overflow-x", "hidden");

    // 发送验证码倒计时
    var util = {
        wait: 60,
        hsTime: function (that) {
            _this = $(this);
            if (_this.wait == 0) {
                $('#regis-valid').removeAttr("disabled").val('重发验证码');
                $('#reset-valid').removeAttr("disabled").val('重发验证码');
                _this.wait = 90;
            } else {
                var _this = this;
                $(that).attr("disabled", true).val(_this.wait + '秒后重发');
                _this.wait--;
                setTimeout(function () {
                    _this.hsTime(that);
                }, 1000)
            }
        }
    };

    $("#regis-valid").click(function () {
        util.hsTime('#regis-valid');
    });
    $("#reset-valid").click(function () {
        util.hsTime('#reset-valid');
    });

    // 求购价格选择的切换
    $("#phone-discuss").click(function () {
        $("#phone-discuss").addClass("buy-price-btn-active");
        $("#face-discuss").removeClass("buy-price-btn-active");
        $("#self-input").removeClass("buy-price-btn-active");
        $(".price-range").css("display", "none");
    });

    $("#face-discuss").click(function () {
        $("#phone-discuss").removeClass("buy-price-btn-active");
        $("#face-discuss").addClass("buy-price-btn-active");
        $("#self-input").removeClass("buy-price-btn-active");
        $(".price-range").css("display", "none");
    });

    $("#self-input").click(function () {
        $("#phone-discuss").removeClass("buy-price-btn-active");
        $("#face-discuss").removeClass("buy-price-btn-active");
        $("#self-input").addClass("buy-price-btn-active");
        $(".price-range").css("display", "block");
    });

    $("#is-open-contact").click(function () {
        var hasOff = $("#is-open-contact").hasClass("off-switch");
        if (hasOff) {
            $("#is-open-contact").removeClass("off-switch");
        } else {
            $("#is-open-contact").addClass("off-switch");
        }
    });
})();

(function($, doc) {
    $.init();
    $.ready(function() {
        //普通示例
        var userPicker = new $.PopPicker();
        userPicker.setData([{
            value: 'ywj',
            text: '董事长 叶文洁'
        }, {
            value: 'aaa',
            text: '总经理 艾AA'
        }, {
            value: 'lj',
            text: '罗辑'
        }, {
            value: 'ymt',
            text: '云天明'
        }, {
            value: 'shq',
            text: '史强'
        }, {
            value: 'zhbh',
            text: '章北海'
        }, {
            value: 'zhy',
            text: '庄颜'
        }, {
            value: 'gyf',
            text: '关一帆'
        }, {
            value: 'zhz',
            text: '智子'
        }, {
            value: 'gezh',
            text: '歌者'
        }]);
        var showUserPickerButton = doc.getElementById('_productType');
        var showUserPickerInput = doc.getElementById('_productType1');
        showUserPickerButton.addEventListener('tap', function(event) {
            userPicker.show(function(items) {
                showUserPickerButton.style.display = "none";
                showUserPickerInput.style.display = "block";
                showUserPickerInput.innerText = JSON.stringify(items[0].text);
                //返回 false 可以阻止选择框的关闭
                //return false;
            });
        }, false);
        //-----------------------------------------
        //级联示例
        var cityPicker = new $.PopPicker({
            layer: 2
        });
        cityPicker.setData(cityData);
        var showCityPickerButton = doc.getElementById('_productStorage');
        var showCityPickerInput = doc.getElementById('_productStorage1');
        showCityPickerButton.addEventListener('tap', function(event) {
            cityPicker.show(function(items) {
                showCityPickerButton.style.display = "none";
                showCityPickerInput.style.display = "block";
                showCityPickerInput.innerText = items[0].text + " " + items[1].text;

                //返回 false 可以阻止选择框的关闭
                //return false;
            });
        }, false);
    });
})(mui, document);

(function($, doc) {
    $.init();
    $.ready(function() {

        //级联示例
        var cityPicker = new $.PopPicker({
            layer: 2
        });
        cityPicker.setData(cityData);
        var showCityPickerButton1 = doc.getElementById('_sendCity');
        var showCityPickerInput1 = doc.getElementById('_sendCity1');
        showCityPickerButton1.addEventListener('tap', function(event) {
            cityPicker.show(function(items) {
                showCityPickerButton1.style.display = "none";
                showCityPickerInput1.style.display = "block";
                showCityPickerInput1.innerText = items[0].text + " " + items[1].text;

                //返回 false 可以阻止选择框的关闭
                //return false;
            });
        }, false);


    });
})(mui, document);