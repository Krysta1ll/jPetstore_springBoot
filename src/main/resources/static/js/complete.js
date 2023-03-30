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

function isValidEmail(email){
    if(email===undefined||email===null||email===''){
        return '邮箱不能为空';
    }else if(email.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)){
        return '';
    }else{
        return '邮箱格式不正确';
    }
}

function isValidFirstName(firstName){
    if(firstName===undefined||firstName===null||firstName===''){
        return '请输入您的姓氏';
    }else if(firstName.length>10){
        return '姓氏长度不能超过10';
    }else if(firstName.match(/^[\u4e00-\u9fa5a-zA-Z]+$/)){
        return '';
    }else{
        return '姓氏只能含有中文或英文';
    }
}

function isValidSecondtName(secondName){
    if(secondName===undefined||secondName===null||secondName===''){
        return '请输入您的名字';
    }else if(secondName.length>10){
        return '名字长度不能超过10';
    }else if(secondName.match(/^[\u4e00-\u9fa5a-zA-Z]+$/)){
        return '';
    }else{
        return '名字只能含有中文或英文';
    }
}

function isValidPhone(phone){
    if(phone===undefined||phone===null||phone===''){
        return '请输入您的手机号码';
    }else if(phone.length!==11){
        return '请输入11位的手机号码';
    }else if(phone.match(/^[1][3,4,5,7,8,9][0-9]{9}$/)){
        return '';
    }else{
        return '手机号码格式不正确';
    }
}

function isValidAddress(address){
    if(address===undefined||address===null||address===''){
        return '请您填写收货地址';
    }else if(address.match(/^[\u4e00-\u9fa50-9]+$/)){
        return '';
    }else{
        return '地址不能包含英文字符';
    }
}

function isValidCity(city){
    if(city===undefined||city===null||city===''){
        return '请您填写所在城市';
    }else if(city.match(/^[\u4e00-\u9fa5a-zA-Z]+$/)){
        return '';
    }else{
        return '城市不能包含除中英文之外的字符';
    }
}

function isValidZip(zip){
    if(zip===undefined||zip===null||zip===''){
        return '请您填写所在城市邮政编码';
    }else if(zip.length!==6){
        return '请输入6位的邮政编码';
    }else if(zip.match(/^[0-9]+$/)){
        return '';
    }else{
        return '邮政编码只能是数字';
    }
}

function isValidCountry(country){
    if(country===undefined||country===null||country===''){
        return '请您填写所在国家';
    }else if(country.match(/^[\u4e00-\u9fa5a-zA-Z]+$/)){
        return '';
    }else{
        return '国家不能包含除中英文之外的字符';
    }
}

