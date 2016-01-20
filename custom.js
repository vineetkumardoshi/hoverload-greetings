$(document).ready(function(){
      $("#li-2").click(function(){
        $("#how-to-use").slideToggle();
        $("#sub-header-2").slideToggle();
        if ( $('#create-greeting').is(':visible') ) {
            $("#create-greeting").slideToggle(100);
            $("#sub-header-1").slideToggle(100);
        } 
      });
      $("#close-2").click(function(){
        $("#how-to-use").slideToggle();
        $("#sub-header-2").slideToggle();
      });
      
      $("#li-1").click(function(){
        $("#create-greeting").slideToggle();
        $("#sub-header-1").slideToggle();
        if ( $('#how-to-use').is(':visible') ) {
            $("#how-to-use").slideToggle(100);
            $("#sub-header-2").slideToggle(100);
        } 
      });
      $("#close-1").click(function(){
        $("#create-greeting").slideToggle();
        $("#sub-header-1").slideToggle();
      });
      
      
  });