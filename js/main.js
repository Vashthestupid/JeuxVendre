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

    
       // Changement au niveau des thèmes

/*Création du thème Playstation*/

       $('#playstation').click(function(){
              $('body').css('background', '#093d91');
              $('#menu').css('background', '#2c75ff');
              $('h2').css('color', '#fff');
              $('.marque').css('color', '#000');
              $('.titre').css('color', 'white');
              $('.barre').css('color', 'white');
              $('label').css('color', '#fff');
              $('input').css('color', '#000');
              $('.valid').replaceWith('<button class="btnPsX" type="submit" ">X</button>');
              $('.reset').replaceWith('<button class="btnPsO" type="reset">O</button>');
              $('.btnXboxA').replaceWith('<button type="submit" class="btnPsX">X</button>');
              $('.btnXboxB').replaceWith('<button class="btnPsO" type="reset">O</button>');
              $('.btnPsX').css('color', '#80a5d1',);
              $('.btnPsX').css('font-size','51px');
              $('.btnPsO').css('color', '#d9a0a7');
              $('.btnPsO').css('font-size', '51px');
       });

/*Création du thème Xbox*/

       $('#xbox').click(function(){
              $('body').css('background', '#44bd32');
              $('#menu').css('background', '#2f3640');
              $('h2').css('color', '#fff');
              $('.marque').css('color', '#1a7b10');
              $('.titre').css('color', 'black');
              $('.valid').replaceWith("<button class='btnXboxA' type='submit'>A</button>")
              $('.reset').replaceWith("<button class='btnXboxB' type='reset'>B</button>")
              $('.btnPsX').replaceWith("<button class='btnXboxA' type='submit'>A</button>")
              $('.btnPsO').replaceWith("<button class='btnXboxB' type='reset'>B</button>")
              $('.btnXboxA').css('color','#dceec4');
              $('.btnXboxA').css('background-color', '#8bc24a');
              $('.btnXboxA').css('box-shadow','0px 9px #689f37');
              $('.btnXboxA').mouseenter(function(){
                     $(this).css(
                            'box-shadow','0px 6px #689f37',
                            'transform','translateY(3px)'
                     );
              });
              $('.btnXboxA').mouseleave(function(){
                     $(this).css(
                            'box-shadow','0px 9px #689f37',
                            'transform','none'
                     );
              });
              $('.btnXboxA').mousedown(function(){
                     $(this).css(
                            'box-shadow','0px 3px #689f37',
                            'transform','translateY(7px)'
                     );
              });
              $('.btnXboxA').mouseup(function(){
                     $(this).css(
                            'box-shadow','0px 6px #689f37',
                            'transform','translateY(3px)'
                     );
              });
              $('.btnXboxB').css('color', '#ffc9b4');
              $('.btnXboxB').css('background-color', '#fb5722');
              $('.btnXboxB').css('box-shadow','0px 9px #dd2c00');
              $('.btnXboxB').mouseenter(function(){
                     $(this).css(
                            'box-shadow','0px 6px #dd2c00',
                            'transform','translateY(3px)'
                     );
              });
              $('.btnXboxB').mouseleave(function(){
                     $(this).css(
                            'box-shadow','0px 9px #dd2c00',
                            'transform','none'
                     );
              });
              $('.btnXboxB').mousedown(function(){
                     $(this).css(
                            'box-shadow','0px 3px #dd2c00',
                            'transform','translateY(7px)'
                     );
              });
              $('.btnXboxB').mouseup(function(){
                     $(this).css(
                            'box-shadow','0px 6px #dd2c00',
                            'transform','translateY(3px)'
                     );
              });
       });

/*Création du thème Nintendo*/

       $('#nintendo').click(function(){
              $('body').css('background', '#fefee2');
              $('#menu').css('background', '#ee5253');
              $('h2').css('color', '#000');
              $('.marque').css('color', '#000');
              $('.titre').css('color', 'black');
              $('.btnXboxA').replaceWith('<button type="submit" class="valid">A</button>');
              $('.btnXboxB').replaceWith('<button class="reset" type="reset">B</button>');
              $('.btnPsX').replaceWith("<button class='valid' type='submit'>A</button>")
              $('.btnPsO').replaceWith("<button class='reset' type='reset'>B</button>")
       });
       
});