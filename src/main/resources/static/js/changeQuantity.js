$('#background').hide();
$('.newOrder').hide();
$('.confirmOrder').hide();
$('.shippingForm').hide();
$(function (){
    var addQuantity  =  $('.Add'),
        subQuantity  =  $('.Sub'),
        quantity     =  $('.ItemQuantity'),
        listPrice    =  $('.listPrice'),
        totalCost    =  $('.totalCost'),
        subTotal     =  $('#subTotal');

    addQuantity.on('click',function (){

        var index=addQuantity.index($(this));

        var newQuantity;

        newQuantity = quantity[index].value;

        quantity[index].value=++newQuantity;

        totalCost[index].innerHTML='$';
        totalCost[index].innerHTML+=Number(parseFloat(listPrice[index].attributes['value'].nodeValue)*newQuantity).toFixed(2);
        totalCost[index].attributes['value'].nodeValue=Number(parseFloat(listPrice[index].attributes['value'].nodeValue)*newQuantity).toFixed(2);

        var innerHTML   =' Sub Total: $',
            price       =0;
        for(var i=0;i<totalCost.length;i++){
            price=parseFloat(price)+parseFloat(totalCost[i].attributes['value'].nodeValue);
        }
        price=Number(price).toFixed(2);
        innerHTML+=price;
        innerHTML+='<input type="submit" value="刷新购物车">';
        subTotal.html(innerHTML);

        $.ajax({
            type    : 'GET' ,
            url     : 'http://localhost:8080/Jpetstore/addQuantity?workingItemId='+quantity[index].name,
            success : function(){
                        console.log('删除成功')
                        // location.href='http://localhost:8080/Jpetstore/updateCart';
                       },
            error   : function(errorMsg){
                console.log(errorMsg);
            }
        })

    });

    subQuantity.on('click',function (){
        var index=subQuantity.index($(this));
        var newQuantity;
        newQuantity = quantity[index].value;

        quantity[index].value=--newQuantity;
        if(newQuantity==0){
            $.ajax({
                type    : 'GET' ,
                url     : 'http://localhost:8080/Jpetstore/removeCartItem?workingItemId='+quantity.attr('name'),
                success : function(){
                            console.log('删除成功')
                            location.href='http://localhost:8080/Jpetstore/updateCart';
                           },
                error   : function(errorMsg){
                    console.log(errorMsg);
                }
            })
        }
        else{
            totalCost[index].innerHTML='$';
            totalCost[index].innerHTML+=Number(parseFloat(listPrice[index].attributes['value'].nodeValue)*newQuantity).toFixed(2);
            totalCost[index].attributes['value'].nodeValue=Number(parseFloat(listPrice[index].attributes['value'].nodeValue)*newQuantity).toFixed(2);

            var innerHTML   =' Sub Total: $',
                price       =0;
            for(var i=0;i<totalCost.length;i++){
                price=parseFloat(price)+parseFloat(totalCost[i].attributes['value'].nodeValue);
            }
            price=Number(price).toFixed(2);
            innerHTML+=price;
            innerHTML+='<input type="submit" value="刷新购物车">';
            subTotal.html(innerHTML);
            $.ajax({
                type    : 'GET' ,
                url     : 'http://localhost:8080/Jpetstore/subQuantity?workingItemId='+quantity[index].name,
                success : function(){
                            console.log('删除成功')
                           },
                error   : function(errorMsg){
                    console.log(errorMsg);
                }
            })
        }
    });

    //选做任务2
    //思路:当用户点击"确认订单"按钮的时候,使后续需要完成的jsp界面直接在这个界面显示出来
    $('#OKBtn').on('click',function (){
        //这里进行ajax请求,判断用户是否登陆
        $.ajax({
            type     : 'POST',
            url      : 'http://localhost:8080/Jpetstore/newOrderForm',
            dataType : 'text',
            success  :function (data){
                // data="1";//text
                if(data==="0"){//用户未登录,需要进行跳转
                    window.location.href ='http://localhost:8080/Jpetstore/loginForm';
                }else{//可以进行下一步
                    $('#background').show();
                    $('.newOrder').show();
                    var $cover=$('#cover');
                    $cover.css('display','block'); //显示遮罩层
                    $cover.css('height',window.screen.availHeight+'px');
                }
            }
        });
    });
    $('#checkShipping').on('submit',function (e){
        e.preventDefault();
        $.ajax({
            type     : 'POST',
            url      : 'http://localhost:8080/Jpetstore/checkShipping',
            data     :  decodeURIComponent($('#checkShipping').serialize(),true),
            dataType : 'text',
            success  :function (data){
                $('.newOrder').hide();
                if(data==="0"){//转到ShippingForm.jsp
                    $('.shippingForm').show();
                }else{//转到confirmOrder.jsp
                    $('.confirmOrder').show();
                    $('#background').css('width','500px');
                    $('#background').css('left','32%');
                }
            }
        });
    });
    $('#confirmOrderForm').on('submit',function (e){
        e.preventDefault();
        $.ajax({
            type     : 'POST',
            url      : 'http://localhost:8080/Jpetstore/confirmOrderForm',
            data     :  decodeURIComponent($('#confirmOrderForm').serialize(),true),
            dataType : 'text',
            success  :function (data){
                $('.shippingForm').hide();
                $('.confirmOrder').show();
                $('#background').css('width','500px');
                $('#background').css('left','32%');
            }
        });
    });
});