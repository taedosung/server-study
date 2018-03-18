window.jQuery = window.$ = jQuery;
$(document).ready(function(){
  console.log("hi");
  var $actionBtn = $("#actionBtn"),
      $iconBtn = $("#actionBtn .fa"),
      $lockBtn = $("#lockBtn");
        


    $actionBtn.click(function() {
      $iconBtn.toggleClass("fa-times fa-comment");
      $lockBtn.toggleClass("showing-button");
    });   
});   