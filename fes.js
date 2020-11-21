var zsoltImage = document.getElementById('zsolt');
var anitaImage = document.getElementById('anita');

$(function(){ 
   zsoltImage.onclick = function() {
        var mySrc = zsoltImage.getAttribute('src');
        if(mySrc === 'img/zsolt.gif') {
            zsoltImage.setAttribute ('src','img/zsolt.png');
         } else {
            zsoltImage.setAttribute ('src','img/zsolt.gif');
         }
   };
});



$(function(){ 
   anitaImage.onclick = function() {
        var mySrc = anitaImage.getAttribute('src');
        if(mySrc === 'img/anita.gif') {
            anitaImage.setAttribute ('src','img/anita.png');
         } else {
            anitaImage.setAttribute ('src','img/anita.gif');
         }
   };
});

