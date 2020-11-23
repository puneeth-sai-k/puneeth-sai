///////////////// fixed menu on scroll for desktop
if ($(window).width() > 100) {
  $(window).scroll(function(){
     if ($(this).scrollTop() > 40) {
        $('#navbar_top').addClass("fixed-top");
        // add padding top to show content behind navbar
        $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
      }else{
        $('#navbar_top').removeClass("fixed-top");
         // remove padding top from body
        $('body').css('padding-top', '0');
      }
  });
}


var d = new Date().getFullYear();

document.getElementById('fo').innerHTML = " "+"&#169;"+" "+d+" "+"copyright all right reserved";
