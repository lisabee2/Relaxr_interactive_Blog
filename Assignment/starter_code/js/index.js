$( document ).ready( 
 function() {
     $('article.post .readmore').click(function(){
         $('article.post .hide').slideDown();
         $(this).slideUp();
     }
         );
    $('article.post .readless').click(function(){
       $('article.post .hide').slideUp();
       $('article.post .readmore').slideDown();
     }
        );
     
    $('aside .learnmore').click(function(){
        $('aside .hide').slideDown();
        $(this).slideUp();
     }
         );
    $('aside .learnless').click(function(){
       $('aside .hide').slideUp();
       $('aside .learnmore').slideDown();
     }
         );
 }
 )