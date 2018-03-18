window.jQuery = window.$ = jQuery;
$(document).ready(function(){
  var $actionBtn = $("#action-btn"),
      $iconBtn = $("#actionBtn .fa"),
      $lockBtn = $("#lockBtn");
        


    $actionBtn.click(function() {
      $iconBtn.toggleClass("fa-times fa-comment");
      $lockBtn.toggleClass("showing-button");
    });   
});   