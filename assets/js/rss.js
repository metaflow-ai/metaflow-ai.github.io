$(document).ready(function(){

  /**
  *  OWN CODE
  */

  var feed = "https://blog.metaflow.fr/latest?format=json";

  $.ajax(feed, {
    success: function(feed) {
      var json = feed.replace("])}while(1);</x>", "")
      console.log(json);
    }
  });



});
