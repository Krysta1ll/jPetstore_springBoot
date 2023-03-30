var time0 = 60;
var time = time0;
var t;  // 用于验证按钮的60s计时

$(document).ready(function() {

    // 获取验证码按钮
    $("#btnGetVcode").click(function() {
        var btnGet = document.getElementById("btnGetVcode");
        btnGet.disabled = true;  // 为了防止多次点击
        $.ajax({
            url: '/Jpetstore/EmailServlet?method=getVCode',
            type: 'post',
            data: {email: $("input[name='email']").val()},
            dataType: 'text',
            success: function(msg) {
                if(msg == -1){
                    window.alert("请输入正确的邮箱！");
                    btnGet.disabled = false;
                }
                else{
                    useChangeBTN();  // 控制下一次重新获取验证码
                }
            },
            error:function(msg){
            }
        });
    });

    // 验证按钮
    // $("#btnVerify").click(function() {
    //     var message = document.getElementById("message");  // 显示提示信息
    //     $.ajax({
    //         url: 'EmailServlet?method=verify',
    //         type: 'post',
    //         data: {vcode: $("input[name='vcode']").val()},
    //         dataType: 'text',
    //         success: function(msg) {
    //             if(msg == 1){
    //                 message.innerHTML = "验证码正确！";
    //                 $("#message").css("color","green");
    //             }
    //             else{
    //                 message.innerHTML = "验证码错误！";
    //                 $("#message").css("color","red");
    //             }
    //         },
    //         error:function(msg){
    //         }
    //     });
    // });

});

//修改按钮，控制验证码重新获取
function changeBTN(){
    if(time > 0){
        $("#btnGetVcode").text("("+time+"s)"+"重新获取");
        time = time - 1;
    }
    else{
        var btnGet = document.getElementById("btnGetVcode");
        btnGet.disabled = false;
        $("#btnGetVcode").text("获取验证码");
        clearInterval(t);
        time = time0;
    }
}
function useChangeBTN(){
    $("#btnGetVcode").text("("+time+"s)"+"重新获取");
    time = time - 1;
    t = setInterval("changeBTN()", 1000);  // 1s调用一次
}
