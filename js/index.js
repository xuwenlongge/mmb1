/**
 * Created by hasee on 2017/3/15.
 */
$(function(){
    //���� Ч��
    $("#mor").click(function(){
        $("#thirdrow").toggle("fast");
    })

    //��Ⱦ����ģ��
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









    //��Ⱦ��Ʒ�б�ģ��
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





