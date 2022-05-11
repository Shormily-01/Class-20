$(function(){
    $('#hideBtn').on('click' , function(){
        $('#trial').hide(1300)
    })

    $('#showBtn').on('click' , function(){
        $('#trial').show(1300);
    })

    $('#both').on('mouseenter' , function(){
        $('#trial').hide(1300);
    })

    $('#both').on('mouseleave' , function(){
        $('#trial').show(1300);
    })

    $('#fadeOut').on('click' , function(){
        $('img').fadeOut(500, function(){
            alert('Faded Out')
        })
    })

    $('#fadeIn').on('click' , function(){
        $('img').fadeIn(500);
    })

    $('#fadeTo').on('click' , function(){
        $('img').fadeTo(1000 , 0.4).slideUp(1000).show(2000);
    })


    $('#animate').on('click' , function(){
        $('img').animate({
            width:'700px',
            height:'700px',
        },2000);
    })

    $('#stop').on('click' , function(){
        $('img').stop();
    })

})