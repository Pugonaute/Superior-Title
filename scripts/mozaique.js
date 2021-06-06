$(document).ready(function(){

    $('.gal_image').click(function(){
        
        var image = $(this).find('img').attr('src');
        var alt = $(this).find('img').attr('alt');

        console.log(alt)

        $('.modale').addClass('modaleVisible');

        if((image == "images/Gal-Travel.jpg")){
            $('.modale').find('img').attr('src', 'images/Gal-Travel-F.jpg').attr('alt', alt);
        };

        if((image == "images/Gal-Travel2.jpg")){
            $('.modale').find('img').attr('src', 'images/Gal-Travel2-F.jpg').attr('alt', alt);
        };

        if((image == "images/Gal-Travel3.jpg")){
            $('.modale').find('img').attr('src', 'images/Gal-Travel3-F.jpg').attr('alt', alt);
        };

        if((image == "images/Gal-3sixteen.jpg")){
            $('.modale').find('img').attr('src', 'images/Gal-3sixteen-F.jpg').attr('alt', alt);
        };

        if((image == "images/Gal-3sixteen2.jpg")){
            $('.modale').find('img').attr('src', 'images/Gal-3sixteen2-F.jpg').attr('alt', alt);
        };

        if((image == "images/Gal-3sixteen3.jpg")){
            $('.modale').find('img').attr('src', 'images/Gal-3sixteen3-F.jpg').attr('alt', alt);
        };
    });

    $('.modale').click(function(){
        $('.modale').removeClass('modaleVisible');
        $('.modale').find('img').attr('src', '').attr('alt','')
    })
});