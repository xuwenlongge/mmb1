/**
 * Created by hasee on 2017/3/16.
 */


    $(document).ready(function(){
        $.ajax({
            type:'get',
            url:'http://192.168.15.106:3000/api/getcategorytitle',
            data:{},
            dataType:'jsonp',
            success:function(data){
                var html=template('brief-item',data);
                $('.brief-in').html(html);
                console.log(data);

                $('.brief-item').click(function(){
                    $(this).children('ul').toggleClass('hide').attr('id','ul');
                    $(this).siblings().children('ul').removeAttr('id');
                    $(this).children('a').toggleClass('arrow');
                    $(this).siblings('.brief-item').children('ul')
                        .addClass('hide');
                    $(this).siblings('.brief-item').children('a')
                        .addClass('arrow');
                    var id=$(this).children('a').attr("titleid");
                    console.log(id)

                    $.ajax({
                        type:'get',
                        url:'http://192.168.15.106:3000/api/getcategory',
                        data:{titleid:id},
                        dataType:'jsonp',
                        success:function(data){
                            var html=template('li',data);
                            $('#ul').html(html);
                            console.log(data)
                        }
                    })
                })
            }
        })
    })















