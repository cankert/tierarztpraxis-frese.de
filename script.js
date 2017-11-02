$(document).ready(function(){
  $.get("navigation.html", function(data) {
    $("#navigation").html(data);
  });

  $(function() {
        // this will get the full URL at the address bar
        var url = window.location.href;
        console.log('This is the URL: ' + url);
        // passes on every "a" tag
        $("#bs-example-navbar-collapse-1 li a").each(function() {
            // checks if its the same on the address bar
            console.log(this.href);

            if (url == (this.href)) {
                $(this).closest("li").addClass("active");
                //for making parent of submenu active
               //$(this).closest("li").parent().parent().addClass("active");
            }
        });
    });

});
