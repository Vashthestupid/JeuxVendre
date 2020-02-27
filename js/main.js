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
              $("head").append(
                     $(document.createElement('link')).attr({rel:"stylesheet", type:"text/css", href:"/css/themePs.css"})
              );
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
              };
       });

/*Création du thème Xbox*/

       $('#xbox').click(function(){
              $("head").append(
                     $(document.createElement('link')).attr({rel:"stylesheet", type:"text/css", href:'/css/themeXbox.css'})
              );
              $('.valid').replaceWith('<input type="submit" id="btnXboxA" value="A">');
              $('.reset').replaceWith('<input type="reset" id="btnXboxB" value="B">');
              $('#btnPsX').replaceWith('<input type="submit" id="btnXboxA" value="A">');
              $('#btnPsO').replaceWith('<input type="reset" id="btnXboxB" value="B">');
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
              $('head').append(
                     $(document.createElement('link')).attr({rel:'stylesheet', type:'text/css', href:'/sass/main.css'})
              );
              $('#btnPsX').replaceWith('<input type="submit" class="valid" value="A">');
              $('#btnPsO').replaceWith('<input type="reset" class="reset" value="B">');
              $('#btnXboxA').replaceWith('<input type="submit" class="valid" value="A">');
              $('#btnXboxB').replaceWith('<input type="reset" class="reset" value="B">');  
              $('form .button input').mouseenter(function(){
                     $(this).css('box-shadow','0px 6px #252525');
                     $(this).css('transform','translateY(3px)');
              });
              $('form .button input').mouseleave(function(){
                     $(this).css('box-shadow','0px 9px #252525');
                     $(this).css('transform','none');
              });
              $('form .button input').mousedown(function(){
                     $(this).css('box-shadow','0px 3px #252525');
                     $(this).css('transform', 'translateY(7px)');
              });
              $('form .button input').mouseup(function(){
                     $(this).css('box-shadow','0px 6px #252525 ');
                     $(this).css('transform', 'translateY(3px)');
              });
              if($(window).width()<1025){
                    $('form .button input').css('box-shadow','none');
                    $('form .button input').css('transform', 'none');
                    $('form .button input').off('mouseenter');
                    $('form .button input').off('mouseleave');
                    $('form .button input').off('mousedown');
                    $('form .button input').off('mouseup');
              };
       });



// Gestion des erreurs formulaire d'inscription
       $('form').submit(function(e){

              var erreur;
              var mdp = $('#mdp');
              var mdp2 = $('#mdp2');
              var commentaire = $('#commentaire');
              e.preventDefault();

              if(mdp2.val() != mdp.val()){
                     erreur = 'Les deux mots de passes ne correspondent pas.';
              };
              if(!commentaire.val()){
                     erreur = 'Veuillez saisir un commentaire';
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