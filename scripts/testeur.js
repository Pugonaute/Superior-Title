$(document).ready(function(){


    setTimeout(
        function() 
        {
            $('section article').css('background-color','rgba(0, 0, 0, 0.4)')
        }, 500);
    

    $('#liste').click(function(){

        let value = $('#liste').val();
      
        console.log(value);

        if(value == 0){
            $('.font-exemple p').css('font-family','superior-title-light');
        }

        if(value == 1){
            $('.font-exemple p').css('font-family','superior-title-light-italic');
        }

        if(value == 2){
            $('.font-exemple p').css('font-family','superior-title-regular');
        }

        if(value == 3){
            $('.font-exemple p').css('font-family','superior-title-regular-italic');
        }

        if(value == 4){
            $('.font-exemple p').css('font-family','superior-title-medium');
        }

        if(value == 5){
            $('.font-exemple p').css('font-family','superior-title-medium-italic');
        }

        if(value == 6){
            $('.font-exemple p').css('font-family','superior-title-bold');
        }

        if(value == 7){
            $('.font-exemple p').css('font-family','superior-title-bold-italic');
        }

        if(value == 8){
            $('.font-exemple p').css('font-family','superior-title-black');
        }

        if(value == 9){
            $('.font-exemple p').css('font-family','superior-title-black-italic');
        }
    });

    $('.formulaire p').on('input', function() {
        
        var texte = $('.formulaire p').html();

        $('.font-exemple p').html(texte);

        if((texte == '')){
            ($('.formulaire p').html('Ecrivez ici !'));
            ($('.font-exemple p').html('​Le véritable voyage de découverte ne consiste pas à chercher de nouveaux paysages, mais à avoir de nouveaux yeux.'));
        };
    });



    var slider = $('#myRange').attr('value');
    
    $("#demo").html(slider);


    $('#myRange').on('input', function(){
        $('#demo').html(this.value);

        var output = $('#size').text();

        $('.font-exemple p').css('font-size', output);
    })


    



}); 