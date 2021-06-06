$(document).ready(function(){

    $('.s1').click(function(){
        var p1 = $(this);
        if(p1.attr('data-clic') == undefined){
            p1.attr('data-clic', 1);
        }
        compteur = p1.attr('data-clic');
        p1.attr('data-clic', (parseInt(compteur) + 1));
        if (compteur=="1"){
            p1.html('ˇ')
        }
        else if (compteur=="2"){
            p1.html(' ́')
        }
        else if (compteur=="3"){
            p1.html('`')
        }
        else if (compteur=="4"){
            p1.html('ˆ')
            p1.attr('data-clic', 1);
        }
    })

    
// // ITALIQUE
// $('#section-section5 .italique').click(function(){
//     $('.chiffres p').css('font-family','superior-title-black-italic')} 
// )


// // NORMALE
// $('#section-section5 .normale').click(function(){
//     $('.chiffres p').css('font-family','superior-title-black')
//     $('.chiffres .ligne1 p').css('font-feature-settings','inherit')}    
// )

// // PROPORTIONNEL
// $('#section-section5 .proportionnel').click(function(){
//     $('.chiffres p').css('font-family','superior-title-black')
//     $('.chiffres .ligne1 p').css('font-feature-settings','"lnum"')}    
// )


$('#section-section5 #italique2').click(function(){

    if($('.chiffres p').hasClass('italicActive')){
        $('.chiffres p').removeClass('italicActive');
        $(this).removeClass('boutonActive')
    }else{
        $(this).addClass('boutonActive')
        $('.chiffres p').removeClass('normaleActive');
        $('.chiffres p').addClass('italicActive');
        $('#normale2').removeClass('boutonActive')
    }
})

$('#section-section5 #normale2').click(function(){

    if($('.chiffres p').hasClass('normaleActive')){

        $('.chiffres p').removeClass('normaleActive');
        $(this).removeClass('boutonActive')
    }else{
        $(this).addClass('boutonActive')
        $('.chiffres p').removeClass('italicActive');
        $('.chiffres p').addClass('normaleActive');
        $('#italique2').removeClass('boutonActive')
    }
})

$('#section-section5 #oldstyle').click(function(){

    if($('.chiffres .ligne1 p').hasClass('oldstyleActive')){
        $('.chiffres .ligne1 p').removeClass('oldstyleActive');
        $(this).removeClass('boutonActive')
    }else{
        $(this).addClass('boutonActive')
        $('.chiffres .ligne1 p').removeClass('proportionnelActive');
        $('.chiffres .ligne1 p').addClass('oldstyleActive');
        $('#proportionnel').removeClass('boutonActive')
    }
})

$('#section-section5 #proportionnel').click(function(){

    if($('.chiffres .ligne1 p').hasClass('proportionnelActive')){

        $('.chiffres .ligne1 p').removeClass('proportionnelActive');
        $(this).removeClass('boutonActive')
    }else{
        $(this).addClass('boutonActive')
        $('.chiffres .ligne1 p').removeClass('oldstyleActive');
        $('.chiffres .ligne1 p').addClass('proportionnelActive');
        $('#oldstyle').removeClass('boutonActive')
    }
})


});