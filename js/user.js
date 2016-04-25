/**
 * Created by cookie on 2016/4/25.
 */
(function() {
    // 发送验证码倒计时
    var util = {
        wait: 5,
        hsTime: function (that) {
            _this = $(this);
            if (_this[0].wait == 0) {
                $('#regis-valid').removeAttr("disabled").val('重发验证码');
                $('#reset-valid').removeAttr("disabled").val('重发验证码');
                _this[0].wait = 5;
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

})();