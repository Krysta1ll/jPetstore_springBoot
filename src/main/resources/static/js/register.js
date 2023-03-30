var $errorMsg=$('#errormsg');
var $icon_exclamation=$('#icon-exclamation');
var errorText;

function isValidUsername(username){
    if(username===undefined||username===null||username===''){
        return '用户名不能为空';
    }else if(username.match(/^[a-zA-Z0-9]+$/)){
        return '';
    }else{
        return '用户名只能是数字或字母';
    }
}

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
    $('#correct_1,#error_1,#correct_2,#error_2,#correct_3,#error_3,#correct_4,#error_4,#icon-exclamation').hide();
    $('#username').on('input blur',function (){
        var username=$(this).val();
        errorText=isValidUsername(username);
        if(errorText===''){
            $icon_exclamation.hide();
            $('#correct_1').show();
            $('#error_1').hide();
        }else{
            $icon_exclamation.show();
            $('#error_1').show();
            $('#correct_1').hide();
        }
        $errorMsg.text(errorText);
    });
    $('#password').on('input blur',function (){
        var password=$(this).val();
        errorText=isValidPassword(password);
        if(errorText===''){
            $icon_exclamation.hide();
            $('#correct_2').show();
            $('#error_2').hide();
        }else{
            $icon_exclamation.show();
            $('#error_2').show();
            $('#correct_2').hide();
        }
        $errorMsg.text(errorText);
    });
    $('#repeatPassword').on('input blur',function (){
        var password=$('#password').val();
        var repeatPassword=$(this).val();
        errorText=isValidPassword(repeatPassword);
        if(errorText===''){
            if(password===repeatPassword){
                $icon_exclamation.hide();
                $('#correct_3').show();
                $('#error_3').hide();
            }else{
                errorText='两次输入的密码不一致';
                $icon_exclamation.show();
                $('#error_3').show();
                $('#correct_3').hide();
            }

        }else{
            $icon_exclamation.show();
            $('#error_3').show();
            $('#correct_3').hide();
        }
        $errorMsg.text(errorText);
    });
    $('#email').on('input  blur',function (){
        var email=$(this).val();
        errorText=isValidEmail(email);
        if(errorText===''){
            $icon_exclamation.hide();
            $('#correct_4').show();
            $('#error_4').hide();
        }else{
            $icon_exclamation.show();
            $('#error_4').show();
            $('#correct_4').hide();
        }
        $errorMsg.text(errorText);
    });
    $('#btnGetVcode').on('click',function (){
        var $this     =$('#btnGetVcode'),
            email     =$('#email').val(),
            password  =$('#password').val(),
            username  =$('#username').val();
        if(username===undefined||username===null||username===''){
            $icon_exclamation.show();
            $errorMsg.text("用户名不能为空");
        }else if(!username.match(/^[a-zA-Z0-9]+$/)){
            $icon_exclamation.show();
            $errorMsg.text("用户名只能是数字或字母");
        }else if(password===undefined||password===null||password===''){
            $icon_exclamation.show();
            $errorMsg.text("密码不能为空");
        }else if(password.length<8){
            $icon_exclamation.show();
            $errorMsg.text("密码的长度至少为8位");
        } else if(!password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)) {
            $icon_exclamation.show();
            $errorMsg.text("密码必须包含大小写字母和数字及特殊字符");
        }else if(email===undefined||email===null||email===''){
            $icon_exclamation.show();
            $errorMsg.text("邮箱不能为空");
        }else if(!email.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)){
            $icon_exclamation.show();
            $errorMsg.text("邮箱格式不正确");
        } else {
            //在这里进行一次异步请求
            $.ajax({
                type: 'GET',
                url: 'http://localhost:8080/Jpetstore/EmailServlet?email=' + email + '&password=' + password + '&username=' + username,
            });
            var wait = 60;

            function time() {
                if (wait === 0) {
                    $this.attr('disabled', false);
                    $this.val("获取验证码");
                    $this.css({"background": "#2f988c"});
                    wait = 60;
                } else {
                    $this.css({"background": "#889695"});
                    $this.attr('disabled', true);
                    $this.val("重新发送(" + wait + ")");
                    wait--;
                    setTimeout(function () {
                        time()
                    }, 1000);
                }
            }

            time();
        }

    });
    $('#registerForm').on('submit',function (e){
        e.preventDefault();
        var vcode=$('#vcode').val();
        if(vcode===undefined||vcode===null||vcode===''){
            $icon_exclamation.show();
            $errorMsg.text("验证码不能为空");
        }else{
            $.ajax({
                type     : 'POST',
                url      : 'http://localhost:8080/Jpetstore/registerServlet',
                data     : $('#registerForm').serialize(),
                dataType : 'text',
                success  :function (data){
                    if(data==="0"){
                        $icon_exclamation.hide();
                        $errorMsg.text('');
                        //进行跳转
                        window.location.href ='http://localhost:8080/Jpetstore/completeForm';
                    }else{
                        $icon_exclamation.show();
                        $errorMsg.text(data);
                    }
                }
            });
        }
    });
})