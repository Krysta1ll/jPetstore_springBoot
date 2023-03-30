$(function (){
    var autoProductList=$('#autoProductList');
    var AutoSearchComplete=$('#AutoSearchComplete');
    $('#keyword').on('keyup',function (){
        var keyword= $(this).val();
        if(keyword!==''&&keyword!==null&&keyword.length!=0){
                $.ajax({
                    type    : 'GET' ,
                    url     : 'http://localhost:8080/Jpetstore/productAutoComplete?keyword='+keyword,
                    success : function(data){
                                   var productListHTML= '';
                                   for( var i=0;i<data.length;i++){
                                       productListHTML+='<li class=\"productAutoItem\" data-productId=\"';
                                       productListHTML+=data[i].productId;
                                       productListHTML+='\">';
                                       productListHTML+=data[i].categoryId;
                                       productListHTML+=': ';
                                       productListHTML+=data[i].name;

                                       productListHTML+='</li>';
                                   }
                                   autoProductList.html(productListHTML);
                                   AutoSearchComplete.show();
                               },
                    error   : function(errorMsg){
                        console.log(errorMsg);
                    }
                })
        }else{
            AutoSearchComplete.hide();
        }
    });
    $(document).on('click','.productAutoItem',function(){
        var productId =$(this).data('productid');
        AutoSearchComplete.hide();
        $('#keyword').val('');
        window.location.href ='http://localhost:8080/Jpetstore/productForm?productId='+productId;
    });

    AutoSearchComplete.on('mouseleave', function(){
        $(this).hide();

    })

});
