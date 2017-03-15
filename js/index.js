/**
 * Created by hasee on 2017/3/15.
 */
$(function(){
    //更多 效果
    $("#mor").click(function(){
        $("#thirdrow").toggle("fast");
    })

    //渲染分类模块
    //$.ajax({
    //    type:'get',
    //    url:'http://mmb.ittun.com/api/getindexmenu',
    //    data:{},
    //    dataType:'jsonp',
    //    success:function(data){
    //        var html=template('kind_list',data)
    //        $('#list_ul').html(html);
    //        console.log(data)
    //    }
    //})









    //渲染商品列表模块
    $.ajax({
        type:"GET",
        url: "http://mmb.ittun.com/api/getmoneyctrl",
        dataType : "jsonp",
        success:function(data){
            var html=template('product-list',data)
            $('#product-ul').html(html);
            console.log(data);
        }
    })






})





