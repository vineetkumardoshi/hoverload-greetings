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
    $("form").submit(function (e) {
      e.preventDefault();
      var string = $('#To').val() +"%23"+ $('#Message').val() +"%23"+ $('#From').val();
      var URLm = window.location.href;
      var URLm_CLEAN = URL.match(/.*#/);
      if(URLm_CLEAN === null){
        URLm_CLEAN = URL+"#";
      }
      URLm_CLEAN = URLm_CLEAN+window.btoa(string)
      $("#URL-MESSAGE").val(URLm_CLEAN);
      $("#URL").show("slow");
      $("#greet-link").attr("href", URLm_CLEAN);
      return false;
    });    
        
    $("#close-url").click(function(){
      $("#URL").hide("slow");
    });  
  });
