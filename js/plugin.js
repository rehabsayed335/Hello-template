/* global $,document,window*/
$(document).ready(function()
 {
    /* start code of hover on H */
    $('header .start h1').hover(
      function()
      {
        $(this).css(
        {
            cursor: 'pointer',
            backgroundColor: '#ea178c',
            color: '#ffffff'
        });
      },
        function()
        {
            $(this).css(
            {
                backgroundColor: '#ffffff',
                color: '#ea178c'
            });
        });
    /* end code of hover on H */
    
    
    // window scroll
    $(window).scroll(function()
    {
        
        $('header div').each(function()
        {
            if($(window).scrollTop() >= $(this).offset().top)
                {
                    $('header .start h1').css(
                    {
                        backgroundColor: '#ffffff',
                        color: '#000000'
                    })
                }            
        })
        if($(window).scrollTop() <= $('.part1').offset().top)
            {
                $('header .start h1').css('color','#ea178c');
            }
        
    });
    
    
    /* start link code scroll */
    $('header .start a').click(function()
    {
        $('html,body').animate(
        {
            scrollTop: $('.part1').offset().top
            
        })
        
    });
    /* end link code scroll */
    $.scrollIt();

});
       
    
    
    
    
