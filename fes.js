var zsoltImage = document.getElementById('zsolt');
var anitaImage = document.getElementById('anita');
var mariannaImage = document.getElementById('marianna');
var csillaImage = document.getElementById('csilla');

$(function(){ 
   zsoltImage.onclick = function() {
        var mySrc = zsoltImage.getAttribute('src');
        if(mySrc === 'img/zsolt.png') {
            zsoltImage.setAttribute ('src','img/zsolt.gif');
         } else {
            zsoltImage.setAttribute ('src','img/zsolt.png');
         }
   };
});



$(function(){ 
   anitaImage.onclick = function() {
        var mySrc = anitaImage.getAttribute('src');
        if(mySrc === 'img/anita.png') {
            anitaImage.setAttribute ('src','img/anita.gif');
         } else {
            anitaImage.setAttribute ('src','img/anita.png');
         }
   };
});

$(function(){ 
   mariannaImage.onclick = function() {
        var mySrc = mariannaImage.getAttribute('src');
        if(mySrc === 'img/marianna.png') {
            mariannaImage.setAttribute ('src','img/marianna.gif');
         } else {
            mariannaImage.setAttribute ('src','img/marianna.png');
         }
   };
});

$(function(){ 
   csillaImage.onclick = function() {
        var mySrc = csillaImage.getAttribute('src');
        if(mySrc === 'img/csilla.png') {
            csillaImage.setAttribute ('src','img/csilla.gif');
         } else {
            csillaImage.setAttribute ('src','img/csilla.png');
         }
   };
});

