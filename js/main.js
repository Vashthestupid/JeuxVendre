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
              $('.formulaire').css('background-color', '#2b2c31');
              $('label').css('color', '#fff');
              $('input').css('color', '#000');
              $('.valid').replaceWith('<input type="image" id="btnPsX" src="../images/x_play.png">');
              $('.reset').replaceWith('<input type="image" id="btnPsO" src="../images/o_play2.png">');
              $('#btnXboxA').replaceWith('<input type="image" id="btnPsX" src="../images/x_play.png">');
              $('#btnXboxB').replaceWith('<input type="image" id="btnPsO" src="../images/o_play2.png">');
              $('#btnPsX').css('background-color', 'black');
              $('#btnPsO').css('background-color', 'black');
              $('#btnPsO').click(function(){
                     $('form').trigger('reset');
              });
              $('#btnPsX').mouseenter(function(){
                     $('#btnPsX').css('box-shadow', '0px 6px #474747');
                     $('#btnPsX').css('transform', 'translateY(3px)');
              });
              $('#btnPsX').mouseleave(function(){
                     $('#btnPsX').css('box-shadow', '0px 9px #474747');
                     $('#btnPsX').css('transform', 'none');
              });
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
                     $('#btnXboxA').css('transform','translateY(7px');
              });
              $('#btnXboxA').mouseup(function(){
                     $('#btnXboxA').css('box-shadow','0px 6px #67a039');
                     $('#btnXboxA').css('transform','translateY(3px');
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
              }
              
       });
/*Création du thème Nintendo*/

       $('#nintendo').click(function(){
              $('body').css('background', '#fefee2');
              $('#menu').css('background', '#ee5253');
              $('.formulaire').css('background-color', '#474747');
              $('h2').css('color', '#000');
              $('.marque').css('color', '#000');
              $('.titre').css('color', 'black');
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