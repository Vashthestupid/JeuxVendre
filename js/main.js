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

/*Bouton de base*/
       $('.valid').css('background-color', '#555555');
       $('.valid').css('box-shadow', '0px 9px #252525');
       $('.valid').mouseenter(function(){
              $(this).css('box-shadow','0px 6px #252525');
              $(this).css('transform', 'translateY(3px)');
       });
       $('.valid').mouseleave(function(){
              $(this).css('box-shadow','0px 9px #252525');
              $(this).css('transform','none');
       });
       $('.valid').mousedown(function(){
              $(this).css('box-shadow', '0px 3px #252525')
              $(this).css('transform','translateY(7px)');
       });
       $('.valid').mouseup(function(){
              $(this).css('box-shadow','0px 6px #252525');
              $(this).css('transform','translateY(3px)');
       });
       $('.reset').css('background-color', '#555555');
       $('.reset').css('box-shadow', '0px 9px #252525');
       $('.reset').mouseenter(function(){
              $(this).css('box-shadow','0px 6px #252525');
              $(this).css('transform','translateY(3px)');
       });
       $('.reset').mouseleave(function(){
              $(this).css('box-shadow','0px 9px #252525');
              $(this).css('transform', 'none');
       });
       $('.reset').mousedown(function(){
              $(this).css('box-shadow','0px 3px #252525');
              $(this).css('transform', 'translateY(7px)');
       });
       $('.reset').mouseup(function(){
              $(this).css('box-shadow','0px 6px #252525');
              $(this).css('transform','translateY(3px)');
       });

       if($(window).width()<1025){
              $('.valid').css('background-color','#252525');
              $('.reset').css('background-color','#252525');
              $('.valid').css('box-shadow','none');
              $('.reset').css('box-shadow','none');
              $('.valid').css('transform', 'none');
              $('.reset').css('transform', 'none');
              $('.valid').off('mouseenter');
              $('.valid').off('mouseleave');
              $('.valid').off('mousedown');
              $('.valid').off('mouseup');
              $('.reset').off('mouseenter');
              $('.reset').off('mouseleave');
              $('.reset').off('mousedown');
              $('.reset').off('mouseup');
       }

/*Création du thème Playstation*/

       $('#playstation').click(function(){
              $('body').css('background', '#093d91');
              $('#menu').css('background', '#2c75ff');
              $('h2').css('color', '#fff');
              $('.marque').css('color', '#000');
              $('.titre').css('color', 'white');
              $('.barre').css('color', 'white');
              $('.formulaire').css('background-color', '#2b2c31');
              $('label').css('color', '#fff');
              $('input').css('color', '#000');
              $('.valid').replaceWith('<input type="image" id="btnPsX" src="../images/x_play.png">');
              $('.reset').replaceWith('<input type="image" id="btnPsO" src="../images/o_play2.png">');
              $('#btnXboxA').replaceWith('<input type="image" id="btnPsX" src="../images/x_play.png">');
              $('#btnXboxB').replaceWith('<input type="image" id="btnPsO" src="../images/o_play2.png">');
              $('#btnPsX').css('background-color', 'black');
              $('#btnPsX').css('box-shadow','0px 9px #474747');
              $('#btnPsO').css('background-color', 'black');
              $('#btnPsO').css('box-shadow','0px 9px #474747');
              $('#btnPsO').click(function(){
                     $('form').trigger('reset');
              });
              $('#btnPsX').mouseenter(function(){
                     $(this).css('box-shadow', '0px 6px #474747');
                     $(this).css('transform', 'translateY(3px)');
              });
              $('#btnPsX').mouseleave(function(){
                     $(this).css('box-shadow', '0px 9px #474747');
                     $(this).css('transform', 'none');
              });
              $('#btnPsX').mousedown(function(){
                     $(this).css('box-shadow','0px 3px #474747');
                     $(this).css('transform', 'translateY(7px)');
              });
              $('#btnPsX').mouseup(function(){
                     $(this).css('box-shadow', '0px 6px #474747');
                     $(this).css('transform', 'translateY(3px)');
              });
              $('#btnPsO').mouseenter(function(){
                     $(this).css('box-shadow', '0px 6px #474747');
                     $(this).css('transform', 'translateY(3px)');
              });
              $('#btnPsO').mouseleave(function(){
                     $(this).css('box-shadow', '0px 9px #474747');
                     $(this).css('transform', 'none');
              });
              $('#btnPsO').mousedown(function(){
                     $(this).css('box-shadow','0px 3px #474747');
                     $(this).css('transform', 'translateY(7px)');
              });
              $('#btnPs0').mouseup(function(){
                     $(this).css('box-shadow', '0px 6px #474747');
                     $(this).css('transform', 'translateY(3px)');
              });
              if($(window).width()< 1025){
                     $('#btnPsX').css('box-shadow','none');
                     $('#btnPsx').css('transform','none');
                     $('#btnPsX').off('mouseenter');
                     $('#btnPsX').off('mouseleave');
                     $('#btnPsX').off('mousedown');
                     $('#btnPsX').off('mouseup');
                     $('#btnPsO').css('box-shadow','none');
                     $('#btnPsO').css('transform','none');
                     $('#btnPsO').off('mouseenter');
                     $('#btnPsO').off('mouseleave');
                     $('#btnPsO').off('mousedown');
                     $('#btnPsO').off('mouseup');
              }
       });