$(function (){
    $('#correct_1,#error_1,#correct_2,#error_2,#correct_3,#error_3,#correct_4,#error_4,#correct_5,#error_5,#correct_6,#error_6,#correct_7,#error_7,#correct_8,#error_8,#correct_9,#error_9,#correct_10,#error_10,#correct_11,#error_11,#correct_12,#error_12,#icon-exclamation').hide();
    $('.languagePreference').on('blur change',function (){
        var checkValue=$(".languagePreference").val();
        if (checkValue===null){
            $icon_exclamation.show();
            $errorMsg.text('请选择您的语言偏好');
        }else{
            $icon_exclamation.hide();
            $errorMsg.text('');
        }
    });
    $('.favouriteCategoryId').on('blur change',function (){
        var checkValue=$(".favouriteCategoryId").val();
        if (checkValue===null){
            $icon_exclamation.show();
            $errorMsg.text('请选择您喜欢的动物');
        }else{
            $icon_exclamation.hide();
            $errorMsg.text('');
        }
    });
    $('#firstName').on('input blur',function (){
        var checkValue=$(this).val();
        errorText=isValidFirstName(checkValue);
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
    $('#lastName').on('input blur',function (){
        var checkValue=$(this).val();
        errorText=isValidSecondtName(checkValue);
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
    $('#phone').on('input blur',function (){
        var checkValue=$(this).val();
        errorText=isValidPhone(checkValue);
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
    $('#address1').on('input blur',function (){
        var checkValue=$(this).val();
        errorText=isValidAddress(checkValue);
        if(errorText===''){
            $icon_exclamation.hide();
            $('#correct_6').show();
            $('#error_6').hide();
        }else{
            $icon_exclamation.show();
            $('#error_6').show();
            $('#correct_6').hide();
        }
        $errorMsg.text(errorText);
    });
    $('#address2').on('input blur',function (){
        var checkValue=$(this).val();
        errorText=isValidAddress(checkValue);
        if(errorText===''){
            $icon_exclamation.hide();
            $('#correct_7').show();
            $('#error_7').hide();
        }else{
            $icon_exclamation.show();
            $('#error_7').show();
            $('#correct_7').hide();
        }
        $errorMsg.text(errorText);
    });
    $('#city').on('input blur',function (){
        var checkValue=$(this).val();
        errorText=isValidCity(checkValue);
        if(errorText===''){
            $icon_exclamation.hide();
            $('#correct_8').show();
            $('#error_8').hide();
        }else{
            $icon_exclamation.show();
            $('#error_8').show();
            $('#correct_8').hide();
        }
        $errorMsg.text(errorText);
    });
    $('#zip').on('input blur',function (){
        var checkValue=$(this).val();
        errorText=isValidZip(checkValue);
        if(errorText===''){
            $icon_exclamation.hide();
            $('#correct_9').show();
            $('#error_9').hide();
        }else{
            $icon_exclamation.show();
            $('#error_9').show();
            $('#correct_9').hide();
        }
        $errorMsg.text(errorText);
    });
    $('#country').on('input blur',function (){
        var checkValue=$(this).val();
        errorText=isValidCountry(checkValue);
        if(errorText===''){
            $icon_exclamation.hide();
            $('#correct_10').show();
            $('#error_10').hide();
        }else{
            $icon_exclamation.show();
            $('#error_10').show();
            $('#correct_10').hide();
        }
        $errorMsg.text(errorText);
    });
    $('#username').on('input blur',function (){
        var checkValue=$(this).val();
        errorText=isValidUsername(checkValue);
        if(errorText===''){
            $icon_exclamation.hide();
            $('#correct_11').show();
            $('#error_11').hide();
        }else{
            $icon_exclamation.show();
            $('#error_11').show();
            $('#correct_11').hide();
        }
        $errorMsg.text(errorText);
    });
    $('#password').on('input blur',function (){
        var checkValue=$(this).val();
        errorText=isValidPassword(checkValue);
        if(errorText===''){
            $icon_exclamation.hide();
            $('#correct_12').show();
            $('#error_12').hide();
        }else{
            $icon_exclamation.show();
            $('#error_12').show();
            $('#correct_12').hide();
        }
        $errorMsg.text(errorText);
    });
    $('#email').on('input blur',function (){
        var checkValue=$(this).val();
        errorText=isValidEmail(checkValue);
        if(errorText===''){
            $icon_exclamation.hide();
            $('#correct_3').show();
            $('#error_3').hide();
        }else{
            $icon_exclamation.show();
            $('#error_3').show();
            $('#correct_3').hide();
        }
        $errorMsg.text(errorText);
    });
    $('#completeForm').on('submit',function (e){
        e.preventDefault();
        var email                 =$('#email').val(),
            password              =$('#password').val(),
            username              =$('#username').val(),
            firstName             =$('#firstName').val(),
            lastName              =$('#lastName').val(),
            phone                 =$('#phone').val(),
            state                 =$('#state').val(),
            address1              =$('#address1').val(),
            address2              =$('#address2').val(),
            city                  =$('#city').val(),
            zip                   =$('#zip').val(),
            country               =$('#country').val(),
            listOption            =$('#listOption').prop('checked'),
            bannerOption          =$('#bannerOption').prop('checked'),
            favouriteCategoryId   =$('.favouriteCategoryId').val(),
            languagePreference    =$('.languagePreference').val();
        var url='http://localhost:8080/Jpetstore/completeServlet?email=' + email + '&password=' + password + '&username=' + username+ '&firstName=' + firstName+ '&lastName=' + lastName+ '&phone=' + phone+ '&address1=' + address1+ '&address2=' + address2+ '&city=' + city+ '&zip=' + zip+ '&country=' + country+ '&listOption=' + listOption+ '&bannerOption=' + bannerOption+ '&favouriteCategoryId=' + favouriteCategoryId+ '&languagePreference=' + languagePreference;
        if( email===undefined||email===null||email===''||
            password===undefined||password===null||password===''||
            username===undefined||username===null||username===''||
            firstName===undefined||firstName===null||firstName===''||
            lastName===undefined||lastName===null||lastName===''||
            phone===undefined||phone===null||phone===''||
            state===undefined||state===null||state===''||
            address1===undefined||address1===null||address1===''||
            address2===undefined||address2===null||address2===''||
            city===undefined||city===null||city===''||
            zip===undefined||zip===null||zip===''||
            country===undefined||country===null||country===''||
            languagePreference===undefined||languagePreference===null||languagePreference===''||
            favouriteCategoryId===undefined||favouriteCategoryId===null||favouriteCategoryId===''){
            $icon_exclamation.show();
            $errorMsg.text("请完善所有信息!!");
        }else{
            var url='http://localhost:8080/Jpetstore/completeServlet?email=' + email + '&password=' + password + '&username=' + username+ '&firstName=' + firstName+ '&lastName=' + lastName+ '&phone=' + phone+ '&address1=' + address1+ '&address2=' + address2+ '&city=' + city+ '&zip=' + zip+ '&country=' + country+ '&listOption=' + listOption+ '&bannerOption=' + bannerOption+ '&favouriteCategoryId=' + favouriteCategoryId+ '&languagePreference=' + languagePreference;
            $.ajax({
                type     : 'POST',
                url      :  url,
                dataType : 'text',
                success  :function (data){
                    window.location.href ='http://localhost:8080/Jpetstore/mainForm';
                }
            });
        }
    });
})