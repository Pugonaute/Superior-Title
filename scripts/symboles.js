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

    $('.s2').click(function(){
        var p1 = $(this);
        if(p1.attr('data-clic') == undefined){
            p1.attr('data-clic', 1);
        }
        compteur = p1.attr('data-clic');
        p1.attr('data-clic', (parseInt(compteur) + 1));
        if (compteur=="1"){
            p1.html(' ̄')
        }
        else if (compteur=="2"){
            p1.html(' ̃')
        }
        else if (compteur=="3"){
            p1.html(' ̈')
        }
        else if (compteur=="4"){
            p1.html(' ̇')
        }
        else if (compteur=="5"){
            p1.html(' ̊')
            p1.attr('data-clic', 1);
        }
    })

    $('.s3').click(function(){
        var p1 = $(this);
        if(p1.attr('data-clic') == undefined){
            p1.attr('data-clic', 1);
        }
        compteur = p1.attr('data-clic');
        p1.attr('data-clic', (parseInt(compteur) + 1));
        if (compteur=="1"){
            p1.html('»')
        }
        else if (compteur=="2"){
            p1.html('‹')
        }
        else if (compteur=="3"){
            p1.html('›')
        }
        else if (compteur=="4"){
            p1.html('«')
            p1.attr('data-clic', 1);
        }
    })

    $('.s4').click(function(){
        var p1 = $(this);
        if(p1.attr('data-clic') == undefined){
            p1.attr('data-clic', 1);
        }
        compteur = p1.attr('data-clic');
        p1.attr('data-clic', (parseInt(compteur) + 1));
        if (compteur=="1"){
            p1.html('¿')
        }
        else if (compteur=="2"){
            p1.html('?')
            p1.attr('data-clic', 1);
        }
    })

    $('.s5').click(function(){
        var p1 = $(this);
        if(p1.attr('data-clic') == undefined){
            p1.attr('data-clic', 1);
        }
        compteur = p1.attr('data-clic');
        p1.attr('data-clic', (parseInt(compteur) + 1));
        if (compteur=="1"){
            p1.html('!')
        }
        else if (compteur=="2"){
            p1.html('¡')
            p1.attr('data-clic', 1);
        }
    })
    
    $('.s6').click(function(){
        var p1 = $(this);
        if(p1.attr('data-clic') == undefined){
            p1.attr('data-clic', 1);
        }
        compteur = p1.attr('data-clic');
        p1.attr('data-clic', (parseInt(compteur) + 1));
        if (compteur=="1"){
            p1.html(', ')
        }
        else if (compteur=="2"){
            p1.html(':')
        }
        else if (compteur=="3"){
            p1.html(';')
        }
        else if (compteur=="4"){
            p1.html('.')
            p1.attr('data-clic', 1);
        }
    })

    $('.s7').click(function(){
        var p1 = $(this);
        if(p1.attr('data-clic') == undefined){
            p1.attr('data-clic', 1);
        }
        compteur = p1.attr('data-clic');
        p1.attr('data-clic', (parseInt(compteur) + 1));
        if (compteur=="1"){
            p1.html('*')
        }
        else if (compteur=="2"){
            p1.html('†')
        }
        else if (compteur=="3"){
            p1.html('‡')
            p1.attr('data-clic', 1);
        }
    })
    
    $('.s8').click(function(){
        var p1 = $(this);
        if(p1.attr('data-clic') == undefined){
            p1.attr('data-clic', 1);
        }
        compteur = p1.attr('data-clic');
        p1.attr('data-clic', (parseInt(compteur) + 1));
        if (compteur=="1"){
            p1.html('„')
        }
        else if (compteur=="2"){
            p1.html(',')
            p1.attr('data-clic', 1);
        }
    })

    $('.s9').click(function(){
        var p1 = $(this);
        if(p1.attr('data-clic') == undefined){
            p1.attr('data-clic', 1);
        }
        compteur = p1.attr('data-clic');
        p1.attr('data-clic', (parseInt(compteur) + 1));
        if (compteur=="1"){
            p1.html('+')
        }
        else if (compteur=="2"){
            p1.html('−')
        }
        else if (compteur=="3"){
            p1.html('÷')
        }
        else if (compteur=="4"){
            p1.html('×')
        }
        else if (compteur=="5"){
            p1.html('⁄')
            p1.attr('data-clic', 1);
        }
    })

    $('.s10').click(function(){
        var p1 = $(this);
        if(p1.attr('data-clic') == undefined){
            p1.attr('data-clic', 1);
        }
        compteur = p1.attr('data-clic');
        p1.attr('data-clic', (parseInt(compteur) + 1));
        if (compteur=="1"){
            p1.html('=')
        }
        else if (compteur=="2"){
            p1.html('≈')
        }
        else if (compteur=="3"){
            p1.html('≠')
        }
        else if (compteur=="4"){
            p1.html('±')
            p1.attr('data-clic', 1);
        }
    })

    $('.s11').click(function(){
        var p1 = $(this);
        if(p1.attr('data-clic') == undefined){
            p1.attr('data-clic', 1);
        }
        compteur = p1.attr('data-clic');
        p1.attr('data-clic', (parseInt(compteur) + 1));
        if (compteur=="1"){
            p1.html('≥')
        }
        else if (compteur=="2"){
            p1.html('≤')
            p1.attr('data-clic', 1);
        }
    })

    $('.s12').click(function(){
        var p1 = $(this);
        if(p1.attr('data-clic') == undefined){
            p1.attr('data-clic', 1);
        }
        compteur = p1.attr('data-clic');
        p1.attr('data-clic', (parseInt(compteur) + 1));
        if (compteur=="1"){
            p1.html('‰')
        }
        else if (compteur=="2"){
            p1.html('%')
            p1.attr('data-clic', 1);
        }
    })

    $('.s13').click(function(){
        var p1 = $(this);
        if(p1.attr('data-clic') == undefined){
            p1.attr('data-clic', 1);
        }
        compteur = p1.attr('data-clic');
        p1.attr('data-clic', (parseInt(compteur) + 1));
        if (compteur=="1"){
            p1.html('�')
        }
        else if (compteur=="2"){
            p1.html('|')
        }
        else if (compteur=="3"){
            p1.html('/')
            p1.attr('data-clic', 1);
        }
    })

    $('.s14').click(function(){
        var p1 = $(this);
        if(p1.attr('data-clic') == undefined){
            p1.attr('data-clic', 1);
        }
        compteur = p1.attr('data-clic');
        p1.attr('data-clic', (parseInt(compteur) + 1));
        if (compteur=="1"){
            p1.html(')')
        }
        else if (compteur=="2"){
            p1.html('(')
            p1.attr('data-clic', 1);
        }
    })

    $('.s15').click(function(){
        var p1 = $(this);
        if(p1.attr('data-clic') == undefined){
            p1.attr('data-clic', 1);
        }
        compteur = p1.attr('data-clic');
        p1.attr('data-clic', (parseInt(compteur) + 1));
        if (compteur=="1"){
            p1.html(']')
        }
        else if (compteur=="2"){
            p1.html('[')
            p1.attr('data-clic', 1);
        }
    })

    $('.s16').click(function(){
        var p1 = $(this);
        if(p1.attr('data-clic') == undefined){
            p1.attr('data-clic', 1);
        }
        compteur = p1.attr('data-clic');
        p1.attr('data-clic', (parseInt(compteur) + 1));
        if (compteur=="1"){
            p1.html('{')
        }
        else if (compteur=="2"){
            p1.html('}')
            p1.attr('data-clic', 1);
        }
    })

    $('.s17').click(function(){
        var p1 = $(this);
        if(p1.attr('data-clic') == undefined){
            p1.attr('data-clic', 1);
        }
        compteur = p1.attr('data-clic');
        p1.attr('data-clic', (parseInt(compteur) + 1));
        if (compteur=="1"){
            p1.html('←')
        }
        else if (compteur=="2"){
            p1.html('↓')
        }
        else if (compteur=="3"){
            p1.html('↘')
        }
        else if (compteur=="4"){
            p1.html('↖')
            p1.attr('data-clic', 1);
        }
    })

    $('.s18').click(function(){
        var p1 = $(this);
        if(p1.attr('data-clic') == undefined){
            p1.attr('data-clic', 1);
        }
        compteur = p1.attr('data-clic');
        p1.attr('data-clic', (parseInt(compteur) + 1));
        if (compteur=="1"){
            p1.html('↑')
        }
        else if (compteur=="2"){
            p1.html('→')
        }
        else if (compteur=="3"){
            p1.html('↗')
        }
        else if (compteur=="4"){
            p1.html('↙')
            p1.attr('data-clic', 1);
        }
    })

    $('.s19').click(function(){
        var p1 = $(this);
        if(p1.attr('data-clic') == undefined){
            p1.attr('data-clic', 1);
        }
        compteur = p1.attr('data-clic');
        p1.attr('data-clic', (parseInt(compteur) + 1));
        if (compteur=="1"){
            p1.html('□')
        }
        else if (compteur=="2"){
            p1.html('▪')
        }
        else if (compteur=="3"){
            p1.html('▫')
        }
        else if (compteur=="4"){
            p1.html('○')
        }
        else if (compteur=="5"){
            p1.html('●')
        }
        else if (compteur=="6"){
            p1.html('■')
            p1.attr('data-clic', 1);
        }
    })

    $('.s20').click(function(){
        var p1 = $(this);
        if(p1.attr('data-clic') == undefined){
            p1.attr('data-clic', 1);
        }
        compteur = p1.attr('data-clic');
        p1.attr('data-clic', (parseInt(compteur) + 1));
        if (compteur=="1"){
            p1.html('▼')
        }
        else if (compteur=="2"){
            p1.html('◄')
        }
        else if (compteur=="3"){
            p1.html('◢')
        }
        else if (compteur=="4"){
            p1.html('◤')
        }
        else if (compteur=="5"){
            p1.html('◣')
        }
        else if (compteur=="6"){
            p1.html('►')
        }
        else if (compteur=="7"){
            p1.html('▲')
            p1.attr('data-clic', 1);
        }
    })

//     // ITALIQUE
// $('#section-section4 .italique').click(function(){
//     $('.symboles p').css('font-family','superior-title-black-italic')}
// )

// $('#section-section4 .normale').click(function(){
//     $('.symboles p').css('font-family','superior-title-black')}
//     // ,
//     // function(){
//     // $('.caracteres p').css('font-family','superior-title-black')}
// )

$('#section-section4 #italique1').click(function(){

    if($('.symboles p').hasClass('italicActive')){
        $('.symboles p').removeClass('italicActive');
        $(this).removeClass('boutonActive')
    }else{
        $(this).addClass('boutonActive')
        $('.symboles p').removeClass('normaleActive');
        $('.symboles p').addClass('italicActive');
        $('#normale1').removeClass('boutonActive')
    }
})

$('#section-section4 #normale1').click(function(){

    if($('.symboles p').hasClass('normaleActive')){

        $('.symboles p').removeClass('normaleActive');
        $(this).removeClass('boutonActive')
    }else{
        $(this).addClass('boutonActive')
        $('.symboles p').removeClass('italicActive');
        $('.symboles p').addClass('normaleActive');
        $('#italique1').removeClass('boutonActive')
    }
})

});