/*Création du thème Xbox*/

       $('#xbox').click(function(){
              $('body').css('background', '#44bd32');
              $('#menu').css('background', '#2f3640');
              $('.formulaire').css('background-color', '#000');
              $('h2').css('color', '#fff');
              $('.marque').css('color', '#1a7b10');
              $('.titre').css('color', 'black');
              $('.valid').replaceWith('<input type="submit" id="btnXboxA" value="A">');
              $('.reset').replaceWith('<input type="reset" id="btnXboxB" value="B">');
              $('#btnPsX').replaceWith('<input type="submit" id="btnXboxA" value="A">');
              $('#btnPsO').replaceWith('<input type="reset" id="btnXboxB" value="B">');
              $('#btnXboxA').css('background-color', '#8bc24a')
              $('#btnXboxA').css('box-shadow', '0px 9px #67a039');
              $('#btnXboxA').mouseenter(function(){
                     $('#btnXboxA').css('box-shadow','0px 6px #67a039');
                     $('#btnXboxA').css('transform', 'translateY(3px)');
              });
              $('#btnXboxA').mouseleave(function(){
                     $('#btnXboxA').css('box-shadow','0px 9px #67a039');
                     $('#btnXboxA').css('transform','none');
              });
              $('#btnXboxA').mousedown(function(){
                     $('#btnXboxA').css('box-shadow', '0px 3px #67a039');
                     $('#btnXboxA').css('transform','translateY(7px)');
              });
              $('#btnXboxA').mouseup(function(){
                     $('#btnXboxA').css('box-shadow','0px 6px #67a039');
                     $('#btnXboxA').css('transform','translateY(3px)');
              }); 
              $('#btnXboxB').css('background-color', '#ea5541')
              $('#btnXboxB').css('box-shadow', '0px 9px #be240a');
              $('#btnXboxB').mouseenter(function(){
                     $('#btnXboxB').css('box-shadow','0px 6px #be240a');
                     $('#btnXboxB').css('transform', 'translateY(3px)');
              });
              $('#btnXboxB').mouseleave(function(){
                     $('#btnXboxB').css('box-shadow','0px 9px #be240a');
                     $('#btnXboxB').css('transform','none');
              });
              $('#btnXboxB').mousedown(function(){
                     $('#btnXboxB').css('box-shadow', '0px 3px #be240a');
                     $('#btnXboxB').css('transform','translateY(7px');
              });
              $('#btnXboxB').mouseup(function(){
                     $('#btnXboxB').css('box-shadow','0px 6px #be240a');
                     $('#btnXboxB').css('transform','translateY(3px)');
              });
              if($(window).width() < 1025){
                     $('#btnXboxA').css('box-shadow', 'none');
                     $('#btnXboxA').css('transform', 'none');
                     $('#btnXboxA').off("mouseenter");
                     $('#btnXboxA').off("mouseleave");
                     $('#btnXboxA').off("mousedown");
                     $('#btnXboxA').off("mouseup");
                     $('#btnXboxB').css('box-shadow', 'none');
                     $('#btnXboxB').css('transform', 'none');
                     $('#btnXboxB').off("mouseenter");
                     $('#btnXboxB').off("mouseleave");
                     $('#btnXboxB').off("mousedown");
                     $('#btnXboxB').off("mouseup");
              };
              
       });
/*Création du thème Nintendo*/

       $('#nintendo').click(function(){
              $('body').css('background', '#fefee2');
              $('#menu').css('background', '#ee5253');
              $('.formulaire').css('background-color', '#474747');
              $('h2').css('color', '#000');
              $('.marque').css('color', '#000');
              $('.titre').css('color', 'black');
              $('#btnPsX').replaceWith('<input type="submit" class="valid" value="A">');
              $('#btnPsO').replaceWith('<input type="reset" class="reset" value="B">');
              $('#btnXboxA').replaceWith('<input type="submit" class="valid" value="A">');
              $('#btnXboxB').replaceWith('<input type="reset" class="reset" value="B">');  
       });



// Gestion des erreurs formulaire d'inscription
       $('form').submit(function(e){

              var erreur;
              var mdp = $('#mdp');
              var mdp2 = $('#mdp2');
              e.preventDefault();

              if(mdp2.val() != mdp.val()){
                     erreur = 'Les deux mots de passes ne correspondent pas.';
              }
              if(erreur){
                     $('#messages').show()
                     $('#message').text(erreur);
                     $('#message').css('color','#CD3430');
                     return false;
              } else {
                     $('#messages').show();
                     $('#message').text('Le formulaire à bien été envoyé.');
                     $('#message').css('color', '#6A8B18');  
                     $('form').trigger('reset');
              };

       });
       
});