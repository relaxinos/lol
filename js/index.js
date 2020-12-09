
//   // send mail with ajax
//   $('#send_email').click(function(e){
//     e.preventDefault();
//     var data = {
//         email: $('#email').val(),
//         name: $('#name').val(),
//         objet: $('#firstname').val(),
//         message: $('#message').val()
//     };
//     //AJAX
//     $.ajax({
//         url: "mail.php",
//         type: 'POST',
//         data: data,
//         success: function(data) {
//             $('#js_alert_success').css({'display' : 'block'});
//             setTimeout(function(){
//                 $('#js_alert_success').css({'display' : 'none'});
//                 $('#email').val("");
//                 $('#name').val("");
//                 $('#obect').val("");
//                 $('#message').val("")
//             }, 3000);
//         },
//         error: function(data) {
//             $('#js_alert_danger').css({'display' : 'block'});
//             setTimeout(function(){
//                 $('#js_alert_danger').css({'display' : 'none'});
//                 $('#email').val("");
//                 $('#name').val("");
//                 $('#object').val("");
//                 $('#message').val("")
//             }, 3000);
//         }
//     });
// });

// });


//popup


(function(){
  
    const modal = document.getElementById("dg-popup-modal");
    const modalContent = document.querySelectorAll("#dg-popup-modal .modal-content");  
    const btnOpen = document.getElementById("dg-popup-btn");
  const btnClose = document.querySelectorAll("#dg-popup-modal .close")[0];
    let exitCounter = 0;
    
    // options generique  
    // taille max de la popup
    const popupMaxWith = "800px"; 
    
    // options mobile
    // délay de déclenchement de la popup sur mobile
    const delayMobile = "15000" // millisecondes
    
    modalContent[0].style.maxWidth = popupMaxWith;
    
   
    btnClose.onclick = function() {
      modal.style.display = "none";
    }
    
    if (window.matchMedia("(min-width: 768px)").matches) {
  
    document.addEventListener("mouseleave", function(event){
      if(event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight)) {
        if(exitCounter < 2) {
          exitCounter++;
        }     
        if(exitCounter == 1) {
          dgOpenPopup();
        }
      }
    });
      
    }
    else {    
      // faire ouverture de popup x secondes
      setTimeout(function() {
         dgOpenPopup();      
      }, delayMobile);
      
    }
   
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    
    function dgOpenPopup() {
      modal.style.display = "block";
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0;
    }
  })();






  function openForm() {
    document.getElementById("popupForm").style.display = "block";
    }
    function closeForm() {
    document.getElementById("popupForm").style.display = "none";
    }