$(document).ready(
    function(){
        $('.menu_button').hover(function(){
            var bg_color = $('.menu_button div').attr('style')
            console.log(bg_color)

            if( (bg_color == "background-color: black;")){
                $('.menu_button div').toggleClass('menu_button_hover-b');
            }

            else{
                $('.menu_button div').toggleClass('menu_button_hover-w')
            }
           
        });


        $('.menu_button').click(function(){
            console.log('ok')
            $(header).toggleClass('header_close');
            $(this).toggleClass('menu_button_active');
            $('.menu_button div').toggleClass('menu_button_active_div');

        });


        $('.download_button').hover(function(){
            $(this).toggleClass('download_button_hover');
            $('.dwld_text').toggleClass('dwld_text_hover')

        });
    }
)