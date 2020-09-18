$(document).ready( function(){
    //test
    // $('main').hide(3000).delay(1000).show(1000);

    // mouse event
    $('.portret__picture').mouseenter(function(){
        $(this).fadeTo(600, .01);
    }).mouseleave(function(){
        $(this).fadeTo(600, 1);
    }).click(function(){
        $(this).next().toggle(700);
    });

    //footer

    $('footer').click(function(){
        $(this).animate({
            top: '-=20px',
            opacity: '-=.2'
        }, 900)
    }).dblclick(function(){
        $(this).animate({
            top: '0',
            opacity: '1'
        }, 900)
    });
});
