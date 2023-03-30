var $errorMsg=$('#errormsg');
var $icon_exclamation=$('#icon-exclamation');
var errorText;

function isValidEmail(email){
    if(email===undefined||email===null||email===''){
        return '邮箱不能为空';
    }else if(email.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)){
        return '';
    }else{
        return '邮箱格式不正确';
    }
}
function isValidPassword(password){
    if(password===undefined||password===null||password===''){
        return '密码不能为空';
    }else if(password.length<8){
        return '密码的长度至少为8位';
    }else if(password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)){
        return '';
    }else{
        return '密码必须包含大小写字母和数字及特殊字符';
    }
}

$(function (){
    $icon_exclamation.hide();
    $('#email').on('input blur',function (){
        var email=$(this).val();
        errorText=isValidEmail(email);
        if(errorText===''){
            $icon_exclamation.hide();
        }else{
            $icon_exclamation.show();
        }
        $errorMsg.text(errorText);
    });
    $('#password').on('input blur',function (){
        var password=$(this).val();
        errorText=isValidPassword(password);
        if(errorText===''){
            $icon_exclamation.hide();
        }else{
            $icon_exclamation.show();
        }
        $errorMsg.text(errorText);
    });

    $('#btnGetVcode').on('click',function (){
        var $this     =$('#btnGetVcode'),
            email     =$('#email').val(),
            password  =$('#password').val();
        if(email===undefined||email===null||email===''){
            $icon_exclamation.show();
            $errorMsg.text("邮箱不能为空");
        }else if(!email.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)){
            $icon_exclamation.show();
            $errorMsg.text("邮箱格式不正确");
        }else if(password===undefined||password===null||password===''){
            $icon_exclamation.show();
            $errorMsg.text("密码不能为空");
        }else if(password.length<8){
            $icon_exclamation.show();
            $errorMsg.text("密码的长度至少为8位");
        } else if(!password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)) {
            $icon_exclamation.show();
            $errorMsg.text("密码必须包含大小写字母和数字及特殊字符");
        } else{
            $icon_exclamation.hide();
            $errorMsg.text('');
            //在这里进行一次异步请求
            $.ajax({
                type :'GET',
                url  :'http://localhost:8080/Jpetstore/EmailServlet?email='+email+'&password='+password,
            });
            var wait=60;
            function time() {
                if (wait === 0) {
                    $this.attr('disabled',false);
                    $this.val("获取验证码");
                    $this.css({"background":"#2f988c"});
                    wait = 60;
                } else {
                    $this.css({"background":"#889695"});
                    $this.attr('disabled',true);
                    $this.val("重新发送(" + wait + ")");
                    wait--;
                    setTimeout(function() {time()},1000);
                }
            }
            time();
        }
    });
    $('#loginForm').on('submit',function (e){
        e.preventDefault();
        var vcode=$('#vcode').val();

        if(vcode===undefined||vcode===null||vcode===''){
            $icon_exclamation.show();
            $errorMsg.text("验证码不能为空");
        }else{
            $.ajax({
                type     : 'POST',
                url      : 'http://localhost:8080/Jpetstore/loginServlet',
                data     : $('#loginForm').serialize(),
                dataType : 'text',
                success  :function (data){
                    if(data==="0"){
                        $icon_exclamation.hide();
                        $errorMsg.text('');
                        //进行跳转
                        window.location.href ='http://localhost:8080/Jpetstore/mainForm';
                    }else{
                        $icon_exclamation.show();
                        $errorMsg.text(data);
                    }
                }
            });
        }
    });
})