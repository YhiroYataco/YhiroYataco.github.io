$(document).ready(function(){
    $('.category_list .category_item[category="all"]').addClass('cateoria_active');
    $('.category_item').click(function(){
        var catProduct = $(this).attr('category');
        console.log(catProduct);

        $('.category_item').removeClass('categoria_active');
        $(this).addClass('categoria_active');

        $('.product-item').hide();


        $('.product-item[category="'+catProduct+'"]').show();
    });

    $('.category_item[category="all"]').click(function(){
        $('.product-item').show()
    })

});