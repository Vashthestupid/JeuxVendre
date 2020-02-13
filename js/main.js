$(document).ready(function(){

       //Utilisation des éléments de la navbar

       $('.navbar-toggler').click(function(){
              $(this).toggleClass('open');
              $('#navbarNavDropdown').slideToggle(500);
       });
      
       $('.dropdown-toggle').click(function(){
              $('.dropdown-menu').toggle();
       });

       //Disparition et réapparition du bouton toggle2 au format mobile

       $('#toggle2').click(function(){

              $(this).toggleClass('open')
              $('#menu').slideToggle();
              $('#toggle2').css('visibility', 'hidden');
       });
       $('#toggle').click(function(){
              
              $(this).toggleClass('open')
              $('#menu').slideToggle();
              $('#toggle2').css('visibility', 'visible');
       });

    
       // Changement des thèmes

       $('#playstation').click(function(){
              $('body').css('background', '#093d91');
              $('#menu').css('background', '#2c75ff');
              $('h2').css('color', '#fff');
              $('.marque').css('color', '#000');
              $('.titre').css('color', 'white');
              $('.barre').css('color', 'white');
              $('.formulaire').css('background-color', '#000');
              $('label').css('color', '#fff');
              $('input').css('color', '#fff');
              $('.valid').replaceWith("<button class='btnPs' type='submit'>A</button>");
              $('.reset').replaceWith("<button class=''btnXbox' type='reset'>B</button>");
              $('.btnPs').css(
                     'background-color', '#8bc24a'
                     );
             
              
       });

       $('#xbox').click(function(){
              $('body').css('background', '#44bd32');
              $('#menu').css('background', '#2f3640');
              $('h2').css('color', '#fff');
              $('.marque').css('color', '#1a7b10')
              $('.titre').css('color', 'black')
       });


       $('#nintendo').click(function(){
              $('body').css('background', '#fefee2');
              $('#menu').css('background', '#ee5253');
              $('h2').css('color', '#000');
              $('.marque').css('color', '#000');
              $('.titre').css('color', 'black');
       });
       
});